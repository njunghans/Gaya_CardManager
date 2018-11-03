console.log('hallo');


const app = new PIXI.Application({width: 630, height:880, transparent:true});
// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

//load an image and run the `setup` function when it's done
PIXI.loader
    .add('frame',"/data/Frame.png")
    .add('rarityStoneCommon','/data/RarityStoneCommon.png')
    .add('gold','/data/Gold.png')
    .add('attack','/data/AttackIcon.png')
    .add('defense','/data/DefenseIcon.png')
    .load(setup);

let titleStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
    stroke: 'black',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6
});
let categoryStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 28,
    fill: "white",
    stroke: 'black',
    strokeThickness: 2,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6
});
let infoStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 18,
    fill: "grey",
    stroke: 'grey',
    strokeThickness: 0,
    dropShadow: false,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6
});

let title = new PIXI.Text("Test Card", titleStyle);

title.x = 268;
title.y = 97;
title.anchor.x = 0.5;
title.anchor.y = 0.5;

let category = new PIXI.Text("Test Category", style);

category.x = 405;
category.y = 576;
category.anchor.x = 0.5;
category.anchor.y = 0.5;


let category = new PIXI.Text("Test Category", style);
category.rotate180(90);
category.x = 21;
category.y = 84;

//numbers
let goldStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
    stroke: 'black',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6
});
let goldText = new PIXI.Text("1", goldStyle);

goldText.x = 564;
goldText.y = 71;
goldText.anchor.x = 0.5;
goldText.anchor.y = 0.5;

let attackText = new PIXI.Text("1", goldStyle);

attackText.x = 57;
attackText.y = 808;
attackText.anchor.x = 0.5;
attackText.anchor.y = 0.5;

let defenseText = new PIXI.Text("1", goldStyle);

defenseText.x = 570;
defenseText.y = 808;
defenseText.anchor.x = 0.5;
defenseText.anchor.y = 0.5;

//This `setup` function will run when the image has loaded
function setup() {

    let frame = new PIXI.Sprite(PIXI.loader.resources.frame.texture);
    frame.width=630;
    frame.height=880;

    frame.x = 0;
    frame.y = 0;

    let rarityStoneCommon = new PIXI.Sprite(PIXI.loader.resources.rarityStoneCommon.texture);

    rarityStoneCommon.width=80;
    rarityStoneCommon.height=70;
    rarityStoneCommon.x = 75;
    rarityStoneCommon.y = 540;

    let gold = new PIXI.Sprite(PIXI.loader.resources.gold.texture);

    gold.width=67;
    gold.height=67;
    gold.x = 564;
    gold.y = 71;

    let attack = new PIXI.Sprite(PIXI.loader.resources.attack.texture);

    attack.x = 57;
    attack.y = 808;
    attack.anchor.x = 0.5;
    attack.anchor.y = 0.5;

    let defense = new PIXI.Sprite(PIXI.loader.resources.defense.texture);

    defense.x = 570;
    defense.y = 808;
    defense.anchor.x = 0.5;
    defense.anchor.y = 0.5;

    app.stage.addChild(frame);
    app.stage.addChild(rarityStoneCommon);
    app.stage.addChild(gold);
    app.stage.addChild(attack);
    app.stage.addChild(defense);
    app.stage.addChild(title);
    app.stage.addChild(category);
    app.stage.addChild(attackText);
    app.stage.addChild(defenseText);
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
