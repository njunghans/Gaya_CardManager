class CardViewBase {
    constructor(cardData) {
        this.app = new PIXI.Application({width: 640, height: 880, transparent: true});
        this.createView(cardData);
    }

    createView(cardData) {

    }
}