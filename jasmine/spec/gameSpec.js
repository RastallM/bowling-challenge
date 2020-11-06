'use strict';

describe('Game', function() {
    var game;

    beforeEach(function() {
        game = new Game;
    })

    it('starts with an empty frame and no frames recorded in the game', function() {
        expect(game.completedFrames()).toEqual([]);
        expect(game.frame).toBeInstanceOf(Frame)
    })

    describe('rolls', function() {
        it('records a roll and the roll score', function() {
            game
        });
    });
});