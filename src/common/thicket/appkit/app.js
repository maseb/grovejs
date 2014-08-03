"use strict";

var mod = function(
  _,
  Promise,
  Logger,
  Options,
  StateGuard,
  Runtime,
  ProcessKeepAlive
) {
  var Log = Logger.create("App");

  var App = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(App.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._guard = new StateGuard(["starting", "started", "stopping", "stopped"]);
      this._config = opts.getOrError("configuration");

      // The default Runtime has sensible defaults.
      this._runtime = opts.getOrElseFn("runtime", function() {
        return new Runtime();
      });

      this._keepAlive = new ProcessKeepAlive({
        scheduler: this._runtime.scheduler()
      });
    },

    start: Promise.method(function() {
      Log.debug("Starting App");
      this._guard
        .deny("starting")
        .apply("starting");

      this._keepAlive.start();
      Log.debug("Calling App#up()");

      return this.up()
        .then(this._guard.applyAsyncFn("started"));
    }),

    stop: Promise.method(function() {
      Log.debug("Stopping App");
      this._guard
        .deny("stopping")
        .apply("stopping");

      this._keepAlive.stop();
      Log.debug("Calling App#down()");

      return this.down()
        .then(this._guard.applyAsyncFn("stopped"));
    }),

    /**
     * TODO: Doc. Subclass should override.
     */
    up: Promise.method(function() {}),

    /**
     * TODO: Doc. Subclass should override.
     */
    down: Promise.method(function() {})
  });

  return App;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../logging/logger"),
  require("../core/options"),
  require("../core/state-guard"),
  require("../runtime"),
  require("./internal/process-keep-alive")
);
