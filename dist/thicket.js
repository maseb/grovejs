;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  ComponentRegistry,
  webAliases,
  nodeAliases
) {
  var c = new ComponentRegistry();


  c.registerMany([
    {
      module: require("./util/component-loader"),
      as: "component-loader"
    },

    {
      module: require("./core/countdown-latch"),
      as: "countdown-latch"
    },

    {
      module: require("./core/options"),
      as: "options"
    },

    {
      module: require("./core/lang"),
      as: "lang"
    },

    {
      module: require("./core/ref"),
      as: "ref"
    },

    {
      module: require("./core/state-guard"),
      as: "state-guard"
    },


    {
      module: require("./core/pub-sub"),
      as: "pub-sub"
    },

    {
      module: require("./core/sequencer/unit-sequencer"),
      as: ["unit-sequencer", "sequencer"]
    },


    {
      module: require("./core/sequencer/clock-sequencer"),
      as: "clock-sequencer"
    },

    {
      module: require("./core/sequencer/delegating-composite-sequencer"),
      as: "delegating-composite-sequencer"
    },

    {
      module: require("./core/sequencer/delegating-forwarding-sequencer"),
      as: "delegating-forwarding-sequencer"
    },

    {
      module: require("./collection/doubly-linked-list"),
      as: "doubly-linked-list"
    },

    {
      module: require("./collection/object-hash-map"),
      as: ["hash-map", "object-hash-map"]
    },

    {
      module: require("./collection/lru-hash-map"),
      as: "lru-hash-map"
    },

    {
      module: require("./storage/caching-data-store"),
      as: "caching-data-store"
    },

    {
      module: require("./storage/in-memory-data-store"),
      as: "in-memory-data-store"
    },

    {
      module: require("./storage/lru-data-store"),
      as: "lru-data-store"
    },

    {
      module: require("./time/clock/logical-clock"),
      as: "logical-clock"
    },

    {
      module: require("./time/clock/system-clock"),
      as: "system-clock"
    },

    {
      module: require("./appkit/configuration-magic"),
      as: "configuration-magic"
    },

    {
      module: require("./appkit/config/scoped-configuration-resolver"),
      as: "scoped-configuration-resolver"
    },

    {
      module: require("./appkit/config/scoped-configuration"),
      as: ["scoped-configuration", "config/scoped-configuration"]
    },

    {
      module: require("./appkit/app"),
      as: "app"
    },

    {
      module: require("./runtime"),
      as: "runtime"
    },

    {
      module: require("./logging/logger"),
      as: "logger"
    },

    {
      module: require("./logging/appenders/console-log-appender"),
      as: ["appenders/console-log", "console-log-appender"]
    },

    {
      module: require("./reactive/reactor"),
      as: "reactor"
    },

    {
      module: require("./messaging/channel"),
      as: "messaging/channel"
    },

    {
      module: require("./messaging/chained-channel"),
      as: "messaging/chained-channel"
    },

    {
      module: require("./messaging/exchange"),
      as: "messaging/exchange"
    },

    {
      module: require("./core/uuid"),
      as: "uuid"
    }
  ]);

  c.selfRegister({
    as: "component-registry"
  });

  webAliases(c);
  nodeAliases(c);

  return c;
};

var g = (typeof window === "undefined" ? {} : window);
g.thicket = module.exports = mod(
  require("./util/component-registry"),
  require("./web"),
  require("./node")
);

})()
},{"./util/component-loader":2,"./core/countdown-latch":3,"./core/options":4,"./core/lang":5,"./core/state-guard":6,"./core/pub-sub":7,"./core/sequencer/unit-sequencer":8,"./core/sequencer/clock-sequencer":9,"./core/sequencer/delegating-composite-sequencer":10,"./core/sequencer/delegating-forwarding-sequencer":11,"./collection/doubly-linked-list":12,"./collection/object-hash-map":13,"./collection/lru-hash-map":14,"./storage/caching-data-store":15,"./storage/in-memory-data-store":16,"./storage/lru-data-store":17,"./time/clock/logical-clock":18,"./time/clock/system-clock":19,"./appkit/configuration-magic":20,"./appkit/config/scoped-configuration-resolver":21,"./appkit/config/scoped-configuration":22,"./appkit/app":23,"./logging/logger":24,"./logging/appenders/console-log-appender":25,"./reactive/reactor":26,"./messaging/channel":27,"./messaging/chained-channel":28,"./messaging/exchange":29,"./core/uuid":30,"./util/component-registry":31,"./web":32,"./node":33,"./core/ref":34,"./runtime":35}],33:[function(require,module,exports){
module.exports = function(c) {};

},{}],32:[function(require,module,exports){
module.exports = function(c) {
  c.registerMany([
    {
      module: require("./appkit/bootstrapper"),
      as: "bootstrapper"
    },
    {
      module: require("./appkit/web-app-container"),
      as: "app-container"
    },
    {
      module: require("./scheduler/web-scheduler"),
      as: "scheduler"
    }
  ]);

  require("./browserify2-list");
};

},{"./appkit/bootstrapper":36,"./appkit/web-app-container":37,"./scheduler/web-scheduler":38,"./browserify2-list":39}],35:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

module.exports = require("./default-runtime");

})()
},{"./default-runtime":40}],39:[function(require,module,exports){
(function(){require("./appkit/app.js");
require("./appkit/bootstrapper.js");
require("./appkit/config/scoped-configuration-resolver.js");
require("./appkit/config/scoped-configuration.js");
require("./appkit/configuration-magic.js");
require("./appkit/internal/process-keep-alive.js");
require("./appkit/web-app-container.js");
require("./collection/doubly-linked-list.js");
require("./collection/lru-hash-map.js");
require("./collection/object-hash-map.js");
require("./core/countdown-latch.js");
require("./core/lang.js");
require("./core/options.js");
require("./core/pub-sub.js");
require("./core/ref/delegating-ref.js");
require("./core/ref/index.js");
require("./core/ref/ref.js");
require("./core/scheduler/set-timeout-scheduler.js");
require("./core/sequencer/clock-sequencer.js");
require("./core/sequencer/delegating-composite-sequencer.js");
require("./core/sequencer/delegating-forwarding-sequencer.js");
require("./core/sequencer/unit-sequencer.js");
require("./core/state-guard.js");
require("./core/uuid.js");
require("./index.js");
require("./logging/appenders/console-log-appender.js");
require("./logging/logger.js");
require("./messaging/chained-channel.js");
require("./messaging/channel.js");
require("./messaging/exchange.js");
require("./node.js");
require("./reactive/filter-transform.js");
require("./reactive/map-transform.js");
require("./reactive/reactive-node.js");
require("./reactive/reactor.js");
require("./reactive/transform-chain.js");
require("./reactive/transform.js");
require("./runtime/default-runtime.js");
require("./runtime/index.js");
require("./scheduler/index.js");
require("./scheduler/web-scheduler.js");
require("./storage/caching-data-store.js");
require("./storage/in-memory-data-store.js");
require("./storage/lru-data-store.js");
require("./time/clock/logical-clock.js");
require("./time/clock/system-clock.js");
require("./util/component-loader.js");
require("./util/component-registry.js");
require("./web.js");

})()
},{"./appkit/app.js":23,"./appkit/bootstrapper.js":36,"./appkit/config/scoped-configuration-resolver.js":21,"./appkit/config/scoped-configuration.js":22,"./appkit/configuration-magic.js":20,"./appkit/internal/process-keep-alive.js":41,"./appkit/web-app-container.js":37,"./collection/doubly-linked-list.js":12,"./collection/lru-hash-map.js":14,"./collection/object-hash-map.js":13,"./core/countdown-latch.js":3,"./core/lang.js":5,"./core/options.js":4,"./core/pub-sub.js":7,"./core/ref/delegating-ref.js":42,"./core/ref/index.js":34,"./core/ref/ref.js":43,"./core/scheduler/set-timeout-scheduler.js":44,"./core/sequencer/clock-sequencer.js":9,"./core/sequencer/delegating-composite-sequencer.js":10,"./core/sequencer/delegating-forwarding-sequencer.js":11,"./core/sequencer/unit-sequencer.js":8,"./core/state-guard.js":6,"./core/uuid.js":30,"./index.js":1,"./logging/appenders/console-log-appender.js":25,"./logging/logger.js":24,"./messaging/chained-channel.js":28,"./messaging/channel.js":27,"./messaging/exchange.js":29,"./node.js":33,"./reactive/filter-transform.js":45,"./reactive/map-transform.js":46,"./reactive/reactive-node.js":47,"./reactive/reactor.js":26,"./reactive/transform-chain.js":48,"./reactive/transform.js":49,"./runtime/default-runtime.js":40,"./runtime/index.js":35,"./scheduler/index.js":50,"./scheduler/web-scheduler.js":38,"./storage/caching-data-store.js":15,"./storage/in-memory-data-store.js":16,"./storage/lru-data-store.js":17,"./time/clock/logical-clock.js":18,"./time/clock/system-clock.js":19,"./util/component-loader.js":2,"./util/component-registry.js":31,"./web.js":32}],50:[function(require,module,exports){
"use strict";

module.exports = require("./web-scheduler");

},{"./web-scheduler":38}],2:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var factory = function(
  _,
  Options
) {
  var ComponentLoader = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ComponentLoader.prototype, {
    initialize: function(requireFun) {
      this._requireFun = requireFun;
      this._aliases = {};
      this._pathTransform = function(id) { return id;};
    },

    setPathTransform: function(pathTransform) {
      this._pathTransform = pathTransform;
      return this;
    },

    alias: function(opts) {
      opts = Options.fromObject(opts);
      var aliasName  = opts.getOrError("as");
      this._aliases[aliasName] = opts.getOrError("module");
    },

    bulkAlias: function(aliases) {
      _.each(aliases, function(aliasNames, moduleName) {
        if (!_.isArray(aliasNames)) {
          aliasNames = [aliasNames]
        }
        _.each(aliasNames, function(aliasName) {
          this.alias({module: moduleName, as: aliasName});
        }, this);
      }, this);
    },

    component: function(alias) {
      var mod = this._aliases[alias];
      if (!mod) {
        throw new Error("Invalid alias provided (no such module): `"+alias+"'");
      }
      return this._requireFun(this._pathTransform(mod));
    },

    c: function(alias) {
      return this.component.apply(this, arguments);
    }
  });

  return ComponentLoader;
};

module.exports = factory(
  require("underscore"),
  require("../core/options")
);

})()
},{"../core/options":4,"underscore":51}],3:[function(require,module,exports){
(function(){/*global require: false, module: false */

var mod = function (
  _
  ) {

  var CountdownLatch = function () {
        this.initialize.apply(this, arguments);
      },
      noop = function() {};

  _.extend(CountdownLatch.prototype, {
    initialize: function (steps, completionCallback) {
      this._steps = steps || 0;
      this._completionCallback = completionCallback || noop;
      _.bindAll(this, "_completionCallback", "_triggerCompletion");
      if(isNaN(this._steps) || this._steps < 0) {
        throw new Error("CountdownLatch: Number of steps are invalid.");
      }
      this._current = 0;
      this._complete = false;
      this._error = null;
      if(this._steps === 0) {
        _.defer(this._triggerCompletion);
        return;
      }
    },
    step: function (steps) {
      if (this._complete || this._steps === 0) {
        return;
      }
      this._current += steps || 1;
      if (this._current >= this._steps) {
        this._triggerCompletion();
      }
    },
    error: function (err) {
      if (this._complete || this._steps === 0) {
        return;
      }
      this._error = err;
      this._triggerCompletion();
    },
    _triggerCompletion: function () {
      if (this._complete) {
        return;
      }
      this._complete = true;
      if (this._error) {
        _.defer(_.bind(this._completionCallback, null, this._error));
      } else {
        _.defer(this._completionCallback);
      }
    }
  });

  return CountdownLatch;
};

module.exports = mod(
  require("underscore")
);

})()
},{"underscore":51}],4:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var factory = function(
  _
) {

  /**
   *
   * Helper for dealing with hash-style function arguments, which can be useful
   * in methods with optional/default values.
   *
   * Usage:
   *
   *   var foo = function(opts) {
   *       opts = Options.fromObject(opts);
   *
   *       var one = opts.getOrError("one"),
   *           two = opts.getOrElse("two", 2),
   *           three = opts.getOrElseFn("three", function() {
   *             return 3;
   *           });
   *
   *     console.log(one, two, three);
   *   };
   *
   *   foo({ one: 1 }); // logs "1, 2, 3"
   *   foo(); // throws Error
   *   foo({one: 1, two: false, three: 4}); // logs "1, false, 4"
   *
   */
  var Options = function(opts) {
    this.initialize.apply(this, arguments);
  }

  _.extend(Options.prototype, {
    initialize: function(opts) {
      this._providedOpts = opts || {};
    },

    /**
     * Attempts to return the value for the requested `key`. If the value
     * is undefined or null, instead returns the provided `fallbackValue`.
     *
     * @param key (required) attribute to be read
     * @param fallbackValue  returned if `key` attribute is null or undefined
     *
     * @returns requested value for `key`, or fallbackValue`
     */
    getOrElse: function(key, defaultValue) {
      if (this._isUndefOrNull(key)) {
        return defaultValue;
      } else {
        return this._providedOpts[key];
      }
    },

    /**
     * Attempts to return the value for the requested `key`. If the value
     * is undefined or null, throws an error.
     *
     * @param key (required) attribute to be read
     * @param err            message provided to Error constructor if `key`
     *                       is null or not defined
     *
     * @returns the value for the requested key
     */
    getOrError: function(key, errorMsg) {
      if (this._isUndefOrNull(key)) {
        errorMsg = errorMsg || "Option requested but not found: `"+key+"`";
        throw new Error(errorMsg);
      }

      return this._providedOpts[key];
    },

    /**
     * Attempts to return the value for the requested `key`. If the value
     * is undefined or null, instead evaluates `fallbackValueFn` and returns
     * its value.
     *
     * This is useful for simulating non-strict evaluation.
     *
     * @param key (required)  attribute to be read
     * @param fallbackValueFn evaluated and return value returned if `key`
     *                        attribute is null or undefined
     *
     * @returns requested value for `key` or the return value of evaluated
     *          `fallbackValueFn`
     */
    getOrElseFn: function(key, defaultValueFn) {
      if (typeof defaultValueFn !== "function") {
        throw new Error("Options#getOrElseFn requires a defaultValueFn");
      }

      if (this._isUndefOrNull(key)) {
        return defaultValueFn();
      } else {
        return this._providedOpts[key];
      }
    },

    _isUndefOrNull: function(key) {
      return typeof this._providedOpts[key] === "undefined" || this._providedOpts[key] === null;
    }
  });

  _.extend(Options, {
    fromObject: function(opts) {
      return new Options(opts);
    }
  })

  return Options;
};

module.exports = factory(
  require("underscore")
);

})()
},{"underscore":51}],5:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var factory = function(
  _
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
    }
  });

  return Lang;
};

module.exports = factory(
  require("underscore")
);

})()
},{"underscore":51}],7:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  var PubSub = {
    on: function(eventName, handler, context) {
      var bucket = this.__pubSubBucket(eventName);
      bucket.subscribe(handler, context);
    },
    off: function(eventName, handler, context) {
      var bucket = this.__pubSubBucket(eventName);
      bucket.unsubscribe(handler, context);
    },
    notify: function() {
      var args      = _.toArray(arguments),
          eventName = args.shift();

      var bucket = this.__pubSubBucket(eventName);
      bucket.notify(args);
    },
    __pubSubBucket: function(eventName) {
      this.__pubSubEvents = this.__pubSubEvents || {};
      this.__pubSubEvents[eventName] = this.__pubSubEvents[eventName] || new EventBucket(eventName);
      return this.__pubSubEvents[eventName];
    }
  };

  var EventBucket = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(EventBucket.prototype, {
    initialize: function(eventName) {
      this._eventName = eventName;
      this._subscriptions = [];
    },
    subscribe: function(handler, context) {
      if (handler) {
        this._subscriptions.push(new Subscription(handler, context));
      } else {
        throw new Error("Subscription requires handler: " + this._eventName);
      }
    },
    unsubscribe: function(handler, context) {
      var subs;
      if (handler) {
        subs = _.filter(this._subscriptions, function(sub) {
          return sub.matches(handler, context);
        });
      } else {
        subs = this._subscriptions;
      }

      _.each(subs, function(sub) {
        sub.dispose();
      });

      this._subscriptions = _.difference(this._subscriptions, subs);
    },
    notify: function(args) {
      _.invoke(this._subscriptions, "notify", args);
    }
  });

  var Subscription = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Subscription.prototype, {
    initialize: function(handler, context) {
      this._handler = handler;
      this._context = context;
    },
    matches: function(handler, context) {
      if (this._context) {
        // Compare context refs as refs iff we have a context object
        return (handler === this._handler && context === this._context);
      } else {
        // Otherwise, just make sure we don't have a context (null or undefined are fine)
        return (handler === this._handler && !context);
      }
    },
    notify: function(args) {
      // We shouldn't be called after dispose, but
      // just in case...
      if (this._handler) {
        this._handler.apply(this._context, args);
      } else {
        console.log("WTF");
      }
    },
    dispose: function() {
      this._handler = null;
      this._context = null;
    }
  })

  return PubSub;
};

module.exports = mod(
  require("underscore")
);

})()
},{"underscore":51}],6:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise
) {

  var StateGuard = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(StateGuard.prototype, {
    initialize: function(states) {
      this._validStates = _.reduce(states, function(memo, state) {
        memo[state] = true;
        return memo;
      }, {});

      this._appliedStates = {};
    },

    apply: function() {
      var states = aryOrVariadicToArray(arguments);
      checkValidStatesOrThrow(this._validStates, states);

      _.each(states, function(state) {
        this._appliedStates[state] = true;
      }, this);

      return this;
    },

    applyAsync: Promise.method(function() {
      return this.apply.apply(this, arguments);
    }),

    applyAsyncFn: function() {
      var args = arguments;
      return _.bind(function() {
        return this.applyAsync.apply(this, args);
      }, this);
    },

    unapply: function() {
      var states = aryOrVariadicToArray(arguments);
      checkValidStatesOrThrow(this._validStates, states);

      _.each(states, function(state) {
        if (this._appliedStates[state]) {
          delete this._appliedStates[state];
        }
      }, this);

      return this;
    },

    unapplyAsync: Promise.method(function() {
      return this.unapply.apply(this, arguments);
    }),

    unapplyAsyncFn: function(states) {
      var args = arguments;
      return _.bind(function() {
        return this.unapplyAsync.apply(this, args)
      }, this);
    },

    deny: function() {
      var states = aryOrVariadicToArray(arguments);
      checkValidStatesOrThrow(this._validStates, states);

      var applied = _.filter(states, function(state) {
        return this._appliedStates[state];
      }, this);

      if (applied.length > 0) {
        throw new Error("State denial requested, but applied: " + pretty(applied));
      }

      return this;
    },

    denyAsync: Promise.method(function() {
      return this.deny.apply(this, arguments);
    }),

    denyAsyncFn: function() {
      var args = arguments;
      return _.bind(function() {
        return this.denyAsync.apply(this, args)
      }, this);
    },

    ensure: function() {
      var states = aryOrVariadicToArray(arguments);
      checkValidStatesOrThrow(this._validStates, states);
      var missing = _.reject(states, function(state) {
        return this._appliedStates[state];
      }, this);

      if (missing.length > 0) {
        throw new Error("State ensurance requested, but not applied: " + pretty(missing));
      }
      return this;
    },

    ensureAsync: Promise.method(function() {
      return this.ensure.apply(this, arguments);
    }),

    ensureAsyncFn: function() {
      var args = arguments;
      return _.bind(function() {
        return this.ensureAsync.apply(this, args);
      }, this);
    },

    applied: function() {
      var states = aryOrVariadicToArray(arguments);
      checkValidStatesOrThrow(this._validStates, states);

      return _.every(states, function(state) {
        return this._appliedStates[state];
      }, this);
    },

    appliedAsync: Promise.method(function() {
      return this.applied.apply(this, arguments);
    }),

    appliedAsyncFn: function() {
      var args = arguments;
      return _.bind(function() {
        return this.appliedAsync.apply(this, args)
      }, this);
    }
  });

  var aryOrVariadicToArray = function(args) {
    return _.chain(args).toArray().flatten().value();
  };

  var checkValidStatesOrThrow = function(validStatesMap, states) {
    var invalidStates = _.reject(states, function(state) {
      return !!validStatesMap[state];
    });

    if (invalidStates.length > 0) {
      throw new Error("Invalid states provided: " + pretty(invalidStates));
    }
  };

  var pretty = function(states) {
    return "["+states.join(",")+"]";
  };

  return StateGuard;
};

module.exports = mod(
  require("underscore"),
  require("bluebird")
);

})()
},{"underscore":51,"bluebird":52}],12:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
) {

  var DoublyLinkedList = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DoublyLinkedList.prototype, {
    initialize: function() {
      this._front = null;
      this._back = null;
      this._size = 0;
    },

    get: function(idx) {
      this._checkElementIdxOrThrow(idx);
      var node = this._walkToIdx(idx);
      return node.value();
    },

    exists: function(value) {
      var node = this._walkToValue(value);
      return !!node;
    },

    size: function() {
      return this._size;
    },

    add: function(value) {
      return this.addBack.apply(this, arguments);
    },

    addFront: function(value) {
      this._linkFront(value);
    },

    addBack: function(value) {
      this._linkBack(value);
    },

    remove: function(value) {
      var node = this._walkToValue(value);
      return this._unlink(node);
    },

    removeFront: function() {
      if (this._front === null) {
        throw new Error("No such element");
      }
      return this._unlinkFront(this._front);
    },

    removeBack: function() {
      if (this._back === null) {
        throw new Error("No such element");
      }
      return this._unlinkBack(this._back);
    },

    insertAtIndex: function(idx, value) {
      this._checkIsElementPositionOrThrow(idx);

      if (idx === this._size) {
        this.addBack(value);
      } else {
        var node = this._walkToIdx(idx);
        this._linkBefore(value, node);
      }
    },

    removeAtIndex: function(idx) {
      this._checkElementIdxOrThrow(idx);
      if (idx === 0) {
        return this._unlinkFront(this._front);
      } else if ( idx === (this._size - 1) ) {
        return this._unlinkBack(this._back);
      } else {
        var node = this._walkToIdx(idx);
        return this._unlink(node);
      }
    },

    clear: function() {
      var node = this._front,
          next;

      while (node !== null) {
        next = node.next();
        node.dispose();
        node = next;
      }
      this._front = null;
      this._back  = null;
      this._size = 0;
    },

    _linkFront: function(value) {
      var oldFront = this._front,
          newNode = new Node({value: value});
      this._front = newNode;

      if (oldFront === null) {
        this._back = newNode;
      } else {
        oldFront.setPrev(newNode);
        newNode.setNext(oldFront);
      }

      this._size++;
      return newNode;
    },

    _linkBack: function(value) {
      var oldBack = this._back,
          newNode = new Node({value: value});

      this._back = newNode;
      if (oldBack === null) {
        this._front = newNode;
      } else {
        oldBack.setNext(newNode);
        newNode.setPrev(oldBack);
      }

      this._size++;
      return newNode;
    },

    _linkBefore: function(value, node) {
      var pred    = node.prev(),
          newNode = new Node({value: value, prev: pred, next: node});

      node.setPrev(newNode);
      if (pred === null) {
        this._front = newNode;
      } else {
        pred.setNext(newNode);
      }
      this._size++;
      return newNode;
    },

    _unlinkFront: function(node) {
      var value    = node.value(),
          newFront = node.next();

      node.dispose();
      this._front = newFront;
      if (newFront === null) {
        this._back = null;
      } else {
        newFront.setPrev(null);
      }
      this._size--;
      return value;
    },

    _unlinkBack: function(node) {
      var value   = node.value(),
          newBack = node.prev();

      node.dispose();
      this._back = newBack;
      if (newBack == null) {
        this._front = null;
      } else {
        newBack.setNext(null);
      }
      this._size--;
      return value;
    },

    _unlink: function(node) {
      var prev  = node.prev(),
          next  = node.next(),
          value = node.value();

      if (prev === null) {
        this._front = next;
      } else {
        prev.setNext(next);
      }

      if (next === null) {
        this._back = prev;
      } else {
        next.setPrev(prev);
      }

      node.dispose();
      this._size--;
      return value;
    },

    _walkToIdx: function(idx) {
      var node, current;
      if (idx < this._size / 2) {
        node = this._front;
        current = 0;
        while(current !== idx) {
          node = node.next();
          current++;
        }
      } else {
        node = this._back;
        current = this._size - 1;

        while(current !== idx) {
          node = node.prev();
          current--;
        }
      }
      return node;
    },

    _walkToValue: function(value) {
      var n = this._front;
      while (n !==null ) {
        if (n.match(value)) {
          return n;
        }
        n = n.next();
      }
      return null;
    },

    _isElementIdx: function(idx) {
      return (idx >= 0 && idx < this._size);
    },

    _isElementPosition: function(idx) {
      return (idx >= 0 && idx <= this._size);
    },

    _checkElementIdxOrThrow: function(idx) {
      if (!this._isElementIdx(idx)) {
        throw new Error("Index out of bounds; size: " + this._size + "; idx: " + idx);
      }
    },

    _checkIsElementPositionOrThrow: function(idx) {
      if (!this._isElementPosition(idx)) {
        throw new Error("Index out of bounds; size: " + this._size + "; idx: " + idx);
      }
    }

  });

  var Node = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Node.prototype, {
    initialize: function(opts) {
      opts        = Options.fromObject(opts);
      this._next  = opts.getOrElse("next", null);
      this._prev  = opts.getOrElse("prev", null);
      this._value = opts.getOrElse("value", null);
    },

    next: function() {
      return this._next;
    },

    prev: function() {
      return this._prev;
    },

    setNext: function(node) {
      this._next = node;
    },

    setPrev: function(node) {
      this._prev = node;
    },

    value: function() {
      return this._value;
    },

    dispose: function() {
      this._next  = null;
      this._prev  = null;
      this._value = null;
    },

    match: function(value) {
      return this._value === value;
    }
  });

  return DoublyLinkedList;
};

module.exports = mod(
  require("underscore"),
  require("../core/options")
);

})()
},{"../core/options":4,"underscore":51}],13:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
) {

  /**
   * Delegates storage to a JS object.
   */
  var ObjectHashMap = function() {
    this.initialize.apply(this, arguments);
  };


  _.extend(ObjectHashMap.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._store = {};
      this._keyPrefix = opts.getOrElse("keyPrefix", "ohm-");
    },
    get: function(key){
      return this._store[this._makeKey(key)];
    },
    put: function(key, val) {
      this._store[this._makeKey(key)] = val;
    },
    remove: function(key) {
      var val;
      key = this._makeKey(key);
      if (_.has(this._store, key)) {
        val = this._store[key];
        delete this._store[key];
      }
      return val;
    },
    exists: function(key) {
      return _.has(this._store, this._makeKey(key));
    },
    size: function() {
      return _.size(this._store);
    },
    clear: function() {
      this._store = {};
    },
    _makeKey: function(key) {
      return this._keyPrefix + key;
    }
  });


  return ObjectHashMap;
};

module.exports = mod(
  require("underscore"),
  require("../core/options")
);

})()
},{"../core/options":4,"underscore":51}],14:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  ObjectHashMap,
  DoublyLinkedList
) {

  var LRUHashMap = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LRUHashMap.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._capacity = opts.getOrError("capacity");
      this._keyAccessList = new DoublyLinkedList();
      // TODO: Really need a proper HashMap at some point...
      this._store = new ObjectHashMap();
    },
    get: function(key) {
      var entry = this._store.get(key);
      if (!entry) {
        return;
      }

      // As a perf optimization, we keep a ref
      // to the node in the entry.
      var node = entry.node();
      this._keyAccessList._unlink(node);

      // Get the new node
      node = this._keyAccessList._linkFront(entry.key());

      // Save it
      entry.setNode(node);
      // Return the value
      return entry.value();
    },

    put: function(key, val) {
      var entry = this._store.get(key),
          node;
      if (!entry) {
        // If no entry, make a new entry
        if (this._keyAccessList.size() >= this._capacity) {
          // Have to make room for it
          var evictedKey = this._keyAccessList.removeBack(),
              evictedEntry = this._store.get(evictedKey);

          evictedEntry.dispose();
          this._store.remove(evictedKey);
        }

        node = this._keyAccessList._linkFront(key);
        entry = new Entry({
          key: key,
          value: val,
          node: node
        });
        this._store.put(key, entry);
      } else {
        // "Touch" the entry, set new value
        node = entry.node();
        this._keyAccessList._unlink(node);
        node = this._keyAccessList._linkFront(entry.key());
        // Update with the new node and value
        entry.setNode(node);
        entry.setValue(val);
      }
    },

    remove: function(key) {
      var entry = this._store.get(key),
          value,
          node;
      if (entry) {
        value = entry.value();
        node = entry.node();
        this._keyAccessList._unlink(node);
        entry.dispose();
        this._store.remove(key);
        return value;
      }
    },

    exists: function(key) {
      return this._store.exists(key);
    },

    size: function() {
      return this._store.size();
    },

    clear: function() {
      this._store.clear();
      this._keyAccessList.clear();
    }
  });

  var Entry = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Entry.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      // Though the Node should have the key, if the node
      // is unlinked from the list, its boxed value will disappear
      this._key   = opts.getOrError("key");
      this._value = opts.getOrError("value");
      this._node  = opts.getOrError("node");
    },
    node: function() {
      return this._node;
    },
    setNode: function(node) {
      this._node = node;
    },
    value: function() {
      return this._value;
    },
    setValue: function(value) {
      this._value = value;
    },
    key: function() {
      return this._key;
    },
    dispose: function() {
      this._key = null;
      this._value = null;
      this._node = null;
    }
  });

  return LRUHashMap;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("./object-hash-map"),
  require("./doubly-linked-list")
);

})()
},{"../core/options":4,"./object-hash-map":13,"./doubly-linked-list":12,"underscore":51}],15:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  InMemoryDataStore,
  UnitSequencer
) {

  // Appropriate for the default sequencer (non-temporal)
  var DEFAULT_TTL = 1;


  /**
   * A look-aside caching data store. Note: it's generally not useful to allow
   * null/undefined stored values. When an item is evicted from the cache, a
   * subsequent `get` call will return `undefined`, so it can be difficult to
   * determine if there was a cache miss if the value you're storing is, in fact,
   * `undefined`, unless you prefix every check with `exists`, which also does
   * cache eviction on check.
   */
  var CachingDataStore = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(CachingDataStore.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._ttl = opts.getOrElse("ttl", DEFAULT_TTL);

      // Default sequencer is a linear/unit sequencer. The default TTL is
      // 1. Therefore, all values will expire with single advance of the
      // sequencer. Note that the data store doesn't advance the
      // sequencer itself. The store owner is responsible for doing
      // this.
      //
      // This is especially important to note for time-based sequencers.
      // Time will not advance automatically. The store owner is responsible
      // for scheduling the sequencer to advance with time. This keeps the
      // CachingDataStore's lifecycle simple with respect to time.
      this._sequencer = opts.getOrElseFn("sequencer", function() {
        return new UnitSequencer();
      });

      // By default, we delegate to an in-memory store. Fine for simple
      // cases, but not optimal.
      this._backingStore = opts.getOrElseFn("backingStore", function() {
        return new InMemoryDataStore();
      });

      // Updates the lastUpdated time to "now" on read - keeps entries
      // from expiring when they're being accessed, but can cause
      // staleness issues.
      this._shouldTouchOnRead = opts.getOrElse("touchOnRead", false);
    },

    sequencer: function() {
      return this._sequencer;
    },


    /**
     * Gets the value associated with the provided key. If the object has
     * expired, it will be evicted from the cache, and `undefined` will
     * be returned instead.
     *
     * @param key {string} (required)
     * @async
     * @returns {Promise<Object>} requested value
     */
    get: Promise.method(function(key) {
      return Promise
        .bind(this)
        .then(function() {
          return this._backingStore.get(key);
        })
        .then(function(entry){
          if (!entry) {
            return;
          }

          if (!entry.isExpired(this._sequencer.value(), this._ttl)) {
            if (this._shouldTouchOnRead) {
              entry.touch(this._sequencer.value());
            }
            return Promise
              .bind(this)
              .then(function() {
                return this._backingStore.put(key, entry);
              })
              .return(entry.value());
          } else {
            return Promise
              .bind(this)
              .then(function() {
                return this.remove(key)
              })
              .then(function() {
                // .thenReturn is a lie.
                return;
              });
          }
        });
    }),

    /**
     * Stores the provided `val`, identified by `key`
     *
     * @param `key` {string}  (required) identifier for value to be stored
     * @param `val` {dynamic} (required) value to be stored
     * @async
     * @returns {Promise<>}
     */
    put: Promise.method(function(key, val) {
      return Promise
        .bind(this)
        .then(function() {
          return this._backingStore.get(key);
        })
        .then(function(entry) {
          // If we have an entry, we should just update
          // Else, we make new one.
          // Pesist, then return nothing.
          if (entry) {
            entry.update(val, this._sequencer.value());
          } else {
            entry = new Entry({
              value: val,
              initialSequence: this._sequencer.value()
            });
          }

          return Promise
            .bind(this)
            .then(function() {
              return this._backingStore.put(key, entry)
            })
            .then(function() {
              return;
            });
        });
    }),

    /**
     * Removes the value associated with the provided `key`
     *
     * @param `key` {string} (required) identifier for value to be removed
     * @async
     * @returns {Promise<dynamic>} Removed value, if present in store.
     */
    remove: Promise.method(function(key) {
      var val;
      return this._backingStore
        .remove(key)
        .then(function(entry) {
          if (entry) {
            val = entry.value();
            entry.dispose();
            return val;
          }
        });
    }),

    exists: Promise.method(function(key){
      // It's not sufficient to delegate this call to the underlying
      // backing store. We need to perform eviction, as a subsequent call
      // to get would do the same. If the `exists` check says it exists,
      // bet it doesn't when we `get`, then `exists` is a worthless operation.
      //
      // Note that if you're using a CachingDataStore backed by an InMemoryDataStore
      // backed by an LRUHashMap, this will cause the entry to be "touched", whereas
      // a normal "exists" check would not.
      return Promise
        .bind(this)
        .then(function() {
          return this._backingStore.get(key);
        })
        .then(function(entry) {
            if (!entry) {
              return false;
            } else {
              if (!entry.isExpired(this._sequencer.value(), this._ttl)) {
                return true;
              } else {
                return this._backingStore.remove(key)
                  .then(function() {
                    entry.dispose();
                  })
                  .thenReturn(false);
              }
            }
        });
    }),

    clear: Promise.method(function() {
      return this._backingStore.clear();
    })
  });

  var Entry = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Entry.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      // Perfectly acceptable to pass in undefined...
      this._value = opts.getOrElse("value", undefined);
      this._lastSequence = opts.getOrError("initialSequence");
    },

    isExpired: function(sequence, ttl) {
      // E.g., lastSequence = 4, ttl = 1, sequence = 5: expired
      //       lastSequence = 4, ttl = 1, sequence = 4: not expired
      //       lastSequence = 4, ttl = 2, sequence = 5: not expired
      return this._lastSequence + ttl <= sequence;
    },

    touch: function(sequence) {
      this._lastSequence = sequence;
    },

    update: function(val, sequence) {
      this._value        = val;
      this._lastSequence = sequence;
    },

    dispose: function() {
      this._value        = null;
      this._lastSequence = null;
    },

    value: function() {
      return this._value;
    }
  });

  return CachingDataStore;

};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("./in-memory-data-store"),
  require("../core/sequencer/unit-sequencer")
);

})()
},{"../core/options":4,"./in-memory-data-store":16,"../core/sequencer/unit-sequencer":8,"bluebird":52,"underscore":51}],16:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  ObjectHashMap
) {

  /**
   * InMemoryDataStore delegates to a backing HashMap. By default, this
   * will be a "poor man's HashMap", a.k.a., the ObjectHashMap.
   */
  var InMemoryDataStore = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(InMemoryDataStore.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._map = opts.getOrElseFn("backingHashMap", function() {
        return new ObjectHashMap();
      });
    },

    get: Promise.method(function(key) {
      return this._map.get(key);
    }),

    put: Promise.method(function(key, val) {
      return this._map.put(key, val);
    }),

    remove: Promise.method(function(key) {
      return this._map.remove(key);
    }),

    exists: Promise.method(function(key){
      return this._map.exists(key);
    }),

    clear: Promise.method(function() {
      return this._map.clear();
    })
  });

  return InMemoryDataStore;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../collection/object-hash-map")
);

})()
},{"../core/options":4,"../collection/object-hash-map":13,"underscore":51,"bluebird":52}],17:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  InMemoryDataStore,
  LRUHashMap
) {

  var LRUDataStore = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LRUDataStore.prototype, InMemoryDataStore.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      var map = new LRUHashMap({
        capacity: opts.getOrError("capacity")
      });
      InMemoryDataStore.prototype.initialize.call(this, {
        backingHashMap: map
      });
    }
  });

  return LRUDataStore;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("./in-memory-data-store"),
  require("../collection/lru-hash-map")
);

})()
},{"../core/options":4,"./in-memory-data-store":16,"../collection/lru-hash-map":14,"underscore":51}],20:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  ScopedConfigurationResolver
) {

  var ConfigurationMagic = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ConfigurationMagic.prototype, {
    initialize: function() {}
  });

  _.extend(ConfigurationMagic, {
    resolveConfig: function(scopes, configObjects) {
      var r = new ScopedConfigurationResolver();
      _.each(configObjects, function(c) {
        r.add(c);
      });
      return r.resolve(scopes);
    }
  });

  return ConfigurationMagic;
};

module.exports = mod(
  require("underscore"),
  require("./config/scoped-configuration-resolver")
);

})()
},{"./config/scoped-configuration-resolver":21,"underscore":51}],23:[function(require,module,exports){
(function(){/*global require: false, module: false */
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
      this._rawConfig = opts.getOrError("configuration");
      this._config = Options.fromObject(this._rawConfig);

      // The default Runtime has sensible defaults.
      this._runtime = opts.getOrElseFn("runtime", function() {
        return new Runtime();
      });

      this._keepAlive = new ProcessKeepAlive({
        scheduler: this._runtime.scheduler()
      });

      var up   = opts.getOrElse("up"),
          down = opts.getOrElse("down");

      if (up) {
        this.up = Promise.method(_.bind(function() {
          return up.call(this, this._config);
        }, this));
      }

      if (down) {
        this.down = Promise.method(_.bind(function() {
          return down.call(this, this._config);
        }, this));
      }

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
     * Returns the requested configuration value, or throws an error.
     * @param key the configuration key request from the Configuration.
     * @returns {Object}
     */
    config: function(key) {
      return this._config.getOrError(key);
    },

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

})()
},{"../logging/logger":24,"../core/options":4,"../core/state-guard":6,"./internal/process-keep-alive":41,"../runtime":35,"underscore":51,"bluebird":52}],24:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Ref,
  Options
) {

  var Logger = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Logger.prototype, {

    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._name         = opts.getOrElse("name", "Default");
      this._logLevel     = opts.getOrElse("logLevel", LogUtil.Level.Info);
      this._parent       = opts.getOrElseFn("refParent", function() { return Ref(null) });

      this._appenders = [];
    },

    trace: function() {
      this._log(LogUtil.Level.Trace, _.toArray(arguments));
    },

    debug: function() {
      this._log(LogUtil.Level.Debug, _.toArray(arguments));
    },

    info: function() {
      this._log(LogUtil.Level.Info, _.toArray(arguments));
    },

    error: function() {
      this._log(LogUtil.Level.Error, _.toArray(arguments));
    },

    fatal: function() {
      this._log(LogUtil.Level.Fatal, _.toArray(arguments));
    },

    isTraceEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Trace);
    },

    isDebugEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Debug);
    },

    isInfoEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Info);
    },

    isErrorEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Error);
    },

    isFatalEnabled: function() {
      return this.isLogLevelEnabled(LogUtil.Level.Fatal);
    },

    isLogLevelEnabled: function(logLevel) {
      var coercedLogLevel = b(logLevel);
      return (this._logLevel & coercedLogLevel) === coercedLogLevel;
    },

    addAppender: function(appender) {
      this._appenders.push(appender);
    },

    setLogLevel: function(logLevel) {
      // Save a copy for the potential error message
      var originalLogLevel = logLevel;

      // If name is specified, e.g., "Info", convert to
      // int
      if (_.isString(logLevel)) {
        logLevel = LogUtil.Level[logLevel]
      }

      var exists = _.detect(LogUtil.Level, function(level, name) {
        return level === logLevel;
      });

      if (!exists) {
        throw new Error("Invalid logLevel: " + originalLogLevel);
      }

      this._logLevel = logLevel;
    },


    _log: function(logLevel, logArgs) {
      this._logWithMetadata([], logLevel, logArgs);
    },

    _logWithMetadata: function(descendants, logLevel, args) {
      if (this.isLogLevelEnabled(logLevel)) {
        _.each(this._appenders, function(appender) {
          appender.log(this._name, descendants, logLevel, LogUtil._Label[logLevel], args);
        }, this);
      }

      if (this._parent.get()) {
        this._parent.get()._logWithMetadata([this._name].concat(descendants), logLevel, args);
      }
    }
  });

  var LogUtil = function() {
    this.initialize.apply(this, arguments);
  };

  // Coerce (just use rightmost 8 bits)!; because JS is dumb, and everything is
  // actually a float with 53-bit precision
  var b = function(v) {
    return 0xFF & v;
  };

  _.extend(LogUtil, {
    Level: {
      Trace: b(parseInt("11111", 2)),
      Debug: b(parseInt("01111", 2)),
      Info:  b(parseInt("00111", 2)),
      Error: b(parseInt("00011", 2)),
      Fatal: b(parseInt("00001", 2))
    }
  });

  _.extend(LogUtil.prototype, {
    Level: LogUtil.Level,
    initialize: function() {
      this._rootLogger = Ref(new Logger({
        name: "Root"
      }));
    },

    create: function(name, opts) {
      opts = _.clone(opts || {});

      var parent;
      if (opts.parent) {
        parent = Ref(opts.parent);
        delete(opts.parent);
      } else {
        parent = Ref.delegating(this._rootLogger);
      }

      opts.refParent = parent;

      opts.name = name;

      return new Logger(opts);
    },

    root: function() {
      return this._rootLogger.get();
    },

    resetRootLogger: function() {
      this._rootLogger.set(new Logger({
        name: "Root"
      }));
    }
  });


  LogUtil._Label = _.reduce(LogUtil.Level, function(memo, val, key) {
    memo[val] = key;
    return memo;
  }, {});

  return new LogUtil();
};

module.exports = mod(
  require("underscore"),
  require("../core/ref"),
  require("../core/options")
);

})()
},{"../core/options":4,"../core/ref":34,"underscore":51}],26:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  Ref,
  ReactiveNode,
  DefaultScheduler
) {

  var Reactor = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Reactor.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._scheduler = opts.getOrElseFn("scheduler", function() {
        return Ref(new DefaultScheduler());
      });
    },
    fromPromise: function(promise) {
      var node = new ReactiveNode();
      promise.then(function(v) {
        node._apply(v);
      }, function(err) {
        node._applyError(err);
      });
      return node;
    },
    fromArray: function(ary) {
      var node = new ReactiveNode();

      this._scheduler.get().schedule(function() {
        _.each(ary, function(element){
          node._apply(element);
        });
      });

      return node;
    }
  });

  return Reactor;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("../core/ref"),
  require("./reactive-node"),
  require("../scheduler")
);

})()
},{"../core/options":4,"./reactive-node":47,"../core/ref":34,"../scheduler":50,"underscore":51}],27:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  M,
  UUID,
  Options,
  StateGuard
) {

  var Channel = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Channel.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._sentinel      = opts.getOrError("sentinel");
      this._stateGuard    = new StateGuard(["disposed"]);
      this._subscriptions = M.hash_map();
    },


    publish: function(sentinel, msg) {
      return this._publish.apply(this, arguments);
    },


    subscribe: function(handler) {
      return this._subscribe.apply(this, arguments);
    },


    dispose: function() {
      return this._dispose.apply(this, arguments);
    },


    isDisposed: function() {
      return this._stateGuard.applied("disposed");
    },


    _publish: function(sentinel, msg) {
      this._stateGuard.deny("disposed");

      if (this._sentinel !== sentinel) {
        throw new Error("Invalid sentinel provided; publisher must have same sentinel provided during instantiation.");
      }
      this._dispatch(msg);
      return true;
    },


    _subscribe: function(handler) {
      this._stateGuard.deny("disposed");

      var sub = new Subscription(this, handler),
          id  = sub.id();

      this._subscriptions = M.assoc(this._subscriptions, id, sub);

      return sub;
    },


    _dispose: function() {
      if (this._stateGuard.applied("disposed")) {
        return;
      }

      // Gnarly, as this hops back and forth between the channel and the sub, but
      // easier than splitting the dispose logic into two methods in the sub.
      M.each(this._subscriptions, function(pair) {
        M.nth(pair, 1).dispose();
      });

      this._stateGuard.apply("disposed");
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
  require("../core/options"),
  require("../core/state-guard")
);

})()
},{"../core/uuid":30,"../core/options":4,"../core/state-guard":6,"underscore":51,"mori":53}],28:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  M,
  Options,
  Channel
) {

  var ChainedChannel = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ChainedChannel.prototype, Channel.prototype, {
    initialize: function(opts) {
      Channel.prototype.initialize.apply(this, arguments);
      opts = Options.fromObject(opts);

      _.bindAll(this, "_forward");
      this._chainedSubs = M.vector();

      var initiallyChainedTo = opts.getOrElse("chainTo");
      if (initiallyChainedTo) {
        this.chainTo(initiallyChainedTo);
      }
    },

    chainTo: function(otherChannel) {
      this._chainedSubs = M.conj(this._chainedSubs, otherChannel.subscribe(this._forward));
    },

    dispose: function() {
      var subs = this._chainedSubs;

      this._chainedSubs = M.vector();

      M.each(subs, function(sub) {
        sub.dispose();
      });

      return this._dispose.apply(this, arguments);
    },

    _forward: function(msg) {
      this._publish(this._sentinel, msg);
    }
  });

  return ChainedChannel;
};

module.exports = mod(
  require("underscore"),
  require("mori"),
  require("../core/options"),
  require("./channel")
);

})()
},{"../core/options":4,"./channel":27,"underscore":51,"mori":53}],29:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  M,
  Logger,
  Options,
  UUID,
  Channel,
  ChainedChannel
) {

  var Exchange = function() {
    this.initialize.apply(this, arguments);
  };

  var MSG_SEND             = "msg_s",
      MSG_SEND_AND_RECEIVE = "msg_sar",
      MSG_REPLY            = "msg_r";

  _.extend(Exchange.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._identity = opts.getOrElse("identity", UUID.v4());

      this._mailboxFiberDelegate = {
        receiveFiberMessage: this._receiveMailboxFiberMessage.bind(this)
      };

      this._mailboxes = M.hash_map();

      this._fiber     = opts.getOrElseFn("fiber", function() {
        return new InMemoryFiber();
      });

      this._fiber.registerEntity({
        identity: this._identity,
        delegate: this
      });
    },

    /**
     * Builds a Mailbox for the provided `requesterIdentity`. The
     * `RequesterIdentity` must never have been used for requesting
     * a mailbox previously.
     *
     * @param requesterIdentity
     * @returns {Mailbox}
     */
    mailbox: function(requesterIdentity) {
      this._assertUniqueOwner(requesterIdentity);

      var mailbox = new Mailbox({
        identity: requesterIdentity,
        exchange: this
      });

      this._mailboxes = M.assoc(this._mailboxes, requesterIdentity, mailbox);

      this._fiber.registerEntity({
        identity: requesterIdentity,
        delegate: this._mailboxFiberDelegate
      });

      return mailbox;
    },


    send: function(opts) {
      opts = Options.fromObject(opts);

      return this._fiber.send({
        from:  opts.getOrError("from"),
        to:    opts.getOrError("to"),
        body:  opts.getOrError("body"),
        mT:    MSG_SEND,
        msgId: UUID.v4()
      });
    },


    sendAndReceive: function(opts) {
      throw new Error("Not implemented");
    },


    _assertUniqueOwner: function(identity) {
      if (M.get(this._mailboxes, identity)) {
        throw new Error("Mailbox registration requires a unique identity");
      }
    },

    /**
     * Fiber delegate protocol method for a message bound for a Mailbox owned by
     * this exchange.
     *
     * @param env
     * @private
     */
    _receiveMailboxFiberMessage: function(env) {
      env = Options.fromObject(env);
      console.log(env);
      throw new Error("Not implemented!");
    },

    /**
     * Fiber delegate protocol method for a message bound for this Exchange directly.
     *
     * @param env
     * @private
     */
    receiveFiberMessage: function(env) {

    }
  });

  var Mailbox = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Mailbox.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._ownerIdentity = opts.getOrError("identity");
      this._exchange      = opts.getOrError("exchange");
      this._inbound       = new Channel({ sentinel: this });
    },

    /**
     * Returns a new ChainedChannel chained to this Mailbox's
     * privately-owned inbound Channel.
     * @returns {ChainedChannel}
     */
    inboundChannel: function() {
      return new ChainedChannel({
        sentinel: this,
        chainTo: this._inbound
      });
    },

    send: function(opts) {
      opts = _.extend({}, opts || {}, {
        from: this._ownerIdentity
      });
      return this._exchange.send(opts);
    },

    sendAndReceive: function(opts) {
      opts = _.extend({}, opts || {}, {
        from: this._ownerIdentity
      });

      return this._exchange.sendAndReceive(opts);
    }
  });


  var InMemoryFiber = (function() {
    var Klass = function() {
      this.initialize.apply(this, arguments);
    };

    var Log = Logger.create("InMemoryLogger");

    _.extend(Klass.prototype, {
      initialize: function(opts) {
        opts = Options.fromObject(opts);

        this._entities = M.hash_map();
        this._identity = opts.getOrElse("identity", UUID.v4());

        _.bindAll(this, "_receive");
      },

      registerEntity: function(opts) {
        opts = Options.fromObject(opts);

        var identity = opts.getOrError("identity"),
            entity   = new LocalEntity({
              identity: identity,
              delegate: opts.getOrError("delegate")
            });

        this._entities = M.assoc(this._entities, identity, entity);
        return true;
      },

      /**
       * Returns a promise which is fulfiled when the message is
       * sent, not received by the remote end. This to let the
       * caller know whether or not the message is stuck
       * in a buffer somewhere when calculating its timeouts.
       */
      send: Promise.method(function(opts) {
        opts = Options.fromObject(opts);
        var from   = opts.getOrError("from"),
            to     = opts.getOrError("to"),
            body   = opts.getOrError("body"),
            msgId  = opts.getOrError("msgId"),

            mT     = opts.getOrElse("mT"),
            rMsgId = opts.getOrElse("rMsgId");


        //XXX: This is in-memory, so it's as simple
        // as invoking _receive in a future call stack
        return Promise
          .bind(this)
          .then(function() {
            _.defer(this._receive, {
              from:   from,
              to:     to,
              body:   body,
              msgId:  msgId,
              mT:     mT,
              rMsgId: rMsgId,
              oFib:   this._identity
            });
          })
          .then(function() {
            return msgId;
          });
      }),

      _receive: function(env) {
        env = Options.fromObject(env);
        var to, from, body, msgId, originFiber, mT, rMsgId;

        try {
          to          = env.getOrError("to");
          from        = env.getOrError("from");
          body        = env.getOrError("body");
          msgId       = env.getOrError("msgId");

          // Future-proofing for multi-fiber fabric.
          originFiber = env.getOrError("oFib");

          mT     = env.getOrElse("mT");
          rMsgId = env.getOrElse("rMsgId");
        } catch (e) {
          Log.error("Received malformed message", env);
        }

        var entity = M.get(this._entities, to);

        if (entity) {
          entity.dispatch({
            to:     to,
            from:   from,
            body:   body,
            msgId:  msgId,
            rMsgId: rMsgId,
            oFib:   originFiber,
            hFib:   this._identity,
            mT: mT
          });
        }
      }
    });

    return Klass;
  })();



  var LocalEntity = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LocalEntity.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._identity = opts.getOrError("identity");
      this._delegate = opts.getOrError("delegate");
    },
    dispatch: function(env) {
      this._delegate.receiveFiberMessage(env);
    }
  })

  return Exchange;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("mori"),
  require("../logging/logger"),
  require("../core/options"),
  require("../core/uuid"),
  require("./channel"),
  require("./chained-channel")
);

})()
},{"../logging/logger":24,"../core/options":4,"../core/uuid":30,"./channel":27,"./chained-channel":28,"underscore":51,"bluebird":52,"mori":53}],30:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

/**
 * Exports a singleton
 */

var mod = function(
  _
) {

  var UUID = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(UUID.prototype, {
    initialize: function() {},
    // See: http://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29
    v4: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0;
        // 0x3       = 0b00011
        // 0x8       = 0b01000
        // 0x3 | 0x8 = 0b01011
        // r & 0x3   = (0b00000 | 0b00001 | 0b00010 | 0b00011)
        var v = (c == 'x' ? r : (r & 0x3 | 0x8));
        return v.toString(16);
      });
    }
  });

  return new UUID();
};

module.exports = mod(
  require("underscore")
);

})()
},{"underscore":51}],31:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
) {

  var ComponentRegistry = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ComponentRegistry.prototype, {
    initialize: function() {
      this._modules = {};
    },


    register: function(opts) {
      opts = Options.fromObject(opts);
      var aliases   = opts.getOrError("as"),
          modObject = opts.getOrError("module");

      if (!_.isArray(aliases)) {
        aliases = [ aliases ];
      }

      _.each(aliases, _.bind(function(alias) {
        this._modules[alias] = modObject;
      }, this));

      return this;
    },

    selfRegister: function(opts) {
      opts = Options.fromObject(opts);

      return this.register({
        as: opts.getOrError("as"),
        module: ComponentRegistry
      });
    },


    registerMany: function(aliasesAry) {
      _.each(aliasesAry, _.bind(function(alias) {
        this.register(alias);
      }, this));
      return this;
    },

    component: function(alias) {
      var m = this._modules[alias];
      if (!m) {
        throw new Error("Invalid alias provided (no such module): `"+alias+"'");
      }
      return m;
    }

  });

  ComponentRegistry.prototype.c = ComponentRegistry.prototype.component;

  return ComponentRegistry;
};

module.exports = mod(
  require("underscore"),
  require("../core/options")
);

})()
},{"../core/options":4,"underscore":51}],51:[function(require,module,exports){
(function(){//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);

})()
},{}],53:[function(require,module,exports){
(function(definition){if(typeof exports==="object"){module.exports=definition();}else if(typeof define==="function"&&define.amd){define(definition);}else{mori=definition();}})(function(){return function(){
var g,aa=this;
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function p(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};function da(a,b){for(var c in a)b.call(void 0,a[c],c,a)};function ea(a,b){null!=a&&this.append.apply(this,arguments)}ea.prototype.Va="";ea.prototype.append=function(a,b,c){this.Va+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Va+=arguments[d];return this};ea.prototype.toString=function(){return this.Va};function fa(a,b){a.sort(b||ga)}function ha(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||ga;fa(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value}function ga(a,b){return a>b?1:a<b?-1:0};var ia=null,ja=null;function ka(){return new la(null,5,[ma,!0,oa,!0,pa,!1,qa,!1,ra,ia],null)}function r(a){return null!=a&&!1!==a}function sa(a){return r(a)?!1:!0}function s(a,b){return a[m(null==b?null:b)]?!0:a._?!0:u?!1:null}function ta(a){return null==a?null:a.constructor}function x(a,b){var c=ta(b),c=r(r(c)?c.Db:c)?c.Bb:m(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function ua(a){var b=a.Bb;return r(b)?b:""+A.b(a)}
function va(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}function wa(a){return Array.prototype.slice.call(arguments)}
var xa=function(){function a(a,b){return C.c?C.c(function(a,b){a.push(b);return a},[],b):C.call(null,function(a,b){a.push(b);return a},[],b)}function b(a){return c.a(null,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,0,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),ya={},za={};
function Aa(a){if(a?a.L:a)return a.L(a);var b;b=Aa[m(null==a?null:a)];if(!b&&(b=Aa._,!b))throw x("ICounted.-count",a);return b.call(null,a)}function Ba(a){if(a?a.I:a)return a.I(a);var b;b=Ba[m(null==a?null:a)];if(!b&&(b=Ba._,!b))throw x("IEmptyableCollection.-empty",a);return b.call(null,a)}var Ca={};function Da(a,b){if(a?a.G:a)return a.G(a,b);var c;c=Da[m(null==a?null:a)];if(!c&&(c=Da._,!c))throw x("ICollection.-conj",a);return c.call(null,a,b)}
var Ea={},D=function(){function a(a,b,c){if(a?a.aa:a)return a.aa(a,b,c);var h;h=D[m(null==a?null:a)];if(!h&&(h=D._,!h))throw x("IIndexed.-nth",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.J:a)return a.J(a,b);var c;c=D[m(null==a?null:a)];if(!c&&(c=D._,!c))throw x("IIndexed.-nth",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),
Fa={};function Ha(a){if(a?a.Q:a)return a.Q(a);var b;b=Ha[m(null==a?null:a)];if(!b&&(b=Ha._,!b))throw x("ISeq.-first",a);return b.call(null,a)}function Ia(a){if(a?a.S:a)return a.S(a);var b;b=Ia[m(null==a?null:a)];if(!b&&(b=Ia._,!b))throw x("ISeq.-rest",a);return b.call(null,a)}
var Ja={},Ka={},La=function(){function a(a,b,c){if(a?a.C:a)return a.C(a,b,c);var h;h=La[m(null==a?null:a)];if(!h&&(h=La._,!h))throw x("ILookup.-lookup",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.u:a)return a.u(a,b);var c;c=La[m(null==a?null:a)];if(!c&&(c=La._,!c))throw x("ILookup.-lookup",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=
a;return c}(),Ma={};function Na(a,b){if(a?a.kb:a)return a.kb(a,b);var c;c=Na[m(null==a?null:a)];if(!c&&(c=Na._,!c))throw x("IAssociative.-contains-key?",a);return c.call(null,a,b)}function Oa(a,b,c){if(a?a.ua:a)return a.ua(a,b,c);var d;d=Oa[m(null==a?null:a)];if(!d&&(d=Oa._,!d))throw x("IAssociative.-assoc",a);return d.call(null,a,b,c)}var Pa={};function Qa(a,b){if(a?a.nb:a)return a.nb(a,b);var c;c=Qa[m(null==a?null:a)];if(!c&&(c=Qa._,!c))throw x("IMap.-dissoc",a);return c.call(null,a,b)}var Sa={};
function Ta(a){if(a?a.$a:a)return a.$a(a);var b;b=Ta[m(null==a?null:a)];if(!b&&(b=Ta._,!b))throw x("IMapEntry.-key",a);return b.call(null,a)}function Ua(a){if(a?a.ab:a)return a.ab(a);var b;b=Ua[m(null==a?null:a)];if(!b&&(b=Ua._,!b))throw x("IMapEntry.-val",a);return b.call(null,a)}var Va={};function Wa(a,b){if(a?a.vb:a)return a.vb(a,b);var c;c=Wa[m(null==a?null:a)];if(!c&&(c=Wa._,!c))throw x("ISet.-disjoin",a);return c.call(null,a,b)}
function Xa(a){if(a?a.Ia:a)return a.Ia(a);var b;b=Xa[m(null==a?null:a)];if(!b&&(b=Xa._,!b))throw x("IStack.-peek",a);return b.call(null,a)}function Ya(a){if(a?a.Ja:a)return a.Ja(a);var b;b=Ya[m(null==a?null:a)];if(!b&&(b=Ya._,!b))throw x("IStack.-pop",a);return b.call(null,a)}var Za={};function $a(a,b,c){if(a?a.Pa:a)return a.Pa(a,b,c);var d;d=$a[m(null==a?null:a)];if(!d&&(d=$a._,!d))throw x("IVector.-assoc-n",a);return d.call(null,a,b,c)}
function ab(a){if(a?a.ub:a)return a.ub(a);var b;b=ab[m(null==a?null:a)];if(!b&&(b=ab._,!b))throw x("IDeref.-deref",a);return b.call(null,a)}var bb={};function cb(a){if(a?a.D:a)return a.D(a);var b;b=cb[m(null==a?null:a)];if(!b&&(b=cb._,!b))throw x("IMeta.-meta",a);return b.call(null,a)}var db={};function eb(a,b){if(a?a.F:a)return a.F(a,b);var c;c=eb[m(null==a?null:a)];if(!c&&(c=eb._,!c))throw x("IWithMeta.-with-meta",a);return c.call(null,a,b)}
var fb={},gb=function(){function a(a,b,c){if(a?a.M:a)return a.M(a,b,c);var h;h=gb[m(null==a?null:a)];if(!h&&(h=gb._,!h))throw x("IReduce.-reduce",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.N:a)return a.N(a,b);var c;c=gb[m(null==a?null:a)];if(!c&&(c=gb._,!c))throw x("IReduce.-reduce",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function hb(a,b,c){if(a?a.Za:a)return a.Za(a,b,c);var d;d=hb[m(null==a?null:a)];if(!d&&(d=hb._,!d))throw x("IKVReduce.-kv-reduce",a);return d.call(null,a,b,c)}function ib(a,b){if(a?a.v:a)return a.v(a,b);var c;c=ib[m(null==a?null:a)];if(!c&&(c=ib._,!c))throw x("IEquiv.-equiv",a);return c.call(null,a,b)}function jb(a){if(a?a.B:a)return a.B(a);var b;b=jb[m(null==a?null:a)];if(!b&&(b=jb._,!b))throw x("IHash.-hash",a);return b.call(null,a)}var kb={};
function lb(a){if(a?a.H:a)return a.H(a);var b;b=lb[m(null==a?null:a)];if(!b&&(b=lb._,!b))throw x("ISeqable.-seq",a);return b.call(null,a)}var mb={},nb={},ob={};function pb(a){if(a?a.Xa:a)return a.Xa(a);var b;b=pb[m(null==a?null:a)];if(!b&&(b=pb._,!b))throw x("IReversible.-rseq",a);return b.call(null,a)}function qb(a,b){if(a?a.yb:a)return a.yb(a,b);var c;c=qb[m(null==a?null:a)];if(!c&&(c=qb._,!c))throw x("ISorted.-sorted-seq",a);return c.call(null,a,b)}
function rb(a,b,c){if(a?a.zb:a)return a.zb(a,b,c);var d;d=rb[m(null==a?null:a)];if(!d&&(d=rb._,!d))throw x("ISorted.-sorted-seq-from",a);return d.call(null,a,b,c)}function sb(a,b){if(a?a.xb:a)return a.xb(a,b);var c;c=sb[m(null==a?null:a)];if(!c&&(c=sb._,!c))throw x("ISorted.-entry-key",a);return c.call(null,a,b)}function tb(a){if(a?a.wb:a)return a.wb(a);var b;b=tb[m(null==a?null:a)];if(!b&&(b=tb._,!b))throw x("ISorted.-comparator",a);return b.call(null,a)}
function ub(a,b){if(a?a.Sb:a)return a.Sb(0,b);var c;c=ub[m(null==a?null:a)];if(!c&&(c=ub._,!c))throw x("IWriter.-write",a);return c.call(null,a,b)}var vb={};function wb(a,b,c){if(a?a.w:a)return a.w(a,b,c);var d;d=wb[m(null==a?null:a)];if(!d&&(d=wb._,!d))throw x("IPrintWithWriter.-pr-writer",a);return d.call(null,a,b,c)}function xb(a,b,c){if(a?a.Rb:a)return a.Rb(0,b,c);var d;d=xb[m(null==a?null:a)];if(!d&&(d=xb._,!d))throw x("IWatchable.-notify-watches",a);return d.call(null,a,b,c)}
function yb(a){if(a?a.Wa:a)return a.Wa(a);var b;b=yb[m(null==a?null:a)];if(!b&&(b=yb._,!b))throw x("IEditableCollection.-as-transient",a);return b.call(null,a)}function zb(a,b){if(a?a.Ka:a)return a.Ka(a,b);var c;c=zb[m(null==a?null:a)];if(!c&&(c=zb._,!c))throw x("ITransientCollection.-conj!",a);return c.call(null,a,b)}function Ab(a){if(a?a.Oa:a)return a.Oa(a);var b;b=Ab[m(null==a?null:a)];if(!b&&(b=Ab._,!b))throw x("ITransientCollection.-persistent!",a);return b.call(null,a)}
function Bb(a,b,c){if(a?a.cb:a)return a.cb(a,b,c);var d;d=Bb[m(null==a?null:a)];if(!d&&(d=Bb._,!d))throw x("ITransientAssociative.-assoc!",a);return d.call(null,a,b,c)}function Cb(a,b){if(a?a.Ab:a)return a.Ab(a,b);var c;c=Cb[m(null==a?null:a)];if(!c&&(c=Cb._,!c))throw x("ITransientMap.-dissoc!",a);return c.call(null,a,b)}function Db(a,b,c){if(a?a.Pb:a)return a.Pb(0,b,c);var d;d=Db[m(null==a?null:a)];if(!d&&(d=Db._,!d))throw x("ITransientVector.-assoc-n!",a);return d.call(null,a,b,c)}
function Eb(a){if(a?a.Qb:a)return a.Qb();var b;b=Eb[m(null==a?null:a)];if(!b&&(b=Eb._,!b))throw x("ITransientVector.-pop!",a);return b.call(null,a)}function Fb(a,b){if(a?a.Ob:a)return a.Ob(0,b);var c;c=Fb[m(null==a?null:a)];if(!c&&(c=Fb._,!c))throw x("ITransientSet.-disjoin!",a);return c.call(null,a,b)}function Gb(a){if(a?a.Kb:a)return a.Kb();var b;b=Gb[m(null==a?null:a)];if(!b&&(b=Gb._,!b))throw x("IChunk.-drop-first",a);return b.call(null,a)}
function Hb(a){if(a?a.sb:a)return a.sb(a);var b;b=Hb[m(null==a?null:a)];if(!b&&(b=Hb._,!b))throw x("IChunkedSeq.-chunked-first",a);return b.call(null,a)}function Ib(a){if(a?a.tb:a)return a.tb(a);var b;b=Ib[m(null==a?null:a)];if(!b&&(b=Ib._,!b))throw x("IChunkedSeq.-chunked-rest",a);return b.call(null,a)}function Jb(a){if(a?a.rb:a)return a.rb(a);var b;b=Jb[m(null==a?null:a)];if(!b&&(b=Jb._,!b))throw x("IChunkedNext.-chunked-next",a);return b.call(null,a)}
function Kb(a){this.vc=a;this.q=0;this.i=1073741824}Kb.prototype.Sb=function(a,b){return this.vc.append(b)};function Lb(a){var b=new ea;a.w(null,new Kb(b),ka());return""+A.b(b)}var Mb="undefined"!==typeof Math.imul&&0!==(Math.imul.a?Math.imul.a(4294967295,5):Math.imul.call(null,4294967295,5))?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function Nb(a){a=Mb(a,3432918353);return Mb(a<<15|a>>>-15,461845907)}
function Ob(a,b){var c=a^b;return Mb(c<<13|c>>>-13,5)+3864292196}function Pb(a,b){var c=a^b,c=Mb(c^c>>>16,2246822507),c=Mb(c^c>>>13,3266489909);return c^c>>>16}var Qb={},Rb=0;function Sb(a){255<Rb&&(Qb={},Rb=0);var b=Qb[a];if("number"!==typeof b){a:if(null!=a)if(b=a.length,0<b){for(var c=0,d=0;;)if(c<b)var e=c+1,d=Mb(31,d)+a.charCodeAt(c),c=e;else{b=d;break a}b=void 0}else b=0;else b=0;Qb[a]=b;Rb+=1}return a=b}
function Tb(a){a&&(a.i&4194304||a.Dc)?a=a.B(null):"number"===typeof a?a=Math.floor(a)%2147483647:!0===a?a=1:!1===a?a=0:"string"===typeof a?(a=Sb(a),0!==a&&(a=Nb(a),a=Ob(0,a),a=Pb(a,4))):a=null==a?0:u?jb(a):null;return a}
function Ub(a){var b;b=a.name;var c;a:{c=1;for(var d=0;;)if(c<b.length){var e=c+2,d=Ob(d,Nb(b.charCodeAt(c-1)|b.charCodeAt(c)<<16));c=e}else{c=d;break a}c=void 0}c=1===(b.length&1)?c^Nb(b.charCodeAt(b.length-1)):c;b=Pb(c,Mb(2,b.length));a=Sb(a.fa);return b^a+2654435769+(b<<6)+(b>>2)}
function Vb(a,b){if(r(Wb.a?Wb.a(a,b):Wb.call(null,a,b)))return 0;var c=sa(a.fa);if(r(c?b.fa:c))return-1;if(r(a.fa)){if(sa(b.fa))return 1;c=Xb.a?Xb.a(a.fa,b.fa):Xb.call(null,a.fa,b.fa);return 0===c?Xb.a?Xb.a(a.name,b.name):Xb.call(null,a.name,b.name):c}return Yb?Xb.a?Xb.a(a.name,b.name):Xb.call(null,a.name,b.name):null}function Zb(a,b,c,d,e){this.fa=a;this.name=b;this.Na=c;this.Ua=d;this.W=e;this.i=2154168321;this.q=4096}g=Zb.prototype;g.w=function(a,b){return ub(b,this.Na)};
g.B=function(){var a=this.Ua;return null!=a?a:this.Ua=a=Ub(this)};g.F=function(a,b){return new Zb(this.fa,this.name,this.Na,this.Ua,b)};g.D=function(){return this.W};g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return La.c(c,this,null);case 3:return La.c(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return La.c(a,this,null)};
g.a=function(a,b){return La.c(a,this,b)};g.v=function(a,b){return b instanceof Zb?this.Na===b.Na:!1};g.toString=function(){return this.Na};var $b=function(){function a(a,b){var c=null!=a?""+A.b(a)+"/"+A.b(b):b;return new Zb(a,b,c,null,null)}function b(a){return a instanceof Zb?a:c.a(null,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}();
function E(a){if(null==a)return null;if(a&&(a.i&8388608||a.hc))return a.H(null);if(a instanceof Array||"string"===typeof a)return 0===a.length?null:new ac(a,0);if(s(kb,a))return lb(a);if(u)throw Error(""+A.b(a)+" is not ISeqable");return null}function F(a){if(null==a)return null;if(a&&(a.i&64||a.bb))return a.Q(null);a=E(a);return null==a?null:Ha(a)}function G(a){return null!=a?a&&(a.i&64||a.bb)?a.S(null):(a=E(a))?Ia(a):H:H}function I(a){return null==a?null:a&&(a.i&128||a.ob)?a.U(null):E(G(a))}
var Wb=function(){function a(a,b){return null==a?null==b:a===b||ib(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;)if(b.a(a,d))if(I(e))a=d,d=F(e),e=I(e);else return b.a(d,F(e));else return!1}a.k=2;a.f=function(a){var b=F(a);a=I(a);var d=F(a);a=G(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return!0;case 2:return a.call(this,b,
e);default:return c.d(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.k=2;b.f=c.f;b.b=function(){return!0};b.a=a;b.d=c.d;return b}();function bc(a,b){var c=Nb(a),c=Ob(0,c);return Pb(c,b)}function cc(a){var b=0,c=1;for(a=E(a);;)if(null!=a)b+=1,c=Mb(31,c)+Tb(F(a))|0,a=I(a);else return bc(c,b)}function dc(a){var b=0,c=0;for(a=E(a);;)if(null!=a)b+=1,c=c+Tb(F(a))|0,a=I(a);else return bc(c,b)}za["null"]=!0;Aa["null"]=function(){return 0};
Date.prototype.v=function(a,b){return b instanceof Date&&this.toString()===b.toString()};ib.number=function(a,b){return a===b};bb["function"]=!0;cb["function"]=function(){return null};ya["function"]=!0;jb._=function(a){return a[ba]||(a[ba]=++ca)};function ec(a){this.l=a;this.q=0;this.i=32768}ec.prototype.ub=function(){return this.l};function fc(a){return a instanceof ec}
var gc=function(){function a(a,b,c,d){for(var l=Aa(a);;)if(d<l){c=b.a?b.a(c,D.a(a,d)):b.call(null,c,D.a(a,d));if(fc(c))return K.b?K.b(c):K.call(null,c);d+=1}else return c}function b(a,b,c){for(var d=Aa(a),l=0;;)if(l<d){c=b.a?b.a(c,D.a(a,l)):b.call(null,c,D.a(a,l));if(fc(c))return K.b?K.b(c):K.call(null,c);l+=1}else return c}function c(a,b){var c=Aa(a);if(0===c)return b.o?b.o():b.call(null);for(var d=D.a(a,0),l=1;;)if(l<c){d=b.a?b.a(d,D.a(a,l)):b.call(null,d,D.a(a,l));if(fc(d))return K.b?K.b(d):K.call(null,
d);l+=1}else return d}var d=null,d=function(d,f,h,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,h);case 4:return a.call(this,d,f,h,k)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.n=a;return d}(),hc=function(){function a(a,b,c,d){for(var l=a.length;;)if(d<l){c=b.a?b.a(c,a[d]):b.call(null,c,a[d]);if(fc(c))return K.b?K.b(c):K.call(null,c);d+=1}else return c}function b(a,b,c){for(var d=a.length,l=0;;)if(l<d){c=b.a?b.a(c,a[l]):b.call(null,c,
a[l]);if(fc(c))return K.b?K.b(c):K.call(null,c);l+=1}else return c}function c(a,b){var c=a.length;if(0===a.length)return b.o?b.o():b.call(null);for(var d=a[0],l=1;;)if(l<c){d=b.a?b.a(d,a[l]):b.call(null,d,a[l]);if(fc(d))return K.b?K.b(d):K.call(null,d);l+=1}else return d}var d=null,d=function(d,f,h,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,h);case 4:return a.call(this,d,f,h,k)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.n=a;return d}();
function ic(a){return a?a.i&2||a.Yb?!0:a.i?!1:s(za,a):s(za,a)}function jc(a){return a?a.i&16||a.Lb?!0:a.i?!1:s(Ea,a):s(Ea,a)}function ac(a,b){this.e=a;this.p=b;this.i=166199550;this.q=8192}g=ac.prototype;g.toString=function(){return Lb(this)};g.J=function(a,b){var c=b+this.p;return c<this.e.length?this.e[c]:null};g.aa=function(a,b,c){a=b+this.p;return a<this.e.length?this.e[a]:c};g.U=function(){return this.p+1<this.e.length?new ac(this.e,this.p+1):null};g.L=function(){return this.e.length-this.p};
g.Xa=function(){var a=Aa(this);return 0<a?new kc(this,a-1,null):null};g.B=function(){return cc(this)};g.v=function(a,b){return lc.a?lc.a(this,b):lc.call(null,this,b)};g.I=function(){return H};g.N=function(a,b){return hc.n(this.e,b,this.e[this.p],this.p+1)};g.M=function(a,b,c){return hc.n(this.e,b,c,this.p)};g.Q=function(){return this.e[this.p]};g.S=function(){return this.p+1<this.e.length?new ac(this.e,this.p+1):H};g.H=function(){return this};
g.G=function(a,b){return M.a?M.a(b,this):M.call(null,b,this)};
var mc=function(){function a(a,b){return b<a.length?new ac(a,b):null}function b(a){return c.a(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),J=function(){function a(a,b){return mc.a(a,b)}function b(a){return mc.a(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.b=b;c.a=a;return c}();function kc(a,b,c){this.jb=a;this.p=b;this.j=c;this.i=32374990;this.q=8192}g=kc.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.j};g.U=function(){return 0<this.p?new kc(this.jb,this.p-1,null):null};g.L=function(){return this.p+1};g.B=function(){return cc(this)};g.v=function(a,b){return lc.a?lc.a(this,b):lc.call(null,this,b)};g.I=function(){return N.a?N.a(H,this.j):N.call(null,H,this.j)};
g.N=function(a,b){return nc.a?nc.a(b,this):nc.call(null,b,this)};g.M=function(a,b,c){return nc.c?nc.c(b,c,this):nc.call(null,b,c,this)};g.Q=function(){return D.a(this.jb,this.p)};g.S=function(){return 0<this.p?new kc(this.jb,this.p-1,null):H};g.H=function(){return this};g.F=function(a,b){return new kc(this.jb,this.p,b)};g.G=function(a,b){return M.a?M.a(b,this):M.call(null,b,this)};function oc(a){for(;;){var b=I(a);if(null!=b)a=b;else return F(a)}}ib._=function(a,b){return a===b};
var pc=function(){function a(a,b){return null!=a?Da(a,b):Da(H,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;)if(r(e))a=b.a(a,d),d=F(e),e=I(e);else return b.a(a,d)}a.k=2;a.f=function(a){var b=F(a);a=I(a);var d=F(a);a=G(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.d(b,e,J(arguments,2))}throw Error("Invalid arity: "+
arguments.length);};b.k=2;b.f=c.f;b.a=a;b.d=c.d;return b}();function qc(a){return null==a?null:Ba(a)}function O(a){if(null!=a)if(a&&(a.i&2||a.Yb))a=a.L(null);else if(a instanceof Array)a=a.length;else if("string"===typeof a)a=a.length;else if(s(za,a))a=Aa(a);else if(u)a:{a=E(a);for(var b=0;;){if(ic(a)){a=b+Aa(a);break a}a=I(a);b+=1}a=void 0}else a=null;else a=0;return a}
var rc=function(){function a(a,b,c){for(;;){if(null==a)return c;if(0===b)return E(a)?F(a):c;if(jc(a))return D.c(a,b,c);if(E(a))a=I(a),b-=1;else return u?c:null}}function b(a,b){for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(E(a))return F(a);throw Error("Index out of bounds");}if(jc(a))return D.a(a,b);if(E(a)){var c=I(a),h=b-1;a=c;b=h}else{if(u)throw Error("Index out of bounds");return null}}}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,
c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),P=function(){function a(a,b,c){if("number"!==typeof b)throw Error("index argument to nth must be a number.");if(null==a)return c;if(a&&(a.i&16||a.Lb))return a.aa(null,b,c);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:c;if(s(Ea,a))return D.a(a,b);if(a?a.i&64||a.bb||(a.i?0:s(Fa,a)):s(Fa,a))return rc.c(a,b,c);if(u)throw Error("nth not supported on this type "+A.b(ua(ta(a))));return null}function b(a,
b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(a&&(a.i&16||a.Lb))return a.J(null,b);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:null;if(s(Ea,a))return D.a(a,b);if(a?a.i&64||a.bb||(a.i?0:s(Fa,a)):s(Fa,a))return rc.a(a,b);if(u)throw Error("nth not supported on this type "+A.b(ua(ta(a))));return null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.c=a;return c}(),Q=function(){function a(a,b,c){return null!=a?a&&(a.i&256||a.Mb)?a.C(null,b,c):a instanceof Array?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:s(Ka,a)?La.c(a,b,c):u?c:null:c}function b(a,b){return null==a?null:a&&(a.i&256||a.Mb)?a.u(null,b):a instanceof Array?b<a.length?a[b]:null:"string"===typeof a?b<a.length?a[b]:null:s(Ka,a)?La.a(a,b):null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,
c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),R=function(){function a(a,b,c){return null!=a?Oa(a,b,c):sc.a?sc.a([b],[c]):sc.call(null,[b],[c])}var b=null,c=function(){function a(b,d,k,l){var n=null;3<arguments.length&&(n=J(Array.prototype.slice.call(arguments,3),0));return c.call(this,b,d,k,n)}function c(a,d,e,l){for(;;)if(a=b.c(a,d,e),r(l))d=F(l),e=F(I(l)),l=I(I(l));else return a}a.k=3;a.f=function(a){var b=F(a);a=I(a);var d=F(a);a=I(a);var l=F(a);a=G(a);return c(b,
d,l,a)};a.d=c;return a}(),b=function(b,e,f,h){switch(arguments.length){case 3:return a.call(this,b,e,f);default:return c.d(b,e,f,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.k=3;b.f=c.f;b.c=a;b.d=c.d;return b}(),tc=function(){function a(a,b){return null==a?null:Qa(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;){if(null==a)return null;a=b.a(a,d);
if(r(e))d=F(e),e=I(e);else return a}}a.k=2;a.f=function(a){var b=F(a);a=I(a);var d=F(a);a=G(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.d(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.k=2;b.f=c.f;b.b=function(a){return a};b.a=a;b.d=c.d;return b}();function uc(a){var b="function"==m(a);return b?b:a?r(r(null)?null:a.Xb)?!0:a.Cb?!1:s(ya,a):s(ya,a)}
function vc(a,b){this.h=a;this.j=b;this.q=0;this.i=393217}g=vc.prototype;
g.call=function(){var a=null;return a=function(a,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga,Ra,wc){switch(arguments.length){case 1:var z=a,z=this;return z.h.o?z.h.o():z.h.call(null);case 2:return z=a,z=this,z.h.b?z.h.b(c):z.h.call(null,c);case 3:return z=a,z=this,z.h.a?z.h.a(c,d):z.h.call(null,c,d);case 4:return z=a,z=this,z.h.c?z.h.c(c,d,e):z.h.call(null,c,d,e);case 5:return z=a,z=this,z.h.n?z.h.n(c,d,e,f):z.h.call(null,c,d,e,f);case 6:return z=a,z=this,z.h.s?z.h.s(c,d,e,f,h):z.h.call(null,c,d,e,f,
h);case 7:return z=a,z=this,z.h.X?z.h.X(c,d,e,f,h,k):z.h.call(null,c,d,e,f,h,k);case 8:return z=a,z=this,z.h.ga?z.h.ga(c,d,e,f,h,k,l):z.h.call(null,c,d,e,f,h,k,l);case 9:return z=a,z=this,z.h.Ga?z.h.Ga(c,d,e,f,h,k,l,n):z.h.call(null,c,d,e,f,h,k,l,n);case 10:return z=a,z=this,z.h.Ha?z.h.Ha(c,d,e,f,h,k,l,n,q):z.h.call(null,c,d,e,f,h,k,l,n,q);case 11:return z=a,z=this,z.h.va?z.h.va(c,d,e,f,h,k,l,n,q,t):z.h.call(null,c,d,e,f,h,k,l,n,q,t);case 12:return z=a,z=this,z.h.wa?z.h.wa(c,d,e,f,h,k,l,n,q,t,v):
z.h.call(null,c,d,e,f,h,k,l,n,q,t,v);case 13:return z=a,z=this,z.h.xa?z.h.xa(c,d,e,f,h,k,l,n,q,t,v,w):z.h.call(null,c,d,e,f,h,k,l,n,q,t,v,w);case 14:return z=a,z=this,z.h.ya?z.h.ya(c,d,e,f,h,k,l,n,q,t,v,w,y):z.h.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y);case 15:return z=a,z=this,z.h.za?z.h.za(c,d,e,f,h,k,l,n,q,t,v,w,y,B):z.h.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B);case 16:return z=a,z=this,z.h.Aa?z.h.Aa(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L):z.h.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L);case 17:return z=a,z=this,
z.h.Ba?z.h.Ba(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U):z.h.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U);case 18:return z=a,z=this,z.h.Ca?z.h.Ca(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z):z.h.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z);case 19:return z=a,z=this,z.h.Da?z.h.Da(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na):z.h.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na);case 20:return z=a,z=this,z.h.Ea?z.h.Ea(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga):z.h.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga);case 21:return z=
a,z=this,z.h.Fa?z.h.Fa(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga,Ra):z.h.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga,Ra);case 22:return z=a,z=this,S.bc?S.bc(z.h,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga,Ra,wc):S.call(null,z.h,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga,Ra,wc)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.o=function(){return this.h.o?this.h.o():this.h.call(null)};
g.b=function(a){return this.h.b?this.h.b(a):this.h.call(null,a)};g.a=function(a,b){return this.h.a?this.h.a(a,b):this.h.call(null,a,b)};g.c=function(a,b,c){return this.h.c?this.h.c(a,b,c):this.h.call(null,a,b,c)};g.n=function(a,b,c,d){return this.h.n?this.h.n(a,b,c,d):this.h.call(null,a,b,c,d)};g.s=function(a,b,c,d,e){return this.h.s?this.h.s(a,b,c,d,e):this.h.call(null,a,b,c,d,e)};g.X=function(a,b,c,d,e,f){return this.h.X?this.h.X(a,b,c,d,e,f):this.h.call(null,a,b,c,d,e,f)};
g.ga=function(a,b,c,d,e,f,h){return this.h.ga?this.h.ga(a,b,c,d,e,f,h):this.h.call(null,a,b,c,d,e,f,h)};g.Ga=function(a,b,c,d,e,f,h,k){return this.h.Ga?this.h.Ga(a,b,c,d,e,f,h,k):this.h.call(null,a,b,c,d,e,f,h,k)};g.Ha=function(a,b,c,d,e,f,h,k,l){return this.h.Ha?this.h.Ha(a,b,c,d,e,f,h,k,l):this.h.call(null,a,b,c,d,e,f,h,k,l)};g.va=function(a,b,c,d,e,f,h,k,l,n){return this.h.va?this.h.va(a,b,c,d,e,f,h,k,l,n):this.h.call(null,a,b,c,d,e,f,h,k,l,n)};
g.wa=function(a,b,c,d,e,f,h,k,l,n,q){return this.h.wa?this.h.wa(a,b,c,d,e,f,h,k,l,n,q):this.h.call(null,a,b,c,d,e,f,h,k,l,n,q)};g.xa=function(a,b,c,d,e,f,h,k,l,n,q,t){return this.h.xa?this.h.xa(a,b,c,d,e,f,h,k,l,n,q,t):this.h.call(null,a,b,c,d,e,f,h,k,l,n,q,t)};g.ya=function(a,b,c,d,e,f,h,k,l,n,q,t,v){return this.h.ya?this.h.ya(a,b,c,d,e,f,h,k,l,n,q,t,v):this.h.call(null,a,b,c,d,e,f,h,k,l,n,q,t,v)};
g.za=function(a,b,c,d,e,f,h,k,l,n,q,t,v,w){return this.h.za?this.h.za(a,b,c,d,e,f,h,k,l,n,q,t,v,w):this.h.call(null,a,b,c,d,e,f,h,k,l,n,q,t,v,w)};g.Aa=function(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y){return this.h.Aa?this.h.Aa(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y):this.h.call(null,a,b,c,d,e,f,h,k,l,n,q,t,v,w,y)};g.Ba=function(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B){return this.h.Ba?this.h.Ba(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B):this.h.call(null,a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B)};
g.Ca=function(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L){return this.h.Ca?this.h.Ca(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L):this.h.call(null,a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L)};g.Da=function(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U){return this.h.Da?this.h.Da(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U):this.h.call(null,a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U)};
g.Ea=function(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z){return this.h.Ea?this.h.Ea(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z):this.h.call(null,a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z)};g.Fa=function(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na){return this.h.Fa?this.h.Fa(a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na):this.h.call(null,a,b,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na)};g.Xb=!0;g.F=function(a,b){return new vc(this.h,b)};g.D=function(){return this.j};
function N(a,b){return uc(a)&&!(a?a.i&262144||a.oc||(a.i?0:s(db,a)):s(db,a))?new vc(a,b):null==a?null:eb(a,b)}function xc(a){var b=null!=a;return(b?a?a.i&131072||a.ec||(a.i?0:s(bb,a)):s(bb,a):b)?cb(a):null}function yc(a){return null==a?null:Xa(a)}function zc(a){return null==a?null:Ya(a)}
var Ac=function(){function a(a,b){return null==a?null:Wa(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;){if(null==a)return null;a=b.a(a,d);if(r(e))d=F(e),e=I(e);else return a}}a.k=2;a.f=function(a){var b=F(a);a=I(a);var d=F(a);a=G(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.d(b,
e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.k=2;b.f=c.f;b.b=function(a){return a};b.a=a;b.d=c.d;return b}();function Bc(a){return null==a||sa(E(a))}function Cc(a){return null==a?!1:a?a.i&8||a.Ac?!0:a.i?!1:s(Ca,a):s(Ca,a)}function Dc(a){return null==a?!1:a?a.i&4096||a.jc?!0:a.i?!1:s(Va,a):s(Va,a)}function Ec(a){return a?a.i&512||a.yc?!0:a.i?!1:s(Ma,a):s(Ma,a)}function Fc(a){return a?a.i&16777216||a.ic?!0:a.i?!1:s(mb,a):s(mb,a)}
function Gc(a){return null==a?!1:a?a.i&1024||a.cc?!0:a.i?!1:s(Pa,a):s(Pa,a)}function Hc(a){return a?a.i&16384||a.Gc?!0:a.i?!1:s(Za,a):s(Za,a)}function Ic(a){return a?a.q&512||a.zc?!0:!1:!1}function Jc(a){var b=[];da(a,function(a){return function(b,e){return a.push(e)}}(b));return b}function Kc(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,e-=1,b+=1}var Lc={};function Mc(a){return null==a?!1:a?a.i&64||a.bb?!0:a.i?!1:s(Fa,a):s(Fa,a)}function Nc(a){return r(a)?!0:!1}
function Oc(a,b){return Q.c(a,b,Lc)===Lc?!1:!0}function Xb(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if(ta(a)===ta(b))return a&&(a.q&2048||a.lb)?a.mb(null,b):ga(a,b);if(u)throw Error("compare on non-nil objects of different types");return null}
var Pc=function(){function a(a,b,c,h){for(;;){var k=Xb(P.a(a,h),P.a(b,h));if(0===k&&h+1<c)h+=1;else return k}}function b(a,b){var f=O(a),h=O(b);return f<h?-1:f>h?1:u?c.n(a,b,f,0):null}var c=null,c=function(c,e,f,h){switch(arguments.length){case 2:return b.call(this,c,e);case 4:return a.call(this,c,e,f,h)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.n=a;return c}();
function Qc(a){return Wb.a(a,Xb)?Xb:function(b,c){var d=a.a?a.a(b,c):a.call(null,b,c);return"number"===typeof d?d:r(d)?-1:r(a.a?a.a(c,b):a.call(null,c,b))?1:0}}
var Sc=function(){function a(a,b){if(E(b)){var c=Rc.b?Rc.b(b):Rc.call(null,b);ha(c,Qc(a));return E(c)}return H}function b(a){return c.a(Xb,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Tc=function(){function a(a,b,c){return Sc.a(function(c,f){return Qc(b).call(null,a.b?a.b(c):a.call(null,c),a.b?a.b(f):a.call(null,f))},c)}function b(a,b){return c.c(a,Xb,b)}
var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),nc=function(){function a(a,b,c){for(c=E(c);;)if(c){b=a.a?a.a(b,F(c)):a.call(null,b,F(c));if(fc(b))return K.b?K.b(b):K.call(null,b);c=I(c)}else return b}function b(a,b){var c=E(b);return c?C.c?C.c(a,F(c),I(c)):C.call(null,a,F(c),I(c)):a.o?a.o():a.call(null)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,
c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),C=function(){function a(a,b,c){return c&&(c.i&524288||c.Nb)?c.M(null,a,b):c instanceof Array?hc.c(c,a,b):"string"===typeof c?hc.c(c,a,b):s(fb,c)?gb.c(c,a,b):u?nc.c(a,b,c):null}function b(a,b){return b&&(b.i&524288||b.Nb)?b.N(null,a):b instanceof Array?hc.a(b,a):"string"===typeof b?hc.a(b,a):s(fb,b)?gb.a(b,a):u?nc.a(a,b):null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,
c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),Uc=function(){var a=null,b=function(){function a(c,f,h){var k=null;2<arguments.length&&(k=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a>c)if(I(d))a=c,c=F(d),d=I(d);else return c>F(d);else return!1}a.k=2;a.f=function(a){var c=F(a);a=I(a);var h=F(a);a=G(a);return b(c,h,a)};a.d=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;
case 2:return a>d;default:return b.d(a,d,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.k=2;a.f=b.f;a.b=function(){return!0};a.a=function(a,b){return a>b};a.d=b.d;return a}(),Vc=function(){var a=null,b=function(){function a(c,f,h){var k=null;2<arguments.length&&(k=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a>=c)if(I(d))a=c,c=F(d),d=I(d);else return c>=F(d);else return!1}a.k=2;a.f=function(a){var c=F(a);a=I(a);var h=F(a);
a=G(a);return b(c,h,a)};a.d=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>=d;default:return b.d(a,d,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.k=2;a.f=b.f;a.b=function(){return!0};a.a=function(a,b){return a>=b};a.d=b.d;return a}();function Wc(a){return a-1}
var Xc=function(){function a(a,b){return a>b?a:b}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){return C.c(b,a>d?a:d,e)}a.k=2;a.f=function(a){var b=F(a);a=I(a);var d=F(a);a=G(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.d(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.k=2;b.f=c.f;b.b=function(a){return a};b.a=a;b.d=c.d;return b}();function Yc(a){a=(a-a%2)/2;return 0<=a?Math.floor.b?Math.floor.b(a):Math.floor.call(null,a):Math.ceil.b?Math.ceil.b(a):Math.ceil.call(null,a)}function Zc(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function $c(a){var b=1;for(a=E(a);;)if(a&&0<b)b-=1,a=I(a);else return a}
var A=function(){function a(a){return null==a?"":a.toString()}var b=null,c=function(){function a(b,d){var k=null;1<arguments.length&&(k=J(Array.prototype.slice.call(arguments,1),0));return c.call(this,b,k)}function c(a,d){for(var e=new ea(b.b(a)),l=d;;)if(r(l))e=e.append(b.b(F(l))),l=I(l);else return e.toString()}a.k=1;a.f=function(a){var b=F(a);a=G(a);return c(b,a)};a.d=c;return a}(),b=function(b,e){switch(arguments.length){case 0:return"";case 1:return a.call(this,b);default:return c.d(b,J(arguments,
1))}throw Error("Invalid arity: "+arguments.length);};b.k=1;b.f=c.f;b.o=function(){return""};b.b=a;b.d=c.d;return b}(),ad=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return a.substring(c);case 3:return a.substring(c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return a.substring(c)};a.c=function(a,c,d){return a.substring(c,d)};return a}();
function lc(a,b){return Nc(Fc(b)?function(){for(var c=E(a),d=E(b);;){if(null==c)return null==d;if(null==d)return!1;if(Wb.a(F(c),F(d)))c=I(c),d=I(d);else return u?!1:null}}():null)}function bd(a,b,c,d,e){this.j=a;this.first=b;this.ta=c;this.count=d;this.m=e;this.i=65937646;this.q=8192}g=bd.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.j};g.U=function(){return 1===this.count?null:this.ta};g.L=function(){return this.count};g.Ia=function(){return this.first};g.Ja=function(){return Ia(this)};
g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return H};g.N=function(a,b){return nc.a(b,this)};g.M=function(a,b,c){return nc.c(b,c,this)};g.Q=function(){return this.first};g.S=function(){return 1===this.count?H:this.ta};g.H=function(){return this};g.F=function(a,b){return new bd(b,this.first,this.ta,this.count,this.m)};g.G=function(a,b){return new bd(this.j,b,this,this.count+1,null)};
function cd(a){this.j=a;this.i=65937614;this.q=8192}g=cd.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.j};g.U=function(){return null};g.L=function(){return 0};g.Ia=function(){return null};g.Ja=function(){throw Error("Can't pop empty list");};g.B=function(){return 0};g.v=function(a,b){return lc(this,b)};g.I=function(){return this};g.N=function(a,b){return nc.a(b,this)};g.M=function(a,b,c){return nc.c(b,c,this)};g.Q=function(){return null};g.S=function(){return H};
g.H=function(){return null};g.F=function(a,b){return new cd(b)};g.G=function(a,b){return new bd(this.j,b,null,1,null)};var H=new cd(null);function dd(a){return a?a.i&134217728||a.Fc?!0:a.i?!1:s(ob,a):s(ob,a)}function ed(a){return dd(a)?pb(a):C.c(pc,H,a)}
var fd=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b;if(a instanceof ac&&0===a.p)b=a.e;else a:{for(b=[];;)if(null!=a)b.push(a.Q(null)),a=a.U(null);else break a;b=void 0}a=b.length;for(var e=H;;)if(0<a){var f=a-1,e=e.G(null,b[a-1]);a=f}else return e}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}();function gd(a,b,c,d){this.j=a;this.first=b;this.ta=c;this.m=d;this.i=65929452;this.q=8192}
g=gd.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.j};g.U=function(){return null==this.ta?null:E(this.ta)};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(H,this.j)};g.N=function(a,b){return nc.a(b,this)};g.M=function(a,b,c){return nc.c(b,c,this)};g.Q=function(){return this.first};g.S=function(){return null==this.ta?H:this.ta};g.H=function(){return this};
g.F=function(a,b){return new gd(b,this.first,this.ta,this.m)};g.G=function(a,b){return new gd(null,b,this,this.m)};function M(a,b){var c=null==b;return(c?c:b&&(b.i&64||b.bb))?new gd(null,a,b,null):new gd(null,a,E(b),null)}function T(a,b,c,d){this.fa=a;this.name=b;this.sa=c;this.Ua=d;this.i=2153775105;this.q=4096}g=T.prototype;g.w=function(a,b){return ub(b,":"+A.b(this.sa))};g.B=function(){var a=this.Ua;return null!=a?a:this.Ua=a=Ub(this)+2654435769};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Q.a(c,this);case 3:return Q.c(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return Q.a(a,this)};g.a=function(a,b){return Q.c(a,this,b)};g.v=function(a,b){return b instanceof T?this.sa===b.sa:!1};g.toString=function(){return":"+A.b(this.sa)};
function hd(a,b){return a===b?!0:a instanceof T&&b instanceof T?a.sa===b.sa:!1}
var jd=function(){function a(a,b){return new T(a,b,""+A.b(r(a)?""+A.b(a)+"/":null)+A.b(b),null)}function b(a){if(a instanceof T)return a;if(a instanceof Zb){var b;if(a&&(a.q&4096||a.fc))b=a.fa;else throw Error("Doesn't support namespace: "+A.b(a));return new T(b,id.b?id.b(a):id.call(null,a),a.Na,null)}return"string"===typeof a?(b=a.split("/"),2===b.length?new T(b[0],b[1],a,null):new T(null,b[0],a,null)):null}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,
c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}();function V(a,b,c,d){this.j=a;this.Ya=b;this.r=c;this.m=d;this.q=0;this.i=32374988}g=V.prototype;g.toString=function(){return Lb(this)};function kd(a){null!=a.Ya&&(a.r=a.Ya.o?a.Ya.o():a.Ya.call(null),a.Ya=null);return a.r}g.D=function(){return this.j};g.U=function(){lb(this);return null==this.r?null:I(this.r)};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};
g.I=function(){return N(H,this.j)};g.N=function(a,b){return nc.a(b,this)};g.M=function(a,b,c){return nc.c(b,c,this)};g.Q=function(){lb(this);return null==this.r?null:F(this.r)};g.S=function(){lb(this);return null!=this.r?G(this.r):H};g.H=function(){kd(this);if(null==this.r)return null;for(var a=this.r;;)if(a instanceof V)a=kd(a);else return this.r=a,E(this.r)};g.F=function(a,b){return new V(b,this.Ya,this.r,this.m)};g.G=function(a,b){return M(b,this)};
function ld(a,b){this.qb=a;this.end=b;this.q=0;this.i=2}ld.prototype.L=function(){return this.end};ld.prototype.add=function(a){this.qb[this.end]=a;return this.end+=1};ld.prototype.da=function(){var a=new md(this.qb,0,this.end);this.qb=null;return a};function md(a,b,c){this.e=a;this.O=b;this.end=c;this.q=0;this.i=524306}g=md.prototype;g.N=function(a,b){return hc.n(this.e,b,this.e[this.O],this.O+1)};g.M=function(a,b,c){return hc.n(this.e,b,c,this.O)};
g.Kb=function(){if(this.O===this.end)throw Error("-drop-first of empty chunk");return new md(this.e,this.O+1,this.end)};g.J=function(a,b){return this.e[this.O+b]};g.aa=function(a,b,c){return 0<=b&&b<this.end-this.O?this.e[this.O+b]:c};g.L=function(){return this.end-this.O};
var nd=function(){function a(a,b,c){return new md(a,b,c)}function b(a,b){return new md(a,b,a.length)}function c(a){return new md(a,0,a.length)}var d=null,d=function(d,f,h){switch(arguments.length){case 1:return c.call(this,d);case 2:return b.call(this,d,f);case 3:return a.call(this,d,f,h)}throw Error("Invalid arity: "+arguments.length);};d.b=c;d.a=b;d.c=a;return d}();function od(a,b,c,d){this.da=a;this.oa=b;this.j=c;this.m=d;this.i=31850732;this.q=1536}g=od.prototype;g.toString=function(){return Lb(this)};
g.D=function(){return this.j};g.U=function(){if(1<Aa(this.da))return new od(Gb(this.da),this.oa,this.j,null);var a=lb(this.oa);return null==a?null:a};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(H,this.j)};g.Q=function(){return D.a(this.da,0)};g.S=function(){return 1<Aa(this.da)?new od(Gb(this.da),this.oa,this.j,null):null==this.oa?H:this.oa};g.H=function(){return this};g.sb=function(){return this.da};
g.tb=function(){return null==this.oa?H:this.oa};g.F=function(a,b){return new od(this.da,this.oa,b,this.m)};g.G=function(a,b){return M(b,this)};g.rb=function(){return null==this.oa?null:this.oa};function pd(a,b){return 0===Aa(a)?b:new od(a,b,null,null)}function Rc(a){for(var b=[];;)if(E(a))b.push(F(a)),a=I(a);else return b}function qd(a,b){if(ic(a))return O(a);for(var c=a,d=b,e=0;;)if(0<d&&E(c))c=I(c),d-=1,e+=1;else return e}
var sd=function rd(b){return null==b?null:null==I(b)?E(F(b)):u?M(F(b),rd(I(b))):null},td=function(){function a(a,b){return new V(null,function(){var c=E(a);return c?Ic(c)?pd(Hb(c),d.a(Ib(c),b)):M(F(c),d.a(G(c),b)):b},null,null)}function b(a){return new V(null,function(){return a},null,null)}function c(){return new V(null,function(){return null},null,null)}var d=null,e=function(){function a(c,d,e){var f=null;2<arguments.length&&(f=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,
d,f)}function b(a,c,e){return function t(a,b){return new V(null,function(){var c=E(a);return c?Ic(c)?pd(Hb(c),t(Ib(c),b)):M(F(c),t(G(c),b)):r(b)?t(F(b),I(b)):null},null,null)}(d.a(a,c),e)}a.k=2;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=G(a);return b(c,d,a)};a.d=b;return a}(),d=function(d,h,k){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,d);case 2:return a.call(this,d,h);default:return e.d(d,h,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};d.k=
2;d.f=e.f;d.o=c;d.b=b;d.a=a;d.d=e.d;return d}(),ud=function(){function a(a,b,c,d){return M(a,M(b,M(c,d)))}function b(a,b,c){return M(a,M(b,c))}var c=null,d=function(){function a(c,d,e,n,q){var t=null;4<arguments.length&&(t=J(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,n,t)}function b(a,c,d,e,f){return M(a,M(c,M(d,M(e,sd(f)))))}a.k=4;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=I(a);var e=F(a);a=I(a);var q=F(a);a=G(a);return b(c,d,e,q,a)};a.d=b;return a}(),c=function(c,f,
h,k,l){switch(arguments.length){case 1:return E(c);case 2:return M(c,f);case 3:return b.call(this,c,f,h);case 4:return a.call(this,c,f,h,k);default:return d.d(c,f,h,k,J(arguments,4))}throw Error("Invalid arity: "+arguments.length);};c.k=4;c.f=d.f;c.b=function(a){return E(a)};c.a=function(a,b){return M(a,b)};c.c=b;c.n=a;c.d=d.d;return c}();function vd(a){return Ab(a)}
var wd=function(){var a=null,b=function(){function a(c,f,h){var k=null;2<arguments.length&&(k=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a=zb(a,c),r(d))c=F(d),d=I(d);else return a}a.k=2;a.f=function(a){var c=F(a);a=I(a);var h=F(a);a=G(a);return b(c,h,a)};a.d=b;return a}(),a=function(a,d,e){switch(arguments.length){case 2:return zb(a,d);default:return b.d(a,d,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.k=2;a.f=b.f;a.a=
function(a,b){return zb(a,b)};a.d=b.d;return a}(),xd=function(){var a=null,b=function(){function a(c,f,h,k){var l=null;3<arguments.length&&(l=J(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,f,h,l)}function b(a,c,d,k){for(;;)if(a=Bb(a,c,d),r(k))c=F(k),d=F(I(k)),k=I(I(k));else return a}a.k=3;a.f=function(a){var c=F(a);a=I(a);var h=F(a);a=I(a);var k=F(a);a=G(a);return b(c,h,k,a)};a.d=b;return a}(),a=function(a,d,e,f){switch(arguments.length){case 3:return Bb(a,d,e);default:return b.d(a,
d,e,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.k=3;a.f=b.f;a.c=function(a,b,e){return Bb(a,b,e)};a.d=b.d;return a}(),yd=function(){var a=null,b=function(){function a(c,f,h){var k=null;2<arguments.length&&(k=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a=Cb(a,c),r(d))c=F(d),d=I(d);else return a}a.k=2;a.f=function(a){var c=F(a);a=I(a);var h=F(a);a=G(a);return b(c,h,a)};a.d=b;return a}(),a=function(a,d,e){switch(arguments.length){case 2:return Cb(a,
d);default:return b.d(a,d,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.k=2;a.f=b.f;a.a=function(a,b){return Cb(a,b)};a.d=b.d;return a}(),zd=function(){var a=null,b=function(){function a(c,f,h){var k=null;2<arguments.length&&(k=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a=Fb(a,c),r(d))c=F(d),d=I(d);else return a}a.k=2;a.f=function(a){var c=F(a);a=I(a);var h=F(a);a=G(a);return b(c,h,a)};a.d=b;return a}(),a=function(a,d,
e){switch(arguments.length){case 2:return Fb(a,d);default:return b.d(a,d,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.k=2;a.f=b.f;a.a=function(a,b){return Fb(a,b)};a.d=b.d;return a}();
function Ad(a,b,c){var d=E(c);if(0===b)return a.o?a.o():a.call(null);c=Ha(d);var e=Ia(d);if(1===b)return a.b?a.b(c):a.b?a.b(c):a.call(null,c);var d=Ha(e),f=Ia(e);if(2===b)return a.a?a.a(c,d):a.a?a.a(c,d):a.call(null,c,d);var e=Ha(f),h=Ia(f);if(3===b)return a.c?a.c(c,d,e):a.c?a.c(c,d,e):a.call(null,c,d,e);var f=Ha(h),k=Ia(h);if(4===b)return a.n?a.n(c,d,e,f):a.n?a.n(c,d,e,f):a.call(null,c,d,e,f);var h=Ha(k),l=Ia(k);if(5===b)return a.s?a.s(c,d,e,f,h):a.s?a.s(c,d,e,f,h):a.call(null,c,d,e,f,h);var k=Ha(l),
n=Ia(l);if(6===b)return a.X?a.X(c,d,e,f,h,k):a.X?a.X(c,d,e,f,h,k):a.call(null,c,d,e,f,h,k);var l=Ha(n),q=Ia(n);if(7===b)return a.ga?a.ga(c,d,e,f,h,k,l):a.ga?a.ga(c,d,e,f,h,k,l):a.call(null,c,d,e,f,h,k,l);var n=Ha(q),t=Ia(q);if(8===b)return a.Ga?a.Ga(c,d,e,f,h,k,l,n):a.Ga?a.Ga(c,d,e,f,h,k,l,n):a.call(null,c,d,e,f,h,k,l,n);var q=Ha(t),v=Ia(t);if(9===b)return a.Ha?a.Ha(c,d,e,f,h,k,l,n,q):a.Ha?a.Ha(c,d,e,f,h,k,l,n,q):a.call(null,c,d,e,f,h,k,l,n,q);var t=Ha(v),w=Ia(v);if(10===b)return a.va?a.va(c,d,e,
f,h,k,l,n,q,t):a.va?a.va(c,d,e,f,h,k,l,n,q,t):a.call(null,c,d,e,f,h,k,l,n,q,t);var v=Ha(w),y=Ia(w);if(11===b)return a.wa?a.wa(c,d,e,f,h,k,l,n,q,t,v):a.wa?a.wa(c,d,e,f,h,k,l,n,q,t,v):a.call(null,c,d,e,f,h,k,l,n,q,t,v);var w=Ha(y),B=Ia(y);if(12===b)return a.xa?a.xa(c,d,e,f,h,k,l,n,q,t,v,w):a.xa?a.xa(c,d,e,f,h,k,l,n,q,t,v,w):a.call(null,c,d,e,f,h,k,l,n,q,t,v,w);var y=Ha(B),L=Ia(B);if(13===b)return a.ya?a.ya(c,d,e,f,h,k,l,n,q,t,v,w,y):a.ya?a.ya(c,d,e,f,h,k,l,n,q,t,v,w,y):a.call(null,c,d,e,f,h,k,l,n,q,
t,v,w,y);var B=Ha(L),U=Ia(L);if(14===b)return a.za?a.za(c,d,e,f,h,k,l,n,q,t,v,w,y,B):a.za?a.za(c,d,e,f,h,k,l,n,q,t,v,w,y,B):a.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B);var L=Ha(U),Z=Ia(U);if(15===b)return a.Aa?a.Aa(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L):a.Aa?a.Aa(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L):a.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L);var U=Ha(Z),na=Ia(Z);if(16===b)return a.Ba?a.Ba(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U):a.Ba?a.Ba(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U):a.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U);var Z=
Ha(na),Ga=Ia(na);if(17===b)return a.Ca?a.Ca(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z):a.Ca?a.Ca(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z):a.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z);var na=Ha(Ga),Ra=Ia(Ga);if(18===b)return a.Da?a.Da(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na):a.Da?a.Da(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na):a.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na);Ga=Ha(Ra);Ra=Ia(Ra);if(19===b)return a.Ea?a.Ea(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga):a.Ea?a.Ea(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga):a.call(null,
c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga);var wc=Ha(Ra);Ia(Ra);if(20===b)return a.Fa?a.Fa(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga,wc):a.Fa?a.Fa(c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga,wc):a.call(null,c,d,e,f,h,k,l,n,q,t,v,w,y,B,L,U,Z,na,Ga,wc);throw Error("Only up to 20 arguments supported on functions");}
var S=function(){function a(a,b,c,d,e){b=ud.n(b,c,d,e);c=a.k;return a.f?(d=qd(b,c+1),d<=c?Ad(a,d,b):a.f(b)):a.apply(a,Rc(b))}function b(a,b,c,d){b=ud.c(b,c,d);c=a.k;return a.f?(d=qd(b,c+1),d<=c?Ad(a,d,b):a.f(b)):a.apply(a,Rc(b))}function c(a,b,c){b=ud.a(b,c);c=a.k;if(a.f){var d=qd(b,c+1);return d<=c?Ad(a,d,b):a.f(b)}return a.apply(a,Rc(b))}function d(a,b){var c=a.k;if(a.f){var d=qd(b,c+1);return d<=c?Ad(a,d,b):a.f(b)}return a.apply(a,Rc(b))}var e=null,f=function(){function a(c,d,e,f,h,w){var y=null;
5<arguments.length&&(y=J(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,f,h,y)}function b(a,c,d,e,f,h){c=M(c,M(d,M(e,M(f,sd(h)))));d=a.k;return a.f?(e=qd(c,d+1),e<=d?Ad(a,e,c):a.f(c)):a.apply(a,Rc(c))}a.k=5;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=I(a);var e=F(a);a=I(a);var f=F(a);a=I(a);var h=F(a);a=G(a);return b(c,d,e,f,h,a)};a.d=b;return a}(),e=function(e,k,l,n,q,t){switch(arguments.length){case 2:return d.call(this,e,k);case 3:return c.call(this,e,k,l);case 4:return b.call(this,
e,k,l,n);case 5:return a.call(this,e,k,l,n,q);default:return f.d(e,k,l,n,q,J(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.k=5;e.f=f.f;e.a=d;e.c=c;e.n=b;e.s=a;e.d=f.d;return e}(),Bd=function(){function a(a,b){return!Wb.a(a,b)}var b=null,c=function(){function a(c,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,l)}function b(a,c,d){return sa(S.n(Wb,a,c,d))}a.k=2;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=G(a);return b(c,
d,a)};a.d=b;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return!1;case 2:return a.call(this,b,e);default:return c.d(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.k=2;b.f=c.f;b.b=function(){return!1};b.a=a;b.d=c.d;return b}();function Cd(a){return E(a)?a:null}function Dd(a,b){for(;;){if(null==E(b))return!0;if(r(a.b?a.b(F(b)):a.call(null,F(b)))){var c=a,d=I(b);a=c;b=d}else return u?!1:null}}
function Ed(a,b){for(;;)if(E(b)){var c=a.b?a.b(F(b)):a.call(null,F(b));if(r(c))return c;var c=a,d=I(b);a=c;b=d}else return null}function Fd(a){return a}
function Gd(a){return function(){var b=null,c=function(){function b(a,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,a,d,l)}function c(b,d,e){return sa(S.n(a,b,d,e))}b.k=2;b.f=function(a){var b=F(a);a=I(a);var d=F(a);a=G(a);return c(b,d,a)};b.d=c;return b}(),b=function(b,e,f){switch(arguments.length){case 0:return sa(a.o?a.o():a.call(null));case 1:var h=b;return sa(a.b?a.b(h):a.call(null,h));case 2:var h=b,k=e;return sa(a.a?a.a(h,k):a.call(null,
h,k));default:return c.d(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.k=2;b.f=c.f;return b}()}
var Hd=function(){function a(a,b,c){return function(){var d=null,l=function(){function d(a,b,c,e){var f=null;3<arguments.length&&(f=J(Array.prototype.slice.call(arguments,3),0));return k.call(this,a,b,c,f)}function k(d,l,n,q){return a.b?a.b(b.b?b.b(S.s(c,d,l,n,q)):b.call(null,S.s(c,d,l,n,q))):a.call(null,b.b?b.b(S.s(c,d,l,n,q)):b.call(null,S.s(c,d,l,n,q)))}d.k=3;d.f=function(a){var b=F(a);a=I(a);var c=F(a);a=I(a);var d=F(a);a=G(a);return k(b,c,d,a)};d.d=k;return d}(),d=function(d,k,t,v){switch(arguments.length){case 0:return a.b?
a.b(b.b?b.b(c.o?c.o():c.call(null)):b.call(null,c.o?c.o():c.call(null))):a.call(null,b.b?b.b(c.o?c.o():c.call(null)):b.call(null,c.o?c.o():c.call(null)));case 1:var w=d;return a.b?a.b(b.b?b.b(c.b?c.b(w):c.call(null,w)):b.call(null,c.b?c.b(w):c.call(null,w))):a.call(null,b.b?b.b(c.b?c.b(w):c.call(null,w)):b.call(null,c.b?c.b(w):c.call(null,w)));case 2:var w=d,y=k;return a.b?a.b(b.b?b.b(c.a?c.a(w,y):c.call(null,w,y)):b.call(null,c.a?c.a(w,y):c.call(null,w,y))):a.call(null,b.b?b.b(c.a?c.a(w,y):c.call(null,
w,y)):b.call(null,c.a?c.a(w,y):c.call(null,w,y)));case 3:var w=d,y=k,B=t;return a.b?a.b(b.b?b.b(c.c?c.c(w,y,B):c.call(null,w,y,B)):b.call(null,c.c?c.c(w,y,B):c.call(null,w,y,B))):a.call(null,b.b?b.b(c.c?c.c(w,y,B):c.call(null,w,y,B)):b.call(null,c.c?c.c(w,y,B):c.call(null,w,y,B)));default:return l.d(d,k,t,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.k=3;d.f=l.f;return d}()}function b(a,b){return function(){var c=null,d=function(){function c(a,b,e,f){var h=null;3<arguments.length&&
(h=J(Array.prototype.slice.call(arguments,3),0));return d.call(this,a,b,e,h)}function d(c,h,k,l){return a.b?a.b(S.s(b,c,h,k,l)):a.call(null,S.s(b,c,h,k,l))}c.k=3;c.f=function(a){var b=F(a);a=I(a);var c=F(a);a=I(a);var e=F(a);a=G(a);return d(b,c,e,a)};c.d=d;return c}(),c=function(c,h,q,t){switch(arguments.length){case 0:return a.b?a.b(b.o?b.o():b.call(null)):a.call(null,b.o?b.o():b.call(null));case 1:var v=c;return a.b?a.b(b.b?b.b(v):b.call(null,v)):a.call(null,b.b?b.b(v):b.call(null,v));case 2:var v=
c,w=h;return a.b?a.b(b.a?b.a(v,w):b.call(null,v,w)):a.call(null,b.a?b.a(v,w):b.call(null,v,w));case 3:var v=c,w=h,y=q;return a.b?a.b(b.c?b.c(v,w,y):b.call(null,v,w,y)):a.call(null,b.c?b.c(v,w,y):b.call(null,v,w,y));default:return d.d(c,h,q,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.k=3;c.f=d.f;return c}()}var c=null,d=function(){function a(c,d,e,n){var q=null;3<arguments.length&&(q=J(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,d,e,q)}function b(a,c,d,
e){return function(a){return function(){function b(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return c.call(this,d)}function c(b){b=S.a(F(a),b);for(var d=I(a);;)if(d)b=F(d).call(null,b),d=I(d);else return b}b.k=0;b.f=function(a){a=E(a);return c(a)};b.d=c;return b}()}(ed(ud.n(a,c,d,e)))}a.k=3;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=I(a);var e=F(a);a=G(a);return b(c,d,e,a)};a.d=b;return a}(),c=function(c,f,h,k){switch(arguments.length){case 0:return Fd;
case 1:return c;case 2:return b.call(this,c,f);case 3:return a.call(this,c,f,h);default:return d.d(c,f,h,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.k=3;c.f=d.f;c.o=function(){return Fd};c.b=function(a){return a};c.a=b;c.c=a;c.d=d.d;return c}(),Id=function(){function a(a,b,c,d){return function(){function e(a){var b=null;0<arguments.length&&(b=J(Array.prototype.slice.call(arguments,0),0));return q.call(this,b)}function q(e){return S.s(a,b,c,d,e)}e.k=0;e.f=function(a){a=E(a);
return q(a)};e.d=q;return e}()}function b(a,b,c){return function(){function d(a){var b=null;0<arguments.length&&(b=J(Array.prototype.slice.call(arguments,0),0));return e.call(this,b)}function e(d){return S.n(a,b,c,d)}d.k=0;d.f=function(a){a=E(a);return e(a)};d.d=e;return d}()}function c(a,b){return function(){function c(a){var b=null;0<arguments.length&&(b=J(Array.prototype.slice.call(arguments,0),0));return d.call(this,b)}function d(c){return S.c(a,b,c)}c.k=0;c.f=function(a){a=E(a);return d(a)};
c.d=d;return c}()}var d=null,e=function(){function a(c,d,e,f,t){var v=null;4<arguments.length&&(v=J(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,f,v)}function b(a,c,d,e,f){return function(){function b(a){var c=null;0<arguments.length&&(c=J(Array.prototype.slice.call(arguments,0),0));return h.call(this,c)}function h(b){return S.s(a,c,d,e,td.a(f,b))}b.k=0;b.f=function(a){a=E(a);return h(a)};b.d=h;return b}()}a.k=4;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=I(a);var e=F(a);
a=I(a);var f=F(a);a=G(a);return b(c,d,e,f,a)};a.d=b;return a}(),d=function(d,h,k,l,n){switch(arguments.length){case 1:return d;case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,k);case 4:return a.call(this,d,h,k,l);default:return e.d(d,h,k,l,J(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.k=4;d.f=e.f;d.b=function(a){return a};d.a=c;d.c=b;d.n=a;d.d=e.d;return d}(),Jd=function(){function a(a,b,c,d){return function(){var l=null,n=function(){function l(a,b,c,d){var e=null;
3<arguments.length&&(e=J(Array.prototype.slice.call(arguments,3),0));return n.call(this,a,b,c,e)}function n(l,q,t,B){return S.s(a,null==l?b:l,null==q?c:q,null==t?d:t,B)}l.k=3;l.f=function(a){var b=F(a);a=I(a);var c=F(a);a=I(a);var d=F(a);a=G(a);return n(b,c,d,a)};l.d=n;return l}(),l=function(l,t,v,w){switch(arguments.length){case 2:var y=l,B=t;return a.a?a.a(null==y?b:y,null==B?c:B):a.call(null,null==y?b:y,null==B?c:B);case 3:var y=l,B=t,L=v;return a.c?a.c(null==y?b:y,null==B?c:B,null==L?d:L):a.call(null,
null==y?b:y,null==B?c:B,null==L?d:L);default:return n.d(l,t,v,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};l.k=3;l.f=n.f;return l}()}function b(a,b,c){return function(){var d=null,l=function(){function d(a,b,c,e){var f=null;3<arguments.length&&(f=J(Array.prototype.slice.call(arguments,3),0));return k.call(this,a,b,c,f)}function k(d,l,n,q){return S.s(a,null==d?b:d,null==l?c:l,n,q)}d.k=3;d.f=function(a){var b=F(a);a=I(a);var c=F(a);a=I(a);var d=F(a);a=G(a);return k(b,c,d,a)};d.d=
k;return d}(),d=function(d,k,t,v){switch(arguments.length){case 2:var w=d,y=k;return a.a?a.a(null==w?b:w,null==y?c:y):a.call(null,null==w?b:w,null==y?c:y);case 3:var w=d,y=k,B=t;return a.c?a.c(null==w?b:w,null==y?c:y,B):a.call(null,null==w?b:w,null==y?c:y,B);default:return l.d(d,k,t,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.k=3;d.f=l.f;return d}()}function c(a,b){return function(){var c=null,d=function(){function c(a,b,e,f){var h=null;3<arguments.length&&(h=J(Array.prototype.slice.call(arguments,
3),0));return d.call(this,a,b,e,h)}function d(c,h,k,l){return S.s(a,null==c?b:c,h,k,l)}c.k=3;c.f=function(a){var b=F(a);a=I(a);var c=F(a);a=I(a);var e=F(a);a=G(a);return d(b,c,e,a)};c.d=d;return c}(),c=function(c,h,q,t){switch(arguments.length){case 1:var v=c;return a.b?a.b(null==v?b:v):a.call(null,null==v?b:v);case 2:var v=c,w=h;return a.a?a.a(null==v?b:v,w):a.call(null,null==v?b:v,w);case 3:var v=c,w=h,y=q;return a.c?a.c(null==v?b:v,w,y):a.call(null,null==v?b:v,w,y);default:return d.d(c,h,q,J(arguments,
3))}throw Error("Invalid arity: "+arguments.length);};c.k=3;c.f=d.f;return c}()}var d=null,d=function(d,f,h,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,h);case 4:return a.call(this,d,f,h,k)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.n=a;return d}(),Kd=function(){function a(a,b,c,e){return new V(null,function(){var n=E(b),q=E(c),t=E(e);return n&&q&&t?M(a.c?a.c(F(n),F(q),F(t)):a.call(null,F(n),F(q),F(t)),d.n(a,G(n),G(q),G(t))):null},
null,null)}function b(a,b,c){return new V(null,function(){var e=E(b),n=E(c);return e&&n?M(a.a?a.a(F(e),F(n)):a.call(null,F(e),F(n)),d.c(a,G(e),G(n))):null},null,null)}function c(a,b){return new V(null,function(){var c=E(b);if(c){if(Ic(c)){for(var e=Hb(c),n=O(e),q=new ld(Array(n),0),t=0;;)if(t<n){var v=a.b?a.b(D.a(e,t)):a.call(null,D.a(e,t));q.add(v);t+=1}else break;return pd(q.da(),d.a(a,Ib(c)))}return M(a.b?a.b(F(c)):a.call(null,F(c)),d.a(a,G(c)))}return null},null,null)}var d=null,e=function(){function a(c,
d,e,f,t){var v=null;4<arguments.length&&(v=J(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,f,v)}function b(a,c,e,f,h){var v=function y(a){return new V(null,function(){var b=d.a(E,a);return Dd(Fd,b)?M(d.a(F,b),y(d.a(G,b))):null},null,null)};return d.a(function(){return function(b){return S.a(a,b)}}(v),v(pc.d(h,f,J([e,c],0))))}a.k=4;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=I(a);var e=F(a);a=I(a);var f=F(a);a=G(a);return b(c,d,e,f,a)};a.d=b;return a}(),d=function(d,h,k,l,
n){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,k);case 4:return a.call(this,d,h,k,l);default:return e.d(d,h,k,l,J(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.k=4;d.f=e.f;d.a=c;d.c=b;d.n=a;d.d=e.d;return d}(),Md=function Ld(b,c){return new V(null,function(){if(0<b){var d=E(c);return d?M(F(d),Ld(b-1,G(d))):null}return null},null,null)};
function Nd(a,b){return new V(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=E(b);if(0<a&&e){var f=a-1,e=G(e);a=f;b=e}else return e}}),null,null)}
var Od=function(){function a(a,b){return Md(a,c.b(b))}function b(a){return new V(null,function(){return M(a,c.b(a))},null,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Pd=function(){function a(a,b){return Md(a,c.b(b))}function b(a){return new V(null,function(){return M(a.o?a.o():a.call(null),c.b(a))},null,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,
c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Qd=function(){function a(a,c){return new V(null,function(){var f=E(a),h=E(c);return f&&h?M(F(f),M(F(h),b.a(G(f),G(h)))):null},null,null)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){return new V(null,function(){var c=Kd.a(E,pc.d(e,d,J([a],0)));return Dd(Fd,c)?td.a(Kd.a(F,
c),S.a(b,Kd.a(G,c))):null},null,null)}a.k=2;a.f=function(a){var b=F(a);a=I(a);var d=F(a);a=G(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.d(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.k=2;b.f=c.f;b.a=a;b.d=c.d;return b}();function Rd(a){return function c(a,e){return new V(null,function(){var f=E(a);return f?M(F(f),c(G(f),e)):E(e)?c(F(e),G(e)):null},null,null)}(null,a)}
var Sd=function(){function a(a,b){return Rd(Kd.a(a,b))}var b=null,c=function(){function a(c,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,l)}function b(a,c,d){return Rd(S.n(Kd,a,c,d))}a.k=2;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=G(a);return b(c,d,a)};a.d=b;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.d(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};
b.k=2;b.f=c.f;b.a=a;b.d=c.d;return b}(),Ud=function Td(b,c){return new V(null,function(){var d=E(c);if(d){if(Ic(d)){for(var e=Hb(d),f=O(e),h=new ld(Array(f),0),k=0;;)if(k<f){if(r(b.b?b.b(D.a(e,k)):b.call(null,D.a(e,k)))){var l=D.a(e,k);h.add(l)}k+=1}else break;return pd(h.da(),Td(b,Ib(d)))}e=F(d);d=G(d);return r(b.b?b.b(e):b.call(null,e))?M(e,Td(b,d)):Td(b,d)}return null},null,null)};function Vd(a,b){return Ud(Gd(a),b)}
function Wd(a){var b=Xd;return function d(a){return new V(null,function(){return M(a,r(b.b?b.b(a):b.call(null,a))?Sd.a(d,E.b?E.b(a):E.call(null,a)):null)},null,null)}(a)}function Yd(a,b){return null!=a?a&&(a.q&4||a.Bc)?vd(C.c(zb,yb(a),b)):C.c(Da,a,b):C.c(pc,H,b)}
var Zd=function(){function a(a,b,c,k){return new V(null,function(){var l=E(k);if(l){var n=Md(a,l);return a===O(n)?M(n,d.n(a,b,c,Nd(b,l))):Da(H,Md(a,td.a(n,c)))}return null},null,null)}function b(a,b,c){return new V(null,function(){var k=E(c);if(k){var l=Md(a,k);return a===O(l)?M(l,d.c(a,b,Nd(b,k))):null}return null},null,null)}function c(a,b){return d.c(a,a,b)}var d=null,d=function(d,f,h,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,h);case 4:return a.call(this,
d,f,h,k)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.n=a;return d}(),$d=function(){function a(a,b,c){var h=Lc;for(b=E(b);;)if(b){var k=a;if(k?k.i&256||k.Mb||(k.i?0:s(Ka,k)):s(Ka,k)){a=Q.c(a,F(b),h);if(h===a)return c;b=I(b)}else return c}else return a}function b(a,b){return c.c(a,b,null)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),ae=
function(){function a(a,b,c,d,f,t){var v=P.c(b,0,null);return(b=$c(b))?R.c(a,v,e.X(Q.a(a,v),b,c,d,f,t)):R.c(a,v,c.n?c.n(Q.a(a,v),d,f,t):c.call(null,Q.a(a,v),d,f,t))}function b(a,b,c,d,f){var t=P.c(b,0,null);return(b=$c(b))?R.c(a,t,e.s(Q.a(a,t),b,c,d,f)):R.c(a,t,c.c?c.c(Q.a(a,t),d,f):c.call(null,Q.a(a,t),d,f))}function c(a,b,c,d){var f=P.c(b,0,null);return(b=$c(b))?R.c(a,f,e.n(Q.a(a,f),b,c,d)):R.c(a,f,c.a?c.a(Q.a(a,f),d):c.call(null,Q.a(a,f),d))}function d(a,b,c){var d=P.c(b,0,null);return(b=$c(b))?
R.c(a,d,e.c(Q.a(a,d),b,c)):R.c(a,d,c.b?c.b(Q.a(a,d)):c.call(null,Q.a(a,d)))}var e=null,f=function(){function a(c,d,e,f,h,w,y){var B=null;6<arguments.length&&(B=J(Array.prototype.slice.call(arguments,6),0));return b.call(this,c,d,e,f,h,w,B)}function b(a,c,d,f,h,k,y){var B=P.c(c,0,null);return(c=$c(c))?R.c(a,B,S.d(e,Q.a(a,B),c,d,f,J([h,k,y],0))):R.c(a,B,S.d(d,Q.a(a,B),f,h,k,J([y],0)))}a.k=6;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=I(a);var e=F(a);a=I(a);var f=F(a);a=I(a);var h=F(a);a=I(a);var y=
F(a);a=G(a);return b(c,d,e,f,h,y,a)};a.d=b;return a}(),e=function(e,k,l,n,q,t,v){switch(arguments.length){case 3:return d.call(this,e,k,l);case 4:return c.call(this,e,k,l,n);case 5:return b.call(this,e,k,l,n,q);case 6:return a.call(this,e,k,l,n,q,t);default:return f.d(e,k,l,n,q,t,J(arguments,6))}throw Error("Invalid arity: "+arguments.length);};e.k=6;e.f=f.f;e.c=d;e.n=c;e.s=b;e.X=a;e.d=f.d;return e}();function be(a,b){this.t=a;this.e=b}
function ce(a){return new be(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function de(a){return new be(a.t,va(a.e))}function ee(a){a=a.g;return 32>a?0:a-1>>>5<<5}function fe(a,b,c){for(;;){if(0===b)return c;var d=ce(a);d.e[0]=c;c=d;b-=5}}var he=function ge(b,c,d,e){var f=de(d),h=b.g-1>>>c&31;5===c?f.e[h]=e:(d=d.e[h],b=null!=d?ge(b,c-5,d,e):fe(null,c-5,e),f.e[h]=b);return f};
function ie(a,b){throw Error("No item "+A.b(a)+" in vector of length "+A.b(b));}function je(a){var b=a.root;for(a=a.shift;;)if(0<a)a-=5,b=b.e[0];else return b.e}function ke(a,b){if(b>=ee(a))return a.R;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.e[b>>>d&31],d=e;else return c.e}function le(a,b){return 0<=b&&b<a.g?ke(a,b):ie(b,a.g)}
var ne=function me(b,c,d,e,f){var h=de(d);if(0===c)h.e[e&31]=f;else{var k=e>>>c&31;b=me(b,c-5,d.e[k],e,f);h.e[k]=b}return h},pe=function oe(b,c,d){var e=b.g-2>>>c&31;if(5<c){b=oe(b,c-5,d.e[e]);if(null==b&&0===e)return null;d=de(d);d.e[e]=b;return d}return 0===e?null:u?(d=de(d),d.e[e]=null,d):null};function W(a,b,c,d,e,f){this.j=a;this.g=b;this.shift=c;this.root=d;this.R=e;this.m=f;this.i=167668511;this.q=8196}g=W.prototype;g.toString=function(){return Lb(this)};
g.u=function(a,b){return La.c(this,b,null)};g.C=function(a,b,c){return"number"===typeof b?D.c(this,b,c):c};g.Za=function(a,b,c){a=[0,c];for(c=0;;)if(c<this.g){var d=ke(this,c),e=d.length;a:{for(var f=0,h=a[1];;)if(f<e){h=b.c?b.c(h,f+c,d[f]):b.call(null,h,f+c,d[f]);if(fc(h)){d=h;break a}f+=1}else{a[0]=e;d=a[1]=h;break a}d=void 0}if(fc(d))return K.b?K.b(d):K.call(null,d);c+=a[0]}else return a[1]};g.J=function(a,b){return le(this,b)[b&31]};
g.aa=function(a,b,c){return 0<=b&&b<this.g?ke(this,b)[b&31]:c};g.Pa=function(a,b,c){if(0<=b&&b<this.g)return ee(this)<=b?(a=va(this.R),a[b&31]=c,new W(this.j,this.g,this.shift,this.root,a,null)):new W(this.j,this.g,this.shift,ne(this,this.shift,this.root,b,c),this.R,null);if(b===this.g)return Da(this,c);if(u)throw Error("Index "+A.b(b)+" out of bounds  [0,"+A.b(this.g)+"]");return null};g.D=function(){return this.j};g.L=function(){return this.g};g.$a=function(){return D.a(this,0)};
g.ab=function(){return D.a(this,1)};g.Ia=function(){return 0<this.g?D.a(this,this.g-1):null};g.Ja=function(){if(0===this.g)throw Error("Can't pop empty vector");if(1===this.g)return eb(qe,this.j);if(1<this.g-ee(this))return new W(this.j,this.g-1,this.shift,this.root,this.R.slice(0,-1),null);if(u){var a=ke(this,this.g-2),b=pe(this,this.shift,this.root),b=null==b?X:b,c=this.g-1;return 5<this.shift&&null==b.e[1]?new W(this.j,c,this.shift-5,b.e[0],a,null):new W(this.j,c,this.shift,b,a,null)}return null};
g.Xa=function(){return 0<this.g?new kc(this,this.g-1,null):null};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.Wa=function(){return new re(this.g,this.shift,se.b?se.b(this.root):se.call(null,this.root),te.b?te.b(this.R):te.call(null,this.R))};g.I=function(){return N(qe,this.j)};g.N=function(a,b){return gc.a(this,b)};g.M=function(a,b,c){return gc.c(this,b,c)};
g.ua=function(a,b,c){if("number"===typeof b)return $a(this,b,c);throw Error("Vector's key for assoc must be a number.");};g.H=function(){return 0===this.g?null:32>=this.g?new ac(this.R,0):u?ue.n?ue.n(this,je(this),0,0):ue.call(null,this,je(this),0,0):null};g.F=function(a,b){return new W(b,this.g,this.shift,this.root,this.R,this.m)};
g.G=function(a,b){if(32>this.g-ee(this)){for(var c=this.R.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.R[e],e+=1;else break;d[c]=b;return new W(this.j,this.g+1,this.shift,this.root,d,null)}c=(d=this.g>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=ce(null),d.e[0]=this.root,e=fe(null,this.shift,new be(null,this.R)),d.e[1]=e):d=he(this,this.shift,this.root,new be(null,this.R));return new W(this.j,this.g+1,c,d,[b],null)};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.aa(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return this.J(null,a)};g.a=function(a,b){return this.aa(null,a,b)};
var X=new be(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),qe=new W(null,0,5,X,[],0);function ve(a,b){var c=a.length,d=b?a:va(a);if(32>c)return new W(null,c,5,X,d,null);for(var e=32,f=(new W(null,32,5,X,d.slice(0,32),null)).Wa(null);;)if(e<c)var h=e+1,f=wd.a(f,d[e]),e=h;else return Ab(f)}function we(a){return Ab(C.c(zb,yb(qe),a))}
var xe=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return a instanceof ac&&0===a.p?ve.a?ve.a(a.e,!0):ve.call(null,a.e,!0):we(a)}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}();function ye(a,b,c,d,e,f){this.P=a;this.ea=b;this.p=c;this.O=d;this.j=e;this.m=f;this.i=32243948;this.q=1536}g=ye.prototype;g.toString=function(){return Lb(this)};
g.U=function(){if(this.O+1<this.ea.length){var a=ue.n?ue.n(this.P,this.ea,this.p,this.O+1):ue.call(null,this.P,this.ea,this.p,this.O+1);return null==a?null:a}return Jb(this)};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(qe,this.j)};g.N=function(a,b){return gc.a(ze.c?ze.c(this.P,this.p+this.O,O(this.P)):ze.call(null,this.P,this.p+this.O,O(this.P)),b)};
g.M=function(a,b,c){return gc.c(ze.c?ze.c(this.P,this.p+this.O,O(this.P)):ze.call(null,this.P,this.p+this.O,O(this.P)),b,c)};g.Q=function(){return this.ea[this.O]};g.S=function(){if(this.O+1<this.ea.length){var a=ue.n?ue.n(this.P,this.ea,this.p,this.O+1):ue.call(null,this.P,this.ea,this.p,this.O+1);return null==a?H:a}return Ib(this)};g.H=function(){return this};g.sb=function(){return nd.a(this.ea,this.O)};
g.tb=function(){var a=this.p+this.ea.length;return a<Aa(this.P)?ue.n?ue.n(this.P,ke(this.P,a),a,0):ue.call(null,this.P,ke(this.P,a),a,0):H};g.F=function(a,b){return ue.s?ue.s(this.P,this.ea,this.p,this.O,b):ue.call(null,this.P,this.ea,this.p,this.O,b)};g.G=function(a,b){return M(b,this)};g.rb=function(){var a=this.p+this.ea.length;return a<Aa(this.P)?ue.n?ue.n(this.P,ke(this.P,a),a,0):ue.call(null,this.P,ke(this.P,a),a,0):null};
var ue=function(){function a(a,b,c,d,l){return new ye(a,b,c,d,l,null)}function b(a,b,c,d){return new ye(a,b,c,d,null,null)}function c(a,b,c){return new ye(a,le(a,b),b,c,null,null)}var d=null,d=function(d,f,h,k,l){switch(arguments.length){case 3:return c.call(this,d,f,h);case 4:return b.call(this,d,f,h,k);case 5:return a.call(this,d,f,h,k,l)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.n=b;d.s=a;return d}();
function Ae(a,b,c,d,e){this.j=a;this.ca=b;this.start=c;this.end=d;this.m=e;this.i=166617887;this.q=8192}g=Ae.prototype;g.toString=function(){return Lb(this)};g.u=function(a,b){return La.c(this,b,null)};g.C=function(a,b,c){return"number"===typeof b?D.c(this,b,c):c};g.J=function(a,b){return 0>b||this.end<=this.start+b?ie(b,this.end-this.start):D.a(this.ca,this.start+b)};g.aa=function(a,b,c){return 0>b||this.end<=this.start+b?c:D.c(this.ca,this.start+b,c)};
g.Pa=function(a,b,c){var d=this,e=d.start+b;return Be.s?Be.s(d.j,R.c(d.ca,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null):Be.call(null,d.j,R.c(d.ca,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null)};g.D=function(){return this.j};g.L=function(){return this.end-this.start};g.Ia=function(){return D.a(this.ca,this.end-1)};
g.Ja=function(){if(this.start===this.end)throw Error("Can't pop empty vector");return Be.s?Be.s(this.j,this.ca,this.start,this.end-1,null):Be.call(null,this.j,this.ca,this.start,this.end-1,null)};g.Xa=function(){return this.start!==this.end?new kc(this,this.end-this.start-1,null):null};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(qe,this.j)};g.N=function(a,b){return gc.a(this,b)};
g.M=function(a,b,c){return gc.c(this,b,c)};g.ua=function(a,b,c){if("number"===typeof b)return $a(this,b,c);throw Error("Subvec's key for assoc must be a number.");};g.H=function(){var a=this;return function(b){return function d(e){return e===a.end?null:M(D.a(a.ca,e),new V(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};g.F=function(a,b){return Be.s?Be.s(b,this.ca,this.start,this.end,this.m):Be.call(null,b,this.ca,this.start,this.end,this.m)};
g.G=function(a,b){return Be.s?Be.s(this.j,$a(this.ca,this.end,b),this.start,this.end+1,null):Be.call(null,this.j,$a(this.ca,this.end,b),this.start,this.end+1,null)};g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.aa(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return this.J(null,a)};
g.a=function(a,b){return this.aa(null,a,b)};function Be(a,b,c,d,e){for(;;)if(b instanceof Ae)c=b.start+c,d=b.start+d,b=b.ca;else{var f=O(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new Ae(a,b,c,d,e)}}
var ze=function(){function a(a,b,c){return Be(null,a,b,c,null)}function b(a,b){return c.c(a,b,O(a))}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();function Ce(a,b){return a===b.t?b:new be(a,va(b.e))}function se(a){return new be({},va(a.e))}
function te(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];Kc(a,0,b,0,a.length);return b}
var Ee=function De(b,c,d,e){d=Ce(b.root.t,d);var f=b.g-1>>>c&31;if(5===c)b=e;else{var h=d.e[f];b=null!=h?De(b,c-5,h,e):fe(b.root.t,c-5,e)}d.e[f]=b;return d},Ge=function Fe(b,c,d){d=Ce(b.root.t,d);var e=b.g-2>>>c&31;if(5<c){b=Fe(b,c-5,d.e[e]);if(null==b&&0===e)return null;d.e[e]=b;return d}return 0===e?null:u?(d.e[e]=null,d):null};function re(a,b,c,d){this.g=a;this.shift=b;this.root=c;this.R=d;this.i=275;this.q=88}g=re.prototype;
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.u(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return this.u(null,a)};g.a=function(a,b){return this.C(null,a,b)};g.u=function(a,b){return La.c(this,b,null)};g.C=function(a,b,c){return"number"===typeof b?D.c(this,b,c):c};
g.J=function(a,b){if(this.root.t)return le(this,b)[b&31];throw Error("nth after persistent!");};g.aa=function(a,b,c){return 0<=b&&b<this.g?D.a(this,b):c};g.L=function(){if(this.root.t)return this.g;throw Error("count after persistent!");};
g.Pb=function(a,b,c){var d=this;if(d.root.t){if(0<=b&&b<d.g)return ee(this)<=b?d.R[b&31]=c:(a=function(){return function f(a,k){var l=Ce(d.root.t,k);if(0===a)l.e[b&31]=c;else{var n=b>>>a&31,q=f(a-5,l.e[n]);l.e[n]=q}return l}}(this).call(null,d.shift,d.root),d.root=a),this;if(b===d.g)return zb(this,c);if(u)throw Error("Index "+A.b(b)+" out of bounds for TransientVector of length"+A.b(d.g));return null}throw Error("assoc! after persistent!");};
g.Qb=function(){if(this.root.t){if(0===this.g)throw Error("Can't pop empty vector");if(1===this.g)return this.g=0,this;if(0<(this.g-1&31))return this.g-=1,this;if(u){var a;a:if(a=this.g-2,a>=ee(this))a=this.R;else{for(var b=this.root,c=b,d=this.shift;;)if(0<d)c=Ce(b.t,c.e[a>>>d&31]),d-=5;else{a=c.e;break a}a=void 0}b=Ge(this,this.shift,this.root);b=null!=b?b:new be(this.root.t,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
null,null,null,null,null,null,null,null]);5<this.shift&&null==b.e[1]?(this.root=Ce(this.root.t,b.e[0]),this.shift-=5):this.root=b;this.g-=1;this.R=a;return this}return null}throw Error("pop! after persistent!");};g.cb=function(a,b,c){if("number"===typeof b)return Db(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
g.Ka=function(a,b){if(this.root.t){if(32>this.g-ee(this))this.R[this.g&31]=b;else{var c=new be(this.root.t,this.R),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.R=d;if(this.g>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=fe(this.root.t,this.shift,c);this.root=new be(this.root.t,d);this.shift=e}else this.root=Ee(this,this.shift,this.root,c)}this.g+=1;return this}throw Error("conj! after persistent!");};g.Oa=function(){if(this.root.t){this.root.t=null;var a=this.g-ee(this),b=Array(a);Kc(this.R,0,b,0,a);return new W(null,this.g,this.shift,this.root,b,null)}throw Error("persistent! called twice");};function He(a,b,c,d){this.j=a;this.ba=b;this.pa=c;this.m=d;this.q=0;this.i=31850572}g=He.prototype;
g.toString=function(){return Lb(this)};g.D=function(){return this.j};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(H,this.j)};g.Q=function(){return F(this.ba)};g.S=function(){var a=I(this.ba);return a?new He(this.j,a,this.pa,null):null==this.pa?Ba(this):new He(this.j,this.pa,null,null)};g.H=function(){return this};g.F=function(a,b){return new He(b,this.ba,this.pa,this.m)};g.G=function(a,b){return M(b,this)};
function Ie(a,b,c,d,e){this.j=a;this.count=b;this.ba=c;this.pa=d;this.m=e;this.i=31858766;this.q=8192}g=Ie.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.j};g.L=function(){return this.count};g.Ia=function(){return F(this.ba)};g.Ja=function(){if(r(this.ba)){var a=I(this.ba);return a?new Ie(this.j,this.count-1,a,this.pa,null):new Ie(this.j,this.count-1,E(this.pa),qe,null)}return this};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};
g.v=function(a,b){return lc(this,b)};g.I=function(){return Je};g.Q=function(){return F(this.ba)};g.S=function(){return G(E(this))};g.H=function(){var a=E(this.pa),b=this.ba;return r(r(b)?b:a)?new He(null,this.ba,E(a),null):null};g.F=function(a,b){return new Ie(b,this.count,this.ba,this.pa,this.m)};g.G=function(a,b){var c;r(this.ba)?(c=this.pa,c=new Ie(this.j,this.count+1,this.ba,pc.a(r(c)?c:qe,b),null)):c=new Ie(this.j,this.count+1,pc.a(this.ba,b),qe,null);return c};var Je=new Ie(null,0,null,qe,0);
function Ke(){this.q=0;this.i=2097152}Ke.prototype.v=function(){return!1};var Le=new Ke;function Me(a,b){return Nc(Gc(b)?O(a)===O(b)?Dd(Fd,Kd.a(function(a){return Wb.a(Q.c(b,F(a),Le),F(I(a)))},a)):null:null)}function Ne(a){this.r=a}Ne.prototype.next=function(){if(null!=this.r){var a=F(this.r);this.r=I(this.r);return{done:!1,value:a}}return{done:!0,value:null}};function Oe(a){return new Ne(E(a))}function Pe(a){this.r=a}
Pe.prototype.next=function(){if(null!=this.r){var a=F(this.r),b=P.c(a,0,null),a=P.c(a,1,null);this.r=I(this.r);return{done:!1,value:[b,a]}}return{done:!0,value:null}};function Qe(a){return new Pe(E(a))}function Re(a){this.r=a}Re.prototype.next=function(){if(null!=this.r){var a=F(this.r);this.r=I(this.r);return{done:!1,value:[a,a]}}return{done:!0,value:null}};function Se(a){return new Re(E(a))}
function Te(a,b){var c=a.e;if(b instanceof T)a:{for(var d=c.length,e=b.sa,f=0;;){if(d<=f){c=-1;break a}var h=c[f];if(h instanceof T&&e===h.sa){c=f;break a}if(u)f+=2;else{c=null;break a}}c=void 0}else if("string"==typeof b||"number"===typeof b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(b===c[e]){c=e;break a}if(u)e+=2;else{c=null;break a}}c=void 0}else if(b instanceof Zb)a:{d=c.length;e=b.Na;for(f=0;;){if(d<=f){c=-1;break a}h=c[f];if(h instanceof Zb&&e===h.Na){c=f;break a}if(u)f+=2;else{c=null;
break a}}c=void 0}else if(null==b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(null==c[e]){c=e;break a}if(u)e+=2;else{c=null;break a}}c=void 0}else if(u)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(Wb.a(b,c[e])){c=e;break a}if(u)e+=2;else{c=null;break a}}c=void 0}else c=null;return c}function Ue(a,b,c){this.e=a;this.p=b;this.W=c;this.q=0;this.i=32374990}g=Ue.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.W};
g.U=function(){return this.p<this.e.length-2?new Ue(this.e,this.p+2,this.W):null};g.L=function(){return(this.e.length-this.p)/2};g.B=function(){return cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(H,this.W)};g.N=function(a,b){return nc.a(b,this)};g.M=function(a,b,c){return nc.c(b,c,this)};g.Q=function(){return new W(null,2,5,X,[this.e[this.p],this.e[this.p+1]],null)};g.S=function(){return this.p<this.e.length-2?new Ue(this.e,this.p+2,this.W):H};g.H=function(){return this};
g.F=function(a,b){return new Ue(this.e,this.p,b)};g.G=function(a,b){return M(b,this)};function la(a,b,c,d){this.j=a;this.g=b;this.e=c;this.m=d;this.i=16647951;this.q=8196}g=la.prototype;g.toString=function(){return Lb(this)};g.keys=function(){return Oe(Ve.b?Ve.b(this):Ve.call(null,this))};g.entries=function(){return Qe(E(this))};g.values=function(){return Oe(We.b?We.b(this):We.call(null,this))};g.has=function(a){return Oc(this,a)};g.get=function(a){return this.u(null,a)};
g.forEach=function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.J(null,e),h=P.c(f,0,null),f=P.c(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=E(b))Ic(b)?(c=Hb(b),b=Ib(b),h=c,d=O(c),c=h):(c=F(b),h=P.c(c,0,null),f=P.c(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null};g.u=function(a,b){return La.c(this,b,null)};g.C=function(a,b,c){a=Te(this,b);return-1===a?c:this.e[a+1]};
g.Za=function(a,b,c){a=this.e.length;for(var d=0;;)if(d<a){c=b.c?b.c(c,this.e[d],this.e[d+1]):b.call(null,c,this.e[d],this.e[d+1]);if(fc(c))return K.b?K.b(c):K.call(null,c);d+=2}else return c};g.D=function(){return this.j};g.L=function(){return this.g};g.B=function(){var a=this.m;return null!=a?a:this.m=a=dc(this)};g.v=function(a,b){return Me(this,b)};g.Wa=function(){return new Xe({},this.e.length,va(this.e))};g.I=function(){return eb(Ye,this.j)};g.N=function(a,b){return nc.a(b,this)};
g.M=function(a,b,c){return nc.c(b,c,this)};g.nb=function(a,b){if(0<=Te(this,b)){var c=this.e.length,d=c-2;if(0===d)return Ba(this);for(var d=Array(d),e=0,f=0;;){if(e>=c)return new la(this.j,this.g-1,d,null);if(Wb.a(b,this.e[e]))e+=2;else if(u)d[f]=this.e[e],d[f+1]=this.e[e+1],f+=2,e+=2;else return null}}else return this};
g.ua=function(a,b,c){a=Te(this,b);if(-1===a){if(this.g<Ze){a=this.e;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new la(this.j,this.g+1,e,null)}return eb(Oa(Yd($e,this),b,c),this.j)}return c===this.e[a+1]?this:u?(b=va(this.e),b[a+1]=c,new la(this.j,this.g,b,null)):null};g.kb=function(a,b){return-1!==Te(this,b)};g.H=function(){var a=this.e;return 0<=a.length-2?new Ue(a,0,null):null};g.F=function(a,b){return new la(b,this.g,this.e,this.m)};
g.G=function(a,b){if(Hc(b))return Oa(this,D.a(b,0),D.a(b,1));for(var c=this,d=E(b);;){if(null==d)return c;var e=F(d);if(Hc(e))c=Oa(c,D.a(e,0),D.a(e,1)),d=I(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.u(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};
g.b=function(a){return this.u(null,a)};g.a=function(a,b){return this.C(null,a,b)};var Ye=new la(null,0,[],null),Ze=8;function af(a){for(var b=a.length,c=0,d=yb(Ye);;)if(c<b)var e=c+2,d=Bb(d,a[c],a[c+1]),c=e;else return Ab(d)}function Xe(a,b,c){this.Ra=a;this.ja=b;this.e=c;this.q=56;this.i=258}g=Xe.prototype;
g.Ab=function(a,b){if(r(this.Ra)){var c=Te(this,b);0<=c&&(this.e[c]=this.e[this.ja-2],this.e[c+1]=this.e[this.ja-1],c=this.e,c.pop(),c.pop(),this.ja-=2);return this}throw Error("dissoc! after persistent!");};g.cb=function(a,b,c){if(r(this.Ra)){a=Te(this,b);if(-1===a)return this.ja+2<=2*Ze?(this.ja+=2,this.e.push(b),this.e.push(c),this):xd.c(bf.a?bf.a(this.ja,this.e):bf.call(null,this.ja,this.e),b,c);c!==this.e[a+1]&&(this.e[a+1]=c);return this}throw Error("assoc! after persistent!");};
g.Ka=function(a,b){if(r(this.Ra)){if(b?b.i&2048||b.dc||(b.i?0:s(Sa,b)):s(Sa,b))return Bb(this,cf.b?cf.b(b):cf.call(null,b),df.b?df.b(b):df.call(null,b));for(var c=E(b),d=this;;){var e=F(c);if(r(e))c=I(c),d=Bb(d,cf.b?cf.b(e):cf.call(null,e),df.b?df.b(e):df.call(null,e));else return d}}else throw Error("conj! after persistent!");};g.Oa=function(){if(r(this.Ra))return this.Ra=!1,new la(null,Yc(this.ja),this.e,null);throw Error("persistent! called twice");};g.u=function(a,b){return La.c(this,b,null)};
g.C=function(a,b,c){if(r(this.Ra))return a=Te(this,b),-1===a?c:this.e[a+1];throw Error("lookup after persistent!");};g.L=function(){if(r(this.Ra))return Yc(this.ja);throw Error("count after persistent!");};function bf(a,b){for(var c=yb($e),d=0;;)if(d<a)c=xd.c(c,b[d],b[d+1]),d+=2;else return c}function ef(){this.l=!1}function ff(a,b){return a===b?!0:hd(a,b)?!0:u?Wb.a(a,b):null}
var gf=function(){function a(a,b,c,h,k){a=va(a);a[b]=c;a[h]=k;return a}function b(a,b,c){a=va(a);a[b]=c;return a}var c=null,c=function(c,e,f,h,k){switch(arguments.length){case 3:return b.call(this,c,e,f);case 5:return a.call(this,c,e,f,h,k)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.s=a;return c}();function hf(a,b){var c=Array(a.length-2);Kc(a,0,c,0,2*b);Kc(a,2*(b+1),c,2*b,c.length-2*b);return c}
var jf=function(){function a(a,b,c,h,k,l){a=a.La(b);a.e[c]=h;a.e[k]=l;return a}function b(a,b,c,h){a=a.La(b);a.e[c]=h;return a}var c=null,c=function(c,e,f,h,k,l){switch(arguments.length){case 4:return b.call(this,c,e,f,h);case 6:return a.call(this,c,e,f,h,k,l)}throw Error("Invalid arity: "+arguments.length);};c.n=b;c.X=a;return c}();
function kf(a,b,c){for(var d=a.length,e=0;;)if(e<d){var f=a[e];null!=f?c=b.c?b.c(c,f,a[e+1]):b.call(null,c,f,a[e+1]):(f=a[e+1],c=null!=f?f.Ta(b,c):c);if(fc(c))return K.b?K.b(c):K.call(null,c);e+=2}else return c}function lf(a,b,c){this.t=a;this.A=b;this.e=c}g=lf.prototype;g.La=function(a){if(a===this.t)return this;var b=Zc(this.A),c=Array(0>b?4:2*(b+1));Kc(this.e,0,c,0,2*b);return new lf(a,this.A,c)};
g.gb=function(a,b,c,d,e){var f=1<<(c>>>b&31);if(0===(this.A&f))return this;var h=Zc(this.A&f-1),k=this.e[2*h],l=this.e[2*h+1];return null==k?(b=l.gb(a,b+5,c,d,e),b===l?this:null!=b?jf.n(this,a,2*h+1,b):this.A===f?null:u?mf(this,a,f,h):null):ff(d,k)?(e[0]=!0,mf(this,a,f,h)):u?this:null};function mf(a,b,c,d){if(a.A===c)return null;a=a.La(b);b=a.e;var e=b.length;a.A^=c;Kc(b,2*(d+1),b,2*d,e-2*(d+1));b[e-2]=null;b[e-1]=null;return a}g.eb=function(){return nf.b?nf.b(this.e):nf.call(null,this.e)};
g.Ta=function(a,b){return kf(this.e,a,b)};g.Ma=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.A&e))return d;var f=Zc(this.A&e-1),e=this.e[2*f],f=this.e[2*f+1];return null==e?f.Ma(a+5,b,c,d):ff(c,e)?f:u?d:null};
g.ia=function(a,b,c,d,e,f){var h=1<<(c>>>b&31),k=Zc(this.A&h-1);if(0===(this.A&h)){var l=Zc(this.A);if(2*l<this.e.length){a=this.La(a);b=a.e;f.l=!0;a:for(c=2*(l-k),f=2*k+(c-1),l=2*(k+1)+(c-1);;){if(0===c)break a;b[l]=b[f];l-=1;c-=1;f-=1}b[2*k]=d;b[2*k+1]=e;a.A|=h;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=of.ia(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0!==
(this.A>>>d&1)&&(k[d]=null!=this.e[e]?of.ia(a,b+5,Tb(this.e[e]),this.e[e],this.e[e+1],f):this.e[e+1],e+=2),d+=1;else break;return new pf(a,l+1,k)}return u?(b=Array(2*(l+4)),Kc(this.e,0,b,0,2*k),b[2*k]=d,b[2*k+1]=e,Kc(this.e,2*k,b,2*(k+1),2*(l-k)),f.l=!0,a=this.La(a),a.e=b,a.A|=h,a):null}l=this.e[2*k];h=this.e[2*k+1];return null==l?(l=h.ia(a,b+5,c,d,e,f),l===h?this:jf.n(this,a,2*k+1,l)):ff(d,l)?e===h?this:jf.n(this,a,2*k+1,e):u?(f.l=!0,jf.X(this,a,2*k,null,2*k+1,qf.ga?qf.ga(a,b+5,l,h,c,d,e):qf.call(null,
a,b+5,l,h,c,d,e))):null};
g.ha=function(a,b,c,d,e){var f=1<<(b>>>a&31),h=Zc(this.A&f-1);if(0===(this.A&f)){var k=Zc(this.A);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=of.ha(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.A>>>c&1)&&(h[c]=null!=this.e[d]?of.ha(a+5,Tb(this.e[d]),this.e[d],this.e[d+1],e):this.e[d+1],d+=2),c+=1;else break;return new pf(null,k+1,h)}a=Array(2*(k+1));Kc(this.e,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;Kc(this.e,2*h,a,2*(h+1),2*(k-h));e.l=!0;return new lf(null,this.A|f,a)}k=this.e[2*h];f=this.e[2*h+1];return null==k?(k=f.ha(a+5,b,c,d,e),k===f?this:new lf(null,this.A,gf.c(this.e,2*h+1,k))):ff(c,k)?d===f?this:new lf(null,this.A,gf.c(this.e,2*h+1,d)):u?(e.l=!0,new lf(null,this.A,gf.s(this.e,2*h,null,2*h+1,qf.X?qf.X(a+5,k,f,b,c,d):qf.call(null,a+5,k,f,b,c,d)))):null};
g.fb=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.A&d))return this;var e=Zc(this.A&d-1),f=this.e[2*e],h=this.e[2*e+1];return null==f?(a=h.fb(a+5,b,c),a===h?this:null!=a?new lf(null,this.A,gf.c(this.e,2*e+1,a)):this.A===d?null:u?new lf(null,this.A^d,hf(this.e,e)):null):ff(c,f)?new lf(null,this.A^d,hf(this.e,e)):u?this:null};var of=new lf(null,0,[]);
function rf(a,b,c){var d=a.e;a=2*(a.g-1);for(var e=Array(a),f=0,h=1,k=0;;)if(f<a)f!==c&&null!=d[f]&&(e[h]=d[f],h+=2,k|=1<<f),f+=1;else return new lf(b,k,e)}function pf(a,b,c){this.t=a;this.g=b;this.e=c}g=pf.prototype;g.La=function(a){return a===this.t?this:new pf(a,this.g,va(this.e))};
g.gb=function(a,b,c,d,e){var f=c>>>b&31,h=this.e[f];if(null==h)return this;b=h.gb(a,b+5,c,d,e);if(b===h)return this;if(null==b){if(8>=this.g)return rf(this,a,f);a=jf.n(this,a,f,b);a.g-=1;return a}return u?jf.n(this,a,f,b):null};g.eb=function(){return sf.b?sf.b(this.e):sf.call(null,this.e)};g.Ta=function(a,b){for(var c=this.e.length,d=0,e=b;;)if(d<c){var f=this.e[d];if(null!=f&&(e=f.Ta(a,e),fc(e)))return K.b?K.b(e):K.call(null,e);d+=1}else return e};
g.Ma=function(a,b,c,d){var e=this.e[b>>>a&31];return null!=e?e.Ma(a+5,b,c,d):d};g.ia=function(a,b,c,d,e,f){var h=c>>>b&31,k=this.e[h];if(null==k)return a=jf.n(this,a,h,of.ia(a,b+5,c,d,e,f)),a.g+=1,a;b=k.ia(a,b+5,c,d,e,f);return b===k?this:jf.n(this,a,h,b)};g.ha=function(a,b,c,d,e){var f=b>>>a&31,h=this.e[f];if(null==h)return new pf(null,this.g+1,gf.c(this.e,f,of.ha(a+5,b,c,d,e)));a=h.ha(a+5,b,c,d,e);return a===h?this:new pf(null,this.g,gf.c(this.e,f,a))};
g.fb=function(a,b,c){var d=b>>>a&31,e=this.e[d];return null!=e?(a=e.fb(a+5,b,c),a===e?this:null==a?8>=this.g?rf(this,null,d):new pf(null,this.g-1,gf.c(this.e,d,a)):u?new pf(null,this.g,gf.c(this.e,d,a)):null):this};function tf(a,b,c){b*=2;for(var d=0;;)if(d<b){if(ff(c,a[d]))return d;d+=2}else return-1}function uf(a,b,c,d){this.t=a;this.ra=b;this.g=c;this.e=d}g=uf.prototype;
g.La=function(a){if(a===this.t)return this;var b=Array(2*(this.g+1));Kc(this.e,0,b,0,2*this.g);return new uf(a,this.ra,this.g,b)};g.gb=function(a,b,c,d,e){b=tf(this.e,this.g,d);if(-1===b)return this;e[0]=!0;if(1===this.g)return null;a=this.La(a);e=a.e;e[b]=e[2*this.g-2];e[b+1]=e[2*this.g-1];e[2*this.g-1]=null;e[2*this.g-2]=null;a.g-=1;return a};g.eb=function(){return nf.b?nf.b(this.e):nf.call(null,this.e)};g.Ta=function(a,b){return kf(this.e,a,b)};
g.Ma=function(a,b,c,d){a=tf(this.e,this.g,c);return 0>a?d:ff(c,this.e[a])?this.e[a+1]:u?d:null};
g.ia=function(a,b,c,d,e,f){if(c===this.ra){b=tf(this.e,this.g,d);if(-1===b){if(this.e.length>2*this.g)return a=jf.X(this,a,2*this.g,d,2*this.g+1,e),f.l=!0,a.g+=1,a;c=this.e.length;b=Array(c+2);Kc(this.e,0,b,0,c);b[c]=d;b[c+1]=e;f.l=!0;f=this.g+1;a===this.t?(this.e=b,this.g=f,a=this):a=new uf(this.t,this.ra,f,b);return a}return this.e[b+1]===e?this:jf.n(this,a,b+1,e)}return(new lf(a,1<<(this.ra>>>b&31),[null,this,null,null])).ia(a,b,c,d,e,f)};
g.ha=function(a,b,c,d,e){return b===this.ra?(a=tf(this.e,this.g,c),-1===a?(a=2*this.g,b=Array(a+2),Kc(this.e,0,b,0,a),b[a]=c,b[a+1]=d,e.l=!0,new uf(null,this.ra,this.g+1,b)):Wb.a(this.e[a],d)?this:new uf(null,this.ra,this.g,gf.c(this.e,a+1,d))):(new lf(null,1<<(this.ra>>>a&31),[null,this])).ha(a,b,c,d,e)};g.fb=function(a,b,c){a=tf(this.e,this.g,c);return-1===a?this:1===this.g?null:u?new uf(null,this.ra,this.g-1,hf(this.e,Yc(a))):null};
var qf=function(){function a(a,b,c,h,k,l,n){var q=Tb(c);if(q===k)return new uf(null,q,2,[c,h,l,n]);var t=new ef;return of.ia(a,b,q,c,h,t).ia(a,b,k,l,n,t)}function b(a,b,c,h,k,l){var n=Tb(b);if(n===h)return new uf(null,n,2,[b,c,k,l]);var q=new ef;return of.ha(a,n,b,c,q).ha(a,h,k,l,q)}var c=null,c=function(c,e,f,h,k,l,n){switch(arguments.length){case 6:return b.call(this,c,e,f,h,k,l);case 7:return a.call(this,c,e,f,h,k,l,n)}throw Error("Invalid arity: "+arguments.length);};c.X=b;c.ga=a;return c}();
function vf(a,b,c,d,e){this.j=a;this.ka=b;this.p=c;this.r=d;this.m=e;this.q=0;this.i=32374860}g=vf.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.j};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(H,this.j)};g.N=function(a,b){return nc.a(b,this)};g.M=function(a,b,c){return nc.c(b,c,this)};g.Q=function(){return null==this.r?new W(null,2,5,X,[this.ka[this.p],this.ka[this.p+1]],null):F(this.r)};
g.S=function(){return null==this.r?nf.c?nf.c(this.ka,this.p+2,null):nf.call(null,this.ka,this.p+2,null):nf.c?nf.c(this.ka,this.p,I(this.r)):nf.call(null,this.ka,this.p,I(this.r))};g.H=function(){return this};g.F=function(a,b){return new vf(b,this.ka,this.p,this.r,this.m)};g.G=function(a,b){return M(b,this)};
var nf=function(){function a(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new vf(null,a,b,null,null);var h=a[b+1];if(r(h)&&(h=h.eb(),r(h)))return new vf(null,a,b+2,h,null);b+=2}else return null;else return new vf(null,a,b,c,null)}function b(a){return c.c(a,0,null)}var c=null,c=function(c,e,f){switch(arguments.length){case 1:return b.call(this,c);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;return c}();
function wf(a,b,c,d,e){this.j=a;this.ka=b;this.p=c;this.r=d;this.m=e;this.q=0;this.i=32374860}g=wf.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.j};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(H,this.j)};g.N=function(a,b){return nc.a(b,this)};g.M=function(a,b,c){return nc.c(b,c,this)};g.Q=function(){return F(this.r)};
g.S=function(){return sf.n?sf.n(null,this.ka,this.p,I(this.r)):sf.call(null,null,this.ka,this.p,I(this.r))};g.H=function(){return this};g.F=function(a,b){return new wf(b,this.ka,this.p,this.r,this.m)};g.G=function(a,b){return M(b,this)};
var sf=function(){function a(a,b,c,h){if(null==h)for(h=b.length;;)if(c<h){var k=b[c];if(r(k)&&(k=k.eb(),r(k)))return new wf(a,b,c+1,k,null);c+=1}else return null;else return new wf(a,b,c,h,null)}function b(a){return c.n(null,a,0,null)}var c=null,c=function(c,e,f,h){switch(arguments.length){case 1:return b.call(this,c);case 4:return a.call(this,c,e,f,h)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.n=a;return c}();
function xf(a,b,c,d,e,f){this.j=a;this.g=b;this.root=c;this.T=d;this.Y=e;this.m=f;this.i=16123663;this.q=8196}g=xf.prototype;g.toString=function(){return Lb(this)};g.keys=function(){return Oe(Ve.b?Ve.b(this):Ve.call(null,this))};g.entries=function(){return Qe(E(this))};g.values=function(){return Oe(We.b?We.b(this):We.call(null,this))};g.has=function(a){return Oc(this,a)};g.get=function(a){return this.u(null,a)};
g.forEach=function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.J(null,e),h=P.c(f,0,null),f=P.c(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=E(b))Ic(b)?(c=Hb(b),b=Ib(b),h=c,d=O(c),c=h):(c=F(b),h=P.c(c,0,null),f=P.c(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null};g.u=function(a,b){return La.c(this,b,null)};g.C=function(a,b,c){return null==b?this.T?this.Y:c:null==this.root?c:u?this.root.Ma(0,Tb(b),b,c):null};
g.Za=function(a,b,c){a=this.T?b.c?b.c(c,null,this.Y):b.call(null,c,null,this.Y):c;return fc(a)?K.b?K.b(a):K.call(null,a):null!=this.root?this.root.Ta(b,a):u?a:null};g.D=function(){return this.j};g.L=function(){return this.g};g.B=function(){var a=this.m;return null!=a?a:this.m=a=dc(this)};g.v=function(a,b){return Me(this,b)};g.Wa=function(){return new yf({},this.root,this.g,this.T,this.Y)};g.I=function(){return eb($e,this.j)};
g.nb=function(a,b){if(null==b)return this.T?new xf(this.j,this.g-1,this.root,!1,null,null):this;if(null==this.root)return this;if(u){var c=this.root.fb(0,Tb(b),b);return c===this.root?this:new xf(this.j,this.g-1,c,this.T,this.Y,null)}return null};
g.ua=function(a,b,c){if(null==b)return this.T&&c===this.Y?this:new xf(this.j,this.T?this.g:this.g+1,this.root,!0,c,null);a=new ef;b=(null==this.root?of:this.root).ha(0,Tb(b),b,c,a);return b===this.root?this:new xf(this.j,a.l?this.g+1:this.g,b,this.T,this.Y,null)};g.kb=function(a,b){return null==b?this.T:null==this.root?!1:u?this.root.Ma(0,Tb(b),b,Lc)!==Lc:null};g.H=function(){if(0<this.g){var a=null!=this.root?this.root.eb():null;return this.T?M(new W(null,2,5,X,[null,this.Y],null),a):a}return null};
g.F=function(a,b){return new xf(b,this.g,this.root,this.T,this.Y,this.m)};g.G=function(a,b){if(Hc(b))return Oa(this,D.a(b,0),D.a(b,1));for(var c=this,d=E(b);;){if(null==d)return c;var e=F(d);if(Hc(e))c=Oa(c,D.a(e,0),D.a(e,1)),d=I(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.u(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return this.u(null,a)};g.a=function(a,b){return this.C(null,a,b)};var $e=new xf(null,0,null,!1,null,0);function sc(a,b){for(var c=a.length,d=0,e=yb($e);;)if(d<c)var f=d+1,e=e.cb(null,a[d],b[d]),d=f;else return Ab(e)}
function yf(a,b,c,d,e){this.t=a;this.root=b;this.count=c;this.T=d;this.Y=e;this.q=56;this.i=258}g=yf.prototype;g.Ab=function(a,b){if(this.t)if(null==b)this.T&&(this.T=!1,this.Y=null,this.count-=1);else{if(null!=this.root){var c=new ef,d=this.root.gb(this.t,0,Tb(b),b,c);d!==this.root&&(this.root=d);r(c[0])&&(this.count-=1)}}else throw Error("dissoc! after persistent!");return this};g.cb=function(a,b,c){return zf(this,b,c)};
g.Ka=function(a,b){var c;a:{if(this.t){if(b?b.i&2048||b.dc||(b.i?0:s(Sa,b)):s(Sa,b)){c=zf(this,cf.b?cf.b(b):cf.call(null,b),df.b?df.b(b):df.call(null,b));break a}c=E(b);for(var d=this;;){var e=F(c);if(r(e))c=I(c),d=zf(d,cf.b?cf.b(e):cf.call(null,e),df.b?df.b(e):df.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");c=void 0}return c};
g.Oa=function(){var a;if(this.t)this.t=null,a=new xf(null,this.count,this.root,this.T,this.Y,null);else throw Error("persistent! called twice");return a};g.u=function(a,b){return null==b?this.T?this.Y:null:null==this.root?null:this.root.Ma(0,Tb(b),b)};g.C=function(a,b,c){return null==b?this.T?this.Y:c:null==this.root?c:this.root.Ma(0,Tb(b),b,c)};g.L=function(){if(this.t)return this.count;throw Error("count after persistent!");};
function zf(a,b,c){if(a.t){if(null==b)a.Y!==c&&(a.Y=c),a.T||(a.count+=1,a.T=!0);else{var d=new ef;b=(null==a.root?of:a.root).ia(a.t,0,Tb(b),b,c,d);b!==a.root&&(a.root=b);d.l&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}function Af(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=pc.a(d,a),a=b;else return d}function Bf(a,b,c,d,e){this.j=a;this.stack=b;this.ib=c;this.g=d;this.m=e;this.q=0;this.i=32374862}g=Bf.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.j};
g.L=function(){return 0>this.g?O(I(this))+1:this.g};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(H,this.j)};g.N=function(a,b){return nc.a(b,this)};g.M=function(a,b,c){return nc.c(b,c,this)};g.Q=function(){return yc(this.stack)};g.S=function(){var a=F(this.stack),a=Af(this.ib?a.right:a.left,I(this.stack),this.ib);return null!=a?new Bf(null,a,this.ib,this.g-1,null):H};g.H=function(){return this};
g.F=function(a,b){return new Bf(b,this.stack,this.ib,this.g,this.m)};g.G=function(a,b){return M(b,this)};function Cf(a,b,c){return new Bf(null,Af(a,null,b),b,c,null)}function Df(a,b,c,d){return c instanceof Y?c.left instanceof Y?new Y(c.key,c.l,c.left.qa(),new $(a,b,c.right,d,null),null):c.right instanceof Y?new Y(c.right.key,c.right.l,new $(c.key,c.l,c.left,c.right.left,null),new $(a,b,c.right.right,d,null),null):u?new $(a,b,c,d,null):null:new $(a,b,c,d,null)}
function Ef(a,b,c,d){return d instanceof Y?d.right instanceof Y?new Y(d.key,d.l,new $(a,b,c,d.left,null),d.right.qa(),null):d.left instanceof Y?new Y(d.left.key,d.left.l,new $(a,b,c,d.left.left,null),new $(d.key,d.l,d.left.right,d.right,null),null):u?new $(a,b,c,d,null):null:new $(a,b,c,d,null)}
function Ff(a,b,c,d){if(c instanceof Y)return new Y(a,b,c.qa(),d,null);if(d instanceof $)return Ef(a,b,c,d.hb());if(d instanceof Y&&d.left instanceof $)return new Y(d.left.key,d.left.l,new $(a,b,c,d.left.left,null),Ef(d.key,d.l,d.left.right,d.right.hb()),null);if(u)throw Error("red-black tree invariant violation");return null}
var Hf=function Gf(b,c,d){d=null!=b.left?Gf(b.left,c,d):d;if(fc(d))return K.b?K.b(d):K.call(null,d);d=c.c?c.c(d,b.key,b.l):c.call(null,d,b.key,b.l);if(fc(d))return K.b?K.b(d):K.call(null,d);b=null!=b.right?Gf(b.right,c,d):d;return fc(b)?K.b?K.b(b):K.call(null,b):b};function $(a,b,c,d,e){this.key=a;this.l=b;this.left=c;this.right=d;this.m=e;this.q=0;this.i=32402207}g=$.prototype;g.Hb=function(a){return a.Jb(this)};g.hb=function(){return new Y(this.key,this.l,this.left,this.right,null)};g.qa=function(){return this};
g.Gb=function(a){return a.Ib(this)};g.replace=function(a,b,c,d){return new $(a,b,c,d,null)};g.Ib=function(a){return new $(a.key,a.l,this,a.right,null)};g.Jb=function(a){return new $(a.key,a.l,a.left,this,null)};g.Ta=function(a,b){return Hf(this,a,b)};g.u=function(a,b){return D.c(this,b,null)};g.C=function(a,b,c){return D.c(this,b,c)};g.J=function(a,b){return 0===b?this.key:1===b?this.l:null};g.aa=function(a,b,c){return 0===b?this.key:1===b?this.l:u?c:null};
g.Pa=function(a,b,c){return(new W(null,2,5,X,[this.key,this.l],null)).Pa(null,b,c)};g.D=function(){return null};g.L=function(){return 2};g.$a=function(){return this.key};g.ab=function(){return this.l};g.Ia=function(){return this.l};g.Ja=function(){return new W(null,1,5,X,[this.key],null)};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return qe};g.N=function(a,b){return gc.a(this,b)};g.M=function(a,b,c){return gc.c(this,b,c)};
g.ua=function(a,b,c){return R.c(new W(null,2,5,X,[this.key,this.l],null),b,c)};g.H=function(){return Da(Da(H,this.l),this.key)};g.F=function(a,b){return N(new W(null,2,5,X,[this.key,this.l],null),b)};g.G=function(a,b){return new W(null,3,5,X,[this.key,this.l,b],null)};g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.u(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();
g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return this.u(null,a)};g.a=function(a,b){return this.C(null,a,b)};function Y(a,b,c,d,e){this.key=a;this.l=b;this.left=c;this.right=d;this.m=e;this.q=0;this.i=32402207}g=Y.prototype;g.Hb=function(a){return new Y(this.key,this.l,this.left,a,null)};g.hb=function(){throw Error("red-black tree invariant violation");};g.qa=function(){return new $(this.key,this.l,this.left,this.right,null)};
g.Gb=function(a){return new Y(this.key,this.l,a,this.right,null)};g.replace=function(a,b,c,d){return new Y(a,b,c,d,null)};g.Ib=function(a){return this.left instanceof Y?new Y(this.key,this.l,this.left.qa(),new $(a.key,a.l,this.right,a.right,null),null):this.right instanceof Y?new Y(this.right.key,this.right.l,new $(this.key,this.l,this.left,this.right.left,null),new $(a.key,a.l,this.right.right,a.right,null),null):u?new $(a.key,a.l,this,a.right,null):null};
g.Jb=function(a){return this.right instanceof Y?new Y(this.key,this.l,new $(a.key,a.l,a.left,this.left,null),this.right.qa(),null):this.left instanceof Y?new Y(this.left.key,this.left.l,new $(a.key,a.l,a.left,this.left.left,null),new $(this.key,this.l,this.left.right,this.right,null),null):u?new $(a.key,a.l,a.left,this,null):null};g.Ta=function(a,b){return Hf(this,a,b)};g.u=function(a,b){return D.c(this,b,null)};g.C=function(a,b,c){return D.c(this,b,c)};
g.J=function(a,b){return 0===b?this.key:1===b?this.l:null};g.aa=function(a,b,c){return 0===b?this.key:1===b?this.l:u?c:null};g.Pa=function(a,b,c){return(new W(null,2,5,X,[this.key,this.l],null)).Pa(null,b,c)};g.D=function(){return null};g.L=function(){return 2};g.$a=function(){return this.key};g.ab=function(){return this.l};g.Ia=function(){return this.l};g.Ja=function(){return new W(null,1,5,X,[this.key],null)};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};
g.v=function(a,b){return lc(this,b)};g.I=function(){return qe};g.N=function(a,b){return gc.a(this,b)};g.M=function(a,b,c){return gc.c(this,b,c)};g.ua=function(a,b,c){return R.c(new W(null,2,5,X,[this.key,this.l],null),b,c)};g.H=function(){return Da(Da(H,this.l),this.key)};g.F=function(a,b){return N(new W(null,2,5,X,[this.key,this.l],null),b)};g.G=function(a,b){return new W(null,3,5,X,[this.key,this.l,b],null)};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.u(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return this.u(null,a)};g.a=function(a,b){return this.C(null,a,b)};
var Jf=function If(b,c,d,e,f){if(null==c)return new Y(d,e,null,null,null);var h=b.a?b.a(d,c.key):b.call(null,d,c.key);return 0===h?(f[0]=c,null):0>h?(b=If(b,c.left,d,e,f),null!=b?c.Gb(b):null):u?(b=If(b,c.right,d,e,f),null!=b?c.Hb(b):null):null},Lf=function Kf(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof Y){if(c instanceof Y){var d=Kf(b.right,c.left);return d instanceof Y?new Y(d.key,d.l,new Y(b.key,b.l,b.left,d.left,null),new Y(c.key,c.l,d.right,c.right,null),null):new Y(b.key,b.l,
b.left,new Y(c.key,c.l,d,c.right,null),null)}return new Y(b.key,b.l,b.left,Kf(b.right,c),null)}return c instanceof Y?new Y(c.key,c.l,Kf(b,c.left),c.right,null):u?(d=Kf(b.right,c.left),d instanceof Y?new Y(d.key,d.l,new $(b.key,b.l,b.left,d.left,null),new $(c.key,c.l,d.right,c.right,null),null):Ff(b.key,b.l,b.left,new $(c.key,c.l,d,c.right,null))):null},Nf=function Mf(b,c,d,e){if(null!=c){var f=b.a?b.a(d,c.key):b.call(null,d,c.key);if(0===f)return e[0]=c,Lf(c.left,c.right);if(0>f)return b=Mf(b,c.left,
d,e),null!=b||null!=e[0]?c.left instanceof $?Ff(c.key,c.l,b,c.right):new Y(c.key,c.l,b,c.right,null):null;if(u){b=Mf(b,c.right,d,e);if(null!=b||null!=e[0])if(c.right instanceof $)if(e=c.key,d=c.l,c=c.left,b instanceof Y)c=new Y(e,d,c,b.qa(),null);else if(c instanceof $)c=Df(e,d,c.hb(),b);else if(c instanceof Y&&c.right instanceof $)c=new Y(c.right.key,c.right.l,Df(c.key,c.l,c.left.hb(),c.right.left),new $(e,d,c.right.right,b,null),null);else{if(u)throw Error("red-black tree invariant violation");
c=null}else c=new Y(c.key,c.l,c.left,b,null);else c=null;return c}}return null},Pf=function Of(b,c,d,e){var f=c.key,h=b.a?b.a(d,f):b.call(null,d,f);return 0===h?c.replace(f,e,c.left,c.right):0>h?c.replace(f,c.l,Of(b,c.left,d,e),c.right):u?c.replace(f,c.l,c.left,Of(b,c.right,d,e)):null};function Qf(a,b,c,d,e){this.Z=a;this.ma=b;this.g=c;this.j=d;this.m=e;this.i=418776847;this.q=8192}g=Qf.prototype;g.toString=function(){return Lb(this)};g.keys=function(){return Oe(Ve.b?Ve.b(this):Ve.call(null,this))};
g.entries=function(){return Qe(E(this))};g.values=function(){return Oe(We.b?We.b(this):We.call(null,this))};g.has=function(a){return Oc(this,a)};g.get=function(a){return this.u(null,a)};g.forEach=function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.J(null,e),h=P.c(f,0,null),f=P.c(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=E(b))Ic(b)?(c=Hb(b),b=Ib(b),h=c,d=O(c),c=h):(c=F(b),h=P.c(c,0,null),f=P.c(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null};
function Rf(a,b){for(var c=a.ma;;)if(null!=c){var d=a.Z.a?a.Z.a(b,c.key):a.Z.call(null,b,c.key);if(0===d)return c;if(0>d)c=c.left;else if(u)c=c.right;else return null}else return null}g.u=function(a,b){return La.c(this,b,null)};g.C=function(a,b,c){a=Rf(this,b);return null!=a?a.l:c};g.Za=function(a,b,c){return null!=this.ma?Hf(this.ma,b,c):c};g.D=function(){return this.j};g.L=function(){return this.g};g.Xa=function(){return 0<this.g?Cf(this.ma,!1,this.g):null};
g.B=function(){var a=this.m;return null!=a?a:this.m=a=dc(this)};g.v=function(a,b){return Me(this,b)};g.I=function(){return N(Sf,this.j)};g.nb=function(a,b){var c=[null],d=Nf(this.Z,this.ma,b,c);return null==d?null==P.a(c,0)?this:new Qf(this.Z,null,0,this.j,null):new Qf(this.Z,d.qa(),this.g-1,this.j,null)};
g.ua=function(a,b,c){a=[null];var d=Jf(this.Z,this.ma,b,c,a);return null==d?(a=P.a(a,0),Wb.a(c,a.l)?this:new Qf(this.Z,Pf(this.Z,this.ma,b,c),this.g,this.j,null)):new Qf(this.Z,d.qa(),this.g+1,this.j,null)};g.kb=function(a,b){return null!=Rf(this,b)};g.H=function(){return 0<this.g?Cf(this.ma,!0,this.g):null};g.F=function(a,b){return new Qf(this.Z,this.ma,this.g,b,this.m)};
g.G=function(a,b){if(Hc(b))return Oa(this,D.a(b,0),D.a(b,1));for(var c=this,d=E(b);;){if(null==d)return c;var e=F(d);if(Hc(e))c=Oa(c,D.a(e,0),D.a(e,1)),d=I(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.u(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};
g.b=function(a){return this.u(null,a)};g.a=function(a,b){return this.C(null,a,b)};g.yb=function(a,b){return 0<this.g?Cf(this.ma,b,this.g):null};g.zb=function(a,b,c){if(0<this.g){a=null;for(var d=this.ma;;)if(null!=d){var e=this.Z.a?this.Z.a(b,d.key):this.Z.call(null,b,d.key);if(0===e)return new Bf(null,pc.a(a,d),c,-1,null);if(r(c))0>e?(a=pc.a(a,d),d=d.left):d=d.right;else if(u)0<e?(a=pc.a(a,d),d=d.right):d=d.left;else return null}else return null==a?null:new Bf(null,a,c,-1,null)}else return null};
g.xb=function(a,b){return cf.b?cf.b(b):cf.call(null,b)};g.wb=function(){return this.Z};
var Sf=new Qf(Xb,null,0,null,0),Tf=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=E(a);for(var b=yb($e);;)if(a){var e=I(I(a)),b=xd.c(b,F(a),F(I(a)));a=e}else return Ab(b)}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}(),Uf=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return new la(null,Yc(O(a)),S.a(wa,
a),null)}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}(),Vf=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=E(a);for(var b=Sf;;)if(a){var e=I(I(a)),b=R.c(b,F(a),F(I(a)));a=e}else return b}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}(),Wf=function(){function a(a,d){var e=null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,
b){for(var e=E(b),f=new Qf(Qc(a),null,0,null,0);;)if(e)var h=I(I(e)),f=R.c(f,F(e),F(I(e))),e=h;else return f}a.k=1;a.f=function(a){var d=F(a);a=G(a);return b(d,a)};a.d=b;return a}();function Xf(a,b){this.V=a;this.W=b;this.q=0;this.i=32374988}g=Xf.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.W};g.U=function(){var a=this.V,a=(a?a.i&128||a.ob||(a.i?0:s(Ja,a)):s(Ja,a))?this.V.U(null):I(this.V);return null==a?null:new Xf(a,this.W)};g.B=function(){return cc(this)};
g.v=function(a,b){return lc(this,b)};g.I=function(){return N(H,this.W)};g.N=function(a,b){return nc.a(b,this)};g.M=function(a,b,c){return nc.c(b,c,this)};g.Q=function(){return this.V.Q(null).$a(null)};g.S=function(){var a=this.V,a=(a?a.i&128||a.ob||(a.i?0:s(Ja,a)):s(Ja,a))?this.V.U(null):I(this.V);return null!=a?new Xf(a,this.W):H};g.H=function(){return this};g.F=function(a,b){return new Xf(this.V,b)};g.G=function(a,b){return M(b,this)};function Ve(a){return(a=E(a))?new Xf(a,null):null}
function cf(a){return Ta(a)}function Yf(a,b){this.V=a;this.W=b;this.q=0;this.i=32374988}g=Yf.prototype;g.toString=function(){return Lb(this)};g.D=function(){return this.W};g.U=function(){var a=this.V,a=(a?a.i&128||a.ob||(a.i?0:s(Ja,a)):s(Ja,a))?this.V.U(null):I(this.V);return null==a?null:new Yf(a,this.W)};g.B=function(){return cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(H,this.W)};g.N=function(a,b){return nc.a(b,this)};g.M=function(a,b,c){return nc.c(b,c,this)};g.Q=function(){return this.V.Q(null).ab(null)};
g.S=function(){var a=this.V,a=(a?a.i&128||a.ob||(a.i?0:s(Ja,a)):s(Ja,a))?this.V.U(null):I(this.V);return null!=a?new Yf(a,this.W):H};g.H=function(){return this};g.F=function(a,b){return new Yf(this.V,b)};g.G=function(a,b){return M(b,this)};function We(a){return(a=E(a))?new Yf(a,null):null}function df(a){return Ua(a)}
var Zf=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return r(Ed(Fd,a))?C.a(function(a,b){return pc.a(r(a)?a:Ye,b)},a):null}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}();function $f(a,b,c){this.j=a;this.Sa=b;this.m=c;this.i=15077647;this.q=8196}g=$f.prototype;g.toString=function(){return Lb(this)};g.keys=function(){return Oe(E(this))};g.entries=function(){return Se(E(this))};g.values=function(){return Oe(E(this))};
g.has=function(a){return Oc(this,a)};g.forEach=function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.J(null,e),h=P.c(f,0,null),f=P.c(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=E(b))Ic(b)?(c=Hb(b),b=Ib(b),h=c,d=O(c),c=h):(c=F(b),h=P.c(c,0,null),f=P.c(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null};g.u=function(a,b){return La.c(this,b,null)};g.C=function(a,b,c){return Na(this.Sa,b)?b:c};g.D=function(){return this.j};g.L=function(){return Aa(this.Sa)};
g.B=function(){var a=this.m;return null!=a?a:this.m=a=dc(this)};g.v=function(a,b){return Dc(b)&&O(this)===O(b)&&Dd(function(a){return function(b){return Oc(a,b)}}(this),b)};g.Wa=function(){return new ag(yb(this.Sa))};g.I=function(){return N(bg,this.j)};g.vb=function(a,b){return new $f(this.j,Qa(this.Sa,b),null)};g.H=function(){return Ve(this.Sa)};g.F=function(a,b){return new $f(b,this.Sa,this.m)};g.G=function(a,b){return new $f(this.j,R.c(this.Sa,b,null),null)};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.u(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return this.u(null,a)};g.a=function(a,b){return this.C(null,a,b)};var bg=new $f(null,Ye,0);function ag(a){this.la=a;this.i=259;this.q=136}g=ag.prototype;
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return La.c(this.la,c,Lc)===Lc?null:c;case 3:return La.c(this.la,c,Lc)===Lc?d:c}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return La.c(this.la,a,Lc)===Lc?null:a};g.a=function(a,b){return La.c(this.la,a,Lc)===Lc?b:a};g.u=function(a,b){return La.c(this,b,null)};g.C=function(a,b,c){return La.c(this.la,b,Lc)===Lc?c:b};
g.L=function(){return O(this.la)};g.Ob=function(a,b){this.la=yd.a(this.la,b);return this};g.Ka=function(a,b){this.la=xd.c(this.la,b,null);return this};g.Oa=function(){return new $f(null,Ab(this.la),null)};function cg(a,b,c){this.j=a;this.na=b;this.m=c;this.i=417730831;this.q=8192}g=cg.prototype;g.toString=function(){return Lb(this)};g.keys=function(){return Oe(E(this))};g.entries=function(){return Se(E(this))};g.values=function(){return Oe(E(this))};g.has=function(a){return Oc(this,a)};
g.forEach=function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.J(null,e),h=P.c(f,0,null),f=P.c(f,1,null);a.a?a.a(f,h):a.call(null,f,h);e+=1}else if(b=E(b))Ic(b)?(c=Hb(b),b=Ib(b),h=c,d=O(c),c=h):(c=F(b),h=P.c(c,0,null),f=P.c(c,1,null),a.a?a.a(f,h):a.call(null,f,h),b=I(b),c=null,d=0),e=0;else return null};g.u=function(a,b){return La.c(this,b,null)};g.C=function(a,b,c){a=Rf(this.na,b);return null!=a?a.key:c};g.D=function(){return this.j};g.L=function(){return O(this.na)};
g.Xa=function(){return 0<O(this.na)?Kd.a(cf,pb(this.na)):null};g.B=function(){var a=this.m;return null!=a?a:this.m=a=dc(this)};g.v=function(a,b){return Dc(b)&&O(this)===O(b)&&Dd(function(a){return function(b){return Oc(a,b)}}(this),b)};g.I=function(){return N(dg,this.j)};g.vb=function(a,b){return new cg(this.j,tc.a(this.na,b),null)};g.H=function(){return Ve(this.na)};g.F=function(a,b){return new cg(b,this.na,this.m)};g.G=function(a,b){return new cg(this.j,R.c(this.na,b,null),null)};
g.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.u(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();g.apply=function(a,b){return this.call.apply(this,[this].concat(va(b)))};g.b=function(a){return this.u(null,a)};g.a=function(a,b){return this.C(null,a,b)};g.yb=function(a,b){return Kd.a(cf,qb(this.na,b))};g.zb=function(a,b,c){return Kd.a(cf,rb(this.na,b,c))};g.xb=function(a,b){return b};g.wb=function(){return tb(this.na)};
var dg=new cg(null,Sf,0);function eg(a){a=E(a);if(null==a)return bg;if(a instanceof ac&&0===a.p){a=a.e;a:{for(var b=0,c=yb(bg);;)if(b<a.length)var d=b+1,c=c.Ka(null,a[b]),b=d;else{a=c;break a}a=void 0}return a.Oa(null)}if(u)for(d=yb(bg);;)if(null!=a)b=a.U(null),d=d.Ka(null,a.Q(null)),a=b;else return d.Oa(null);else return null}
var fg=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return C.c(Da,dg,a)}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}(),gg=function(){function a(a,d){var e=null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){return C.c(Da,new cg(null,Wf(a),0),b)}a.k=1;a.f=function(a){var d=F(a);a=G(a);return b(d,a)};a.d=b;return a}();
function hg(a){for(var b=qe;;)if(I(a))b=pc.a(b,F(a)),a=I(a);else return E(b)}function id(a){if(a&&(a.q&4096||a.fc))return a.name;if("string"===typeof a)return a;throw Error("Doesn't support name: "+A.b(a));}
var ig=function(){function a(a,b,c){return(a.b?a.b(b):a.call(null,b))>(a.b?a.b(c):a.call(null,c))?b:c}var b=null,c=function(){function a(b,d,k,l){var n=null;3<arguments.length&&(n=J(Array.prototype.slice.call(arguments,3),0));return c.call(this,b,d,k,n)}function c(a,d,e,l){return C.c(function(c,d){return b.c(a,c,d)},b.c(a,d,e),l)}a.k=3;a.f=function(a){var b=F(a);a=I(a);var d=F(a);a=I(a);var l=F(a);a=G(a);return c(b,d,l,a)};a.d=c;return a}(),b=function(b,e,f,h){switch(arguments.length){case 2:return e;
case 3:return a.call(this,b,e,f);default:return c.d(b,e,f,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.k=3;b.f=c.f;b.a=function(a,b){return b};b.c=a;b.d=c.d;return b}(),jg=function(){function a(a,b,f){return new V(null,function(){var h=E(f);return h?M(Md(a,h),c.c(a,b,Nd(b,h))):null},null,null)}function b(a,b){return c.c(a,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);
};c.a=b;c.c=a;return c}(),lg=function kg(b,c){return new V(null,function(){var d=E(c);return d?r(b.b?b.b(F(d)):b.call(null,F(d)))?M(F(d),kg(b,G(d))):null:null},null,null)};function mg(a,b,c){return function(d){var e=tb(a);return b.a?b.a(e.a?e.a(sb(a,d),c):e.call(null,sb(a,d),c),0):b.call(null,e.a?e.a(sb(a,d),c):e.call(null,sb(a,d),c),0)}}
var ng=function(){function a(a,b,c,h,k){var l=rb(a,c,!0);if(r(l)){var n=P.c(l,0,null);return lg(mg(a,h,k),r(mg(a,b,c).call(null,n))?l:I(l))}return null}function b(a,b,c){var h=mg(a,b,c),k;a:{k=[Uc,Vc];var l=k.length;if(l<=Ze)for(var n=0,q=yb(Ye);;)if(n<l)var t=n+1,q=Bb(q,k[n],null),n=t;else{k=new $f(null,Ab(q),null);break a}else for(n=0,q=yb(bg);;)if(n<l)t=n+1,q=zb(q,k[n]),n=t;else{k=Ab(q);break a}k=void 0}return r(k.call(null,b))?(a=rb(a,c,!0),r(a)?(b=P.c(a,0,null),r(h.b?h.b(b):h.call(null,b))?a:
I(a)):null):lg(h,qb(a,!0))}var c=null,c=function(c,e,f,h,k){switch(arguments.length){case 3:return b.call(this,c,e,f);case 5:return a.call(this,c,e,f,h,k)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.s=a;return c}();function og(a,b,c,d,e){this.j=a;this.start=b;this.end=c;this.step=d;this.m=e;this.i=32375006;this.q=8192}g=og.prototype;g.toString=function(){return Lb(this)};
g.J=function(a,b){if(b<Aa(this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};g.aa=function(a,b,c){return b<Aa(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};g.D=function(){return this.j};
g.U=function(){return 0<this.step?this.start+this.step<this.end?new og(this.j,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new og(this.j,this.start+this.step,this.end,this.step,null):null};g.L=function(){return sa(lb(this))?0:Math.ceil((this.end-this.start)/this.step)};g.B=function(){var a=this.m;return null!=a?a:this.m=a=cc(this)};g.v=function(a,b){return lc(this,b)};g.I=function(){return N(H,this.j)};g.N=function(a,b){return gc.a(this,b)};
g.M=function(a,b,c){return gc.c(this,b,c)};g.Q=function(){return null==lb(this)?null:this.start};g.S=function(){return null!=lb(this)?new og(this.j,this.start+this.step,this.end,this.step,null):H};g.H=function(){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};g.F=function(a,b){return new og(b,this.start,this.end,this.step,this.m)};g.G=function(a,b){return M(b,this)};
var pg=function(){function a(a,b,c){return new og(null,a,b,c,null)}function b(a,b){return e.c(a,b,1)}function c(a){return e.c(0,a,1)}function d(){return e.c(0,Number.MAX_VALUE,1)}var e=null,e=function(e,h,k){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,h);case 3:return a.call(this,e,h,k)}throw Error("Invalid arity: "+arguments.length);};e.o=d;e.b=c;e.a=b;e.c=a;return e}(),qg=function(){function a(a,b){for(;;)if(E(b)&&0<a){var c=a-1,h=
I(b);a=c;b=h}else return null}function b(a){for(;;)if(E(a))a=I(a);else return null}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),rg=function(){function a(a,b){qg.a(a,b);return b}function b(a){qg.b(a);return a}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);
};c.b=b;c.a=a;return c}();function sg(a,b){if("string"===typeof b){var c=a.exec(b);return Wb.a(F(c),b)?1===O(c)?F(c):we(c):null}throw new TypeError("re-matches must match against a string.");}function tg(a){var b;b=/^(?:\(\?([idmsux]*)\))?(.*)/;if("string"===typeof a)a=b.exec(a),b=null==a?null:1===O(a)?F(a):we(a);else throw new TypeError("re-find must match against a string.");P.c(b,0,null);a=P.c(b,1,null);b=P.c(b,2,null);return new RegExp(b,a)}
function ug(a,b,c,d,e,f,h){var k=ja;try{ja=null==ja?null:ja-1;if(null!=ja&&0>ja)return ub(a,"#");ub(a,c);E(h)&&(b.c?b.c(F(h),a,f):b.call(null,F(h),a,f));for(var l=I(h),n=ra.b(f)-1;;)if(!l||null!=n&&0===n){E(l)&&0===n&&(ub(a,d),ub(a,"..."));break}else{ub(a,d);b.c?b.c(F(l),a,f):b.call(null,F(l),a,f);var q=I(l);c=n-1;l=q;n=c}return ub(a,e)}finally{ja=k}}
var vg=function(){function a(a,d){var e=null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){for(var e=E(b),f=null,h=0,k=0;;)if(k<h){var l=f.J(null,k);ub(a,l);k+=1}else if(e=E(e))f=e,Ic(f)?(e=Hb(f),h=Ib(f),f=e,l=O(e),e=h,h=l):(l=F(f),ub(a,l),e=I(f),f=null,h=0),k=0;else return null}a.k=1;a.f=function(a){var d=F(a);a=G(a);return b(d,a)};a.d=b;return a}(),wg={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function xg(a){return'"'+A.b(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return wg[a]}))+'"'}
var Ag=function yg(b,c,d){if(null==b)return ub(c,"nil");if(void 0===b)return ub(c,"#\x3cundefined\x3e");if(u){r(function(){var c=Q.a(d,pa);return r(c)?(c=b?b.i&131072||b.ec?!0:b.i?!1:s(bb,b):s(bb,b))?xc(b):c:c}())&&(ub(c,"^"),yg(xc(b),c,d),ub(c," "));if(null==b)return ub(c,"nil");if(b.Db)return b.Tb(b,c,d);if(b&&(b.i&2147483648||b.K))return b.w(null,c,d);if(ta(b)===Boolean||"number"===typeof b)return ub(c,""+A.b(b));if(null!=b&&b.constructor===Object)return ub(c,"#js "),zg.n?zg.n(Kd.a(function(c){return new W(null,
2,5,X,[jd.b(c),b[c]],null)},Jc(b)),yg,c,d):zg.call(null,Kd.a(function(c){return new W(null,2,5,X,[jd.b(c),b[c]],null)},Jc(b)),yg,c,d);if(b instanceof Array)return ug(c,yg,"#js ["," ","]",d,b);if("string"==typeof b)return r(oa.b(d))?ub(c,xg(b)):ub(c,b);if(uc(b))return vg.d(c,J(["#\x3c",""+A.b(b),"\x3e"],0));if(b instanceof Date){var e=function(b,c){for(var d=""+A.b(b);;)if(O(d)<c)d="0"+A.b(d);else return d};return vg.d(c,J(['#inst "',""+A.b(b.getUTCFullYear()),"-",e(b.getUTCMonth()+1,2),"-",e(b.getUTCDate(),
2),"T",e(b.getUTCHours(),2),":",e(b.getUTCMinutes(),2),":",e(b.getUTCSeconds(),2),".",e(b.getUTCMilliseconds(),3),"-",'00:00"'],0))}return b instanceof RegExp?vg.d(c,J(['#"',b.source,'"'],0)):(b?b.i&2147483648||b.K||(b.i?0:s(vb,b)):s(vb,b))?wb(b,c,d):u?vg.d(c,J(["#\x3c",""+A.b(b),"\x3e"],0)):null}return null};
function Bg(a,b){var c=new ea;a:{var d=new Kb(c);Ag(F(a),d,b);for(var e=E(I(a)),f=null,h=0,k=0;;)if(k<h){var l=f.J(null,k);ub(d," ");Ag(l,d,b);k+=1}else if(e=E(e))f=e,Ic(f)?(e=Hb(f),h=Ib(f),f=e,l=O(e),e=h,h=l):(l=F(f),ub(d," "),Ag(l,d,b),e=I(f),f=null,h=0),k=0;else break a}return c}
var Cg=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=ka();return Bc(a)?"":""+A.b(Bg(a,b))}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}();function zg(a,b,c,d){return ug(c,function(a,c,d){b.c?b.c(Ta(a),c,d):b.call(null,Ta(a),c,d);ub(c," ");return b.c?b.c(Ua(a),c,d):b.call(null,Ua(a),c,d)},"{",", ","}",d,E(a))}ac.prototype.K=!0;
ac.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};V.prototype.K=!0;V.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};Bf.prototype.K=!0;Bf.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};vf.prototype.K=!0;vf.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};$.prototype.K=!0;$.prototype.w=function(a,b,c){return ug(b,Ag,"["," ","]",c,this)};Ue.prototype.K=!0;Ue.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};
cg.prototype.K=!0;cg.prototype.w=function(a,b,c){return ug(b,Ag,"#{"," ","}",c,this)};ye.prototype.K=!0;ye.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};gd.prototype.K=!0;gd.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};kc.prototype.K=!0;kc.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};xf.prototype.K=!0;xf.prototype.w=function(a,b,c){return zg(this,Ag,b,c)};wf.prototype.K=!0;wf.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};
Ae.prototype.K=!0;Ae.prototype.w=function(a,b,c){return ug(b,Ag,"["," ","]",c,this)};Qf.prototype.K=!0;Qf.prototype.w=function(a,b,c){return zg(this,Ag,b,c)};$f.prototype.K=!0;$f.prototype.w=function(a,b,c){return ug(b,Ag,"#{"," ","}",c,this)};od.prototype.K=!0;od.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};Yf.prototype.K=!0;Yf.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};Y.prototype.K=!0;Y.prototype.w=function(a,b,c){return ug(b,Ag,"["," ","]",c,this)};
W.prototype.K=!0;W.prototype.w=function(a,b,c){return ug(b,Ag,"["," ","]",c,this)};He.prototype.K=!0;He.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};cd.prototype.K=!0;cd.prototype.w=function(a,b){return ub(b,"()")};Ie.prototype.K=!0;Ie.prototype.w=function(a,b,c){return ug(b,Ag,"#queue ["," ","]",c,E(this))};la.prototype.K=!0;la.prototype.w=function(a,b,c){return zg(this,Ag,b,c)};og.prototype.K=!0;og.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};
Xf.prototype.K=!0;Xf.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};bd.prototype.K=!0;bd.prototype.w=function(a,b,c){return ug(b,Ag,"("," ",")",c,this)};W.prototype.lb=!0;W.prototype.mb=function(a,b){return Pc.a(this,b)};Ae.prototype.lb=!0;Ae.prototype.mb=function(a,b){return Pc.a(this,b)};T.prototype.lb=!0;T.prototype.mb=function(a,b){return Vb(this,b)};Zb.prototype.lb=!0;Zb.prototype.mb=function(a,b){return Vb(this,b)};
function Dg(a,b){if(a?a.gc:a)return a.gc(a,b);var c;c=Dg[m(null==a?null:a)];if(!c&&(c=Dg._,!c))throw x("IReset.-reset!",a);return c.call(null,a,b)}
var Eg=function(){function a(a,b,c,d,e){if(a?a.nc:a)return a.nc(a,b,c,d,e);var q;q=Eg[m(null==a?null:a)];if(!q&&(q=Eg._,!q))throw x("ISwap.-swap!",a);return q.call(null,a,b,c,d,e)}function b(a,b,c,d){if(a?a.mc:a)return a.mc(a,b,c,d);var e;e=Eg[m(null==a?null:a)];if(!e&&(e=Eg._,!e))throw x("ISwap.-swap!",a);return e.call(null,a,b,c,d)}function c(a,b,c){if(a?a.lc:a)return a.lc(a,b,c);var d;d=Eg[m(null==a?null:a)];if(!d&&(d=Eg._,!d))throw x("ISwap.-swap!",a);return d.call(null,a,b,c)}function d(a,b){if(a?
a.kc:a)return a.kc(a,b);var c;c=Eg[m(null==a?null:a)];if(!c&&(c=Eg._,!c))throw x("ISwap.-swap!",a);return c.call(null,a,b)}var e=null,e=function(e,h,k,l,n){switch(arguments.length){case 2:return d.call(this,e,h);case 3:return c.call(this,e,h,k);case 4:return b.call(this,e,h,k,l);case 5:return a.call(this,e,h,k,l,n)}throw Error("Invalid arity: "+arguments.length);};e.a=d;e.c=c;e.n=b;e.s=a;return e}();function Fg(a,b,c,d){this.state=a;this.j=b;this.wc=c;this.Wb=d;this.i=2153938944;this.q=16386}g=Fg.prototype;
g.B=function(){return this[ba]||(this[ba]=++ca)};g.Rb=function(a,b,c){a=E(this.Wb);for(var d=null,e=0,f=0;;)if(f<e){var h=d.J(null,f),k=P.c(h,0,null),h=P.c(h,1,null);h.n?h.n(k,this,b,c):h.call(null,k,this,b,c);f+=1}else if(a=E(a))Ic(a)?(d=Hb(a),a=Ib(a),k=d,e=O(d),d=k):(d=F(a),k=P.c(d,0,null),h=P.c(d,1,null),h.n?h.n(k,this,b,c):h.call(null,k,this,b,c),a=I(a),d=null,e=0),f=0;else return null};g.w=function(a,b,c){ub(b,"#\x3cAtom: ");Ag(this.state,b,c);return ub(b,"\x3e")};g.D=function(){return this.j};
g.ub=function(){return this.state};g.v=function(a,b){return this===b};
var Hg=function(){function a(a){return new Fg(a,null,null,null)}var b=null,c=function(){function a(c,d){var k=null;1<arguments.length&&(k=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,c,k)}function b(a,c){var d=Mc(c)?S.a(Tf,c):c,e=Q.a(d,Gg),d=Q.a(d,pa);return new Fg(a,d,e,null)}a.k=1;a.f=function(a){var c=F(a);a=G(a);return b(c,a)};a.d=b;return a}(),b=function(b,e){switch(arguments.length){case 1:return a.call(this,b);default:return c.d(b,J(arguments,1))}throw Error("Invalid arity: "+
arguments.length);};b.k=1;b.f=c.f;b.b=a;b.d=c.d;return b}();function Ig(a,b){if(a instanceof Fg){var c=a.wc;if(null!=c&&!r(c.b?c.b(b):c.call(null,b)))throw Error("Assert failed: Validator rejected reference state\n"+A.b(Cg.d(J([fd(new Zb(null,"validate","validate",1439230700,null),new Zb(null,"new-value","new-value",-1567397401,null))],0))));c=a.state;a.state=b;null!=a.Wb&&xb(a,c,b);return b}return Dg(a,b)}function K(a){return ab(a)}
var Jg=function(){function a(a,b,c,d){return a instanceof Fg?Ig(a,b.c?b.c(a.state,c,d):b.call(null,a.state,c,d)):Eg.n(a,b,c,d)}function b(a,b,c){return a instanceof Fg?Ig(a,b.a?b.a(a.state,c):b.call(null,a.state,c)):Eg.c(a,b,c)}function c(a,b){return a instanceof Fg?Ig(a,b.b?b.b(a.state):b.call(null,a.state)):Eg.a(a,b)}var d=null,e=function(){function a(c,d,e,f,t){var v=null;4<arguments.length&&(v=J(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,f,v)}function b(a,c,d,e,f){return a instanceof
Fg?Ig(a,S.s(c,a.state,d,e,f)):Eg.s(a,c,d,e,f)}a.k=4;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=I(a);var e=F(a);a=I(a);var f=F(a);a=G(a);return b(c,d,e,f,a)};a.d=b;return a}(),d=function(d,h,k,l,n){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,k);case 4:return a.call(this,d,h,k,l);default:return e.d(d,h,k,l,J(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.k=4;d.f=e.f;d.a=c;d.c=b;d.n=a;d.d=e.d;return d}(),Kg={};
function Lg(a){if(a?a.ac:a)return a.ac(a);var b;b=Lg[m(null==a?null:a)];if(!b&&(b=Lg._,!b))throw x("IEncodeJS.-clj-\x3ejs",a);return b.call(null,a)}function Mg(a){return(a?r(r(null)?null:a.$b)||(a.Cb?0:s(Kg,a)):s(Kg,a))?Lg(a):"string"===typeof a||"number"===typeof a||a instanceof T||a instanceof Zb?Ng.b?Ng.b(a):Ng.call(null,a):Cg.d(J([a],0))}
var Ng=function Og(b){if(null==b)return null;if(b?r(r(null)?null:b.$b)||(b.Cb?0:s(Kg,b)):s(Kg,b))return Lg(b);if(b instanceof T)return id(b);if(b instanceof Zb)return""+A.b(b);if(Gc(b)){var c={};b=E(b);for(var d=null,e=0,f=0;;)if(f<e){var h=d.J(null,f),k=P.c(h,0,null),h=P.c(h,1,null);c[Mg(k)]=Og(h);f+=1}else if(b=E(b))Ic(b)?(e=Hb(b),b=Ib(b),d=e,e=O(e)):(e=F(b),d=P.c(e,0,null),e=P.c(e,1,null),c[Mg(d)]=Og(e),b=I(b),d=null,e=0),f=0;else break;return c}if(Cc(b)){c=[];b=E(Kd.a(Og,b));d=null;for(f=e=0;;)if(f<
e)k=d.J(null,f),c.push(k),f+=1;else if(b=E(b))d=b,Ic(d)?(b=Hb(d),f=Ib(d),d=b,e=O(b),b=f):(b=F(d),c.push(b),b=I(d),d=null,e=0),f=0;else break;return c}return u?b:null},Pg={};function Qg(a,b){if(a?a.Zb:a)return a.Zb(a,b);var c;c=Qg[m(null==a?null:a)];if(!c&&(c=Qg._,!c))throw x("IEncodeClojure.-js-\x3eclj",a);return c.call(null,a,b)}
var Sg=function(){function a(a){return b.d(a,J([new la(null,1,[Rg,!1],null)],0))}var b=null,c=function(){function a(c,d){var k=null;1<arguments.length&&(k=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,c,k)}function b(a,c){if(a?r(r(null)?null:a.Cc)||(a.Cb?0:s(Pg,a)):s(Pg,a))return Qg(a,S.a(Uf,c));if(E(c)){var d=Mc(c)?S.a(Tf,c):c,e=Q.a(d,Rg);return function(a,b,c,d){return function y(e){return Mc(e)?rg.b(Kd.a(y,e)):Cc(e)?Yd(qc(e),Kd.a(y,e)):e instanceof Array?we(Kd.a(y,e)):ta(e)===
Object?Yd(Ye,function(){return function(a,b,c,d){return function Ra(f){return new V(null,function(a,b,c,d){return function(){for(;;){var a=E(f);if(a){if(Ic(a)){var b=Hb(a),c=O(b),h=new ld(Array(c),0);a:{for(var k=0;;)if(k<c){var l=D.a(b,k),l=new W(null,2,5,X,[d.b?d.b(l):d.call(null,l),y(e[l])],null);h.add(l);k+=1}else{b=!0;break a}b=void 0}return b?pd(h.da(),Ra(Ib(a))):pd(h.da(),null)}h=F(a);return M(new W(null,2,5,X,[d.b?d.b(h):d.call(null,h),y(e[h])],null),Ra(G(a)))}return null}}}(a,b,c,d),null,
null)}}(a,b,c,d)(Jc(e))}()):u?e:null}}(c,d,e,r(e)?jd:A)(a)}return null}a.k=1;a.f=function(a){var c=F(a);a=G(a);return b(c,a)};a.d=b;return a}(),b=function(b,e){switch(arguments.length){case 1:return a.call(this,b);default:return c.d(b,J(arguments,1))}throw Error("Invalid arity: "+arguments.length);};b.k=1;b.f=c.f;b.b=a;b.d=c.d;return b}();function Tg(a){this.pb=a;this.q=0;this.i=2153775104}
Tg.prototype.B=function(){for(var a=Cg.d(J([this],0)),b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;return b};Tg.prototype.w=function(a,b){return ub(b,'#uuid "'+A.b(this.pb)+'"')};Tg.prototype.v=function(a,b){return b instanceof Tg&&this.pb===b.pb};Tg.prototype.toString=function(){return this.pb};var Ug=new T(null,"ppath","ppath"),Vg=new T("zip","branch?","zip/branch?"),Wg=new T(null,"r","r"),Xg=new T("zip","children","zip/children"),pa=new T(null,"meta","meta"),qa=new T(null,"dup","dup"),u=new T(null,"else","else"),Gg=new T(null,"validator","validator"),Yb=new T(null,"default","default"),Yg=new T(null,"sequential","sequential"),ma=new T(null,"flush-on-newline","flush-on-newline"),Zg=new T(null,"l","l"),$g=new T("zip","make-node","zip/make-node"),oa=new T(null,"readably","readably"),ra=new T(null,
"print-length","print-length"),ah=new T(null,"pnodes","pnodes"),bh=new T(null,"changed?","changed?"),ch=new T(null,"tag","tag"),dh=new T(null,"set","set"),eh=new T(null,"end","end"),fh=new T(null,"atom","atom"),Rg=new T(null,"keywordize-keys","keywordize-keys"),gh=new T(null,"map","map"),hh=new T("mori","not-found","mori/not-found"),ih=new T("cljs.core","not-found","cljs.core/not-found");var jh,kh;function lh(a){return a.o?a.o():a.call(null)}function mh(a){return a.o?a.o():a.call(null)}var nh=function(){function a(a,b,c){return Gc(c)?hb(c,a,b):null==c?b:c instanceof Array?hc.c(c,a,b):u?gb.c(c,a,b):null}function b(a,b){return c.c(a,a.o?a.o():a.call(null),b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function oh(a,b,c,d){if(a?a.Eb:a)return a.Eb(a,b,c,d);var e;e=oh[m(null==a?null:a)];if(!e&&(e=oh._,!e))throw x("CollFold.coll-fold",a);return e.call(null,a,b,c,d)}
var qh=function ph(b,c){"undefined"===typeof jh&&(jh=function(b,c,f,h){this.$=b;this.Qa=c;this.uc=f;this.sc=h;this.q=0;this.i=917504},jh.Db=!0,jh.Bb="clojure.core.reducers/t6322",jh.Tb=function(b,c){return ub(c,"clojure.core.reducers/t6322")},jh.prototype.N=function(b,c){return gb.c(this,c,c.o?c.o():c.call(null))},jh.prototype.M=function(b,c,f){return gb.c(this.Qa,this.$.b?this.$.b(c):this.$.call(null,c),f)},jh.prototype.D=function(){return this.sc},jh.prototype.F=function(b,c){return new jh(this.$,
this.Qa,this.uc,c)});return new jh(c,b,ph,null)},sh=function rh(b,c){"undefined"===typeof kh&&(kh=function(b,c,f,h){this.$=b;this.Qa=c;this.rc=f;this.tc=h;this.q=0;this.i=917504},kh.Db=!0,kh.Bb="clojure.core.reducers/t6328",kh.Tb=function(b,c){return ub(c,"clojure.core.reducers/t6328")},kh.prototype.Eb=function(b,c,f,h){return oh(this.Qa,c,f,this.$.b?this.$.b(h):this.$.call(null,h))},kh.prototype.N=function(b,c){return gb.c(this.Qa,this.$.b?this.$.b(c):this.$.call(null,c),c.o?c.o():c.call(null))},
kh.prototype.M=function(b,c,f){return gb.c(this.Qa,this.$.b?this.$.b(c):this.$.call(null,c),f)},kh.prototype.D=function(){return this.tc},kh.prototype.F=function(b,c){return new kh(this.$,this.Qa,this.rc,c)});return new kh(c,b,rh,null)},th=function(){function a(a,b){return sh(b,function(b){return function(){var c=null;return c=function(c,e,h){switch(arguments.length){case 0:return b.o?b.o():b.call(null);case 2:return b.a?b.a(c,a.b?a.b(e):a.call(null,e)):b.call(null,c,a.b?a.b(e):a.call(null,e));case 3:return b.a?
b.a(c,a.a?a.a(e,h):a.call(null,e,h)):b.call(null,c,a.a?a.a(e,h):a.call(null,e,h))}throw Error("Invalid arity: "+arguments.length);}}()})}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),uh=function(){function a(a,b){return sh(b,function(b){return function(){var c=null;return c=function(c,e,h){switch(arguments.length){case 0:return b.o?
b.o():b.call(null);case 2:return r(a.b?a.b(e):a.call(null,e))?b.a?b.a(c,e):b.call(null,c,e):c;case 3:return r(a.a?a.a(e,h):a.call(null,e,h))?b.c?b.c(c,e,h):b.call(null,c,e,h):c}throw Error("Invalid arity: "+arguments.length);}}()})}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),vh=function(){function a(a){return sh(a,
function(a){return function(){var b=null;return b=function(b,d){switch(arguments.length){case 0:return a.o?a.o():a.call(null);case 2:return Fc(d)?c.b(d).M(null,a,b):a.a?a.a(b,d):a.call(null,b,d)}throw Error("Invalid arity: "+arguments.length);}}()})}function b(){return function(a){return c.b(a)}}var c=null,c=function(c){switch(arguments.length){case 0:return b.call(this);case 1:return a.call(this,c)}throw Error("Invalid arity: "+arguments.length);};c.o=b;c.b=a;return c}(),wh=function(){function a(a,
b){return uh.a(Gd(a),b)}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),xh=function(){function a(a,b){return qh(b,function(b){return function(){var c=null;return c=function(c,e,h){switch(arguments.length){case 0:return b.o?b.o():b.call(null);case 2:return r(a.b?a.b(e):a.call(null,e))?b.a?b.a(c,e):b.call(null,c,e):
new ec(c);case 3:return r(a.a?a.a(e,h):a.call(null,e,h))?b.c?b.c(c,e,h):b.call(null,c,e,h):new ec(c)}throw Error("Invalid arity: "+arguments.length);}}()})}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),yh=function(){function a(a,b){return qh(b,function(b){return function(a){return function(){var c=null;return c=
function(c,d,e){switch(arguments.length){case 0:return b.o?b.o():b.call(null);case 2:return Jg.a(a,Wc),0>ab(a)?new ec(c):b.a?b.a(c,d):b.call(null,c,d);case 3:return Jg.a(a,Wc),0>ab(a)?new ec(c):b.c?b.c(c,d,e):b.call(null,c,d,e)}throw Error("Invalid arity: "+arguments.length);}}()}(Hg.b(a))})}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);
};c.b=b;c.a=a;return c}(),zh=function(){function a(a,b){return qh(b,function(b){return function(a){return function(){var c=null;return c=function(c,d,e){switch(arguments.length){case 0:return b.o?b.o():b.call(null);case 2:return Jg.a(a,Wc),0>ab(a)?b.a?b.a(c,d):b.call(null,c,d):c;case 3:return Jg.a(a,Wc),0>ab(a)?b.c?b.c(c,d,e):b.call(null,c,d,e):c}throw Error("Invalid arity: "+arguments.length);}}()}(Hg.b(a))})}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,
c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Bh=function Ah(b,c,d,e){if(Bc(b))return d.o?d.o():d.call(null);if(O(b)<=c)return nh.c(e,d.o?d.o():d.call(null),b);if(u){var f=Yc(O(b)),h=ze.c(b,0,f);b=ze.c(b,f,O(b));return lh(function(b,c,e,f){return function(){var b=f(c),h;h=f(e);return d.a?d.a(b.o?b.o():b.call(null),mh(h)):d.call(null,b.o?b.o():b.call(null),mh(h))}}(f,h,b,function(b,f,h){return function(q){return function(){return function(){return Ah(q,
c,d,e)}}(b,f,h)}}(f,h,b)))}return null};W.prototype.Eb=function(a,b,c,d){return Bh(this,b,c,d)};oh.object=function(a,b,c,d){return nh.c(d,c.o?c.o():c.call(null),a)};oh["null"]=function(a,b,c){return c.o?c.o():c.call(null)};function Ch(a,b){var c=S.c(ig,a,b);return M(c,Vd(function(a){return function(b){return a===b}}(c),b))}
var Dh=function(){function a(a,b){return O(a)<O(b)?C.c(pc,b,a):C.c(pc,a,b)}var b=null,c=function(){function a(c,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,l)}function b(a,c,d){a=Ch(O,pc.d(d,c,J([a],0)));return C.c(Yd,F(a),G(a))}a.k=2;a.f=function(a){var c=F(a);a=I(a);var d=F(a);a=G(a);return b(c,d,a)};a.d=b;return a}(),b=function(b,e,f){switch(arguments.length){case 0:return bg;case 1:return b;case 2:return a.call(this,b,e);default:return c.d(b,
e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.k=2;b.f=c.f;b.o=function(){return bg};b.b=function(a){return a};b.a=a;b.d=c.d;return b}(),Eh=function(){function a(a,b){for(;;)if(O(b)<O(a)){var c=a;a=b;b=c}else return C.c(function(a,b){return function(a,c){return Oc(b,c)?a:Ac.a(a,c)}}(a,b),a,a)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){a=Ch(function(a){return-O(a)},
pc.d(e,d,J([a],0)));return C.c(b,F(a),G(a))}a.k=2;a.f=function(a){var b=F(a);a=I(a);var d=F(a);a=G(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.d(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.k=2;b.f=c.f;b.b=function(a){return a};b.a=a;b.d=c.d;return b}(),Fh=function(){function a(a,b){return O(a)<O(b)?C.c(function(a,c){return Oc(b,c)?Ac.a(a,c):a},a,a):C.c(Ac,a,b)}var b=null,
c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){return C.c(b,a,pc.a(e,d))}a.k=2;a.f=function(a){var b=F(a);a=I(a);var d=F(a);a=G(a);return c(b,d,a)};a.d=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.d(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.k=2;b.f=c.f;b.b=function(a){return a};b.a=a;b.d=
c.d;return b}();function Gh(a,b){return Wb.a(a,b)?new W(null,3,5,X,[null,null,a],null):new W(null,3,5,X,[a,b,null],null)}function Hh(a){return E(a)?C.c(function(a,c){var d=P.c(c,0,null),e=P.c(c,1,null);return R.c(a,d,e)},we(Od.a(S.a(Xc,Ve(a)),null)),a):null}
function Ih(a,b,c){var d=Q.a(a,c),e=Q.a(b,c),f=Jh.a?Jh.a(d,e):Jh.call(null,d,e),h=P.c(f,0,null),k=P.c(f,1,null),f=P.c(f,2,null);a=Oc(a,c);b=Oc(b,c);d=a&&b&&(null!=f||null==d&&null==e);return new W(null,3,5,X,[!a||null==h&&d?null:new af([c,h]),!b||null==k&&d?null:new af([c,k]),d?new af([c,f]):null],null)}
var Kh=function(){function a(a,b,c){return C.c(function(a,b){return rg.b(Kd.c(Zf,a,b))},new W(null,3,5,X,[null,null,null],null),Kd.a(Id.c(Ih,a,b),c))}function b(a,b){return c.c(a,b,Dh.a(Ve(a),Ve(b)))}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function Lh(a,b){return we(Kd.a(Hh,Kh.c(Hc(a)?a:we(a),Hc(b)?b:we(b),pg.b(function(){var c=O(a),d=O(b);return c>d?c:d}()))))}function Mh(a,b){return new W(null,3,5,X,[Cd(Fh.a(a,b)),Cd(Fh.a(b,a)),Cd(Eh.a(a,b))],null)}function Nh(a){if(a?a.qc:a)return a.qc(a);var b;b=Nh[m(null==a?null:a)];if(!b&&(b=Nh._,!b))throw x("EqualityPartition.equality-partition",a);return b.call(null,a)}
function Oh(a,b){if(a?a.pc:a)return a.pc(a,b);var c;c=Oh[m(null==a?null:a)];if(!c&&(c=Oh._,!c))throw x("Diff.diff-similar",a);return c.call(null,a,b)}Nh._=function(a){return(a?a.i&1024||a.cc||(a.i?0:s(Pa,a)):s(Pa,a))?gh:(a?a.i&4096||a.jc||(a.i?0:s(Va,a)):s(Va,a))?dh:(a?a.i&16777216||a.ic||(a.i?0:s(mb,a)):s(mb,a))?Yg:Yb?fh:null};Nh["boolean"]=function(){return fh};Nh["function"]=function(){return fh};Nh.array=function(){return Yg};Nh.number=function(){return fh};Nh.string=function(){return fh};
Nh["null"]=function(){return fh};Oh._=function(a,b){return function(){switch(Nh(a)instanceof T?Nh(a).sa:null){case "map":return Kh;case "sequential":return Lh;case "set":return Mh;case "atom":return Gh;default:throw Error("No matching clause: "+A.b(Nh(a)));}}().call(null,a,b)};Oh["boolean"]=function(a,b){return Gh(a,b)};Oh["function"]=function(a,b){return Gh(a,b)};Oh.array=function(a,b){return Lh(a,b)};Oh.number=function(a,b){return Gh(a,b)};Oh.string=function(a,b){return Gh(a,b)};
Oh["null"]=function(a,b){return Gh(a,b)};function Jh(a,b){return Wb.a(a,b)?new W(null,3,5,X,[null,null,a],null):Wb.a(Nh(a),Nh(b))?Oh(a,b):Gh(a,b)};function Ph(a){if(a?a.Ub:a)return a.Ub();var b;b=Ph[m(null==a?null:a)];if(!b&&(b=Ph._,!b))throw x("PushbackReader.read-char",a);return b.call(null,a)}function Qh(a,b){if(a?a.Vb:a)return a.Vb(0,b);var c;c=Qh[m(null==a?null:a)];if(!c&&(c=Qh._,!c))throw x("PushbackReader.unread",a);return c.call(null,a,b)}function Rh(a,b,c){this.r=a;this.buffer=b;this.Fb=c}Rh.prototype.Ub=function(){return 0===this.buffer.length?(this.Fb+=1,this.r[this.Fb]):this.buffer.pop()};Rh.prototype.Vb=function(a,b){return this.buffer.push(b)};
function Sh(a){var b=!/[^\t\n\r ]/.test(a);return r(b)?b:","===a}var Th=function(){function a(a,d){var e=null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){throw Error(S.a(A,b));}a.k=1;a.f=function(a){F(a);a=G(a);return b(0,a)};a.d=b;return a}();
function Uh(a,b){for(var c=new ea(b),d=Ph(a);;){var e;if(!(e=null==d||Sh(d))){e=d;var f="#"!==e;e=f?(f="'"!==e)?(f=":"!==e)?Vh.b?Vh.b(e):Vh.call(null,e):f:f:f}if(e)return Qh(a,d),c.toString();c.append(d);d=Ph(a)}}function Wh(a){for(;;){var b=Ph(a);if("\n"===b||"\r"===b||null==b)return a}}var Xh=tg("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"),Yh=tg("^([-+]?[0-9]+)/([0-9]+)$"),Zh=tg("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"),$h=tg("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function ai(a,b){var c=a.exec(b);return null!=c&&c[0]===b?1===c.length?c[0]:c:null}var bi=tg("^[0-9A-Fa-f]{2}$"),ci=tg("^[0-9A-Fa-f]{4}$");function di(a,b,c,d){return r(sg(a,d))?d:Th.d(b,J(["Unexpected unicode escape \\",c,d],0))}function ei(a){return String.fromCharCode(parseInt(a,16))}
function fi(a){var b=Ph(a),c="t"===b?"\t":"r"===b?"\r":"n"===b?"\n":"\\"===b?"\\":'"'===b?'"':"b"===b?"\b":"f"===b?"\f":null;r(c)?a=c:"x"===b?(c=(new ea(Ph(a),Ph(a))).toString(),a=ei(di(bi,a,b,c))):"u"===b?(c=(new ea(Ph(a),Ph(a),Ph(a),Ph(a))).toString(),a=ei(di(ci,a,b,c))):a=/[^0-9]/.test(b)?u?Th.d(a,J(["Unexpected unicode escape \\",b],0)):null:String.fromCharCode(b);return a}
function gi(a,b){for(var c=yb(qe);;){var d;a:{d=Sh;for(var e=b,f=Ph(e);;)if(r(d.b?d.b(f):d.call(null,f)))f=Ph(e);else{d=f;break a}d=void 0}r(d)||Th.d(b,J(["EOF while reading"],0));if(a===d)return Ab(c);e=Vh.b?Vh.b(d):Vh.call(null,d);r(e)?d=e.a?e.a(b,d):e.call(null,b,d):(Qh(b,d),d=hi.n?hi.n(b,!0,null,!0):hi.call(null,b,!0,null));c=d===b?c:wd.a(c,d)}}function ii(a,b){return Th.d(a,J(["Reader for ",b," not implemented yet"],0))}
function ji(a,b){var c=Ph(a),d=ki.b?ki.b(c):ki.call(null,c);if(r(d))return d.a?d.a(a,b):d.call(null,a,b);d=li.a?li.a(a,c):li.call(null,a,c);return r(d)?d:Th.d(a,J(["No dispatch macro for ",c],0))}function mi(a,b){return Th.d(a,J(["Unmached delimiter ",b],0))}function ni(a){return S.a(fd,gi(")",a))}function oi(a){return gi("]",a)}
function pi(a){var b=gi("}",a),c=O(b);if("number"!==typeof c||isNaN(c)||Infinity===c||parseFloat(c)!==parseInt(c,10))throw Error("Argument must be an integer: "+A.b(c));0!==(c&1)&&Th.d(a,J(["Map literal must contain an even number of forms"],0));return S.a(Tf,b)}function qi(a){for(var b=new ea,c=Ph(a);;){if(null==c)return Th.d(a,J(["EOF while reading"],0));if("\\"===c)b.append(fi(a)),c=Ph(a);else{if('"'===c)return b.toString();if(Yb)b.append(c),c=Ph(a);else return null}}}
function ri(a){for(var b=new ea,c=Ph(a);;){if(null==c)return Th.d(a,J(["EOF while reading"],0));if("\\"===c){b.append(c);var d=Ph(a);if(null==d)return Th.d(a,J(["EOF while reading"],0));var e=function(){var a=b;a.append(d);return a}(),f=Ph(a),b=e,c=f}else{if('"'===c)return b.toString();if(u)e=function(){var a=b;a.append(c);return a}(),f=Ph(a),b=e,c=f;else return null}}}
function si(a,b){var c=Uh(a,b);if(r(-1!=c.indexOf("/")))c=$b.a(ad.c(c,0,c.indexOf("/")),ad.c(c,c.indexOf("/")+1,c.length));else var d=$b.b(c),c="nil"===c?null:"true"===c?!0:"false"===c?!1:u?d:null;return c}function ti(a){var b=Uh(a,Ph(a)),c=ai($h,b),b=c[0],d=c[1],c=c[2];return void 0!==d&&":/"===d.substring(d.length-2,d.length)||":"===c[c.length-1]||-1!==b.indexOf("::",1)?Th.d(a,J(["Invalid token: ",b],0)):null!=d&&0<d.length?jd.a(d.substring(0,d.indexOf("/")),c):jd.b(b)}
function ui(a){return function(b){return Da(Da(H,hi.n?hi.n(b,!0,null,!0):hi.call(null,b,!0,null)),a)}}function vi(){return function(a){return Th.d(a,J(["Unreadable form"],0))}}
function wi(a){var b;b=hi.n?hi.n(a,!0,null,!0):hi.call(null,a,!0,null);b=b instanceof Zb?new la(null,1,[ch,b],null):"string"===typeof b?new la(null,1,[ch,b],null):b instanceof T?new af([b,!0]):u?b:null;Gc(b)||Th.d(a,J(["Metadata must be Symbol,Keyword,String or Map"],0));var c=hi.n?hi.n(a,!0,null,!0):hi.call(null,a,!0,null);return(c?c.i&262144||c.oc||(c.i?0:s(db,c)):s(db,c))?N(c,Zf.d(J([xc(c),b],0))):Th.d(a,J(["Metadata can only be applied to IWithMetas"],0))}function xi(a){return eg(gi("}",a))}
function yi(a){return tg(ri(a))}function zi(a){hi.n?hi.n(a,!0,null,!0):hi.call(null,a,!0,null);return a}function Vh(a){return'"'===a?qi:":"===a?ti:";"===a?Wh:"'"===a?ui(new Zb(null,"quote","quote",1377916282,null)):"@"===a?ui(new Zb(null,"deref","deref",1494944732,null)):"^"===a?wi:"`"===a?ii:"~"===a?ii:"("===a?ni:")"===a?mi:"["===a?oi:"]"===a?mi:"{"===a?pi:"}"===a?mi:"\\"===a?Ph:"#"===a?ji:null}function ki(a){return"{"===a?xi:"\x3c"===a?vi():'"'===a?yi:"!"===a?Wh:"_"===a?zi:null}
function hi(a,b,c){for(;;){var d=Ph(a);if(null==d)return r(b)?Th.d(a,J(["EOF while reading"],0)):c;if(!Sh(d))if(";"===d)a=Wh.a?Wh.a(a,d):Wh.call(null,a);else if(u){var e=Vh(d);if(r(e))e=e.a?e.a(a,d):e.call(null,a,d);else{var e=a,f=void 0;!(f=!/[^0-9]/.test(d))&&(f=void 0,f="+"===d||"-"===d)&&(f=Ph(e),Qh(e,f),f=!/[^0-9]/.test(f));if(f)a:{e=a;d=new ea(d);for(f=Ph(e);;){var h;h=null==f;h||(h=(h=Sh(f))?h:Vh.b?Vh.b(f):Vh.call(null,f));if(r(h)){Qh(e,f);f=d=d.toString();h=void 0;if(r(ai(Xh,f)))if(f=ai(Xh,
f),null!=f[2])h=0;else{h=r(f[3])?[f[3],10]:r(f[4])?[f[4],16]:r(f[5])?[f[5],8]:r(f[6])?[f[7],parseInt(f[6],10)]:u?[null,null]:null;var k=h[0];null==k?h=null:(h=parseInt(k,h[1]),h="-"===f[1]?-h:h)}else h=void 0,r(ai(Yh,f))?(f=ai(Yh,f),h=parseInt(f[1],10)/parseInt(f[2],10)):h=r(ai(Zh,f))?parseFloat(f):null;f=h;e=r(f)?f:Th.d(e,J(["Invalid number format [",d,"]"],0));break a}d.append(f);f=Ph(e)}e=void 0}else e=u?si(a,d):null}if(e!==a)return e}else return null}}
function Ai(a){if(Wb.a(3,O(a)))return a;if(3<O(a))return ad.c(a,0,3);if(u)for(a=new ea(a);;)if(3>a.Va.length)a=a.append("0");else return a.toString();else return null}var Bi=function(a,b){return function(c,d){return Q.a(r(d)?b:a,c)}}(new W(null,13,5,X,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),new W(null,13,5,X,[null,31,29,31,30,31,30,31,31,30,31,30,31],null)),Ci=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Di(a){a=parseInt(a,10);return sa(isNaN(a))?a:null}function Ei(a,b,c,d){a<=b&&b<=c||Th.d(null,J([""+A.b(d)+" Failed:  "+A.b(a)+"\x3c\x3d"+A.b(b)+"\x3c\x3d"+A.b(c)],0));return b}
function Fi(a){var b=sg(Ci,a);P.c(b,0,null);var c=P.c(b,1,null),d=P.c(b,2,null),e=P.c(b,3,null),f=P.c(b,4,null),h=P.c(b,5,null),k=P.c(b,6,null),l=P.c(b,7,null),n=P.c(b,8,null),q=P.c(b,9,null),t=P.c(b,10,null);if(sa(b))return Th.d(null,J(["Unrecognized date/time syntax: "+A.b(a)],0));a=Di(c);var b=function(){var a=Di(d);return r(a)?a:1}(),c=function(){var a=Di(e);return r(a)?a:1}(),v=function(){var a=Di(f);return r(a)?a:0}(),w=function(){var a=Di(h);return r(a)?a:0}(),y=function(){var a=Di(k);return r(a)?
a:0}(),B=function(){var a=Di(Ai(l));return r(a)?a:0}(),n=(Wb.a(n,"-")?-1:1)*(60*function(){var a=Di(q);return r(a)?a:0}()+function(){var a=Di(t);return r(a)?a:0}());return new W(null,8,5,X,[a,Ei(1,b,12,"timestamp month field must be in range 1..12"),Ei(1,c,Bi.a?Bi.a(b,0===(a%4+4)%4&&(0!==(a%100+100)%100||0===(a%400+400)%400)):Bi.call(null,b,0===(a%4+4)%4&&(0!==(a%100+100)%100||0===(a%400+400)%400)),"timestamp day field must be in range 1..last day in month"),Ei(0,v,23,"timestamp hour field must be in range 0..23"),
Ei(0,w,59,"timestamp minute field must be in range 0..59"),Ei(0,y,Wb.a(w,59)?60:59,"timestamp second field must be in range 0..60"),Ei(0,B,999,"timestamp millisecond field must be in range 0..999"),n],null)}
var Gi=Hg.b(new la(null,4,["inst",function(a){var b;if("string"===typeof a)if(b=Fi(a),r(b)){a=P.c(b,0,null);var c=P.c(b,1,null),d=P.c(b,2,null),e=P.c(b,3,null),f=P.c(b,4,null),h=P.c(b,5,null),k=P.c(b,6,null);b=P.c(b,7,null);b=new Date(Date.UTC(a,c-1,d,e,f,h,k)-6E4*b)}else b=Th.d(null,J(["Unrecognized date/time syntax: "+A.b(a)],0));else b=Th.d(null,J(["Instance literal expects a string for its timestamp."],0));return b},"uuid",function(a){return"string"===typeof a?new Tg(a):Th.d(null,J(["UUID literal expects a string as its representation."],
0))},"queue",function(a){return Hc(a)?Yd(Je,a):Th.d(null,J(["Queue literal expects a vector for its elements."],0))},"js",function(a){if(Hc(a)){var b=[];a=E(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.J(null,e);b.push(f);e+=1}else if(a=E(a))c=a,Ic(c)?(a=Hb(c),e=Ib(c),c=a,d=O(a),a=e):(a=F(c),b.push(a),a=I(c),c=null,d=0),e=0;else break;return b}if(Gc(a)){b={};a=E(a);c=null;for(e=d=0;;)if(e<d){var h=c.J(null,e),f=P.c(h,0,null),h=P.c(h,1,null);b[id(f)]=h;e+=1}else if(a=E(a))Ic(a)?(d=Hb(a),a=Ib(a),c=d,
d=O(d)):(d=F(a),c=P.c(d,0,null),d=P.c(d,1,null),b[id(c)]=d,a=I(a),c=null,d=0),e=0;else break;return b}return u?Th.d(null,J(["JS literal expects a vector or map containing only string or unqualified keyword keys"],0)):null}],null)),Hi=Hg.b(null);
function li(a,b){var c=si(a,b),d=Q.a(ab(Gi),""+A.b(c)),e=ab(Hi);return r(d)?d.b?d.b(hi(a,!0,null)):d.call(null,hi(a,!0,null)):r(e)?e.a?e.a(c,hi(a,!0,null)):e.call(null,c,hi(a,!0,null)):u?Th.d(a,J(["Could not find tag parser for ",""+A.b(c)," in ",Cg.d(J([Ve(ab(Gi))],0))],0)):null};p("mori.apply",S);p("mori.count",O);p("mori.distinct",function(a){return function c(a,e){return new V(null,function(){return function(a,d){for(;;){var e=a,l=P.c(e,0,null);if(e=E(e))if(Oc(d,l))l=G(e),e=d,a=l,d=e;else return M(l,c(G(e),pc.a(d,l)));else return null}}.call(null,a,e)},null,null)}(a,bg)});p("mori.empty",qc);p("mori.first",F);p("mori.rest",G);p("mori.seq",E);p("mori.conj",pc);p("mori.cons",M);
p("mori.find",function(a,b){return null!=a&&Ec(a)&&Oc(a,b)?new W(null,2,5,X,[b,Q.a(a,b)],null):null});p("mori.nth",P);p("mori.last",oc);p("mori.assoc",R);p("mori.dissoc",tc);p("mori.get_in",$d);p("mori.update_in",ae);p("mori.assoc_in",function Ii(b,c,d){var e=P.c(c,0,null);return(c=$c(c))?R.c(b,e,Ii(Q.a(b,e),c,d)):R.c(b,e,d)});p("mori.fnil",Jd);p("mori.disj",Ac);p("mori.pop",zc);p("mori.peek",yc);p("mori.hash",Tb);p("mori.get",Q);p("mori.has_key",Oc);p("mori.is_empty",Bc);p("mori.reverse",ed);
p("mori.take",Md);p("mori.drop",Nd);p("mori.take_nth",function Ji(b,c){return new V(null,function(){var d=E(c);return d?M(F(d),Ji(b,Nd(b,d))):null},null,null)});p("mori.partition",Zd);p("mori.partition_all",jg);p("mori.partition_by",function Ki(b,c){return new V(null,function(){var d=E(c);if(d){var e=F(d),f=b.b?b.b(e):b.call(null,e),e=M(e,lg(function(c,d){return function(c){return Wb.a(d,b.b?b.b(c):b.call(null,c))}}(e,f,d,d),I(d)));return M(e,Ki(b,E(Nd(O(e),d))))}return null},null,null)});
p("mori.iterate",function Li(b,c){return M(c,new V(null,function(){return Li(b,b.b?b.b(c):b.call(null,c))},null,null))});p("mori.into",Yd);p("mori.merge",Zf);p("mori.subvec",ze);p("mori.take_while",lg);p("mori.drop_while",function(a,b){return new V(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=E(b),f;f=(f=e)?a.b?a.b(F(e)):a.call(null,F(e)):f;if(r(f))f=a,e=G(e),a=f,b=e;else return e}}),null,null)});
p("mori.group_by",function(a,b){return C.c(function(b,d){var e=a.b?a.b(d):a.call(null,d);return R.c(b,e,pc.a(Q.c(b,e,qe),d))},Ye,b)});p("mori.interpose",function(a,b){return Nd(1,Qd.a(Od.b(a),b))});p("mori.interleave",Qd);p("mori.concat",td);p("mori.conj1",function(a,b){return a.G(null,b)});function Xd(a){return a instanceof Array||Fc(a)}p("mori.flatten",function(a){return Ud(function(a){return!Xd(a)},G(Wd(a)))});p("mori.lazy_seq",function(a){return new V(null,a,null,null)});p("mori.keys",Ve);
p("mori.select_keys",function(a,b){for(var c=Ye,d=E(b);;)if(d)var e=F(d),f=Q.c(a,e,ih),c=Bd.a(f,ih)?R.c(c,e,f):c,d=I(d);else return c});p("mori.vals",We);p("mori.prim_seq",mc);p("mori.map",Kd);p("mori.mapcat",Sd);p("mori.reduce",C);p("mori.reduce_kv",function(a,b,c){return null!=c?hb(c,a,b):b});p("mori.filter",Ud);p("mori.remove",Vd);p("mori.some",Ed);p("mori.every",Dd);p("mori.equals",Wb);p("mori.range",pg);p("mori.repeat",Od);p("mori.repeatedly",Pd);p("mori.sort",Sc);p("mori.sort_by",Tc);
p("mori.into_array",xa);p("mori.subseq",ng);p("mori.rmap",th);p("mori.rfilter",uh);p("mori.rremove",wh);p("mori.rtake",yh);p("mori.rtake_while",xh);p("mori.rdrop",zh);p("mori.rflatten",vh);p("mori.list",fd);p("mori.vector",xe);p("mori.array_map",Uf);p("mori.hash_map",Tf);p("mori.set",eg);p("mori.sorted_set",fg);p("mori.sorted_set_by",gg);p("mori.sorted_map",Vf);p("mori.sorted_map_by",Wf);
p("mori.queue",function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return Yd.a?Yd.a(Je,a):Yd.call(null,Je,a)}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}());p("mori.keyword",jd);p("mori.symbol",$b);p("mori.zipmap",function(a,b){for(var c=yb(Ye),d=E(a),e=E(b);;)if(d&&e)c=xd.c(c,F(d),F(e)),d=I(d),e=I(e);else return Ab(c)});
p("mori.is_list",function(a){return a?a.i&33554432||a.Ec?!0:a.i?!1:s(nb,a):s(nb,a)});p("mori.is_seq",Mc);p("mori.is_vector",Hc);p("mori.is_map",Gc);p("mori.is_set",Dc);p("mori.is_keyword",function(a){return a instanceof T});p("mori.is_symbol",function(a){return a instanceof Zb});p("mori.is_collection",Cc);p("mori.is_sequential",Fc);p("mori.is_associative",Ec);p("mori.is_counted",ic);p("mori.is_indexed",jc);p("mori.is_reduceable",function(a){return a?a.i&524288||a.Nb?!0:a.i?!1:s(fb,a):s(fb,a)});
p("mori.is_seqable",function(a){return a?a.i&8388608||a.hc?!0:a.i?!1:s(kb,a):s(kb,a)});p("mori.is_reversible",dd);p("mori.union",Dh);p("mori.intersection",Eh);p("mori.difference",Fh);p("mori.is_subset",function(a,b){return O(a)<=O(b)&&Dd(function(a){return Oc(b,a)},a)});p("mori.is_superset",function(a,b){return O(a)>=O(b)&&Dd(function(b){return Oc(a,b)},b)});p("mori.partial",Id);p("mori.comp",Hd);
p("mori.pipeline",function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return C.a?C.a(function(a,b){return b.b?b.b(a):b.call(null,a)},a):C.call(null,function(a,b){return b.b?b.b(a):b.call(null,a)},a)}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}());
p("mori.curry",function(){function a(a,d){var e=null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){return function(e){return S.a(a,M.a?M.a(e,b):M.call(null,e,b))}}a.k=1;a.f=function(a){var d=F(a);a=G(a);return b(d,a)};a.d=b;return a}());
p("mori.juxt",function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return function(){function b(a){var c=null;0<arguments.length&&(c=J(Array.prototype.slice.call(arguments,0),0));return e.call(this,c)}function e(b){return xa.b?xa.b(Kd.a?Kd.a(function(a){return S.a(a,b)},a):Kd.call(null,function(a){return S.a(a,b)},a)):xa.call(null,Kd.a?Kd.a(function(a){return S.a(a,b)},a):Kd.call(null,function(a){return S.a(a,
b)},a))}b.k=0;b.f=function(a){a=E(a);return e(a)};b.d=e;return b}()}a.k=0;a.f=function(a){a=E(a);return b(a)};a.d=b;return a}());
p("mori.knit",function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return function(b){return xa.b?xa.b(Kd.c?Kd.c(function(a,b){return a.b?a.b(b):a.call(null,b)},a,b):Kd.call(null,function(a,b){return a.b?a.b(b):a.call(null,b)},a,b)):xa.call(null,Kd.c?Kd.c(function(a,b){return a.b?a.b(b):a.call(null,b)},a,b):Kd.call(null,function(a,b){return a.b?a.b(b):a.call(null,b)},a,b))}}a.k=0;a.f=function(a){a=E(a);return b(a)};
a.d=b;return a}());p("mori.diff",Jh);p("mori.sum",function(a,b){return a+b});p("mori.inc",function(a){return a+1});p("mori.dec",function(a){return a-1});p("mori.is_even",function(a){return 0===(a%2+2)%2});p("mori.is_odd",function(a){return 1===(a%2+2)%2});p("mori.each",function(a,b){for(var c=E(a),d=null,e=0,f=0;;)if(f<e){var h=d.J(null,f);b.b?b.b(h):b.call(null,h);f+=1}else if(c=E(c))d=c,Ic(d)?(c=Hb(d),e=Ib(d),d=c,h=O(c),c=e,e=h):(h=F(d),b.b?b.b(h):b.call(null,h),c=I(d),d=null,e=0),f=0;else return null});
p("mori.identity",Fd);p("mori.constantly",function(a){return function(){function b(b){0<arguments.length&&J(Array.prototype.slice.call(arguments,0),0);return a}b.k=0;b.f=function(b){E(b);return a};b.d=function(){return a};return b}()});p("mori.clj_to_js",Ng);
p("mori.js_to_clj",function(){function a(a,b){return Sg.d(a,J([Rg,b],0))}function b(a){return Sg.b(a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}());p("mori.parse",function(a){return hi(new Rh(a,[],-1),!1,null)});
p("mori.configure",function(a,b){switch(a){case "print-length":return ia=b;case "print-level":return ja=b;default:throw Error("No matching clause: "+A.b(a));}});
p("mori.proxy",function(a){if("undefined"!==typeof Proxy)return Proxy.create(function(){return{has:function(b){return Oc(a,b)},hasOwn:function(b){return Oc(a,b)},get:function(b,c){var d=Q.c?Q.c(a,c,hh):Q.call(null,a,c,hh);return hd(d,hh)?ic(a)&&"length"===c?O.b?O.b(a):O.call(null,a):null:u?d:null},set:function(){return null},enumerate:function(){return xa.b?xa.b(Ve.b?Ve.b(a):Ve.call(null,a)):xa.call(null,Ve.b?Ve.b(a):Ve.call(null,a))},keys:function(){return Gc(a)?xa.b?xa.b(Ve.b?Ve.b(a):Ve.call(null,
a)):xa.call(null,Ve.b?Ve.b(a):Ve.call(null,a)):Hc(a)?xa.b?xa.b(pg.b?pg.b(O.b?O.b(a):O.call(null,a)):pg.call(null,O.b?O.b(a):O.call(null,a))):xa.call(null,pg.b?pg.b(O.b?O.b(a):O.call(null,a)):pg.call(null,O.b?O.b(a):O.call(null,a))):null}}}());throw Error("ES6 Proxy not supported!");});V.prototype.inspect=function(){return this.toString()};ac.prototype.inspect=function(){return this.toString()};kc.prototype.inspect=function(){return this.toString()};Bf.prototype.inspect=function(){return this.toString()};
vf.prototype.inspect=function(){return this.toString()};wf.prototype.inspect=function(){return this.toString()};bd.prototype.inspect=function(){return this.toString()};gd.prototype.inspect=function(){return this.toString()};cd.prototype.inspect=function(){return this.toString()};W.prototype.inspect=function(){return this.toString()};od.prototype.inspect=function(){return this.toString()};ye.prototype.inspect=function(){return this.toString()};Ae.prototype.inspect=function(){return this.toString()};
$.prototype.inspect=function(){return this.toString()};Y.prototype.inspect=function(){return this.toString()};la.prototype.inspect=function(){return this.toString()};xf.prototype.inspect=function(){return this.toString()};Qf.prototype.inspect=function(){return this.toString()};$f.prototype.inspect=function(){return this.toString()};cg.prototype.inspect=function(){return this.toString()};og.prototype.inspect=function(){return this.toString()};T.prototype.inspect=function(){return this.toString()};
Zb.prototype.inspect=function(){return this.toString()};Ie.prototype.inspect=function(){return this.toString()};He.prototype.inspect=function(){return this.toString()};p("mori._equiv",function(a,b){return a.Hc(b)});p("mori._keys",function(a){return a.keys()});p("mori._values",function(a){return a.values()});p("mori._entries",function(a){return a.entries()});p("mori._has",function(a){return a.has()});p("mori._get",function(a){return a.get()});p("mori._forEach",function(a){return a.forEach()});
p("mori._next",function(a){return a.next()});p("mori.mutable.thaw",function(a){return yb(a)});p("mori.mutable.freeze",vd);p("mori.mutable.conj1",function(a,b){return a.Ka(null,b)});p("mori.mutable.conj",wd);p("mori.mutable.assoc",xd);p("mori.mutable.dissoc",yd);p("mori.mutable.pop",function(a){return Eb(a)});p("mori.mutable.disj",zd);function Mi(a,b,c,d){return N(new W(null,2,5,X,[d,null],null),new la(null,3,[$g,c,Xg,b,Vg,a],null))}function Ni(a){return a.b?a.b(0):a.call(null,0)}function Oi(a){return Vg.b(xc(a)).call(null,Ni(a))}function Pi(a){if(r(Oi(a)))return Xg.b(xc(a)).call(null,Ni(a));throw"called children on a leaf node";}function Qi(a,b,c){return $g.b(xc(a)).call(null,b,c)}
function Ri(a){if(r(Oi(a))){var b=P.c(a,0,null),c=P.c(a,1,null),d=Pi(a),e=P.c(d,0,null),f=$c(d);return r(d)?N(new W(null,2,5,X,[e,new la(null,4,[Zg,qe,ah,r(c)?pc.a(ah.b(c),b):new W(null,1,5,X,[b],null),Ug,c,Wg,f],null)],null),xc(a)):null}return null}
function Si(a){var b=P.c(a,0,null),c=P.c(a,1,null),d=Mc(c)?S.a(Tf,c):c,c=Q.a(d,Zg),e=Q.a(d,Ug),f=Q.a(d,ah),h=Q.a(d,Wg),d=Q.a(d,bh);return r(f)?(f=yc(f),N(r(d)?new W(null,2,5,X,[Qi(a,f,td.a(c,M(b,h))),r(e)?R.c(e,bh,!0):e],null):new W(null,2,5,X,[f,e],null),xc(a))):null}function Ti(a){var b=P.c(a,0,null),c=P.c(a,1,null),c=Mc(c)?S.a(Tf,c):c,d=Q.a(c,Zg),e=Q.a(c,Wg),f=P.c(e,0,null),h=$c(e);return r(r(c)?e:c)?N(new W(null,2,5,X,[f,R.d(c,Zg,pc.a(d,b),J([Wg,h],0))],null),xc(a)):null}
function Ui(a){var b=P.c(a,0,null),c=P.c(a,1,null),c=Mc(c)?S.a(Tf,c):c,d=Q.a(c,Zg),e=Q.a(c,Wg);return r(r(c)?e:c)?N(new W(null,2,5,X,[oc(e),R.d(c,Zg,S.n(pc,d,b,hg(e)),J([Wg,null],0))],null),xc(a)):a}function Vi(a){var b=P.c(a,0,null),c=P.c(a,1,null),c=Mc(c)?S.a(Tf,c):c,d=Q.a(c,Zg),e=Q.a(c,Wg);return r(r(c)?E(d):c)?N(new W(null,2,5,X,[yc(d),R.d(c,Zg,zc(d),J([Wg,M(b,e)],0))],null),xc(a)):null}
function Wi(a,b){P.c(a,0,null);var c=P.c(a,1,null);return N(new W(null,2,5,X,[b,R.c(c,bh,!0)],null),xc(a))}var Xi=function(){function a(a,d,e){var f=null;2<arguments.length&&(f=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,f)}function b(a,b,e){return Wi(a,S.c(b,Ni(a),e))}a.k=2;a.f=function(a){var d=F(a);a=I(a);var e=F(a);a=G(a);return b(d,e,a)};a.d=b;return a}();p("mori.zip.zipper",Mi);p("mori.zip.seq_zip",function(a){return Mi(Mc,Fd,function(a,c){return N(c,xc(a))},a)});p("mori.zip.vector_zip",function(a){return Mi(Hc,E,function(a,c){return N(we(c),xc(a))},a)});p("mori.zip.node",Ni);p("mori.zip.is_branch",{}.xc);p("mori.zip.children",Pi);p("mori.zip.make_node",Qi);p("mori.zip.path",function(a){return ah.b(a.b?a.b(1):a.call(null,1))});p("mori.zip.lefts",function(a){return E(Zg.b(a.b?a.b(1):a.call(null,1)))});
p("mori.zip.rights",function(a){return Wg.b(a.b?a.b(1):a.call(null,1))});p("mori.zip.down",Ri);p("mori.zip.up",Si);p("mori.zip.root",function(a){for(;;){if(Wb.a(eh,a.b?a.b(1):a.call(null,1)))return Ni(a);var b=Si(a);if(r(b))a=b;else return Ni(a)}});p("mori.zip.right",Ti);p("mori.zip.rightmost",Ui);p("mori.zip.left",Vi);
p("mori.zip.leftmost",function(a){var b=P.c(a,0,null),c=P.c(a,1,null),c=Mc(c)?S.a(Tf,c):c,d=Q.a(c,Zg),e=Q.a(c,Wg);return r(r(c)?E(d):c)?N(new W(null,2,5,X,[F(d),R.d(c,Zg,qe,J([Wg,td.d(G(d),new W(null,1,5,X,[b],null),J([e],0))],0))],null),xc(a)):a});p("mori.zip.insert_left",function(a,b){var c=P.c(a,0,null),d=P.c(a,1,null),d=Mc(d)?S.a(Tf,d):d,e=Q.a(d,Zg);if(null==d)throw"Insert at top";return N(new W(null,2,5,X,[c,R.d(d,Zg,pc.a(e,b),J([bh,!0],0))],null),xc(a))});
p("mori.zip.insert_right",function(a,b){var c=P.c(a,0,null),d=P.c(a,1,null),d=Mc(d)?S.a(Tf,d):d,e=Q.a(d,Wg);if(null==d)throw"Insert at top";return N(new W(null,2,5,X,[c,R.d(d,Wg,M(b,e),J([bh,!0],0))],null),xc(a))});p("mori.zip.replace",Wi);p("mori.zip.edit",Xi);p("mori.zip.insert_child",function(a,b){return Wi(a,Qi(a,Ni(a),M(b,Pi(a))))});p("mori.zip.append_child",function(a,b){return Wi(a,Qi(a,Ni(a),td.a(Pi(a),new W(null,1,5,X,[b],null))))});
p("mori.zip.next",function(a){if(Wb.a(eh,a.b?a.b(1):a.call(null,1)))return a;var b;b=Oi(a);b=r(b)?Ri(a):b;if(r(b))return b;b=Ti(a);if(r(b))return b;for(;;)if(r(Si(a))){b=Ti(Si(a));if(r(b))return b;a=Si(a)}else return new W(null,2,5,X,[Ni(a),eh],null)});p("mori.zip.prev",function(a){var b=Vi(a);if(r(b))for(a=b;;)if(b=Oi(a),b=r(b)?Ri(a):b,r(b))a=Ui(b);else return a;else return Si(a)});p("mori.zip.is_end",function(a){return Wb.a(eh,a.b?a.b(1):a.call(null,1))});
p("mori.zip.remove",function(a){P.c(a,0,null);var b=P.c(a,1,null),b=Mc(b)?S.a(Tf,b):b,c=Q.a(b,Zg),d=Q.a(b,Ug),e=Q.a(b,ah),f=Q.a(b,Wg);if(null==b)throw"Remove at top";if(0<O(c))for(a=N(new W(null,2,5,X,[yc(c),R.d(b,Zg,zc(c),J([bh,!0],0))],null),xc(a));;)if(b=Oi(a),b=r(b)?Ri(a):b,r(b))a=Ui(b);else return a;else return N(new W(null,2,5,X,[Qi(a,yc(e),f),r(d)?R.c(d,bh,!0):d],null),xc(a))});;return this.mori;}.call({});});

},{}],8:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  var UnitSequencer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(UnitSequencer.prototype, {
    initialize: function(opts) {
      opts           = Options.fromObject(opts);
      this._sequence = opts.getOrElse("initialSequence", 0);
    },

    /**
     * Advances its sequence by `by`, or by `1` if `by` is not provided.
     *
     * @param by {number} the amount to advance by. Defaults to `1`.
     * @async
     * @returns {Promise<undefined>}
     */
    advance: Promise.method(function(by) {
      // Wahh wahh - don't use `by || 1`, or you can't advance by 0, which is silly
      // but potentially necessary.
      by             = _.isUndefined(by) ? 1 : by;

      if (by < 0) {
        throw new Error("UnitSequencer#advance() requires positive `by` offset");
      }

      this._sequence = this._sequence + by;
    }),

    /**
     * Returns the current sequence. This value should always be the same
     * or greater than a value returned previously (in time).
     *
     * @returns {number} the current sequence
     */
    value: function() {
      return this._sequence;
    }
  });

  return UnitSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);

})()
},{"../options":4,"underscore":51,"bluebird":52}],9:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  /**
   * A Sequencer which advances by reading from a Clock.
   * Note that this ClockSequencer relies on the Clock protocol, which
   * only provides `Clock#getTime()`. It does not modify the clock itself.
   * This means if you're using a LogicalClock, it's still up to the clock's
   * owner to advance the clock for the sequencer to advance.
   */
  var ClockSequencer = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(ClockSequencer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._clock    = opts.getOrError("clock");
      this._sequence = opts.getOrElse("initialSequence", 0);
    },

    /**
     * Advances by setting its sequence to the backing clock's time.
     * Note that if this method is called twice within the same time unit,
     * the sequence will not actually advance, since unique time is not
     * guaranteed by our clocks.
     *
     * @async
     * @returns {Promise<>}
     */
    advance: Promise.method(function() {
      return Promise
        .bind(this)
        .then(function() {
          return this._clock.getTime();
        })
        .then(function(t) {
          this._sequence = t;
        });
    }),

    /**
     * Returns the current sequence. This value should always be the same
     * or greater than a value returned previously (in time).
     *
     * @returns {number} the current sequence
     */
    value: function() {
      return this._sequence;
    }
  });

  return ClockSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);

})()
},{"../options":4,"underscore":51,"bluebird":52}],10:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  /**
   * A UnitSequencer which reports its sequence summed with the sequences
   * of its internal collection of sequencers.
   *
   * This device is useful for tracking the state of data comprised from multiple
   * sources. For instance, you might have CachingDataStore(A) storing data
   * from Source(A), tracked by Sequencer(A), and CachingDataStore(B) storing
   * data from Source(B), tracked by Sequencer(B). Meanwhile, you may have
   * CachingDataStore(C), storing data from Source(A + B), and tracked by
   * Sequencer(C) = Sequencer(A + B) - a DelegatingCompositeSequencer.
   *
   * Thus, if Sequencer(A) is advanced, it may invalidate CachingDataStore(A) or
   * CachingDataStore(C) or both.
   *
   * Note this particular usage is generally only useful for Unit sequencers.
   *
   * If you'd like the above functionality, but with Sequencer(A) and
   * Sequencer(B) as ClockSequencers, and Sequencer(C) merely tracking
   * modification, you'd need to use a DelegatingForwardingSequencer for A and B,
   * forwarding them to UnitSequencer(C).
   *
   * DelegatingCompositeSequencer and DelegatingForwardingSequencer are effectivly
   * opposites of each other. DelegatingCompositeSequencer composes the `value`
   * of multiple underlying sequencers (pull), and DelegatingForwardingSequencer
   * forwards the `advance` call to multiple targets (push).
   */
  var DelegatingCompositeSequencer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DelegatingCompositeSequencer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._delegateSequencer = opts.getOrError("delegate");
      this._sequencers = _.clone(opts.getOrElse("sequencers", []));
    },
    addSequencer: function(seq) {
      this._sequencers.push(seq);
    },
    advance: function() {
      var s = this._delegateSequencer;
      return s.advance.apply(s, arguments);
    },
    value: function() {
      return _
        .chain(this._sequencers)
        .invoke("value")
        .reduce(function(sum, n) {
          return sum + n;
        }, 0)
        .value() + this._delegateSequencer.value();
    }
  });

  return DelegatingCompositeSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);

})()
},{"../options":4,"underscore":51,"bluebird":52}],11:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {

  var DelegatingForwardingSequencer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DelegatingForwardingSequencer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._delegateSequencer = opts.getOrError("delegate");
      this._forwardTargets = _.clone(opts.getOrElse("targets", []));
    },
    addTarget: function(seq) {
      this._forwardTargets.push(seq);
    },
    advance: Promise.method(function() {
      var s = this._delegateSequencer;
      return s.advance.apply(s, arguments)
      .bind(this)
      .then(function(val) {
        return Promise
          .all(_.invoke(this._forwardTargets, "advance"))
          .then(function() {
            // Return the value returned by the delegate sequencer's
            // advance call (if any). The advancement of the forward
            // targets should be transparent.
            return val;
          });
      });
    }),
    value: function() {
      var s = this._delegateSequencer;
      return s.value.apply(s, arguments);
    }
  });

  return DelegatingForwardingSequencer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../options")
);

})()
},{"../options":4,"underscore":51,"bluebird":52}],18:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options
) {
  /**
   * A Clock which allows manually manipulating the underlying time value,
   * irrespective of real time. Useful for testing.
   */
  var LogicalClock = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(LogicalClock.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._currentTime = opts.getOrElse("initialTime", 0);
    },

    /**
     * @async
     * @returns {Promise<number>} Time in milliseconds since epoch
     * @see Clock#getTime()
     */
    getTime: Promise.method(function() {
      return this._currentTime;
    }),

    /**
     * Advances internal time, either `opts.by` a certain offset, or
     * `opts.to` a particular absolute time. If successful, returns the result
     * of calling `LogicalClock#getTime()` as a convenience.
     *
     * @param opts.to {number} absolute time to set clock to. Must be larger
     *                         than the current time
     * @param opts.by {number} offset to add to current time. Must be positive.
     *                         Defaults to `1` if neither `opts.to` or `opts.by`
     *                         are specified.
     * @async
     * @returns {Promise<number>} result of `LogicalClock#getTime()`
     */
    advanceTime: Promise.method(function(opts){
      opts = Options.fromObject(opts);
      var by = opts.getOrElse("by", 1),
          to = opts.getOrElse("to", undefined);
      if (!_.isUndefined(to)) {
        if (to < this._currentTime) {
          throw new Error("LogicalClock#advanceTime() requires forward movement of time")
        }
        this._currentTime = to;
      } else {
        if (by < 0) {
          throw new Error("LogicalClock#advanceTime() requires forward movement of time");
        }
        this._currentTime = this._currentTime + by;
      }
      return this.getTime();
    })
  });

  return LogicalClock;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../../core/options")
);

})()
},{"../../core/options":4,"underscore":51,"bluebird":52}],19:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Promise
) {

  /**
   * A Clock which delegates to the system clock.
   */
  var SystemClock = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(SystemClock.prototype, {
    initialize: function() {},
    /**
     * @async
     * @returns {Promise<number>} Time in milliseconds since epoch
     * @see Clock#getTime()
     */
    getTime: Promise.method(function() {
      return Date.now();
    })
  });

  return SystemClock;
};

module.exports = mod(
  require("underscore"),
  require("bluebird")
);

})()
},{"underscore":51,"bluebird":52}],22:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  /**
   * Given a raw config, ensures blobs can be fetched regardless of
   * scope union scope (i.e., does union canonicalization).
   *
   * For example, a config with scope union `"bbb+aaa"` can later be
   * fetched using either `"aaa+bbb"` or `"bbb+aaa"`. It does this
   * by uniformly ordering the union's composite scopes.
   *
   * This probably isn't a useful class on its own. Instead, defer to
   * `ScopedConfigurationResolver` or `ConfigurationMagic`.
   */
  var ScopedConfiguration = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(ScopedConfiguration.prototype, {
    initialize: function(rawConfig) {
      rawConfig = rawConfig || {};
      this._scopes = {};
      // Sort the scope strings
      _.each(rawConfig, function(config, scopeString) {
        var scope = scopeString.split("+").sort().join("+");
        this._scopes[scope] = config;
      }, this);
    },

    blobForScope: function(scope) {
      return _.clone(this._scopes[scope.split("+").sort().join("+")] || {});
    }
  });

  return ScopedConfiguration;
};

module.exports = mod(
  require("underscore")
);

})()
},{"underscore":51}],21:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  ScopedConfiguration
) {

  /**
   * A device for resolving a set of raw configurations given a set of
   * scopes.
   *
   * This is useful for having things like region- or stage-specific (and/or both)
   * configurations.
   *
   * Given sets of raw configurations of the form:
   *
   *   {
   *     "scope-1" : {
   *       "key1" : "val1"
   *     },
   *     "scope-1+env1": {
   *       "key2" : "val-env-1"
   *     },
   *     "scope-1+env2": {
   *       "key2" : "val-env-2"
   *     }
   *   }
   *
   * `resolve(["scope-1"])` will return:
   *
   *   {
   *     "key1" : "val2"
   *   }
   *
   * `resolve(["scope-1", "env-1"])` will return:
   *
   *   {
   *     "key1" : "val1",
   *     "key2" : "val-env-1"
   *   }
   *
   * `resolve(["scope-1", "env-2"])` will return:
   *
   *   {
   *     "key1" : "val1",
   *     "key2" : "val-env-2"
   *   }
   *
   * Scopes unions are resolved in the following manner:
   *   1. a given scope union's parts are sorted
   *   2. scope unions as a whole are applied in sorted order
   *   3. repeat the process for a given configuration
   *
   * So, given three configs:
   *
   *  {
   *    "aaa": ... // 1
   *    "ccc": ... // 2
   *  }
   *
   *  {
   *    "aaa+ccc": ... // 3
   *    "ccc"    : ... // 4
   *  }
   *
   *  {
   *    "aaa+bbb": ... // 5
   *    "bbb"    : ... // 6
   *  }
   *
   * The resulting order will be:
   *   1, 2, 4, 3, 6, 5
   *
   * Notice 3 comes before 5 even though it's logically "after" in sorted order,
   * because configuration order overrides scope order. That is, scope unions
   * are ordered within a config, and then in config order.
   *
   */
  var ScopedConfigurationResolver = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(ScopedConfigurationResolver.prototype, {
    initialize: function() {
      this._configs = [];
    },

    /**
     * A rawConfig is a set of configuration scopes and their configuration
     * values, e.g.:
     *
     *   {
     *     "scope-1" : {
     *       "key1" : "val1"
     *     },
     *     "scope-1+env1": {
     *       "key2" : "val-env-1"
     *     },
     *     "scope-1+env2": {
     *       "key2" : "val-env-2"
     *     }
     *   }
     *
     * Note that the plus (+) sign is reserved for specifying scope unions.
     *
     * @param rawConfig {object} (required)
     *
     * @returns this
     */
    add: function(rawConfig) {
      this._configs.push(new ScopedConfiguration(rawConfig));
      return this;
    },

    /**
     * Resolves a computed final configuration given a set of scopes to apply,
     * and a set of configs loaded via `ScopedConfigurationResolver#add()`.
     *
     * @param scopes {Array<string>}
     *
     * @returns {object} the computed configuration
     */
    resolve: function(scopes) {
      scopes = powerset(_.clone(scopes).sort());
      scopes.shift(); // Get rid of the empty set.

      scopes = _.collect(scopes, function(s) {
        return s.join("+");
      });

      var relevantConfigs = _
        .chain(this._configs)
        .collect(function(c) {
          return _.collect(scopes, function(scope) {
            return c.blobForScope(scope);
          })
        }).flatten().value();

      relevantConfigs.unshift({});
      return _.extend.apply(_, relevantConfigs);
    }
  });

  var powerset = function (ary) {
      var ps = [[]];
      for (var i=0; i < ary.length; i++) {
          for (var j = 0, len = ps.length; j < len; j++) {
              ps.push(ps[j].concat(ary[i]));
          }
      }
      return ps;
  }

  return ScopedConfigurationResolver;
};

module.exports = mod(
  require("underscore"),
  require("./scoped-configuration")
);

})()
},{"./scoped-configuration":22,"underscore":51}],25:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options
) {

  var ConsoleLogAppender = function() {
    this.initialize.apply(this, arguments);
  };

  var p = function(num) {
    if (("" + num).length === 1) {
      return "0" + num;
    } else {
      return num;
    }
  };

  _.extend(ConsoleLogAppender.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._console = opts.getOrElse("console", console);
      this._timeDelegate = opts.getOrElse("timeDelegate", function(){
        var d = new Date();
        return [d.getUTCFullYear(), p(d.getUTCMonth()), p(d.getUTCDay())].join("/") +
          " " + [p(d.getUTCHours()), p(d.getUTCMinutes()), p(d.getUTCSeconds())].join(":") +
          "." + d.getUTCMilliseconds();
      });
    },

    log: function(loggerName, descendants, logLevel, logLevelName, args) {
      // Use the furthest ancestor as the logged name (since it originated there)
      var furthestAncestor = descendants[descendants.length - 1];
      if (furthestAncestor) {
        loggerName = furthestAncestor;
      }
      this._log(["["+logLevelName+"]["+this._getTime()+"]["+loggerName+"]"].concat(args));
    },

    _getTime: function() {
      return this._timeDelegate();
    },

    _log: function(logItems) {
      // Why does he do this? Is he insane? Well, yes.
      //
      // But mostly, I do this because console.log isn't, in all cases,
      // something you can call .apply on. Last I checked, in IE calling
      // console.log.apply(console, []) will throw an error. So that's why the
      // big ugly switch.
      //
      // If you need more than 7 items, well, I can't help you (but you can - add another
      // switch case).
      switch(logItems.length) {
        case 0:
          this._console.log();
          break;
        case 1:
          this._console.log(logItems[0]);
          break;
        case 2:
          this._console.log(logItems[0], logItems[1]);
          break;
        case 3:
          this._console.log(logItems[0], logItems[1], logItems[2]);
          break;
        case 4:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3]);
          break;
        case 5:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3], logItems[4]);
          break;
        case 6:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3], logItems[4], logItems[5]);
          break;
        case 7:
          this._console.log(logItems[0], logItems[1], logItems[2], logItems[3], logItems[4], logItems[5], logItems[6]);
          break;
        default:
          var label = logItems.shift();
          this._console.log(label, logItems);
      }
    }
  });

  return ConsoleLogAppender;
};

module.exports = mod(
  require("underscore"),
  require("../../core/options")
);

})()
},{"../../core/options":4,"underscore":51}],34:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Ref,
  DelegatingRef
) {

  var helper = function(val) {
    return new Ref(val);
  };

  helper.delegating = function(ref) {
    return new DelegatingRef(ref);
  };

  return helper;
};

module.exports = mod(
  require("underscore"),
  require("./ref"),
  require("./delegating-ref")
);

})()
},{"./ref":43,"./delegating-ref":42,"underscore":51}],52:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var Promise = require("./promise.js")();
module.exports = Promise;
},{"./promise.js":54}],36:[function(require,module,exports){
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  Logger,
  ConfigurationMagic,
  AppContainer
) {
  var Log = Logger.create("Bootstrapper");

  var Bootstrapper = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Bootstrapper.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._configs = opts.getOrError("configurations");
      this._scopes = opts.getOrError("scopes");
      this._appKlass = opts.getOrError("applicationConstructor");
    },
    bootstrap: Promise.method(function() {
      return Promise
        .bind(this)
        .then(function() {
          var config       = ConfigurationMagic.resolveConfig(this._scopes, this._configs),
              AppKlass     = this._appKlass;

          Log.info("Using resolved configuration: ", JSON.stringify(config));

          var app          = new AppKlass({configuration: config}),
              appContainer = new AppContainer({app: app});

          return appContainer;
        });
    })
  });

  return Bootstrapper;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../logging/logger"),
  require("./configuration-magic"),
  require("./web-app-container")
);

},{"../core/options":4,"../logging/logger":24,"./configuration-magic":20,"./web-app-container":37,"underscore":51,"bluebird":52}],37:[function(require,module,exports){
(function(){/*global require: false, module: false, process: false */
"use strict";

var mod = function(
  _,
  Promise,
  Options,
  Logger
) {

  var Log = Logger.create("AppContainer");

  var WebAppContainer = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(WebAppContainer.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts)
      this._app = opts.getOrError("app");
    },

    start: Promise.method(function() {
      return Promise
        .bind(this)
        .then(function() {
          return this._app.start();
        });
    }),

    stop: Promise.method(function(reason) {
      return this._app.stop().then(function() {
        if (reason) {
          Log.error("Stopping due to reason:", reason);
        }
      });
    })
  });

  return WebAppContainer;
};

module.exports = mod(
  require("underscore"),
  require("bluebird"),
  require("../core/options"),
  require("../logging/logger")
);

})()
},{"../core/options":4,"../logging/logger":24,"underscore":51,"bluebird":52}],38:[function(require,module,exports){
"use strict";

var mod = function(
  _
) {

  var WebScheduler = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(WebScheduler.prototype, {
    initialize: function() {},

    runSoon: function(fn) {
      this.schedule(fn);
    },

    schedule: function(fn, delay) {
      delay = delay || 1;
      return setTimeout(fn, delay);
    },

    unschedule: function(id) {
      return clearTimeout(id);
    }
  });

  return WebScheduler;
};

module.exports = mod(
  require("underscore")
);

},{"underscore":51}],47:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  PubSub,
  TransformChain,
  MapTransform,
  FilterTransform
) {

  var ReactiveNode = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ReactiveNode.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._chain = new TransformChain();
      this._parent = opts.getOrElse("parent", null);
      this._pubsub = _.extend({}, PubSub);

      var transforms = opts.getOrElse("transforms", [])

      _.each(transforms, function(t) {
        this._chain.addTransform(t);
      }, this);

      _.bindAll(this, "_onParentElement", "_notifySubscribers");

      if (this._parent) {
        this._parent._pubsub.on("element", this._onParentElement);
      }

      this._chain.on("element", this._notifySubscribers);
      this._subscriptions = [];
    },
    map: function(fn) {
      return new ReactiveNode({
        parent: this,
        transforms: [new MapTransform(fn)]
      });
    },
    filter: function(fn) {
      return new ReactiveNode({
        parent: this,
        transforms: [new FilterTransform(fn)]
      });
    },
    _apply: function(element) {
      this._chain.apply(element);
    },
    _applyError: function(err) {
      // TODO: Means of being notified of errors, plz
    },
    _onParentElement: function(element) {
      this._apply(element);
    },
    _notifySubscribers: function(element) {
      this._pubsub.notify("element", element);
    }
  });

  return ReactiveNode;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("../core/pub-sub"),
  require("./transform-chain"),
  require("./map-transform"),
  require("./filter-transform")
);

})()
},{"../core/options":4,"../core/pub-sub":7,"./transform-chain":48,"./map-transform":46,"./filter-transform":45,"underscore":51}],40:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Options,
  Ref,
  SetTimeoutScheduler
) {

  var DefaultRuntime = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DefaultRuntime.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);

      this._schedulerRef = Ref(opts.getOrElseFn("scheduler", function() {
        return new SetTimeoutScheduler();
      }));
    },

    /**
     * @returns {Ref<Scheduler>}
     */
    scheduler: function() {
      return Ref.delegating(this._schedulerRef);
    },

    setScheduler: function(scheduler) {
      this._schedulerRef.set(scheduler);
    }
  });

  return DefaultRuntime;
};

module.exports = mod(
  require("underscore"),
  require("../core/options"),
  require("../core/ref"),
  require("../core/scheduler/set-timeout-scheduler")
);

})()
},{"../core/options":4,"../core/scheduler/set-timeout-scheduler":44,"../core/ref":34,"underscore":51}],41:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Logger,
  Options
) {

  var TEN_MINUTES_IN_MILLISECONDS = 60 * 1000 * 10;

  var Log = Logger.create("ProcessKeepAlive");

  var ProcessKeepAlive = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(ProcessKeepAlive.prototype, {
    initialize: function(opts) {
      opts = Options.fromObject(opts);
      this._scheduler = opts.getOrError("scheduler");
      this._timeoutId = null;

      _.bindAll(this, "_cycle");
    },
    start: function() {
      Log.debug("Starting ProcessKeepAlive");
      this._cycle();
    },
    stop: function() {
      Log.debug("Stopping ProcessKeepAlive");
      if (this._timeoutId) {
        this._scheduler.get().unschedule(this._timeoutId);
        this._timeoutId = null;
      }
    },
    _cycle: function() {
      this._timeoutId = this._scheduler.get().schedule(
        this._cycle,
        TEN_MINUTES_IN_MILLISECONDS
      );
    }
  });

  return ProcessKeepAlive;
};

module.exports = mod(
  require("underscore"),
  require("../../logging/logger"),
  require("../../core/options")
);

})()
},{"../../logging/logger":24,"../../core/options":4,"underscore":51}],43:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  /**
   * A basic Ref serves as a means of indirection between references and their
   * values, allowing an outside agent to modify the underlying value.
   */
  var Ref = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Ref.prototype, {
    initialize: function(val) {
      this._val = val;
    },

    /**
     * Return the value boxed by this Ref
     *
     * @returns {dynamic}
     */
    get: function() {
      return this._val;
    },

    /**
     * Set a new boxed value. Note this method is specific to this Ref
     * implementation, and not the Ref protocol, which only defines
     * `Ref#get()`.
     *
     * @param newVal {dynamic} the value to box
     */
    set: function(newVal) {
      if (newVal instanceof Ref) {
        this._val = newVal.get();
      } else {
        this._val = newVal;
      }
    }
  });

  return Ref;
};

module.exports = mod(
  require("underscore")
);

})()
},{"underscore":51}],42:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _
) {

  /**
   * A ref whose boxed value is another ref
   */
  var DelegatingRef = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(DelegatingRef.prototype, {
    initialize: function(ref) {
      this._delegateRef = ref;
    },
    get: function() {
      return this._delegateRef.get();
    }
  });

  return DelegatingRef;
};

module.exports = mod(
  require("underscore")
);

})()
},{"underscore":51}],55:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],54:[function(require,module,exports){
(function(process){/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict(bluebird) {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
module.exports = function() {
var util = require("./util.js");
var async = require("./async.js");
var errors = require("./errors.js");

var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {e: null};

var cast = require("./thenables.js")(Promise, INTERNAL);
var PromiseArray = require("./promise_array.js")(Promise, INTERNAL, cast);
var CapturedTrace = require("./captured_trace.js")();
var CatchFilter = require("./catch_filter.js")(NEXT_FILTER);
var PromiseResolver = require("./promise_resolver.js");

var isArray = util.isArray;

var errorObj = util.errorObj;
var tryCatch1 = util.tryCatch1;
var tryCatch2 = util.tryCatch2;
var tryCatchApply = util.tryCatchApply;
var RangeError = errors.RangeError;
var TypeError = errors.TypeError;
var CancellationError = errors.CancellationError;
var TimeoutError = errors.TimeoutError;
var OperationalError = errors.OperationalError;
var originatesFromRejection = errors.originatesFromRejection;
var markAsOriginatingFromRejection = errors.markAsOriginatingFromRejection;
var canAttach = errors.canAttach;
var thrower = util.thrower;
var apiRejection = require("./errors_api_rejection")(Promise);


var makeSelfResolutionError = function Promise$_makeSelfResolutionError() {
    return new TypeError("circular promise resolution chain");
};

function Promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("the promise constructor requires a resolver function");
    }
    if (this.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly");
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = void 0;
    this._rejectionHandler0 = void 0;
    this._promise0 = void 0;
    this._receiver0 = void 0;
    this._settledValue = void 0;
    this._boundTo = void 0;
    if (resolver !== INTERNAL) this._resolveFromResolver(resolver);
}

Promise.prototype.bind = function Promise$bind(thisArg) {
    var ret = new Promise(INTERNAL);
    ret._follow(this);
    ret._propagateFrom(this, 2 | 1);
    ret._setBoundTo(thisArg);
    return ret;
};

Promise.prototype.toString = function Promise$toString() {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] =
function Promise$catch(fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (typeof item === "function") {
                catchInstances[j++] = item;
            } else {
                var catchFilterTypeError =
                    new TypeError(
                        "A catch filter must be an error constructor "
                        + "or a filter function");

                this._attachExtraTrace(catchFilterTypeError);
                async.invoke(this._reject, this, catchFilterTypeError);
                return;
            }
        }
        catchInstances.length = j;
        fn = arguments[i];

        this._resetTrace();
        var catchFilter = new CatchFilter(catchInstances, fn, this);
        return this._then(void 0, catchFilter.doFilter, void 0,
            catchFilter, void 0);
    }
    return this._then(void 0, fn, void 0, void 0, void 0);
};

Promise.prototype.then =
function Promise$then(didFulfill, didReject, didProgress) {
    return this._then(didFulfill, didReject, didProgress,
        void 0, void 0);
};


Promise.prototype.done =
function Promise$done(didFulfill, didReject, didProgress) {
    var promise = this._then(didFulfill, didReject, didProgress,
        void 0, void 0);
    promise._setIsFinal();
};

Promise.prototype.spread = function Promise$spread(didFulfill, didReject) {
    return this._then(didFulfill, didReject, void 0,
        APPLY, void 0);
};

Promise.prototype.isCancellable = function Promise$isCancellable() {
    return !this.isResolved() &&
        this._cancellable();
};

Promise.prototype.toJSON = function Promise$toJSON() {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: void 0,
        rejectionReason: void 0
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this._settledValue;
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this._settledValue;
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function Promise$all() {
    return new PromiseArray(this).promise();
};


Promise.is = function Promise$Is(val) {
    return val instanceof Promise;
};

Promise.all = function Promise$All(promises) {
    return new PromiseArray(promises).promise();
};

Promise.prototype.error = function Promise$_error(fn) {
    return this.caught(originatesFromRejection, fn);
};

Promise.prototype._resolveFromSyncValue =
function Promise$_resolveFromSyncValue(value) {
    if (value === errorObj) {
        this._cleanValues();
        this._setRejected();
        this._settledValue = value.e;
        this._ensurePossibleRejectionHandled();
    } else {
        var maybePromise = cast(value, void 0);
        if (maybePromise instanceof Promise) {
            this._follow(maybePromise);
        } else {
            this._cleanValues();
            this._setFulfilled();
            this._settledValue = value;
        }
    }
};

Promise.method = function Promise$_Method(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function");
    }
    return function Promise$_method() {
        var value;
        switch(arguments.length) {
        case 0: value = tryCatch1(fn, this, void 0); break;
        case 1: value = tryCatch1(fn, this, arguments[0]); break;
        case 2: value = tryCatch2(fn, this, arguments[0], arguments[1]); break;
        default:
            var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
            value = tryCatchApply(fn, args, this); break;
        }
        var ret = new Promise(INTERNAL);
        ret._setTrace(void 0);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function Promise$_Try(fn, args, ctx) {
    if (typeof fn !== "function") {
        return apiRejection("fn must be a function");
    }
    var value = isArray(args)
        ? tryCatchApply(fn, args, ctx)
        : tryCatch1(fn, ctx, args);

    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.defer = Promise.pending = function Promise$Defer() {
    var promise = new Promise(INTERNAL);
    promise._setTrace(void 0);
    return new PromiseResolver(promise);
};

Promise.bind = function Promise$Bind(thisArg) {
    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);
    ret._setFulfilled();
    ret._setBoundTo(thisArg);
    return ret;
};

Promise.cast = function Promise$_Cast(obj) {
    var ret = cast(obj, void 0);
    if (!(ret instanceof Promise)) {
        var val = ret;
        ret = new Promise(INTERNAL);
        ret._setTrace(void 0);
        ret._setFulfilled();
        ret._cleanValues();
        ret._settledValue = val;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function Promise$Reject(reason) {
    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);
    markAsOriginatingFromRejection(reason);
    ret._cleanValues();
    ret._setRejected();
    ret._settledValue = reason;
    if (!canAttach(reason)) {
        var trace = new Error(reason + "");
        ret._setCarriedStackTrace(trace);
    }
    ret._ensurePossibleRejectionHandled();
    return ret;
};

Promise.onPossiblyUnhandledRejection =
function Promise$OnPossiblyUnhandledRejection(fn) {
        CapturedTrace.possiblyUnhandledRejection = typeof fn === "function"
                                                    ? fn : void 0;
};

var unhandledRejectionHandled;
Promise.onUnhandledRejectionHandled =
function Promise$onUnhandledRejectionHandled(fn) {
    unhandledRejectionHandled = typeof fn === "function" ? fn : void 0;
};

var debugging = false || !!(
    typeof process !== "undefined" &&
    typeof process.execPath === "string" &&
    typeof process.env === "object" &&
    (process.env["BLUEBIRD_DEBUG"] ||
        process.env["NODE_ENV"] === "development")
);


Promise.longStackTraces = function Promise$LongStackTraces() {
    if (async.haveItemsQueued() &&
        debugging === false
   ) {
        throw new Error("cannot enable long stack traces after promises have been created");
    }
    debugging = CapturedTrace.isSupported();
};

Promise.hasLongStackTraces = function Promise$HasLongStackTraces() {
    return debugging && CapturedTrace.isSupported();
};

Promise.prototype._then =
function Promise$_then(
    didFulfill,
    didReject,
    didProgress,
    receiver,
    internalData
) {
    var haveInternalData = internalData !== void 0;
    var ret = haveInternalData ? internalData : new Promise(INTERNAL);

    if (!haveInternalData) {
        if (debugging) {
            var haveSameContext = this._peekContext() === this._traceParent;
            ret._traceParent = haveSameContext ? this._traceParent : this;
        }
        ret._propagateFrom(this, 7);
    }

    var callbackIndex =
        this._addCallbacks(didFulfill, didReject, didProgress, ret, receiver);

    if (this.isResolved()) {
        async.invoke(this._queueSettleAt, this, callbackIndex);
    }

    return ret;
};

Promise.prototype._length = function Promise$_length() {
    return this._bitField & 262143;
};

Promise.prototype._isFollowingOrFulfilledOrRejected =
function Promise$_isFollowingOrFulfilledOrRejected() {
    return (this._bitField & 939524096) > 0;
};

Promise.prototype._isFollowing = function Promise$_isFollowing() {
    return (this._bitField & 536870912) === 536870912;
};

Promise.prototype._setLength = function Promise$_setLength(len) {
    this._bitField = (this._bitField & -262144) |
        (len & 262143);
};

Promise.prototype._setFulfilled = function Promise$_setFulfilled() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._setRejected = function Promise$_setRejected() {
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._setFollowing = function Promise$_setFollowing() {
    this._bitField = this._bitField | 536870912;
};

Promise.prototype._setIsFinal = function Promise$_setIsFinal() {
    this._bitField = this._bitField | 33554432;
};

Promise.prototype._isFinal = function Promise$_isFinal() {
    return (this._bitField & 33554432) > 0;
};

Promise.prototype._cancellable = function Promise$_cancellable() {
    return (this._bitField & 67108864) > 0;
};

Promise.prototype._setCancellable = function Promise$_setCancellable() {
    this._bitField = this._bitField | 67108864;
};

Promise.prototype._unsetCancellable = function Promise$_unsetCancellable() {
    this._bitField = this._bitField & (~67108864);
};

Promise.prototype._setRejectionIsUnhandled =
function Promise$_setRejectionIsUnhandled() {
    this._bitField = this._bitField | 2097152;
};

Promise.prototype._unsetRejectionIsUnhandled =
function Promise$_unsetRejectionIsUnhandled() {
    this._bitField = this._bitField & (~2097152);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled =
function Promise$_isRejectionUnhandled() {
    return (this._bitField & 2097152) > 0;
};

Promise.prototype._setUnhandledRejectionIsNotified =
function Promise$_setUnhandledRejectionIsNotified() {
    this._bitField = this._bitField | 524288;
};

Promise.prototype._unsetUnhandledRejectionIsNotified =
function Promise$_unsetUnhandledRejectionIsNotified() {
    this._bitField = this._bitField & (~524288);
};

Promise.prototype._isUnhandledRejectionNotified =
function Promise$_isUnhandledRejectionNotified() {
    return (this._bitField & 524288) > 0;
};

Promise.prototype._setCarriedStackTrace =
function Promise$_setCarriedStackTrace(capturedTrace) {
    this._bitField = this._bitField | 1048576;
    this._fulfillmentHandler0 = capturedTrace;
};

Promise.prototype._unsetCarriedStackTrace =
function Promise$_unsetCarriedStackTrace() {
    this._bitField = this._bitField & (~1048576);
    this._fulfillmentHandler0 = void 0;
};

Promise.prototype._isCarryingStackTrace =
function Promise$_isCarryingStackTrace() {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._getCarriedStackTrace =
function Promise$_getCarriedStackTrace() {
    return this._isCarryingStackTrace()
        ? this._fulfillmentHandler0
        : void 0;
};

Promise.prototype._receiverAt = function Promise$_receiverAt(index) {
    var ret = index === 0
        ? this._receiver0
        : this[(index << 2) + index - 5 + 4];
    if (this._isBound() && ret === void 0) {
        return this._boundTo;
    }
    return ret;
};

Promise.prototype._promiseAt = function Promise$_promiseAt(index) {
    return index === 0
        ? this._promise0
        : this[(index << 2) + index - 5 + 3];
};

Promise.prototype._fulfillmentHandlerAt =
function Promise$_fulfillmentHandlerAt(index) {
    return index === 0
        ? this._fulfillmentHandler0
        : this[(index << 2) + index - 5 + 0];
};

Promise.prototype._rejectionHandlerAt =
function Promise$_rejectionHandlerAt(index) {
    return index === 0
        ? this._rejectionHandler0
        : this[(index << 2) + index - 5 + 1];
};

Promise.prototype._addCallbacks = function Promise$_addCallbacks(
    fulfill,
    reject,
    progress,
    promise,
    receiver
) {
    var index = this._length();

    if (index >= 262143 - 5) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        if (receiver !== void 0) this._receiver0 = receiver;
        if (typeof fulfill === "function" && !this._isCarryingStackTrace())
            this._fulfillmentHandler0 = fulfill;
        if (typeof reject === "function") this._rejectionHandler0 = reject;
        if (typeof progress === "function") this._progressHandler0 = progress;
    } else {
        var base = (index << 2) + index - 5;
        this[base + 3] = promise;
        this[base + 4] = receiver;
        this[base + 0] = typeof fulfill === "function"
                                            ? fulfill : void 0;
        this[base + 1] = typeof reject === "function"
                                            ? reject : void 0;
        this[base + 2] = typeof progress === "function"
                                            ? progress : void 0;
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._setProxyHandlers =
function Promise$_setProxyHandlers(receiver, promiseSlotValue) {
    var index = this._length();

    if (index >= 262143 - 5) {
        index = 0;
        this._setLength(0);
    }
    if (index === 0) {
        this._promise0 = promiseSlotValue;
        this._receiver0 = receiver;
    } else {
        var base = (index << 2) + index - 5;
        this[base + 3] = promiseSlotValue;
        this[base + 4] = receiver;
        this[base + 0] =
        this[base + 1] =
        this[base + 2] = void 0;
    }
    this._setLength(index + 1);
};

Promise.prototype._proxyPromiseArray =
function Promise$_proxyPromiseArray(promiseArray, index) {
    this._setProxyHandlers(promiseArray, index);
};

Promise.prototype._proxyPromise = function Promise$_proxyPromise(promise) {
    promise._setProxied();
    this._setProxyHandlers(promise, -1);
};

Promise.prototype._setBoundTo = function Promise$_setBoundTo(obj) {
    if (obj !== void 0) {
        this._bitField = this._bitField | 8388608;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~8388608);
    }
};

Promise.prototype._isBound = function Promise$_isBound() {
    return (this._bitField & 8388608) === 8388608;
};

Promise.prototype._resolveFromResolver =
function Promise$_resolveFromResolver(resolver) {
    var promise = this;
    this._setTrace(void 0);
    this._pushContext();

    function Promise$_resolver(val) {
        if (promise._tryFollow(val)) {
            return;
        }
        promise._fulfill(val);
    }
    function Promise$_rejecter(val) {
        var trace = canAttach(val) ? val : new Error(val + "");
        promise._attachExtraTrace(trace);
        markAsOriginatingFromRejection(val);
        promise._reject(val, trace === val ? void 0 : trace);
    }
    var r = tryCatch2(resolver, void 0, Promise$_resolver, Promise$_rejecter);
    this._popContext();

    if (r !== void 0 && r === errorObj) {
        var e = r.e;
        var trace = canAttach(e) ? e : new Error(e + "");
        promise._reject(e, trace);
    }
};

Promise.prototype._spreadSlowCase =
function Promise$_spreadSlowCase(targetFn, promise, values, boundTo) {
    var promiseForAll = new PromiseArray(values).promise();
    var promise2 = promiseForAll._then(function() {
        return targetFn.apply(boundTo, arguments);
    }, void 0, void 0, APPLY, void 0);
    promise._follow(promise2);
};

Promise.prototype._callSpread =
function Promise$_callSpread(handler, promise, value) {
    var boundTo = this._boundTo;
    if (isArray(value)) {
        for (var i = 0, len = value.length; i < len; ++i) {
            if (cast(value[i], void 0) instanceof Promise) {
                this._spreadSlowCase(handler, promise, value, boundTo);
                return;
            }
        }
    }
    promise._pushContext();
    return tryCatchApply(handler, value, boundTo);
};

Promise.prototype._callHandler =
function Promise$_callHandler(
    handler, receiver, promise, value) {
    var x;
    if (receiver === APPLY && !this.isRejected()) {
        x = this._callSpread(handler, promise, value);
    } else {
        promise._pushContext();
        x = tryCatch1(handler, receiver, value);
    }
    promise._popContext();
    return x;
};

Promise.prototype._settlePromiseFromHandler =
function Promise$_settlePromiseFromHandler(
    handler, receiver, value, promise
) {
    if (!(promise instanceof Promise)) {
        handler.call(receiver, value, promise);
        return;
    }
    var x = this._callHandler(handler, receiver, promise, value);
    if (promise._isFollowing()) return;

    if (x === errorObj || x === promise || x === NEXT_FILTER) {
        var err = x === promise
                    ? makeSelfResolutionError()
                    : x.e;
        var trace = canAttach(err) ? err : new Error(err + "");
        if (x !== NEXT_FILTER) promise._attachExtraTrace(trace);
        promise._rejectUnchecked(err, trace);
    } else {
        var castValue = cast(x, promise);
        if (castValue instanceof Promise) {
            if (castValue.isRejected() &&
                !castValue._isCarryingStackTrace() &&
                !canAttach(castValue._settledValue)) {
                var trace = new Error(castValue._settledValue + "");
                promise._attachExtraTrace(trace);
                castValue._setCarriedStackTrace(trace);
            }
            promise._follow(castValue);
            promise._propagateFrom(castValue, 1);
        } else {
            promise._fulfillUnchecked(x);
        }
    }
};

Promise.prototype._follow =
function Promise$_follow(promise) {
    this._setFollowing();

    if (promise.isPending()) {
        this._propagateFrom(promise, 1);
        promise._proxyPromise(this);
    } else if (promise.isFulfilled()) {
        this._fulfillUnchecked(promise._settledValue);
    } else {
        this._rejectUnchecked(promise._settledValue,
            promise._getCarriedStackTrace());
    }

    if (promise._isRejectionUnhandled()) promise._unsetRejectionIsUnhandled();

    if (debugging &&
        promise._traceParent == null) {
        promise._traceParent = this;
    }
};

Promise.prototype._tryFollow =
function Promise$_tryFollow(value) {
    if (this._isFollowingOrFulfilledOrRejected() ||
        value === this) {
        return false;
    }
    var maybePromise = cast(value, void 0);
    if (!(maybePromise instanceof Promise)) {
        return false;
    }
    this._follow(maybePromise);
    return true;
};

Promise.prototype._resetTrace = function Promise$_resetTrace() {
    if (debugging) {
        this._trace = new CapturedTrace(this._peekContext() === void 0);
    }
};

Promise.prototype._setTrace = function Promise$_setTrace(parent) {
    if (debugging) {
        var context = this._peekContext();
        this._traceParent = context;
        var isTopLevel = context === void 0;
        if (parent !== void 0 &&
            parent._traceParent === context) {
            this._trace = parent._trace;
        } else {
            this._trace = new CapturedTrace(isTopLevel);
        }
    }
    return this;
};

Promise.prototype._attachExtraTrace =
function Promise$_attachExtraTrace(error) {
    if (debugging) {
        var promise = this;
        var stack = error.stack;
        stack = typeof stack === "string" ? stack.split("\n") : [];
        CapturedTrace.protectErrorMessageNewlines(stack);
        var headerLineCount = 1;
        var combinedTraces = 1;
        while(promise != null &&
            promise._trace != null) {
            stack = CapturedTrace.combine(
                stack,
                promise._trace.stack.split("\n")
            );
            promise = promise._traceParent;
            combinedTraces++;
        }

        var stackTraceLimit = Error.stackTraceLimit || 10;
        var max = (stackTraceLimit + headerLineCount) * combinedTraces;
        var len = stack.length;
        if (len > max) {
            stack.length = max;
        }

        if (len > 0)
            stack[0] = stack[0].split("\u0002\u0000\u0001").join("\n");

        if (stack.length <= headerLineCount) {
            error.stack = "(No stack trace)";
        } else {
            error.stack = stack.join("\n");
        }
    }
};

Promise.prototype._cleanValues = function Promise$_cleanValues() {
    if (this._cancellable()) {
        this._cancellationParent = void 0;
    }
};

Promise.prototype._propagateFrom =
function Promise$_propagateFrom(parent, flags) {
    if ((flags & 1) > 0 && parent._cancellable()) {
        this._setCancellable();
        this._cancellationParent = parent;
    }
    if ((flags & 4) > 0) {
        this._setBoundTo(parent._boundTo);
    }
    if ((flags & 2) > 0) {
        this._setTrace(parent);
    }
};

Promise.prototype._fulfill = function Promise$_fulfill(value) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._fulfillUnchecked(value);
};

Promise.prototype._reject =
function Promise$_reject(reason, carriedStackTrace) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._rejectUnchecked(reason, carriedStackTrace);
};

Promise.prototype._settlePromiseAt = function Promise$_settlePromiseAt(index) {
    var handler = this.isFulfilled()
        ? this._fulfillmentHandlerAt(index)
        : this._rejectionHandlerAt(index);

    var value = this._settledValue;
    var receiver = this._receiverAt(index);
    var promise = this._promiseAt(index);

    if (typeof handler === "function") {
        this._settlePromiseFromHandler(handler, receiver, value, promise);
    } else {
        var done = false;
        var isFulfilled = this.isFulfilled();
        if (receiver !== void 0) {
            if (receiver instanceof Promise &&
                receiver._isProxied()) {
                receiver._unsetProxied();

                if (isFulfilled) receiver._fulfillUnchecked(value);
                else receiver._rejectUnchecked(value,
                    this._getCarriedStackTrace());
                done = true;
            } else if (receiver instanceof PromiseArray) {
                if (isFulfilled) receiver._promiseFulfilled(value, promise);
                else receiver._promiseRejected(value, promise);
                done = true;
            }
        }

        if (!done) {
            if (isFulfilled) promise._fulfill(value);
            else promise._reject(value, this._getCarriedStackTrace());
        }
    }

    if (index >= 256) {
        this._queueGC();
    }
};

Promise.prototype._isProxied = function Promise$_isProxied() {
    return (this._bitField & 4194304) === 4194304;
};

Promise.prototype._setProxied = function Promise$_setProxied() {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._unsetProxied = function Promise$_unsetProxied() {
    this._bitField = this._bitField & (~4194304);
};

Promise.prototype._isGcQueued = function Promise$_isGcQueued() {
    return (this._bitField & -1073741824) === -1073741824;
};

Promise.prototype._setGcQueued = function Promise$_setGcQueued() {
    this._bitField = this._bitField | -1073741824;
};

Promise.prototype._unsetGcQueued = function Promise$_unsetGcQueued() {
    this._bitField = this._bitField & (~-1073741824);
};

Promise.prototype._queueGC = function Promise$_queueGC() {
    if (this._isGcQueued()) return;
    this._setGcQueued();
    async.invokeLater(this._gc, this, void 0);
};

Promise.prototype._gc = function Promise$gc() {
    var len = this._length() * 5;
    for (var i = 0; i < len; i++) {
        delete this[i];
    }
    this._setLength(0);
    this._unsetGcQueued();
};

Promise.prototype._queueSettleAt = function Promise$_queueSettleAt(index) {
    if (this._isRejectionUnhandled()) this._unsetRejectionIsUnhandled();
    async.invoke(this._settlePromiseAt, this, index);
};

Promise.prototype._fulfillUnchecked =
function Promise$_fulfillUnchecked(value) {
    if (!this.isPending()) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._rejectUnchecked(err, void 0);
    }
    this._cleanValues();
    this._setFulfilled();
    this._settledValue = value;
    var len = this._length();

    if (len > 0) {
        async.invoke(this._settlePromises, this, len);
    }
};

Promise.prototype._rejectUncheckedCheckError =
function Promise$_rejectUncheckedCheckError(reason) {
    var trace = canAttach(reason) ? reason : new Error(reason + "");
    this._rejectUnchecked(reason, trace === reason ? void 0 : trace);
};

Promise.prototype._rejectUnchecked =
function Promise$_rejectUnchecked(reason, trace) {
    if (!this.isPending()) return;
    if (reason === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._rejectUnchecked(err);
    }
    this._cleanValues();
    this._setRejected();
    this._settledValue = reason;

    if (this._isFinal()) {
        async.invokeLater(thrower, void 0, trace === void 0 ? reason : trace);
        return;
    }
    var len = this._length();

    if (trace !== void 0) this._setCarriedStackTrace(trace);

    if (len > 0) {
        async.invoke(this._rejectPromises, this, null);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._rejectPromises = function Promise$_rejectPromises() {
    this._settlePromises();
    this._unsetCarriedStackTrace();
};

Promise.prototype._settlePromises = function Promise$_settlePromises() {
    var len = this._length();
    for (var i = 0; i < len; i++) {
        this._settlePromiseAt(i);
    }
};

Promise.prototype._ensurePossibleRejectionHandled =
function Promise$_ensurePossibleRejectionHandled() {
    this._setRejectionIsUnhandled();
    if (CapturedTrace.possiblyUnhandledRejection !== void 0) {
        async.invokeLater(this._notifyUnhandledRejection, this, void 0);
    }
};

Promise.prototype._notifyUnhandledRejectionIsHandled =
function Promise$_notifyUnhandledRejectionIsHandled() {
    if (typeof unhandledRejectionHandled === "function") {
        async.invokeLater(unhandledRejectionHandled, void 0, this);
    }
};

Promise.prototype._notifyUnhandledRejection =
function Promise$_notifyUnhandledRejection() {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue;
        var trace = this._getCarriedStackTrace();

        this._setUnhandledRejectionIsNotified();

        if (trace !== void 0) {
            this._unsetCarriedStackTrace();
            reason = trace;
        }
        if (typeof CapturedTrace.possiblyUnhandledRejection === "function") {
            CapturedTrace.possiblyUnhandledRejection(reason, this);
        }
    }
};

var contextStack = [];
Promise.prototype._peekContext = function Promise$_peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return void 0;

};

Promise.prototype._pushContext = function Promise$_pushContext() {
    if (!debugging) return;
    contextStack.push(this);
};

Promise.prototype._popContext = function Promise$_popContext() {
    if (!debugging) return;
    contextStack.pop();
};

Promise.noConflict = function Promise$NoConflict() {
    return noConflict(Promise);
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") throw new TypeError("fn must be a function");
    async._schedule = fn;
};

if (!CapturedTrace.isSupported()) {
    Promise.longStackTraces = function(){};
    debugging = false;
}

Promise._makeSelfResolutionError = makeSelfResolutionError;
require("./finally.js")(Promise, NEXT_FILTER, cast);
require("./direct_resolve.js")(Promise);
require("./synchronous_inspection.js")(Promise);
require("./join.js")(Promise, PromiseArray, cast, INTERNAL);
Promise.RangeError = RangeError;
Promise.CancellationError = CancellationError;
Promise.TimeoutError = TimeoutError;
Promise.TypeError = TypeError;
Promise.OperationalError = OperationalError;
Promise.RejectionError = OperationalError;
Promise.AggregateError = errors.AggregateError;

util.toFastProperties(Promise);
util.toFastProperties(Promise.prototype);
Promise.Promise = Promise;
require('./timers.js')(Promise,INTERNAL,cast);
require('./race.js')(Promise,INTERNAL,cast);
require('./call_get.js')(Promise);
require('./generators.js')(Promise,apiRejection,INTERNAL,cast);
require('./map.js')(Promise,PromiseArray,apiRejection,cast,INTERNAL);
require('./nodeify.js')(Promise);
require('./promisify.js')(Promise,INTERNAL);
require('./props.js')(Promise,PromiseArray,cast);
require('./reduce.js')(Promise,PromiseArray,apiRejection,cast,INTERNAL);
require('./settle.js')(Promise,PromiseArray);
require('./some.js')(Promise,PromiseArray,apiRejection);
require('./progress.js')(Promise,PromiseArray);
require('./cancel.js')(Promise,INTERNAL);
require('./filter.js')(Promise,INTERNAL);
require('./any.js')(Promise,PromiseArray);
require('./each.js')(Promise,INTERNAL);
require('./using.js')(Promise,apiRejection,cast);

Promise.prototype = Promise.prototype;
return Promise;

};

})(require("__browserify_process"))
},{"./util.js":56,"./async.js":57,"./errors.js":58,"./thenables.js":59,"./promise_array.js":60,"./captured_trace.js":61,"./catch_filter.js":62,"./promise_resolver.js":63,"./finally.js":64,"./direct_resolve.js":65,"./synchronous_inspection.js":66,"./join.js":67,"./timers.js":68,"./race.js":69,"./call_get.js":70,"./generators.js":71,"./map.js":72,"./nodeify.js":73,"./promisify.js":74,"./props.js":75,"./reduce.js":76,"./settle.js":77,"./some.js":78,"./progress.js":79,"./cancel.js":80,"./filter.js":81,"./any.js":82,"./each.js":83,"./using.js":84,"./errors_api_rejection":85,"__browserify_process":55}],45:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Transform
) {

  var FilterTransform = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(FilterTransform.prototype, Transform.prototype, {
    initialize: function(filterFn) {
      this._filterFn = filterFn;
    },
    apply: function(element) {
      if (this._filterFn(element)) {
        this.notify("element", element);
      }
    }
  });

  return FilterTransform;
};

module.exports = mod(
  require("underscore"),
  require("./transform")
);

})()
},{"./transform":49,"underscore":51}],46:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  Transform
) {

  var MapTransform = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(MapTransform.prototype, Transform.prototype, {
    initialize: function(mapFn) {
      Transform.prototype.initialize.apply(this, arguments);
      this._mapFn = mapFn
    },
    apply: function(element) {
      this.notify("element", this._mapFn(element));
    }
  });

  return MapTransform;
};

module.exports = mod(
  require("underscore"),
  require("./transform")
);

})()
},{"./transform":49,"underscore":51}],48:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  PubSub,
  Transform
) {

  var TransformChain = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(TransformChain.prototype, PubSub, {
    initialize: function() {
      this._head = this._tail = new Transform();

      _.bindAll(this, "_onTailElement", "apply");

      this._tail.on("element", this._onTailElement);
    },
    apply: function(element) {
      this._head.apply(element);
    },
    addTransform: function(t) {
      this._tail.off("element", this._onTailElement);
      this._tail.on("element", t.apply, t);
      this._tail = t;
      this._tail.on("element", this._onTailElement);

    },
    _onTailElement: function(element) {
      this.notify("element", element);
    }
  });

  return TransformChain;
};

module.exports = mod(
  require("underscore"),
  require("../core/pub-sub"),
  require("./transform")
);

})()
},{"../core/pub-sub":7,"./transform":49,"underscore":51}],49:[function(require,module,exports){
(function(){/*global require: false, module: false */
"use strict";

var mod = function(
  _,
  PubSub
) {

  var Transform = function() {
    this.initialize.apply(this, arguments);
  };

  _.extend(Transform.prototype, PubSub, {
    initialize: function() {},
    apply: function(element) {
      // Default is identity map
      this.notify("element", element);
    }
  });

  return Transform;
};

module.exports = mod(
  require("underscore"),
  require("../core/pub-sub")
);

})()
},{"../core/pub-sub":7,"underscore":51}],66:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== void 0) {
        this._bitField = promise._bitField;
        this._settledValue = promise.isResolved()
            ? promise._settledValue
            : void 0;
    }
    else {
        this._bitField = 0;
        this._settledValue = void 0;
    }
}

PromiseInspection.prototype.isFulfilled =
Promise.prototype.isFulfilled = function Promise$isFulfilled() {
    return (this._bitField & 268435456) > 0;
};

PromiseInspection.prototype.isRejected =
Promise.prototype.isRejected = function Promise$isRejected() {
    return (this._bitField & 134217728) > 0;
};

PromiseInspection.prototype.isPending =
Promise.prototype.isPending = function Promise$isPending() {
    return (this._bitField & 402653184) === 0;
};

PromiseInspection.prototype.value =
Promise.prototype.value = function Promise$value() {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise");
    }
    return this._settledValue;
};

PromiseInspection.prototype.error =
PromiseInspection.prototype.reason =
Promise.prototype.reason = function Promise$reason() {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise");
    }
    return this._settledValue;
};

PromiseInspection.prototype.isResolved =
Promise.prototype.isResolved = function Promise$isResolved() {
    return (this._bitField & 402653184) > 0;
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],81:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function Promise$filter(fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function Promise$Filter(promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],82:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function Promise$_Any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    if (promise.isRejected()) {
        return promise;
    }
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function Promise$Any(promises) {
    return Promise$_Any(promises);
};

Promise.prototype.any = function Promise$any() {
    return Promise$_Any(this);
};

};

},{}],83:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;

Promise.prototype.each = function Promise$each(fn) {
    return PromiseReduce(this, fn, null, INTERNAL);
};

Promise.each = function Promise$Each(promises, fn) {
    return PromiseReduce(promises, fn, null, INTERNAL);
};
};

},{}],44:[function(require,module,exports){
"use strict";

var mod = function(
  _
) {

  var SetTimeoutScheduler = function() {
    this.initialize.apply(this, arguments);
  }

  _.extend(SetTimeoutScheduler.prototype, {
    initialize: function() {},

    runSoon: function(fn) {
      this.schedule(fn);
    },
    schedule: function(fn, delay) {
      delay = delay || 1;
      return setTimeout(fn, delay);
    },

    unschedule: function(id) {
      return clearTimeout(id);
    }
  });

  return SetTimeoutScheduler;
};

module.exports = mod(
  require("underscore")
);

},{"underscore":51}],56:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var es5 = require("./es5.js");
var haveGetters = (function(){
    try {
        var o = {};
        es5.defineProperty(o, "f", {
            get: function () {
                return 3;
            }
        });
        return o.f === 3;
    }
    catch (e) {
        return false;
    }

})();
var canEvaluate = typeof navigator == "undefined";
var errorObj = {e: {}};
function tryCatch1(fn, receiver, arg) {
    try { return fn.call(receiver, arg); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch2(fn, receiver, arg, arg2) {
    try { return fn.call(receiver, arg, arg2); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch3(fn, receiver, arg, arg2, arg3) {
    try { return fn.call(receiver, arg, arg2, arg3); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch4(fn, receiver, arg, arg2, arg3, arg4) {
    try { return fn.call(receiver, arg, arg2, arg3, arg4); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatchApply(fn, args, receiver) {
    try { return fn.apply(receiver, args); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};

function asString(val) {
    return typeof val === "string" ? val : ("" + val);
}

function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return !isPrimitive(value);
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(asString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);
        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : void 0;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}


var wrapsPrimitiveReceiver = (function() {
    return this !== "string";
}).call("string");

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    if (es5.isES5) {
        return function(obj, opts) {
            var ret = [];
            var visitedKeys = Object.create(null);
            var getKeys = Object(opts).includeHidden
                ? Object.getOwnPropertyNames
                : Object.keys;
            while (obj != null) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        return function(obj) {
            var ret = [];
            /*jshint forin:false */
            for (var key in obj) {
                ret.push(key);
            }
            return ret;
        };
    }

})();

function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.keys(fn.prototype);
            return keys.length > 0 &&
                   !(keys.length === 1 && keys[0] === "constructor");
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027*/
    function f() {}
    f.prototype = obj;
    return f;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    haveGetters: haveGetters,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch1: tryCatch1,
    tryCatch2: tryCatch2,
    tryCatch3: tryCatch3,
    tryCatch4: tryCatch4,
    tryCatchApply: tryCatchApply,
    inherits: inherits,
    withAppended: withAppended,
    asString: asString,
    maybeWrapAsError: maybeWrapAsError,
    wrapsPrimitiveReceiver: wrapsPrimitiveReceiver,
    toFastProperties: toFastProperties,
    filledRange: filledRange
};

module.exports = ret;

},{"./es5.js":86}],57:[function(require,module,exports){
(function(process){/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var schedule = require("./schedule.js");
var Queue = require("./queue.js");
var errorObj = require("./util.js").errorObj;
var tryCatch1 = require("./util.js").tryCatch1;
var _process = typeof process !== "undefined" ? process : void 0;

function Async() {
    this._isTickUsed = false;
    this._schedule = schedule;
    this._length = 0;
    this._lateBuffer = new Queue(16);
    this._functionBuffer = new Queue(65536);
    var self = this;
    this.consumeFunctionBuffer = function Async$consumeFunctionBuffer() {
        self._consumeFunctionBuffer();
    };
}

Async.prototype.haveItemsQueued = function Async$haveItemsQueued() {
    return this._length > 0;
};

Async.prototype.invokeLater = function Async$invokeLater(fn, receiver, arg) {
    if (_process !== void 0 &&
        _process.domain != null &&
        !fn.domain) {
        fn = _process.domain.bind(fn);
    }
    this._lateBuffer.push(fn, receiver, arg);
    this._queueTick();
};

Async.prototype.invoke = function Async$invoke(fn, receiver, arg) {
    if (_process !== void 0 &&
        _process.domain != null &&
        !fn.domain) {
        fn = _process.domain.bind(fn);
    }
    var functionBuffer = this._functionBuffer;
    functionBuffer.push(fn, receiver, arg);
    this._length = functionBuffer.length();
    this._queueTick();
};

Async.prototype._consumeFunctionBuffer =
function Async$_consumeFunctionBuffer() {
    var functionBuffer = this._functionBuffer;
    while (functionBuffer.length() > 0) {
        var fn = functionBuffer.shift();
        var receiver = functionBuffer.shift();
        var arg = functionBuffer.shift();
        fn.call(receiver, arg);
    }
    this._reset();
    this._consumeLateBuffer();
};

Async.prototype._consumeLateBuffer = function Async$_consumeLateBuffer() {
    var buffer = this._lateBuffer;
    while(buffer.length() > 0) {
        var fn = buffer.shift();
        var receiver = buffer.shift();
        var arg = buffer.shift();
        var res = tryCatch1(fn, receiver, arg);
        if (res === errorObj) {
            this._queueTick();
            if (fn.domain != null) {
                fn.domain.emit("error", res.e);
            } else {
                throw res.e;
            }
        }
    }
};

Async.prototype._queueTick = function Async$_queue() {
    if (!this._isTickUsed) {
        this._schedule(this.consumeFunctionBuffer);
        this._isTickUsed = true;
    }
};

Async.prototype._reset = function Async$_reset() {
    this._isTickUsed = false;
    this._length = 0;
};

module.exports = new Async();

})(require("__browserify_process"))
},{"./schedule.js":87,"./util.js":56,"./queue.js":88,"__browserify_process":55}],58:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var Objectfreeze = require("./es5.js").freeze;
var util = require("./util.js");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof OperationalError) ||
        e["isOperational"] === true);
}

function isError(obj) {
    return obj instanceof Error;
}

function canAttach(obj) {
    return isError(obj);
}

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        this.message = typeof message === "string" ? message : defaultMessage;
        this.name = nameProperty;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

AggregateError.prototype.length = 0;
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    this.name = "OperationalError";
    this.message = message;
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        this.message = message.message;
        this.stack = message.stack;
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var key = "__BluebirdErrorTypes__";
var errorTypes = Error[key];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    notEnumerableProp(Error, key, errorTypes);
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    canAttach: canAttach
};

},{"./es5.js":86,"./util.js":56}],59:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = require("./util.js");
var canAttach = require("./errors.js").canAttach;
var errorObj = util.errorObj;
var isObject = util.isObject;

function getThen(obj) {
    try {
        return obj.then;
    }
    catch(e) {
        errorObj.e = e;
        return errorObj;
    }
}

function Promise$_Cast(obj, originalPromise) {
    if (isObject(obj)) {
        if (obj instanceof Promise) {
            return obj;
        }
        else if (isAnyBluebirdPromise(obj)) {
            var ret = new Promise(INTERNAL);
            ret._setTrace(void 0);
            obj._then(
                ret._fulfillUnchecked,
                ret._rejectUncheckedCheckError,
                ret._progressUnchecked,
                ret,
                null
            );
            ret._setFollowing();
            return ret;
        }
        var then = getThen(obj);
        if (then === errorObj) {
            if (originalPromise !== void 0 && canAttach(then.e)) {
                originalPromise._attachExtraTrace(then.e);
            }
            return Promise.reject(then.e);
        } else if (typeof then === "function") {
            return Promise$_doThenable(obj, then, originalPromise);
        }
    }
    return obj;
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    return hasProp.call(obj, "_promise0");
}

function Promise$_doThenable(x, then, originalPromise) {
    var resolver = Promise.defer();
    var called = false;
    try {
        then.call(
            x,
            Promise$_resolveFromThenable,
            Promise$_rejectFromThenable,
            Promise$_progressFromThenable
        );
    } catch(e) {
        if (!called) {
            called = true;
            var trace = canAttach(e) ? e : new Error(e + "");
            if (originalPromise !== void 0) {
                originalPromise._attachExtraTrace(trace);
            }
            resolver.promise._reject(e, trace);
        }
    }
    return resolver.promise;

    function Promise$_resolveFromThenable(y) {
        if (called) return;
        called = true;

        if (x === y) {
            var e = Promise._makeSelfResolutionError();
            if (originalPromise !== void 0) {
                originalPromise._attachExtraTrace(e);
            }
            resolver.promise._reject(e, void 0);
            return;
        }
        resolver.resolve(y);
    }

    function Promise$_rejectFromThenable(r) {
        if (called) return;
        called = true;
        var trace = canAttach(r) ? r : new Error(r + "");
        if (originalPromise !== void 0) {
            originalPromise._attachExtraTrace(trace);
        }
        resolver.promise._reject(r, trace);
    }

    function Promise$_progressFromThenable(v) {
        if (called) return;
        var promise = resolver.promise;
        if (typeof promise._progress === "function") {
            promise._progress(v);
        }
    }
}

return Promise$_Cast;
};

},{"./util.js":56,"./errors.js":58}],60:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL, cast) {
var canAttach = require("./errors.js").canAttach;
var util = require("./util.js");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -1: return void 0;
    case -2: return [];
    case -3: return {};
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    var parent = void 0;
    if (values instanceof Promise) {
        parent = values;
        promise._propagateFrom(parent, 1 | 4);
    }
    promise._setTrace(parent);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(void 0, -2);
}
PromiseArray.prototype.length = function PromiseArray$length() {
    return this._length;
};

PromiseArray.prototype.promise = function PromiseArray$promise() {
    return this._promise;
};

PromiseArray.prototype._init =
function PromiseArray$_init(_, resolveValueIfEmpty) {
    var values = cast(this._values, void 0);
    if (values instanceof Promise) {
        this._values = values;
        values._setBoundTo(this._promise._boundTo);
        if (values.isFulfilled()) {
            values = values._settledValue;
            if (!isArray(values)) {
                var err = new Promise.TypeError("expecting an array, a promise or a thenable");
                this.__hardReject__(err);
                return;
            }
        } else if (values.isPending()) {
            values._then(
                PromiseArray$_init,
                this._reject,
                void 0,
                this,
                resolveValueIfEmpty
           );
            return;
        } else {
            values._unsetRejectionIsUnhandled();
            this._reject(values._settledValue);
            return;
        }
    } else if (!isArray(values)) {
        var err = new Promise.TypeError("expecting an array, a promise or a thenable");
        this.__hardReject__(err);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    var len = this.getActualLength(values.length);
    var newLen = len;
    var newValues = this.shouldCopyValues() ? new Array(len) : this._values;
    var isDirectScanNeeded = false;
    for (var i = 0; i < len; ++i) {
        var maybePromise = cast(values[i], void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                maybePromise._proxyPromiseArray(this, i);
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                isDirectScanNeeded = true;
            }
        } else {
            isDirectScanNeeded = true;
        }
        newValues[i] = maybePromise;
    }
    this._values = newValues;
    this._length = newLen;
    if (isDirectScanNeeded) {
        this._scanDirectValues(len);
    }
};

PromiseArray.prototype._settlePromiseAt =
function PromiseArray$_settlePromiseAt(index) {
    var value = this._values[index];
    if (!(value instanceof Promise)) {
        this._promiseFulfilled(value, index);
    } else if (value.isFulfilled()) {
        this._promiseFulfilled(value._settledValue, index);
    } else if (value.isRejected()) {
        this._promiseRejected(value._settledValue, index);
    }
};

PromiseArray.prototype._scanDirectValues =
function PromiseArray$_scanDirectValues(len) {
    for (var i = 0; i < len; ++i) {
        if (this._isResolved()) {
            break;
        }
        this._settlePromiseAt(i);
    }
};

PromiseArray.prototype._isResolved = function PromiseArray$_isResolved() {
    return this._values === null;
};

PromiseArray.prototype._resolve = function PromiseArray$_resolve(value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype.__hardReject__ =
PromiseArray.prototype._reject = function PromiseArray$_reject(reason) {
    this._values = null;
    var trace = canAttach(reason) ? reason : new Error(reason + "");
    this._promise._attachExtraTrace(trace);
    this._promise._reject(reason, trace);
};

PromiseArray.prototype._promiseProgressed =
function PromiseArray$_promiseProgressed(progressValue, index) {
    if (this._isResolved()) return;
    this._promise._progress({
        index: index,
        value: progressValue
    });
};


PromiseArray.prototype._promiseFulfilled =
function PromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
    }
};

PromiseArray.prototype._promiseRejected =
function PromiseArray$_promiseRejected(reason, index) {
    if (this._isResolved()) return;
    this._totalResolved++;
    this._reject(reason);
};

PromiseArray.prototype.shouldCopyValues =
function PromiseArray$_shouldCopyValues() {
    return true;
};

PromiseArray.prototype.getActualLength =
function PromiseArray$getActualLength(len) {
    return len;
};

return PromiseArray;
};

},{"./errors.js":58,"./util.js":56}],61:[function(require,module,exports){
(function(){/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function() {
var inherits = require("./util.js").inherits;
var defineProperty = require("./es5.js").defineProperty;

var rignore = new RegExp(
    "\\b(?:[a-zA-Z0-9.]+\\$_\\w+|" +
    "tryCatch(?:1|2|3|4|Apply)|new \\w*PromiseArray|" +
    "\\w*PromiseArray\\.\\w*PromiseArray|" +
    "setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|" +
    "process._tickCallback|nextTick|Async\\$\\w+)\\b"
);

var rtraceline = null;
var formatStack = null;

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj.toString();
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function CapturedTrace(ignoreUntil, isTopLevel) {
    this.captureStackTrace(CapturedTrace, isTopLevel);

}
inherits(CapturedTrace, Error);

CapturedTrace.prototype.captureStackTrace =
function CapturedTrace$captureStackTrace(ignoreUntil, isTopLevel) {
    captureStackTrace(this, ignoreUntil, isTopLevel);
};

CapturedTrace.possiblyUnhandledRejection =
function CapturedTrace$PossiblyUnhandledRejection(reason) {
    if (typeof console === "object") {
        var message;
        if (typeof reason === "object" || typeof reason === "function") {
            var stack = reason.stack;
            message = "Possibly unhandled " + formatStack(stack, reason);
        } else {
            message = "Possibly unhandled " + String(reason);
        }
        if (typeof console.error === "function" ||
            typeof console.error === "object") {
            console.error(message);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
};

CapturedTrace.combine = function CapturedTrace$Combine(current, prev) {
    var curLast = current.length - 1;
    for (var i = prev.length - 1; i >= 0; --i) {
        var line = prev[i];
        if (current[curLast] === line) {
            current.pop();
            curLast--;
        } else {
            break;
        }
    }

    current.push("From previous event:");
    var lines = current.concat(prev);

    var ret = [];

    for (var i = 0, len = lines.length; i < len; ++i) {

        if ((rignore.test(lines[i]) ||
            (i > 0 && !rtraceline.test(lines[i])) &&
            lines[i] !== "From previous event:")
       ) {
            continue;
        }
        ret.push(lines[i]);
    }
    return ret;
};

CapturedTrace.protectErrorMessageNewlines = function(stack) {
    for (var i = 0; i < stack.length; ++i) {
        if (rtraceline.test(stack[i])) {
            break;
        }
    }

    if (i <= 1) return;

    var errorMessageLines = [];
    for (var j = 0; j < i; ++j) {
        errorMessageLines.push(stack.shift());
    }
    stack.unshift(errorMessageLines.join("\u0002\u0000\u0001"));
};

CapturedTrace.isSupported = function CapturedTrace$IsSupported() {
    return typeof captureStackTrace === "function";
};

var captureStackTrace = (function stackDetection() {
    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        rtraceline = /^\s*at\s*/;
        formatStack = function(stack, error) {
            if (typeof stack === "string") return stack;

            if (error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);


        };
        var captureStackTrace = Error.captureStackTrace;
        return function CapturedTrace$_captureStackTrace(
            receiver, ignoreUntil) {
            captureStackTrace(receiver, ignoreUntil);
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        typeof "".startsWith === "function" &&
        (err.stack.startsWith("stackDetection@")) &&
        stackDetection.name === "stackDetection") {

        defineProperty(Error, "stackTraceLimit", {
            writable: true,
            enumerable: false,
            configurable: false,
            value: 25
        });
        rtraceline = /@/;
        var rline = /[@\n]/;

        formatStack = function(stack, error) {
            if (typeof stack === "string") {
                return (error.name + ". " + error.message + "\n" + stack);
            }

            if (error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);
        };

        return function captureStackTrace(o) {
            var stack = new Error().stack;
            var split = stack.split(rline);
            var len = split.length;
            var ret = "";
            for (var i = 0; i < len; i += 2) {
                ret += split[i];
                ret += "@";
                ret += split[i + 1];
                ret += "\n";
            }
            o.stack = ret;
        };
    } else {
        formatStack = function(stack, error) {
            if (typeof stack === "string") return stack;

            if ((typeof error === "object" ||
                typeof error === "function") &&
                error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);
        };

        return null;
    }
})();

return CapturedTrace;
};

})()
},{"./util.js":56,"./es5.js":86}],62:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(NEXT_FILTER) {
var util = require("./util.js");
var errors = require("./errors.js");
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;
var keys = require("./es5.js").keys;
var TypeError = errors.TypeError;

function CatchFilter(instances, callback, promise) {
    this._instances = instances;
    this._callback = callback;
    this._promise = promise;
}

function CatchFilter$_safePredicate(predicate, e) {
    var safeObject = {};
    var retfilter = tryCatch1(predicate, safeObject, e);

    if (retfilter === errorObj) return retfilter;

    var safeKeys = keys(safeObject);
    if (safeKeys.length) {
        errorObj.e = new TypeError(
            "Catch filter must inherit from Error "
          + "or be a simple predicate function");
        return errorObj;
    }
    return retfilter;
}

CatchFilter.prototype.doFilter = function CatchFilter$_doFilter(e) {
    var cb = this._callback;
    var promise = this._promise;
    var boundTo = promise._boundTo;
    for (var i = 0, len = this._instances.length; i < len; ++i) {
        var item = this._instances[i];
        var itemIsErrorType = item === Error ||
            (item != null && item.prototype instanceof Error);

        if (itemIsErrorType && e instanceof item) {
            var ret = tryCatch1(cb, boundTo, e);
            if (ret === errorObj) {
                NEXT_FILTER.e = ret.e;
                return NEXT_FILTER;
            }
            return ret;
        } else if (typeof item === "function" && !itemIsErrorType) {
            var shouldHandle = CatchFilter$_safePredicate(item, e);
            if (shouldHandle === errorObj) {
                var trace = errors.canAttach(errorObj.e)
                    ? errorObj.e
                    : new Error(errorObj.e + "");
                this._promise._attachExtraTrace(trace);
                e = errorObj.e;
                break;
            } else if (shouldHandle) {
                var ret = tryCatch1(cb, boundTo, e);
                if (ret === errorObj) {
                    NEXT_FILTER.e = ret.e;
                    return NEXT_FILTER;
                }
                return ret;
            }
        }
    }
    NEXT_FILTER.e = e;
    return NEXT_FILTER;
};

return CatchFilter;
};

},{"./util.js":56,"./errors.js":58,"./es5.js":86}],63:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var util = require("./util.js");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = require("./errors.js");
var TimeoutError = errors.TimeoutError;
var OperationalError = errors.OperationalError;
var async = require("./async.js");
var haveGetters = util.haveGetters;
var es5 = require("./es5.js");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
    } else {
        ret = obj;
    }
    errors.markAsOriginatingFromRejection(ret);
    return ret;
}

function nodebackForPromise(promise) {
    function PromiseResolver$_callback(err, value) {
        if (promise === null) return;

        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (arguments.length > 2) {
            var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
            promise._fulfill(args);
        } else {
            promise._fulfill(value);
        }

        promise = null;
    }
    return PromiseResolver$_callback;
}


var PromiseResolver;
if (!haveGetters) {
    PromiseResolver = function PromiseResolver(promise) {
        this.promise = promise;
        this.asCallback = nodebackForPromise(promise);
        this.callback = this.asCallback;
    };
}
else {
    PromiseResolver = function PromiseResolver(promise) {
        this.promise = promise;
    };
}
if (haveGetters) {
    var prop = {
        get: function() {
            return nodebackForPromise(this.promise);
        }
    };
    es5.defineProperty(PromiseResolver.prototype, "asCallback", prop);
    es5.defineProperty(PromiseResolver.prototype, "callback", prop);
}

PromiseResolver._nodebackForPromise = nodebackForPromise;

PromiseResolver.prototype.toString = function PromiseResolver$toString() {
    return "[object PromiseResolver]";
};

PromiseResolver.prototype.resolve =
PromiseResolver.prototype.fulfill = function PromiseResolver$resolve(value) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }

    var promise = this.promise;
    if (promise._tryFollow(value)) {
        return;
    }
    async.invoke(promise._fulfill, promise, value);
};

PromiseResolver.prototype.reject = function PromiseResolver$reject(reason) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }

    var promise = this.promise;
    errors.markAsOriginatingFromRejection(reason);
    var trace = errors.canAttach(reason) ? reason : new Error(reason + "");
    promise._attachExtraTrace(trace);
    async.invoke(promise._reject, promise, reason);
    if (trace !== reason) {
        async.invoke(this._setCarriedStackTrace, this, trace);
    }
};

PromiseResolver.prototype.progress =
function PromiseResolver$progress(value) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }
    async.invoke(this.promise._progress, this.promise, value);
};

PromiseResolver.prototype.cancel = function PromiseResolver$cancel() {
    async.invoke(this.promise.cancel, this.promise, void 0);
};

PromiseResolver.prototype.timeout = function PromiseResolver$timeout() {
    this.reject(new TimeoutError("timeout"));
};

PromiseResolver.prototype.isResolved = function PromiseResolver$isResolved() {
    return this.promise.isResolved();
};

PromiseResolver.prototype.toJSON = function PromiseResolver$toJSON() {
    return this.promise.toJSON();
};

PromiseResolver.prototype._setCarriedStackTrace =
function PromiseResolver$_setCarriedStackTrace(trace) {
    if (this.promise.isRejected()) {
        this.promise._setCarriedStackTrace(trace);
    }
};

module.exports = PromiseResolver;

},{"./util.js":56,"./errors.js":58,"./async.js":57,"./es5.js":86}],64:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, NEXT_FILTER, cast) {
var util = require("./util.js");
var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;
var isPrimitive = util.isPrimitive;
var thrower = util.thrower;

function returnThis() {
    return this;
}
function throwThis() {
    throw this;
}
function return$(r) {
    return function Promise$_returner() {
        return r;
    };
}
function throw$(r) {
    return function Promise$_thrower() {
        throw r;
    };
}
function promisedFinally(ret, reasonOrValue, isFulfilled) {
    var then;
    if (wrapsPrimitiveReceiver && isPrimitive(reasonOrValue)) {
        then = isFulfilled ? return$(reasonOrValue) : throw$(reasonOrValue);
    } else {
        then = isFulfilled ? returnThis : throwThis;
    }
    return ret._then(then, thrower, void 0, reasonOrValue, void 0);
}

function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    var ret = promise._isBound()
                    ? handler.call(promise._boundTo)
                    : handler();

    if (ret !== void 0) {
        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            return promisedFinally(maybePromise, reasonOrValue,
                                    promise.isFulfilled());
        }
    }

    if (promise.isRejected()) {
        NEXT_FILTER.e = reasonOrValue;
        return NEXT_FILTER;
    } else {
        return reasonOrValue;
    }
}

function tapHandler(value) {
    var promise = this.promise;
    var handler = this.handler;

    var ret = promise._isBound()
                    ? handler.call(promise._boundTo, value)
                    : handler(value);

    if (ret !== void 0) {
        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            return promisedFinally(maybePromise, value, true);
        }
    }
    return value;
}

Promise.prototype._passThroughHandler =
function Promise$_passThroughHandler(handler, isFinally) {
    if (typeof handler !== "function") return this.then();

    var promiseAndHandler = {
        promise: this,
        handler: handler
    };

    return this._then(
            isFinally ? finallyHandler : tapHandler,
            isFinally ? finallyHandler : void 0, void 0,
            promiseAndHandler, void 0);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function Promise$finally(handler) {
    return this._passThroughHandler(handler, true);
};

Promise.prototype.tap = function Promise$tap(handler) {
    return this._passThroughHandler(handler, false);
};
};

},{"./util.js":56}],65:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var util = require("./util.js");
var isPrimitive = util.isPrimitive;
var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;

module.exports = function(Promise) {
var returner = function Promise$_returner() {
    return this;
};
var thrower = function Promise$_thrower() {
    throw this;
};

var wrapper = function Promise$_wrapper(value, action) {
    if (action === 1) {
        return function Promise$_thrower() {
            throw value;
        };
    } else if (action === 2) {
        return function Promise$_returner() {
            return value;
        };
    }
};


Promise.prototype["return"] =
Promise.prototype.thenReturn =
function Promise$thenReturn(value) {
    if (wrapsPrimitiveReceiver && isPrimitive(value)) {
        return this._then(
            wrapper(value, 2),
            void 0,
            void 0,
            void 0,
            void 0
       );
    }
    return this._then(returner, void 0, void 0, value, void 0);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow =
function Promise$thenThrow(reason) {
    if (wrapsPrimitiveReceiver && isPrimitive(reason)) {
        return this._then(
            wrapper(reason, 1),
            void 0,
            void 0,
            void 0,
            void 0
       );
    }
    return this._then(thrower, void 0, void 0, reason, void 0);
};
};

},{"./util.js":56}],67:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
function(Promise, PromiseArray, cast, INTERNAL) {
var util = require("./util.js");
var canEvaluate = util.canEvaluate;
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;


if (canEvaluate) {
    var thenCallback = function(i) {
        return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
    };

    var caller = function(count) {
        var values = [];
        for (var i = 1; i <= count; ++i) values.push("holder.p" + i);
        return new Function("holder", "                                      \n\
            'use strict';                                                    \n\
            var callback = holder.fn;                                        \n\
            return callback(values);                                         \n\
            ".replace(/values/g, values.join(", ")));
    };
    var thenCallbacks = [];
    var callers = [void 0];
    for (var i = 1; i <= 5; ++i) {
        thenCallbacks.push(thenCallback(i));
        callers.push(caller(i));
    }

    var Holder = function(total, fn) {
        this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null;
        this.fn = fn;
        this.total = total;
        this.now = 0;
    };

    Holder.prototype.callers = callers;
    Holder.prototype.checkFulfillment = function(promise) {
        var now = this.now;
        now++;
        var total = this.total;
        if (now >= total) {
            var handler = this.callers[total];
            var ret = tryCatch1(handler, void 0, this);
            if (ret === errorObj) {
                promise._rejectUnchecked(ret.e);
            } else if (!promise._tryFollow(ret)) {
                promise._fulfillUnchecked(ret);
            }
        } else {
            this.now = now;
        }
    };
}




Promise.join = function Promise$Join() {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (last < 6 && canEvaluate) {
            var ret = new Promise(INTERNAL);
            ret._setTrace(void 0);
            var holder = new Holder(last, fn);
            var reject = ret._reject;
            var callbacks = thenCallbacks;
            for (var i = 0; i < last; ++i) {
                var maybePromise = cast(arguments[i], void 0);
                if (maybePromise instanceof Promise) {
                    if (maybePromise.isPending()) {
                        maybePromise._then(callbacks[i], reject,
                                           void 0, ret, holder);
                    } else if (maybePromise.isFulfilled()) {
                        callbacks[i].call(ret,
                                          maybePromise._settledValue, holder);
                    } else {
                        ret._reject(maybePromise._settledValue);
                        maybePromise._unsetRejectionIsUnhandled();
                    }
                } else {
                    callbacks[i].call(ret, maybePromise, holder);
                }
            }
            return ret;
        }
    }
    var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
    var ret = new PromiseArray(args).promise();
    return fn !== void 0 ? ret.spread(fn) : ret;
};

};

},{"./util.js":56}],69:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL, cast) {
var apiRejection = require("./errors_api_rejection.js")(Promise);
var isArray = require("./util.js").isArray;

var raceLater = function Promise$_raceLater(promise) {
    return promise.then(function(array) {
        return Promise$_Race(array, promise);
    });
};

var hasOwn = {}.hasOwnProperty;
function Promise$_Race(promises, parent) {
    var maybePromise = cast(promises, void 0);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else if (!isArray(promises)) {
        return apiRejection("expecting an array, a promise or a thenable");
    }

    var ret = new Promise(INTERNAL);
    if (parent !== void 0) {
        ret._propagateFrom(parent, 7);
    } else {
        ret._setTrace(void 0);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === void 0 && !(hasOwn.call(promises, i))) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, void 0, ret, null);
    }
    return ret;
}

Promise.race = function Promise$Race(promises) {
    return Promise$_Race(promises, void 0);
};

Promise.prototype.race = function Promise$race() {
    return Promise$_Race(this, void 0);
};

};

},{"./errors_api_rejection.js":85,"./util.js":56}],70:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = require("./util.js");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

function makeMethodCaller (methodName) {
    return new Function("obj", "                                             \n\
        'use strict'                                                         \n\
        var len = this.length;                                               \n\
        switch(len) {                                                        \n\
            case 1: return obj.methodName(this[0]);                          \n\
            case 2: return obj.methodName(this[0], this[1]);                 \n\
            case 3: return obj.methodName(this[0], this[1], this[2]);        \n\
            case 0: return obj.methodName();                                 \n\
            default: return obj.methodName.apply(obj, this);                 \n\
        }                                                                    \n\
        ".replace(/methodName/g, methodName));
}

function makeGetter (propertyName) {
    return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
}

function getCompiled(name, compiler, cache) {
    var ret = cache[name];
    if (typeof ret !== "function") {
        if (!isIdentifier(name)) {
            return null;
        }
        ret = compiler(name);
        cache[name] = ret;
        cache[" size"]++;
        if (cache[" size"] > 512) {
            var keys = Object.keys(cache);
            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
            cache[" size"] = keys.length - 256;
        }
    }
    return ret;
}

function getMethodCaller(name) {
    return getCompiled(name, makeMethodCaller, callerCache);
}

function getGetter(name) {
    return getCompiled(name, makeGetter, getterCache);
}

function caller(obj) {
    return obj[this.pop()].apply(obj, this);
}
Promise.prototype.call = function Promise$call(methodName) {
    var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
    if (canEvaluate) {
        var maybeCaller = getMethodCaller(methodName);
        if (maybeCaller !== null) {
            return this._then(maybeCaller, void 0, void 0, args, void 0);
        }
    }
    args.push(methodName);
    return this._then(caller, void 0, void 0, args, void 0);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    return obj[this];
}
Promise.prototype.get = function Promise$get(propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, void 0, void 0, propertyName, void 0);
};
};

},{"./util.js":56}],71:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, apiRejection, INTERNAL, cast) {
var errors = require("./errors.js");
var TypeError = errors.TypeError;
var deprecated = require("./util.js").deprecated;
var util = require("./util.js");
var errorObj = util.errorObj;
var tryCatch1 = util.tryCatch1;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers) {
    var _errorObj = errorObj;
    var _Promise = Promise;
    var len = yieldHandlers.length;
    for (var i = 0; i < len; ++i) {
        var result = tryCatch1(yieldHandlers[i], void 0, value);
        if (result === _errorObj) {
            return _Promise.reject(_errorObj.e);
        }
        var maybePromise = cast(result, promiseFromYieldHandler);
        if (maybePromise instanceof _Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler) {
    var promise = this._promise = new Promise(INTERNAL);
    promise._setTrace(void 0);
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = void 0;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
}

PromiseSpawn.prototype.promise = function PromiseSpawn$promise() {
    return this._promise;
};

PromiseSpawn.prototype._run = function PromiseSpawn$_run() {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = void 0;
    this._next(void 0);
};

PromiseSpawn.prototype._continue = function PromiseSpawn$_continue(result) {
    if (result === errorObj) {
        this._generator = void 0;
        var trace = errors.canAttach(result.e)
            ? result.e : new Error(result.e + "");
        this._promise._attachExtraTrace(trace);
        this._promise._reject(result.e, trace);
        return;
    }

    var value = result.value;
    if (result.done === true) {
        this._generator = void 0;
        if (!this._promise._tryFollow(value)) {
            this._promise._fulfill(value);
        }
    } else {
        var maybePromise = cast(value, void 0);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise, this._yieldHandlers);
            if (maybePromise === null) {
                this._throw(new TypeError("A value was yielded that could not be treated as a promise"));
                return;
            }
        }
        maybePromise._then(
            this._next,
            this._throw,
            void 0,
            this,
            null
       );
    }
};

PromiseSpawn.prototype._throw = function PromiseSpawn$_throw(reason) {
    if (errors.canAttach(reason))
        this._promise._attachExtraTrace(reason);
    this._continue(
        tryCatch1(this._generator["throw"], this._generator, reason)
   );
};

PromiseSpawn.prototype._next = function PromiseSpawn$_next(value) {
    this._continue(
        tryCatch1(this._generator.next, this._generator, value)
   );
};

Promise.coroutine =
function Promise$Coroutine(generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(void 0, void 0, yieldHandler);
        spawn._generator = generator;
        spawn._next(void 0);
        return spawn.promise();
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") throw new TypeError("fn must be a function");
    yieldHandlers.push(fn);
};

Promise.spawn = function Promise$Spawn(generatorFunction) {
    deprecated("Promise.spawn is deprecated. Use Promise.coroutine instead.");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors.js":58,"./util.js":56}],72:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
var util = require("./util.js");
var tryCatch3 = util.tryCatch3;
var errorObj = util.errorObj;
var PENDING = {};
var EMPTY_ARRAY = [];

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._callback = fn;
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
    this._init$(void 0, -2);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._init = function MappingPromiseArray$_init() {};

MappingPromiseArray.prototype._promiseFulfilled =
function MappingPromiseArray$_promiseFulfilled(value, index) {
    var values = this._values;
    if (values === null) return;

    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;
    if (values[index] === PENDING) {
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var callback = this._callback;
        var receiver = this._promise._boundTo;
        var ret = tryCatch3(callback, receiver, value, index, length);
        if (ret === errorObj) return this._reject(ret.e);

        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                if (limit >= 1) this._inFlight++;
                values[index] = PENDING;
                return maybePromise._proxyPromiseArray(this, index);
            } else if (maybePromise.isFulfilled()) {
                ret = maybePromise.value();
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                return this._reject(maybePromise.reason());
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }

    }
};

MappingPromiseArray.prototype._drainQueue =
function MappingPromiseArray$_drainQueue() {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter =
function MappingPromiseArray$_filter(booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues =
function MappingPromiseArray$preserveValues() {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    var limit = typeof options === "object" && options !== null
        ? options.concurrency
        : 0;
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter);
}

Promise.prototype.map = function Promise$map(fn, options) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");

    return map(this, fn, options, null).promise();
};

Promise.map = function Promise$Map(promises, fn, options, _filter) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");
    return map(promises, fn, options, _filter).promise();
};


};

},{"./util.js":56}],73:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var util = require("./util.js");
var async = require("./async.js");
var tryCatch2 = util.tryCatch2;
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;

function thrower(r) {
    throw r;
}

function Promise$_spreadAdapter(val, receiver) {
    if (!util.isArray(val)) return Promise$_successAdapter(val, receiver);
    var ret = util.tryCatchApply(this, [null].concat(val), receiver);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}

function Promise$_successAdapter(val, receiver) {
    var nodeback = this;
    var ret = val === void 0
        ? tryCatch1(nodeback, receiver, null)
        : tryCatch2(nodeback, receiver, null, val);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}
function Promise$_errorAdapter(reason, receiver) {
    var nodeback = this;
    var ret = tryCatch1(nodeback, receiver, reason);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}

Promise.prototype.nodeify = function Promise$nodeify(nodeback, options) {
    if (typeof nodeback == "function") {
        var adapter = Promise$_successAdapter;
        if (options !== void 0 && Object(options).spread) {
            adapter = Promise$_spreadAdapter;
        }
        this._then(
            adapter,
            Promise$_errorAdapter,
            void 0,
            nodeback,
            this._boundTo
        );
    }
    return this;
};
};

},{"./util.js":56,"./async.js":57}],76:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
var util = require("./util.js");
var tryCatch4 = util.tryCatch4;
var tryCatch3 = util.tryCatch3;
var errorObj = util.errorObj;
function ReductionPromiseArray(promises, fn, accum, _each) {
    this.constructor$(promises);
    this._preservedValues = _each === INTERNAL ? [] : null;
    this._zerothIsAccum = (accum === void 0);
    this._gotAccum = false;
    this._reducingIndex = (this._zerothIsAccum ? 1 : 0);
    this._valuesPhase = undefined;

    var maybePromise = cast(accum, void 0);
    var rejected = false;
    var isPromise = maybePromise instanceof Promise;
    if (isPromise) {
        if (maybePromise.isPending()) {
            maybePromise._proxyPromiseArray(this, -1);
        } else if (maybePromise.isFulfilled()) {
            accum = maybePromise.value();
            this._gotAccum = true;
        } else {
            maybePromise._unsetRejectionIsUnhandled();
            this._reject(maybePromise.reason());
            rejected = true;
        }
    }
    if (!(isPromise || this._zerothIsAccum)) this._gotAccum = true;
    this._callback = fn;
    this._accum = accum;
    if (!rejected) this._init$(void 0, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._init =
function ReductionPromiseArray$_init() {};

ReductionPromiseArray.prototype._resolveEmptyArray =
function ReductionPromiseArray$_resolveEmptyArray() {
    if (this._gotAccum || this._zerothIsAccum) {
        this._resolve(this._preservedValues !== null
                        ? [] : this._accum);
    }
};

ReductionPromiseArray.prototype._promiseFulfilled =
function ReductionPromiseArray$_promiseFulfilled(value, index) {
    var values = this._values;
    if (values === null) return;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var isEach = preservedValues !== null;
    var gotAccum = this._gotAccum;
    var valuesPhase = this._valuesPhase;
    var valuesPhaseIndex;
    if (!valuesPhase) {
        valuesPhase = this._valuesPhase = Array(length);
        for (valuesPhaseIndex=0; valuesPhaseIndex<length; ++valuesPhaseIndex) {
            valuesPhase[valuesPhaseIndex] = 0;
        }
    }
    valuesPhaseIndex = valuesPhase[index];

    if (index === 0 && this._zerothIsAccum) {
        if (!gotAccum) {
            this._accum = value;
            this._gotAccum = gotAccum = true;
        }
        valuesPhase[index] = ((valuesPhaseIndex === 0)
            ? 1 : 2);
    } else if (index === -1) {
        if (!gotAccum) {
            this._accum = value;
            this._gotAccum = gotAccum = true;
        }
    } else {
        if (valuesPhaseIndex === 0) {
            valuesPhase[index] = 1;
        }
        else {
            valuesPhase[index] = 2;
            if (gotAccum) {
                this._accum = value;
            }
        }
    }
    if (!gotAccum) return;

    var callback = this._callback;
    var receiver = this._promise._boundTo;
    var ret;

    for (var i = this._reducingIndex; i < length; ++i) {
        valuesPhaseIndex = valuesPhase[i];
        if (valuesPhaseIndex === 2) {
            this._reducingIndex = i + 1;
            continue;
        }
        if (valuesPhaseIndex !== 1) return;

        value = values[i];
        if (value instanceof Promise) {
            if (value.isFulfilled()) {
                value = value._settledValue;
            } else if (value.isPending()) {
                return;
            } else {
                value._unsetRejectionIsUnhandled();
                return this._reject(value.reason());
            }
        }

        if (isEach) {
            preservedValues.push(value);
            ret = tryCatch3(callback, receiver, value, i, length);
        }
        else {
            ret = tryCatch4(callback, receiver, this._accum, value, i, length);
        }

        if (ret === errorObj) return this._reject(ret.e);

        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                valuesPhase[i] = 4;
                return maybePromise._proxyPromiseArray(this, i);
            } else if (maybePromise.isFulfilled()) {
                ret = maybePromise.value();
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                return this._reject(maybePromise.reason());
            }
        }

        this._reducingIndex = i + 1;
        this._accum = ret;
    }

    if (this._reducingIndex < length) return;
    this._resolve(isEach ? preservedValues : this._accum);
};

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

Promise.prototype.reduce = function Promise$reduce(fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function Promise$Reduce(promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};
};

},{"./util.js":56}],77:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
    function(Promise, PromiseArray) {
var PromiseInspection = Promise.PromiseInspection;
var util = require("./util.js");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved =
function SettledPromiseArray$_promiseResolved(index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
    }
};

SettledPromiseArray.prototype._promiseFulfilled =
function SettledPromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    var ret = new PromiseInspection();
    ret._bitField = 268435456;
    ret._settledValue = value;
    this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected =
function SettledPromiseArray$_promiseRejected(reason, index) {
    if (this._isResolved()) return;
    var ret = new PromiseInspection();
    ret._bitField = 134217728;
    ret._settledValue = reason;
    this._promiseResolved(index, ret);
};

Promise.settle = function Promise$Settle(promises) {
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function Promise$settle() {
    return new SettledPromiseArray(this).promise();
};
};

},{"./util.js":56}],78:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = require("./util.js");
var RangeError = require("./errors.js").RangeError;
var AggregateError = require("./errors.js").AggregateError;
var isArray = util.isArray;


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function SomePromiseArray$_init() {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(void 0, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function SomePromiseArray$init() {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function SomePromiseArray$setUnwrap() {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function SomePromiseArray$howMany() {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany =
function SomePromiseArray$setHowMany(count) {
    if (this._isResolved()) return;
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled =
function SomePromiseArray$_promiseFulfilled(value) {
    if (this._isResolved()) return;
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
    }

};
SomePromiseArray.prototype._promiseRejected =
function SomePromiseArray$_promiseRejected(reason) {
    if (this._isResolved()) return;
    this._addRejected(reason);
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            e.push(this._values[i]);
        }
        this._reject(e);
    }
};

SomePromiseArray.prototype._fulfilled = function SomePromiseArray$_fulfilled() {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function SomePromiseArray$_rejected() {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected =
function SomePromiseArray$_addRejected(reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled =
function SomePromiseArray$_addFulfilled(value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill =
function SomePromiseArray$_canPossiblyFulfill() {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError =
function SomePromiseArray$_getRangeError(count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray =
function SomePromiseArray$_resolveEmptyArray() {
    this._reject(this._getRangeError(0));
};

function Promise$_Some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    if (promise.isRejected()) {
        return promise;
    }
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function Promise$Some(promises, howMany) {
    return Promise$_Some(promises, howMany);
};

Promise.prototype.some = function Promise$some(howMany) {
    return Promise$_Some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./util.js":56,"./errors.js":58}],79:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray) {
var util = require("./util.js");
var async = require("./async.js");
var errors = require("./errors.js");
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;

Promise.prototype.progressed = function Promise$progressed(handler) {
    return this._then(void 0, void 0, handler, void 0, void 0);
};

Promise.prototype._progress = function Promise$_progress(progressValue) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._progressUnchecked(progressValue);

};

Promise.prototype._progressHandlerAt =
function Promise$_progressHandlerAt(index) {
    return index === 0
        ? this._progressHandler0
        : this[(index << 2) + index - 5 + 2];
};

Promise.prototype._doProgressWith =
function Promise$_doProgressWith(progression) {
    var progressValue = progression.value;
    var handler = progression.handler;
    var promise = progression.promise;
    var receiver = progression.receiver;

    var ret = tryCatch1(handler, receiver, progressValue);
    if (ret === errorObj) {
        if (ret.e != null &&
            ret.e.name !== "StopProgressPropagation") {
            var trace = errors.canAttach(ret.e)
                ? ret.e : new Error(ret.e + "");
            promise._attachExtraTrace(trace);
            promise._progress(ret.e);
        }
    } else if (ret instanceof Promise) {
        ret._then(promise._progress, null, null, promise, void 0);
    } else {
        promise._progress(ret);
    }
};


Promise.prototype._progressUnchecked =
function Promise$_progressUnchecked(progressValue) {
    if (!this.isPending()) return;
    var len = this._length();
    var progress = this._progress;
    for (var i = 0; i < len; i++) {
        var handler = this._progressHandlerAt(i);
        var promise = this._promiseAt(i);
        if (!(promise instanceof Promise)) {
            var receiver = this._receiverAt(i);
            if (typeof handler === "function") {
                handler.call(receiver, progressValue, promise);
            } else if (receiver instanceof Promise && receiver._isProxied()) {
                receiver._progressUnchecked(progressValue);
            } else if (receiver instanceof PromiseArray) {
                receiver._promiseProgressed(progressValue, promise);
            }
            continue;
        }

        if (typeof handler === "function") {
            async.invoke(this._doProgressWith, this, {
                handler: handler,
                promise: promise,
                receiver: this._receiverAt(i),
                value: progressValue
            });
        } else {
            async.invoke(progress, promise, progressValue);
        }
    }
};
};

},{"./util.js":56,"./async.js":57,"./errors.js":58}],80:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var errors = require("./errors.js");
var canAttach = errors.canAttach;
var async = require("./async.js");
var CancellationError = errors.CancellationError;

Promise.prototype._cancel = function Promise$_cancel(reason) {
    if (!this.isCancellable()) return this;
    var parent;
    var promiseToReject = this;
    while ((parent = promiseToReject._cancellationParent) !== void 0 &&
        parent.isCancellable()) {
        promiseToReject = parent;
    }
    promiseToReject._attachExtraTrace(reason);
    promiseToReject._rejectUnchecked(reason);
};

Promise.prototype.cancel = function Promise$cancel(reason) {
    if (!this.isCancellable()) return this;
    reason = reason !== void 0
        ? (canAttach(reason) ? reason : new Error(reason + ""))
        : new CancellationError();
    async.invokeLater(this._cancel, this, reason);
    return this;
};

Promise.prototype.cancellable = function Promise$cancellable() {
    if (this._cancellable()) return this;
    this._setCancellable();
    this._cancellationParent = void 0;
    return this;
};

Promise.prototype.uncancellable = function Promise$uncancellable() {
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 2 | 4);
    ret._follow(this);
    ret._unsetCancellable();
    return ret;
};

Promise.prototype.fork =
function Promise$fork(didFulfill, didReject, didProgress) {
    var ret = this._then(didFulfill, didReject, didProgress,
                         void 0, void 0);

    ret._setCancellable();
    ret._cancellationParent = void 0;
    return ret;
};
};

},{"./errors.js":58,"./async.js":57}],84:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function (Promise, apiRejection, cast) {
    var TypeError = require("./errors.js").TypeError;
    var inherits = require("./util.js").inherits;
    var PromiseInspection = Promise.PromiseInspection;

    function inspectionMapper(inspections) {
        var len = inspections.length;
        for (var i = 0; i < len; ++i) {
            var inspection = inspections[i];
            if (inspection.isRejected()) {
                return Promise.reject(inspection.error());
            }
            inspections[i] = inspection.value();
        }
        return inspections;
    }

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = Promise.defer();
        function iterator() {
            if (i >= len) return ret.resolve();
            var maybePromise = cast(resources[i++], void 0);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = cast(maybePromise._getDisposer()
                                        .tryDispose(inspection), void 0);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret.promise;
    }

    function disposerSuccess(value) {
        var inspection = new PromiseInspection();
        inspection._settledValue = value;
        inspection._bitField = 268435456;
        return dispose(this, inspection).thenReturn(value);
    }

    function disposerFail(reason) {
        var inspection = new PromiseInspection();
        inspection._settledValue = reason;
        inspection._bitField = 134217728;
        return dispose(this, inspection).thenThrow(reason);
    }

    function Disposer(data, promise) {
        this._data = data;
        this._promise = promise;
    }

    Disposer.prototype.data = function Disposer$data() {
        return this._data;
    };

    Disposer.prototype.promise = function Disposer$promise() {
        return this._promise;
    };

    Disposer.prototype.resource = function Disposer$resource() {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return null;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var ret = resource !== null
            ? this.doDispose(resource, inspection) : null;
        this._promise._unsetDisposable();
        this._data = this._promise = null;
        return ret;
    };

    function FunctionDisposer(fn, promise) {
        this.constructor$(fn, promise);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    Promise.using = function Promise$using() {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") return apiRejection("fn must be a function");
        len--;
        var resources = new Array(len);
        for (var i = 0; i < len; ++i) {
            var resource = arguments[i];
            if (resource instanceof Disposer) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            }
            resources[i] = resource;
        }

        return Promise.settle(resources)
            .then(inspectionMapper)
            .spread(fn)
            ._then(disposerSuccess, disposerFail, void 0, resources, void 0);
    };

    Promise.prototype._setDisposable =
    function Promise$_setDisposable(disposer) {
        this._bitField = this._bitField | 262144;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function Promise$_isDisposable() {
        return (this._bitField & 262144) > 0;
    };

    Promise.prototype._getDisposer = function Promise$_getDisposer() {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function Promise$_unsetDisposable() {
        this._bitField = this._bitField & (~262144);
        this._disposer = void 0;
    };

    Promise.prototype.disposer = function Promise$disposer(fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this);
        }
        throw new TypeError();
    };

};

},{"./errors.js":58,"./util.js":56}],85:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var TypeError = require('./errors.js').TypeError;

function apiRejection(msg) {
    var error = new TypeError(msg);
    var ret = Promise.rejected(error);
    var parent = ret._peekContext();
    if (parent != null) {
        parent._attachExtraTrace(error);
    }
    return ret;
}

return apiRejection;
};

},{"./errors.js":58}],68:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var _setTimeout = function(fn, ms) {
    var len = arguments.length;
    var arg0 = arguments[2];
    var arg1 = arguments[3];
    var arg2 = len >= 5 ? arguments[4] : void 0;
    setTimeout(function() {
        fn(arg0, arg1, arg2);
    }, ms);
};

module.exports = function(Promise, INTERNAL, cast) {
var util = require("./util.js");
var errors = require("./errors.js");
var apiRejection = require("./errors_api_rejection")(Promise);
var TimeoutError = Promise.TimeoutError;

var afterTimeout = function Promise$_afterTimeout(promise, message, ms) {
    if (!promise.isPending()) return;
    if (typeof message !== "string") {
        message = "operation timed out after" + " " + ms + " ms"
    }
    var err = new TimeoutError(message);
    errors.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._cancel(err);
};

var afterDelay = function Promise$_afterDelay(value, promise) {
    promise._fulfill(value);
};

var delay = Promise.delay = function Promise$Delay(value, ms) {
    if (ms === void 0) {
        ms = value;
        value = void 0;
    }
    ms = +ms;
    var maybePromise = cast(value, void 0);
    var promise = new Promise(INTERNAL);

    if (maybePromise instanceof Promise) {
        promise._propagateFrom(maybePromise, 7);
        promise._follow(maybePromise);
        return promise.then(function(value) {
            return Promise.delay(value, ms);
        });
    } else {
        promise._setTrace(void 0);
        _setTimeout(afterDelay, ms, value, promise);
    }
    return promise;
};

Promise.prototype.delay = function Promise$delay(ms) {
    return delay(this, ms);
};

Promise.prototype.timeout = function Promise$timeout(ms, message) {
    ms = +ms;

    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 7);
    ret._follow(this);
    _setTimeout(afterTimeout, ms, ret, message, ms);
    return ret.cancellable();
};

};

},{"./util.js":56,"./errors.js":58,"./errors_api_rejection":85}],74:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = require("./util.js");
var nodebackForPromise = require("./promise_resolver.js")
    ._nodebackForPromise;
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = require("./errors").TypeError;
var defaultSuffix = "Async";
var defaultFilter = function(name, func) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        !util.isClass(func);
};
var defaultPromisified = {__isPromisified__: true};


function escapeIdentRegex(str) {
    return str.replace(/([$])/, "\\$");
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API " +
                        "that has normal methods with '"+suffix+"'-suffix");
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

function switchCaseArgumentOrder(likelyArgumentCount) {
    var ret = [likelyArgumentCount];
    var min = Math.max(0, likelyArgumentCount - 1 - 5);
    for(var i = likelyArgumentCount - 1; i >= min; --i) {
        if (i === likelyArgumentCount) continue;
        ret.push(i);
    }
    for(var i = likelyArgumentCount + 1; i <= 5; ++i) {
        ret.push(i);
    }
    return ret;
}

function argumentSequence(argumentCount) {
    return util.filledRange(argumentCount, "arguments[", "]");
}

function parameterDeclaration(parameterCount) {
    return util.filledRange(parameterCount, "_arg", "");
}

function parameterCount(fn) {
    if (typeof fn.length === "number") {
        return Math.max(Math.min(fn.length, 1023 + 1), 0);
    }
    return 0;
}

function generatePropertyAccess(key) {
    if (util.isIdentifier(key)) {
        return "." + key;
    }
    else return "['" + key.replace(/(['\\])/g, "\\$1") + "']";
}

function makeNodePromisifiedEval(callback, receiver, originalName, fn, suffix) {
    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
    var callbackName =
        (typeof originalName === "string" && util.isIdentifier(originalName)
            ? originalName + suffix
            : "promisified");

    function generateCallForArgumentCount(count) {
        var args = argumentSequence(count).join(", ");
        var comma = count > 0 ? ", " : "";
        var ret;
        if (typeof callback === "string") {
            ret = "                                                          \n\
                this.method(args, fn);                                       \n\
                break;                                                       \n\
            ".replace(".method", generatePropertyAccess(callback));
        } else if (receiver === THIS) {
            ret =  "                                                         \n\
                callback.call(this, args, fn);                               \n\
                break;                                                       \n\
            ";
        } else if (receiver !== void 0) {
            ret =  "                                                         \n\
                callback.call(receiver, args, fn);                           \n\
                break;                                                       \n\
            ";
        } else {
            ret =  "                                                         \n\
                callback(args, fn);                                          \n\
                break;                                                       \n\
            ";
        }
        return ret.replace("args", args).replace(", ", comma);
    }

    function generateArgumentSwitchCase() {
        var ret = "";
        for(var i = 0; i < argumentOrder.length; ++i) {
            ret += "case " + argumentOrder[i] +":" +
                generateCallForArgumentCount(argumentOrder[i]);
        }
        var codeForCall;
        if (typeof callback === "string") {
            codeForCall = "                                                  \n\
                this.property.apply(this, args);                             \n\
            "
                .replace(".property", generatePropertyAccess(callback));
        } else if (receiver === THIS) {
            codeForCall = "                                                  \n\
                callback.apply(this, args);                                  \n\
            ";
        } else {
            codeForCall = "                                                  \n\
                callback.apply(receiver, args);                              \n\
            ";
        }

        ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = fn;                                                    \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", codeForCall);
        return ret;
    }

    return new Function("Promise",
                        "callback",
                        "receiver",
                        "withAppended",
                        "maybeWrapAsError",
                        "nodebackForPromise",
                        "INTERNAL","                                         \n\
        var ret = function FunctionName(Parameters) {                        \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._setTrace(void 0);                                       \n\
            var fn = nodebackForPromise(promise);                            \n\
            try {                                                            \n\
                switch(len) {                                                \n\
                    [CodeForSwitchCase]                                      \n\
                }                                                            \n\
            } catch (e) {                                                    \n\
                var wrapped = maybeWrapAsError(e);                           \n\
                promise._attachExtraTrace(wrapped);                          \n\
                promise._reject(wrapped);                                    \n\
            }                                                                \n\
            return promise;                                                  \n\
        };                                                                   \n\
        ret.__isPromisified__ = true;                                        \n\
        return ret;                                                          \n\
        "
        .replace("FunctionName", callbackName)
        .replace("Parameters", parameterDeclaration(newParameterCount))
        .replace("[CodeForSwitchCase]", generateArgumentSwitchCase()))(
            Promise,
            callback,
            receiver,
            withAppended,
            maybeWrapAsError,
            nodebackForPromise,
            INTERNAL
        );
}

function makeNodePromisifiedClosure(callback, receiver) {
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        if (typeof callback === "string") {
            callback = _receiver[callback];
        }
        var promise = new Promise(INTERNAL);
        promise._setTrace(void 0);
        var fn = nodebackForPromise(promise);
        try {
            callback.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            var wrapped = maybeWrapAsError(e);
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        }
        return promise;
    }
    promisified.__isPromisified__ = true;
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        obj[promisifiedKey] = promisifier === makeNodePromisified
                ? makeNodePromisified(key, THIS, key, fn, suffix)
                : promisifier(fn);
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver) {
    return makeNodePromisified(callback, receiver, void 0, callback);
}

Promise.promisify = function Promise$Promisify(fn, receiver) {
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function");
    }
    if (isPromisified(fn)) {
        return fn;
    }
    return promisify(fn, arguments.length < 2 ? THIS : receiver);
};

Promise.promisifyAll = function Promise$PromisifyAll(target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function");
    }
    options = Object(options);
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier");
    }

    var keys = util.inheritedDataKeys(target, {includeHidden: true});
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier);
            promisifyAll(value, suffix, filter, promisifier);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier);
};
};


},{"./util.js":56,"./promise_resolver.js":63,"./errors":58}],75:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, cast) {
var util = require("./util.js");
var apiRejection = require("./errors_api_rejection")(Promise);
var isObject = util.isObject;
var es5 = require("./es5.js");

function PropertiesPromiseArray(obj) {
    var keys = es5.keys(obj);
    var len = keys.length;
    var values = new Array(len * 2);
    for (var i = 0; i < len; ++i) {
        var key = keys[i];
        values[i] = obj[key];
        values[i + len] = key;
    }
    this.constructor$(values);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init =
function PropertiesPromiseArray$_init() {
    this._init$(void 0, -3) ;
};

PropertiesPromiseArray.prototype._promiseFulfilled =
function PropertiesPromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val = {};
        var keyOffset = this.length();
        for (var i = 0, len = this.length(); i < len; ++i) {
            val[this._values[i + keyOffset]] = this._values[i];
        }
        this._resolve(val);
    }
};

PropertiesPromiseArray.prototype._promiseProgressed =
function PropertiesPromiseArray$_promiseProgressed(value, index) {
    if (this._isResolved()) return;

    this._promise._progress({
        key: this._values[index + this.length()],
        value: value
    });
};

PropertiesPromiseArray.prototype.shouldCopyValues =
function PropertiesPromiseArray$_shouldCopyValues() {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength =
function PropertiesPromiseArray$getActualLength(len) {
    return len >> 1;
};

function Promise$_Props(promises) {
    var ret;
    var castValue = cast(promises, void 0);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(Promise.props, void 0, void 0, void 0, void 0);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 4);
    }
    return ret;
}

Promise.prototype.props = function Promise$props() {
    return Promise$_Props(this);
};

Promise.props = function Promise$Props(promises) {
    return Promise$_Props(promises);
};
};

},{"./util.js":56,"./es5.js":86,"./errors_api_rejection":85}],86:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
var isES5 = (function(){
    "use strict";
    return this === void 0;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        keys: Object.keys,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function ObjectKeys(o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    }

    var ObjectDefineProperty = function ObjectDefineProperty(o, key, desc) {
        o[key] = desc.value;
        return o;
    }

    var ObjectFreeze = function ObjectFreeze(obj) {
        return obj;
    }

    var ObjectGetPrototypeOf = function ObjectGetPrototypeOf(obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    }

    var ArrayIsArray = function ArrayIsArray(obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    }

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5
    };
}

},{}],87:[function(require,module,exports){
(function(process){/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var schedule;
var _MutationObserver;
if (typeof process === "object" && typeof process.version === "string") {
    schedule = function Promise$_Scheduler(fn) {
        process.nextTick(fn);
    };
}
else if ((typeof MutationObserver !== "undefined" &&
         (_MutationObserver = MutationObserver)) ||
         (typeof WebKitMutationObserver !== "undefined" &&
         (_MutationObserver = WebKitMutationObserver))) {
    schedule = (function() {
        var div = document.createElement("div");
        var queuedFn = void 0;
        var observer = new _MutationObserver(
            function Promise$_Scheduler() {
                var fn = queuedFn;
                queuedFn = void 0;
                fn();
            }
       );
        observer.observe(div, {
            attributes: true
        });
        return function Promise$_Scheduler(fn) {
            queuedFn = fn;
            div.setAttribute("class", "foo");
        };

    })();
}
else if (typeof setTimeout !== "undefined") {
    schedule = function Promise$_Scheduler(fn) {
        setTimeout(fn, 0);
    };
}
else throw new Error("no async scheduler available");
module.exports = schedule;

})(require("__browserify_process"))
},{"__browserify_process":55}],88:[function(require,module,exports){
/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
function arrayCopy(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
    this._makeCapacity();
}

Queue.prototype._willBeOverCapacity =
function Queue$_willBeOverCapacity(size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function Queue$_pushOne(arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function Queue$push(fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function Queue$shift() {
    var front = this._front,
        ret = this[front];

    this[front] = void 0;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function Queue$length() {
    return this._length;
};

Queue.prototype._makeCapacity = function Queue$_makeCapacity() {
    var len = this._capacity;
    for (var i = 0; i < len; ++i) {
        this[i] = void 0;
    }
};

Queue.prototype._checkCapacity = function Queue$_checkCapacity(size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 3);
    }
};

Queue.prototype._resizeTo = function Queue$_resizeTo(capacity) {
    var oldFront = this._front;
    var oldCapacity = this._capacity;
    var oldQueue = new Array(oldCapacity);
    var length = this.length();

    arrayCopy(this, 0, oldQueue, 0, oldCapacity);
    this._capacity = capacity;
    this._makeCapacity();
    this._front = 0;
    if (oldFront + length <= oldCapacity) {
        arrayCopy(oldQueue, oldFront, this, 0, length);
    } else {        var lengthBeforeWrapping =
            length - ((oldFront + length) & (oldCapacity - 1));

        arrayCopy(oldQueue, oldFront, this, 0, lengthBeforeWrapping);
        arrayCopy(oldQueue, 0, this, lengthBeforeWrapping,
                    length - lengthBeforeWrapping);
    }
};

module.exports = Queue;

},{}]},{},[1])
;