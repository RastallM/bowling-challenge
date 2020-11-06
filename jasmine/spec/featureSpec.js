'use strict';

describe('Feature test', function() {
    var frame;
    var scorecard;
    var game;

    beforeEach(function() {
        scorecard = new Scorecard();
    })

    it('rolls can be recorded', function() {
        scorecard.roll(1)
        expect(scorecard.currentScore()).toBe(1);
        expect(scorecard.currentRoll()).toBe(1);
    });
});