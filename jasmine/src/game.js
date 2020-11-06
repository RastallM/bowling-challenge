'use strict';

class Game {
    constructor() {
        this.frame = new Frame;
        this.frames = []
    }

    completedFrames() {
        return this.frames;
    }
};