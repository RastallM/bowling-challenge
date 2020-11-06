'use strict';

class Frame {
    constructor() {
        this.rollNum = 0
    };

    roll(num) {
        this.rollNum += 1;
    };

    rollNumber() {
        return this.rollNum;
    };
};