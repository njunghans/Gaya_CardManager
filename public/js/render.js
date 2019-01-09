class CardView {
    constructor() {
        this.app = new PIXI.Application({width: 630, height: 880, transparent: true});

        this.frame = new PIXI.Sprite();
        this.frame.width = 630;
        this.frame.height = 880;

        this.frame.x = 0;
        this.frame.y = 0;

        this.rarityStone = new PIXI.Sprite();

        this.rarityStone.width = 80;
        this.rarityStone.height = 70;
        this.rarityStone.x = 75;
        this.rarityStone.y = 540;

        this.gold = new PIXI.Sprite();

        this.gold.width = 230 / 2.5;
        this.gold.height = 230 / 2.5;
        this.gold.anchor.x = 0.5;
        this.gold.anchor.y = 0.5;
        this.gold.x = 564;
        this.gold.y = 71;

        this.attack = new PIXI.Sprite();

        this.attack.x = 57;
        this.attack.y = 808;
        this.attack.width = 260 / 2.5;
        this.attack.height = 290 / 2.5;
        this.attack.anchor.x = 0.5;
        this.attack.anchor.y = 0.5;

        this.defense = new PIXI.Sprite();

        this.defense.x = 570;
        this.defense.y = 818;
        this.defense.width = 230 / 2.5;
        this.defense.height = 270 / 2.5;
        this.defense.anchor.x = 0.5;
        this.defense.anchor.y = 0.5;


        this.image = new PIXI.Sprite();
        this.image.filterArea= new PIXI.Rectangle(80,82,480,500);
        this.image.filters=[new PIXI.filters.AlphaFilter()];
        this.image.anchor.x = 0;
        this.image.anchor.y = 0;
        //this.image.x = 80;
        //this.image.y = 82;
        //this.image.width = 480;
        //this.image.height = 500;

        this.imageCrop = new PIXI.Rectangle(0,0,480,500);
        this.imageRotation = -Math.PI / 2;

        let titleStyle = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: 36,
            fill: "white",
            stroke: 'black',
            strokeThickness: 4,
            dropShadow: false,
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
            strokeThickness: 4,
            dropShadow: false,
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

        this.title = new PIXI.Text("", titleStyle);

        this.title.x = 268;
        this.title.y = 97;
        this.title.anchor.x = 0.5;
        this.title.anchor.y = 0.5;

        this.category = new PIXI.Text("", categoryStyle);

        this.category.x = 405;
        this.category.y = 576;
        this.category.anchor.x = 0.5;
        this.category.anchor.y = 0.5;


        this.info = new PIXI.Text("", infoStyle);
        this.info.rotation = Math.PI / 2;
        this.info.x = 37;
        this.info.y = 84;

        let goldStyle = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: 36,
            fontWeight: 'bold',
            fill: "white",
            stroke: 'black',
            strokeThickness: 4,
            dropShadow: false,
            dropShadowColor: "#000000",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6
        });
        this.goldText = new PIXI.Text("", goldStyle);

        this.goldText.x = 564;
        this.goldText.y = 71;
        this.goldText.anchor.x = 0.5;
        this.goldText.anchor.y = 0.5;

        this.attackText = new PIXI.Text("2", goldStyle);

        this.attackText.x = 57;
        this.attackText.y = 808;
        this.attackText.anchor.x = 0.5;
        this.attackText.anchor.y = 0.5;

        this.defenseText = new PIXI.Text("2", goldStyle);

        this.defenseText.x = 570;
        this.defenseText.y = 808;
        this.defenseText.anchor.x = 0.5;
        this.defenseText.anchor.y = 0.5;


        this.app.stage.addChild(this.image);

        this.app.stage.addChild(this.frame);
        this.app.stage.addChild(this.rarityStone);
        this.app.stage.addChild(this.gold);
        this.app.stage.addChild(this.attack);
        this.app.stage.addChild(this.defense);
        this.app.stage.addChild(this.title);
        this.app.stage.addChild(this.category);
        this.app.stage.addChild(this.info);
        this.app.stage.addChild(this.attackText);
        this.app.stage.addChild(this.defenseText);
        this.app.stage.addChild(this.goldText);

        //Setting Default Values

        this.setFrame(PIXI.Texture.fromImage("/data/Frame.png"));

        this.setRarity(1);

        this.setGold(PIXI.Texture.fromImage('/data/Gold.png'));
        this.setAttack(PIXI.Texture.fromImage('/data/AttackIcon.png'));
        this.setDefense(PIXI.Texture.fromImage('/data/DefenseIcon.png'));

        this.setTitle('Test');

    }

    setTitle(txt){
        this.title.text=txt;
    }
    setCategory(txt){
        this.category.text=txt;
    }
    setInfo(txt){
        this.info.text=txt;
    }
    setGoldText(txt){
        this.goldText.text=txt;
    }
    setAttackText(txt){
        this.attackText.text=txt;
    }
    setDefenseText(txt){
        this.defenseText.text=txt;
    }

    setRarity(rarity) {
        if (rarity === 0) {
            this.setRarityStone(PIXI.Texture.fromImage('/data/RarityStoneCommon.png'));
        } else if (rarity === 1) {
            this.setRarityStone(PIXI.Texture.fromImage('/data/RarityStoneRare.png'));
        } else if (rarity === 2) {
            this.setRarityStone(PIXI.Texture.fromImage('/data/RarityStoneEpic.png'));
        } else if (rarity === 3) {
            this.setRarityStone(PIXI.Texture.fromImage('/data/RarityStoneUnique.png'));
        } else {
            this.setRarityStone(PIXI.Texture.EMPTY);
        }
    }

    setFrame(texture) {
        PIXI.Texture.removeFromCache(this.frame.texture);
        this.frame.texture = texture;
    }

    setRarityStone(texture) {
        PIXI.Texture.removeFromCache(this.rarityStone.texture);
        this.rarityStone.texture = texture;
    }

    setGold(texture) {
        PIXI.Texture.removeFromCache(this.gold.texture);
        this.gold.texture = texture;
    }

    setAttack(texture) {
        PIXI.Texture.removeFromCache(this.attack.texture);
        this.attack.texture = texture;
    }

    setDefense(texture) {
        PIXI.Texture.removeFromCache(this.defense.texture);
        this.defense.texture = texture;
    }

    setImage(texture) {
        PIXI.Texture.removeFromCache(this.image.texture);

        this.image.texture = texture;
        //this.image.texture.frame = this.imageCrop;
        // let i = new PIXI.Sprite(texture);
        // this.image.removeChildren();
        // this.image.addChild(i);
    }

}

