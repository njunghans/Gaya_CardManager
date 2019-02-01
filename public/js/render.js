class CardView {
    constructor(baseWidth = 500) {

        this.app = new PIXI.Application({width: baseWidth, height: baseWidth / 0.7159, transparent: true});
        this.frame = new PIXI.Sprite();
        this.rarityStone = new PIXI.Sprite();
        this.gold = new PIXI.Sprite();
        this.attack = new PIXI.Sprite();
        this.image = new PIXI.Sprite();
        this.defense = new PIXI.Sprite();

        this.title = new PIXI.Text("");
        this.category = new PIXI.Text("");
        this.info = new PIXI.Text("");
        this.goldText = new PIXI.Text("");
        this.attackText = new PIXI.Text("");
        this.defenseText = new PIXI.Text("");

        this.container = new PIXI.Container();

        this.setAttack(PIXI.Texture.fromImage('/data/AttackIcon.png'));
        this.setDefense(PIXI.Texture.fromImage('/data/DefenseIcon.png'));


        this.container.addChild(this.image);
        this.container.filters = [new PIXI.filters.AlphaFilter()];

        this.setFrame(PIXI.Texture.fromImage("/data/Frame.png"));

        this.setGold(PIXI.Texture.fromImage('/data/Gold.png'));

        this.app.stage.addChild(this.container);

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

        this.costs = [];

        this.setBaseWidth(baseWidth);
    }

    setBaseWidth(baseWidth) {

        this.app.width=baseWidth;
        this.app.height= baseWidth / 0.7159;

        this.frame.width = baseWidth;
        this.frame.height = baseWidth / 0.7159;

        this.frame.x = 0;
        this.frame.y = 0;


        this.rarityStone.width = baseWidth / 7.875;
        this.rarityStone.height = baseWidth / 9;
        this.rarityStone.x = baseWidth / 8.4;
        this.rarityStone.y = baseWidth / 1.1667;


        this.gold.width = baseWidth / 6.848;
        this.gold.height = baseWidth / 6.848;
        this.gold.anchor.x = 0.5;
        this.gold.anchor.y = 0.5;
        this.gold.x = baseWidth / 1.117;
        this.gold.y = baseWidth / 8.873;


        this.attack.x = baseWidth / 11;
        this.attack.y = baseWidth / 0.78;
        this.attack.width = baseWidth / 6.06;
        this.attack.height = baseWidth / 5.43;
        this.attack.anchor.x = 0.5;
        this.attack.anchor.y = 0.5;


        this.defense.x = baseWidth / 1.1;
        this.defense.y = baseWidth / 0.77;
        this.defense.width = baseWidth / 6.85;
        this.defense.height = baseWidth / 5.833;
        this.defense.anchor.x = 0.5;
        this.defense.anchor.y = 0.5;


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

        this.title.setStyle(titleStyle);

        this.title.x = baseWidth / 2.35;
        this.title.y = baseWidth / 6.5;
        this.title.anchor.x = 0.5;
        this.title.anchor.y = 0.5;

        this.category.setStyle(categoryStyle);

        this.category.x = baseWidth / 1.56;
        this.category.y = baseWidth / 1.1;
        this.category.anchor.x = 0.5;
        this.category.anchor.y = 0.5;


        this.info.setStyle(infoStyle);

        this.info.rotation = Math.PI / 2;
        this.info.x = baseWidth / 17;
        this.info.y = baseWidth / 7.5;

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
        this.goldText.setStyle(goldStyle);
        this.goldText.x = baseWidth / 1.12;
        this.goldText.y = baseWidth / 8.87;
        this.goldText.anchor.x = 0.5;
        this.goldText.anchor.y = 0.5;

        this.attackText.setStyle(goldStyle);
        this.attackText.x = baseWidth / 11;
        this.attackText.y = baseWidth / 0.78;
        this.attackText.anchor.x = 0.5;
        this.attackText.anchor.y = 0.5;

        this.defenseText.setStyle(goldStyle);
        this.defenseText.x = baseWidth / 1.1;
        this.defenseText.y = baseWidth / 0.78;
        this.defenseText.anchor.x = 0.5;
        this.defenseText.anchor.y = 0.5;

        this.container.filterArea = new PIXI.Rectangle(baseWidth / 7.88, baseWidth / 7.7, baseWidth / 1.31, baseWidth / 1.26);
        this.bio_tex = PIXI.Texture.fromImage('/data/ManaCrystalGreen.png');
        this.ene_tex = PIXI.Texture.fromImage('/data/ManaCrystalBlue.png');
        this.par_tex = PIXI.Texture.fromImage('/data/ManaCrystalRed.png');
        this.art_tex = PIXI.Texture.fromImage('/data/ManaCrystalBlack.png');
        this.neu_tex = PIXI.Texture.fromImage('/data/ManaCrystalNeutral.png');
    }

    setTitle(txt) {
        this.title.text = txt;
    }

    setCategory(txt) {
        this.category.text = txt;
    }

    setInfo(txt) {
        this.info.text = txt;
    }

    setGoldText(txt) {
        this.goldText.text = txt;
    }

    setAttackText(txt) {
        this.attackText.text = txt;

        if (txt.length && txt !== '0') {

            this.attack.visible = true;
        } else {
            this.attackText.text = '';
            this.attack.visible = false;
        }
    }

    setDefenseText(txt) {
        this.defenseText.text = txt;
        if (txt.length && txt !== '0') {
            this.defense.visible = true;
        } else {
            this.defenseText.text = '';
            this.defense.visible = false;
        }
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

    setCost(bio=0, ene=0, art=0, neutral=0, par=0){
        this.costs.forEach(spr=>{
            this.app.stage.removeChild(spr);
        });
        this.costs=[];
        let pos_x =  this.app.width/1.32;
        for(let i=0; i<bio; i++){
            let biosprite = new PIXI.Sprite();
            biosprite.texture = this.bio_tex;
            biosprite.x = pos_x;
            biosprite.y = this.app.width/13.87;
            biosprite.width=this.app.width/20.2;
            biosprite.height=this.app.width/20.2;
            pos_x -=this.app.width/20;
            this.costs.push(biosprite);
            this.app.stage.addChild(biosprite);
        }

        for(let i=0; i<ene; i++){
            let biosprite = new PIXI.Sprite();
            biosprite.texture = this.ene_tex;
            biosprite.x = pos_x;
            biosprite.y = this.app.width/13.87;
            biosprite.width=this.app.width/20.2;
            biosprite.height=this.app.width/20.2;
            pos_x -=this.app.width/20;
            this.costs.push(biosprite);
            this.app.stage.addChild(biosprite);
        }

        for(let i=0; i<par; i++){
            let biosprite = new PIXI.Sprite();
            biosprite.texture = this.par_tex;
            biosprite.x = pos_x;
            biosprite.y = this.app.width/13.87;
            biosprite.width=this.app.width/20.2;
            biosprite.height=this.app.width/20.2;
            pos_x -=this.app.width/20;
            this.costs.push(biosprite);
            this.app.stage.addChild(biosprite);
        }

        for(let i=0; i<art; i++){
            let biosprite = new PIXI.Sprite();
            biosprite.texture = this.art_tex;
            biosprite.x = pos_x;
            biosprite.y = this.app.width/13.87;
            biosprite.width=this.app.width/20.2;
            biosprite.height=this.app.width/20.2;
            pos_x -=this.app.width/20;
            this.costs.push(biosprite);
            this.app.stage.addChild(biosprite);
        }

        for(let i=0; i<neutral; i++){
            let biosprite = new PIXI.Sprite();
            biosprite.texture = this.neu_tex;
            biosprite.x = pos_x;
            biosprite.y = this.app.width/13.87;
            biosprite.width=this.app.width/20.2;
            biosprite.height=this.app.width/20.2;
            pos_x -=this.app.width/20;
            this.costs.push(biosprite);
            this.app.stage.addChild(biosprite);
        }
    }
}

const card = new CardView();
document.getElementById('render-view').appendChild(card.app.view);
let name = document.getElementsByName("name")[0];
card.setTitle(name.value);
let card_type = document.getElementsByName("card_type")[0];
let category_text = document.getElementsByName("category_text")[0];
card.setCategory(card_type.value + ', ' + category_text.value);
let rarity = document.getElementsByName("rarity")[0];
card.setRarity(rarity.selectedIndex);
let cost_gold = document.getElementsByName("cost_gold")[0];
card.setGoldText(cost_gold.value);
let image_path = document.getElementsByName("image_path")[0];
card.setImage(PIXI.Texture.fromImage(image_path.value));
let attack = document.getElementsByName("attack")[0];
card.setAttackText(attack.value);
let shield = document.getElementsByName("shield")[0];
card.setDefenseText(shield.value);
let costs = document.querySelectorAll("[name^=cost_]");
console.log(costs);
card.setCost(costs[2].value, costs[3].value, costs[4].value, costs[1].value, costs[5].value);

name.addEventListener('input', () => {
    card.setTitle(name.value)
});
card_type.addEventListener('change', () => {
    card.setCategory(card_type.value + ', ' + category_text.value)
});
category_text.addEventListener('input', () => {
    card.setCategory(card_type.value + ', ' + category_text.value)
});
rarity.addEventListener('change', () => {
    card.setRarity(rarity.selectedIndex)
});
cost_gold.addEventListener('input', () => {
    card.setGoldText(cost_gold.value)
});
image_path.addEventListener('input', () => {
    card.setImage(PIXI.Texture.fromImage(image_path.value))
});
attack.addEventListener('input', () => {
    card.setAttackText(attack.value)
});
shield.addEventListener('input', () => {
    card.setDefenseText(shield.value)
});
costs.forEach(c =>{
    c.addEventListener('input', ()=>{
        card.setCost(costs[2].value, costs[3].value, costs[4].value, costs[1].value, costs[5].value);
    })
});

// const card = new CardView();
// console.log(document.getElementById('render-view'));
// document.getElementById('render-view').appendChild(card.app.view);

// const card = new CardView();
// document.body.appendChild(card.app.view);
// card.setImage(PIXI.Texture.fromImage('https://i.kinja-img.com/gawker-media/image/upload/s--xDUnX_Up--/c_scale,f_auto,fl_progressive,q_80,w_800/frwyglppdktamatyv4f8.jpg'));
// card.setAttackText('5');
// card.setDefenseText('1');
// async function f( time,  doSmth ) {
//
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), time)
//     });
//
//     let result = await promise; // wait till the promise resolves (*)
//
//     doSmth();
// }

//f(5000, function(){card.setImage(PIXI.Texture.fromImage('https://i.kinja-img.com/gawker-media/image/upload/t_original/bz5twwesa9fddyiljthz.jpg'))});
// f(10000, function(){card.setTitle('Hahahahaha')});
// f(7000, function(){card.setCategory('Weird')});
// f(4000, function(){
//     card.image.x = 150;
//     card.image.y=150;
//     card.image.scale.set(0.7);
//
//     card.image.pivot.set(0,0);
//     card.image.rotation=Math.PI/4;
//     card.container.scale.set(2);
// });

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
