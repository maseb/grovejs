/*global require: false, module: false */
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