const card = new CardView();
document.body.appendChild(card.app.view);
card.setImage(PIXI.Texture.fromImage('https://i.kinja-img.com/gawker-media/image/upload/s--xDUnX_Up--/c_scale,f_auto,fl_progressive,q_80,w_800/frwyglppdktamatyv4f8.jpg'));
card.setAttackText('5');
card.setDefenseText('1');
async function f( time,  doSmth ) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), time)
    });

    let result = await promise; // wait till the promise resolves (*)

    doSmth();
}

f(5000, function(){card.setImage(PIXI.Texture.fromImage('https://i.kinja-img.com/gawker-media/image/upload/t_original/bz5twwesa9fddyiljthz.jpg'))});
f(10000, function(){card.setTitle('Hahahahaha')});
f(7000, function(){card.setCategory('Weird')});
f(4000, function(){card.setAttackText('3')});

//card.setImage(PIXI.Texture.fromImage('https://i.kinja-img.com/gawker-media/image/upload/t_original/bz5twwesa9fddyiljthz.jpg'));

/*
let titleStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
    stroke: 'black',
    strokeThickness: 4,
    dropShadow: false,
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
    strokeThickness: 4,
    dropShadow: false,
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

let category = new PIXI.Text("Test Category", categoryStyle);

category.x = 405;
category.y = 576;
category.anchor.x = 0.5;
category.anchor.y = 0.5;


let info = new PIXI.Text("Test info @Gaya artist : uhiuhqw", infoStyle);
info.rotation= Math.PI/2;
info.x = 37;
info.y = 84;

//numbers
let goldStyle = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fontWeight: 'bold',
    fill: "white",
    stroke: 'black',
    strokeThickness: 4,
    dropShadow: false,
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
function setupAll() {

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

    gold.width=230/2.5;
    gold.height=230/2.5;
    gold.anchor.x = 0.5;
    gold.anchor.y = 0.5;
    gold.x = 564;
    gold.y = 71;

    let attack = new PIXI.Sprite(PIXI.loader.resources.attack.texture);

    attack.x = 57;
    attack.y = 808;
    attack.width=260/2.5;
    attack.height=290/2.5;
    attack.anchor.x = 0.5;
    attack.anchor.y = 0.5;

    let defense = new PIXI.Sprite(PIXI.loader.resources.defense.texture);

    defense.x = 570;
    defense.y = 818;
    defense.width=230/2.5;
    defense.height=270/2.5;
    defense.anchor.x = 0.5;
    defense.anchor.y = 0.5;

    let imageCrop = new PIXI.Rectangle(0, 0, 80, 164);

    PIXI.loader.resources.image.texture.frame = imageCrop;
    PIXI.loader.resources.image.texture.frame.rotation=-Math.PI/2;
    let image = new PIXI.Sprite(PIXI.loader.resources.image.texture);

    image.anchor.x = 0;
    image.anchor.y = 0;
    image.x = 80;
    image.y = 80;
    image.width=480;
    image.height=540;

    app.stage.addChild(image);

    app.stage.addChild(frame);
    app.stage.addChild(rarityStoneCommon);
    app.stage.addChild(gold);
    app.stage.addChild(attack);
    app.stage.addChild(defense);
    app.stage.addChild(title);
    app.stage.addChild(category);
    app.stage.addChild(info);
    app.stage.addChild(attackText);
    app.stage.addChild(defenseText);
    app.stage.addChild(goldText);
}
*/
