var _        = require("underscore"),
    Promise  = require("bluebird"),
    assert   = require("assert"),
    thicket  = require("../../../../lib-node/thicket"),
    Runtime  = thicket.c("runtime"),
    Reactor  = thicket.c("reactor");

describe("Reactor", function() {
  it("can map from a promise", function(done) {
    var mapCount = 0,
        runtime = new Runtime(),
        scheduler = runtime.scheduler(),
        reactor = new Reactor({scheduler: scheduler});

    var resolver,
        p = new Promise(function(resolve, reject) {
          resolver = resolve;
        });

    var c = reactor.fromPromise(p).map(function(val) {
      mapCount++;
      return val.toUpperCase();
    }).map(function(val) {
      mapCount++;
      assert.equal(val, "RESOLVED_VALUE");
      assert.equal(mapCount, 2);
      done();
    });
    assert.ok(c);
    process.nextTick(function() {
      resolver("resolved_value");
    });
  });

  it("can filter values as well", function(done) {
    var reactor   = new Reactor(),
        mapCount  = 0;

    reactor.fromArray([1, 2, 3, 4])
      .map(function(val) {
        return val + 1;
      })
      .filter(function(val) {
        return val % 2 == 0;
      })
      .map(function(val) {
        assert.ok(val % 2 == 0);
        mapCount++;
        if (mapCount == 2) {
          done();
        }
      });
  });
});
