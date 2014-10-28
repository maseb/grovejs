/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  M,
  Options,
  UUID,
  StateGuard,
  Logger
) {

  var Courier = function() {
    this.initialize.apply(this, arguments);
  };

  var MSG_REPLY = Courier.MSG_REPLY = "reply";

  var Log = Logger.create("Courier");

  _.extend(Courier.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._id         = UUID.v4();
      this._delegate   = opts.getOrError("delegate");
      this._courier    = opts.getOrError("courier");
      this._mailbox    = opts.getOrError("mailbox");
      this._stateGuard = new StateGuard(["disposed"]);

      _.bindAll(this, "_onOneShotMessage", "_onRequestReplyMessage");

      this._oneShotDispatcher = new Dispatcher({
        delegate: this._delegate,
        prefix: "onMsg"
      });

      this._requestReplyDispatcher = new Dispatcher({
        delegate: this._delegate,
        prefix: "onReq"
      });

      this._subs = M.vector(
        this._mailbox.oneShotChannel().subscribe(this._onOneShotMessage),
        this._mailbox.requestReplyChannel().subscribe(this._onRequestReplyMessage)
      );
    },


    id: function() {
      return this._id;
    },

    send: function(to, msg) {
      return this._mailbox.send({
        to: to,
        body: msg
      });
    },

    sendAndReceive: function(to, msg) {
      return this._mailbox
        .sendAndReceive({
          to: to,
          body: msg
        })
        .then(function(res) {

          if (res.mT === MSG_REPLY) {
            // Unwrap the remote message
            if (res.body.err) {
              throw new Error(res.body.err);
            }
            return res.body.res;
          } else {
            // Someone is misbehaving
            Log.warn("Received sendAndReceive reply, but it isn't Courier-compatible", res);
            return res;
          }
        })
    },

    dispose: function() {
      if (this._stateGuard.applied("disposed")) {
        return;
      }

      this._courier._disposeHandle(this._id);

      M.each(this._subs, function(sub) {
        sub.dispose();
      });

      this._subs     = null;
      this._courier  = null;
      this._mailbox  = null;
      this._delegate = null;

      this._stateGuard.apply("disposed");
    },


    _onOneShotMessage: function(msg) {
      this._oneShotDispatcher.dispatch(msg.body);
    },


    _onRequestReplyMessage: function(msg) {
      this._requestReplyDispatcher
        .dispatchAsync(msg.body)
        .bind({
          mbox: this._mailbox,
          err: null,
          result: null
        })
        .then(function(result){
          this.result = result;
        })
        .caught(function(err) {
          this.err = err.message;
        })
        .lastly(function() {
          this.mbox.reply(msg.msgId, {
            to: msg.from,
            body: {
              mT: MSG_REPLY,
              body: {
                err: this.err,
                res: this.result
              }
            }
          });
        });
    }
  });

  return Courier;
};

module.exports = mod(
  require("underscore"),
  require("mori"),
  require("../core/options"),
  require("../core/uuid"),
  require("../core/state-guard"),
  require("../core/logging/logger")
);
