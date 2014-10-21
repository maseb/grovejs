/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  M,
  UUID,
  StateGuard
) {

  var Channel = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Channel.prototype, {
    initialize: function(sentinel) {
      this._sentinel = sentinel;
      this._subscriptions = M.hash_map();
    },


    publish: function(sentinel, msg) {
      return this._publish.apply(this, arguments);
    },


    _publish: function(sentinel, msg) {
      if (this._sentinel !== sentinel) {
        throw new Error("Invalid sentinel provided; publisher must have same sentinel provided during instantiation.");
      }
      this._dispatch(msg);
      return true;
    },


    subscribe: function(handler) {
      return this._subscribe.apply(this, arguments);
    },


    _subscribe: function(handler) {
      var sub = new Subscription(this, handler),
          id  = sub.id();

      this._subscriptions = M.assoc(this._subscriptions, id, sub);

      return sub;
    },


    _dispatch: function(msg) {
      M.each(this._subscriptions, function(pair) {
        M.nth(pair, 1).dispatch(msg);
      });
    },


    _disposeHandle: function(id) {
      this._subscriptions = M.dissoc(this._subscriptions, id);
    }
  });

  var Subscription = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Subscription.prototype, {
    initialize: function(channel, handler) {
      this._id         = UUID.v4();
      this._channel    = channel;
      this._handler    = handler;
      this._stateGuard = new StateGuard(["disposed"]);

      _.bindAll(this, "dispose");
    },


    dispose: function() {
      if (this._stateGuard.applied("disposed")) {
        return;
      }

      this._channel._disposeHandle(this._id);

      this._handler = null;
      this._channel = null;

      this._stateGuard.apply("disposed");
    },


    id: function() {
      return this._id;
    },


    dispatch: function(msg) {
      this._handler(msg);
    }
  });

  return Channel;
};

module.exports = mod(
  require("underscore"),
  require("mori"),
  require("../core/uuid"),
  require("../core/state-guard")
);
