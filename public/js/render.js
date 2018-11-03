console.log('hallo');


const app = new PIXI.Application({width: 630, height:880, transparent:true});
// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

//load an image and run the `setup` function when it's done
PIXI.loader
    .add('frame',"/data/Frame.png")
    .add('rarityStoneCommon','/data/RarityStoneCommon.png')
    .load(setup);

let style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
    stroke: 'black',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
});

let title = new PIXI.Text("Test Card", style);

title.x = 180;
title.y = 70;

//This `setup` function will run when the image has loaded
function setup() {

    //Create the cat sprite
    let frame = new PIXI.Sprite(PIXI.loader.resources.frame.texture);
    frame.width=630;
    frame.height=880;

    // Setup the position of the bunny
    frame.x = 0;
    frame.y = 0;

    let rarityStoneCommon = new PIXI.Sprite(PIXI.loader.resources.rarityStoneCommon.texture);

    rarityStoneCommon.width=80;
    rarityStoneCommon.height=70;
    rarityStoneCommon.x = 75;
    rarityStoneCommon.y = 540;

    //Add the cat to the stage
    app.stage.addChild(frame);
    app.stage.addChild(rarityStoneCommon);

    app.stage.addChild(title);
}
/*
// load the texture we need
PIXI.loader.add('bunny', '/data/Frame.png').load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(resources.bunny.texture);
    bunny.width=630;
    bunny.height=880;

    // Setup the position of the bunny
    bunny.x = 0;
    bunny.y = 0;

    // Add the bunny to the scene we are building
    app.stage.addChild(bunny);
    app.stage.addChild(bunny);

});


PIXI.loader.add('bunny', '/data/RarityStoneCommon.png').load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(resources.bunny.texture);
    bunny.width=190;
    bunny.height=170;

    // Setup the position of the bunny
    bunny.x = 100;
    bunny.y = 400;

    // Add the bunny to the scene we are building
    app.stage.addChild(bunny);

});
*/
