
var assert                 = require("assert"),
    Promise                = require("bluebird"),
    thicket                = require("../../../../../lib-node/thicket"),
    CompositeUnitSequencer = thicket.c("composite-unit-sequencer"),
    UnitSequencer          = thicket.c("unit-sequencer");

describe("CompositeUnitSequencer", function() {
  it("should have a value composed of its underlying sequencers, and itself", function(done) {
    var caughtCount = 0,
        seq1        = new UnitSequencer(),
        seq2        = new UnitSequencer(),
        composite   = new CompositeUnitSequencer({
          sequencers: [seq1, seq2]
        });

    Promise.attempt(function() {
      assert.equal(composite.value(), 0);
      return Promise
        .all([
          seq1.advance(),
          seq2.advance(),
          composite.advance()
        ]);
    })
    .then(function() {
      assert.equal(composite.value(), 3);
    })
    .caught(function(err) {
      caughtCount++;
      assert.equal(err && err.stack, "");
    })
    .lastly(function() {
      assert.equal(caughtCount, 0);
      done();
    });
  })
});
