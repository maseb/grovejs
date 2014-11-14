/*global require: false, module: false */
"use strict";

var factory = function(
  _,
  Options
) {

  var Lang = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Lang.prototype, {
    initialize: function(){}
  });

  _.extend(Lang, {
    noop: function() {},

    partiallyApply: function() {
      var args = _.toArray(arguments),
          fun  = args.shift();

      return function() {
        return fun.apply(null, args.concat(arguments));
      };
    },

    makeErrorClass: function(name, defaultMessage) {
      if (!name) {
        throw new Error("makeErrorClass requires `name`");
      }

      var klass = function(message) {
        this.name    = name;
        this.message = this.name + ": " + (message || defaultMessage || "An unexpected error occurred");

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, klass);
        }
      };

      klass.prototype = Object.create(Error.prototype);
      klass.prototype.constructor = klass;
      return klass;
    },

    pojoClass: function(attributes, options) {
      if (!_.isArray(attributes)) {
        throw new Error("Lang#pojo requires attributes array");
      }

      var options = Options.fromObject(options),
          // optional specifies keys that are optional, with values that are default if not provided
          defaults = options.getOrElse("defaults", {}),
          optionalAttributes = _.keys(defaults);

      var toAttributeName = function(attr) {
            return "_" + attr;
          },
          toGetter = function(attr) {
            return attr;
          },
          toSetter = function(attr) {
            return "set" + attr.charAt(0).toUpperCase() + attr.substr(1);
          };

      var klass = function() {
        this.initialize.apply(this, arguments);
      };

      _.extend(klass.prototype, {
        initialize: function(opts) {
          opts = Options.fromObject(opts);
          _.each(attributes, function(attr) {
            if (_.contains(optionalAttributes, attr)) {
              this[toAttributeName(attr)] = opts.getOrElse(attr, defaults[attr]);
            } else {
              this[toAttributeName(attr)] = opts.getOrError(attr);
            }
          }, this);
        }
      });

      _.each(attributes, function(attr) {
        klass.prototype[toGetter(attr)] = function() {
          return this[toAttributeName(attr)];
        };
        klass.prototype[toSetter(attr)] = function(v) {
          this[toAttributeName(attr)] = v;
        };
      });

      return klass;
    }
  });

  return Lang;
};

module.exports = factory(
  require("underscore"),
  require("./options")
);
