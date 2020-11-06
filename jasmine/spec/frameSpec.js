'use strict';

describe('Frame', function() {
    var frame

    beforeEach(function() {
        frame = new Frame();
    });

    describe('rolls', function() {
        it('has a default roll value of zero', function() {
            expect(frame.rollNumber()).toBe(0)
        });

        it('increases the roll number by one for each roll', function() {
            frame.roll(5)
            expect(frame.rollNumber()).toBe(1)
            frame.roll(2)
            expect(frame.rollNumber()).toBe(2)
        });

        xit('can only record a maximum of 2 rolls per normal frame', function() {
            frame.roll(1)
            frame.roll(1)
            frame.roll(1)
            expect(frame.rollNumber).toBe(1)
        })
    });

    describe('score', function() {
        it('', function() {

        });
    });
});