"use strict";

var mod = function(
  fs,
  nopt,
  _,
  Promise,
  Options,
  Logger,
  ConfigurationMagic,
  AppContainer
) {
  var f   = Promise.promisifyAll(fs),
      Log = Logger.create("Bootstrapper");

  var Bootstrapper = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Bootstrapper.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._appKlass = opts.getOrError("applicationConstructor");
    },
    bootstrap: Promise.method(function() {
      var args        = Options.fromObject(this._getArgs()),
          scopes      = (args.getOrElse("scopes", "")).split(","),
          configFiles = (args.getOrElse(
            "configurationFiles",
            "configuration/default.json"
          )).split(",");

      Log.debug("Scopes:", scopes, "Files:", configFiles);
      var readConfigs = _.map(configFiles, function(configFile) {
        return f
          .readFileAsync(configFile)
          .then(function(contents) {
            return JSON.parse(contents);
          });
      });

      return Promise
        .all(readConfigs)
        .bind(this)
        .then(function(configs) {
          var config       = ConfigurationMagic.resolveConfig(scopes, configs),
              AppKlass     = this._appKlass;

          Log.debug("Resolved configuration: ", JSON.stringify(config));

          var app          = new AppKlass({configuration: config}),
              appContainer = new AppContainer({app: app});

          return appContainer;
        });
    }),
    _getArgs: function() {
      return nopt({
        "scopes": String,
        "configurationFiles": String
      });
    }
  });

  return Bootstrapper;
};

module.exports = mod(
  require("fs"),
  require("nopt"),
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../logging/logger"),
  require("./configuration-magic"),
  require("./app-container")
);
