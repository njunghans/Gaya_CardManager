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
        this.bio_tex = PIXI.Texture.fromImage('/data/ManaCrystalGreen.png');
        this.ene_tex = PIXI.Texture.fromImage('/data/ManaCrystalBlue.png');
        this.par_tex = PIXI.Texture.fromImage('/data/ManaCrystalRed.png');
        this.art_tex = PIXI.Texture.fromImage('/data/ManaCrystalBlack.png');
        this.neu_tex = PIXI.Texture.fromImage('/data/ManaCrystalNeutral.png');

        this.image_settings = JSON.parse('{"x":0,"y":0,"width":0,"height":0,"rotation":0}');

        this.setBaseWidth(baseWidth);
    }

    setBaseWidth(baseWidth) {

        this.app.width = baseWidth;
        this.app.height = baseWidth / 0.7159;

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

        this.setImageFrame();

        this.container.filterArea = new PIXI.Rectangle(baseWidth / 7.88, baseWidth / 7.7, baseWidth / 1.31, baseWidth / 1.26);

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
        texture.on('update', () => {
            this.image_settings.width = this.image.texture.baseTexture.realWidth;
            this.image_settings.height = this.image.texture.baseTexture.realHeight;
            this.setImageFrame();
        });
    }

    setImageFrame() {
        let obj = this.image_settings;
        this.image.width = obj.width * this.app.width / 630;
        this.image.height = obj.height * this.app.width / 630;
        this.image.x = obj.x * this.app.width / 630 + this.image.width * this.image.anchor.x;
        this.image.y = obj.y * this.app.width / 630 + this.image.height * this.image.anchor.y;
        this.image.rotation = obj.rotation;
    }

    setCost(c) {
        let costs = this.sortCosts(c);
        this.costs.forEach(spr=>{
            this.app.stage.removeChild(spr);
        }, this);
        this.costs=[];
        this.costPos =  this.app.   width/1.32;
        this.addCostSprites(costs);
    }

    sortCosts(c) {
        let costs = [];
        let neu = {};
        c.forEach(e=>{
            let d = {};
            d.type = e.id;
            d.cost = e.value;
            if (d.type === "cost_neutral") {
                d.texture = this.neu_tex
            } else if (d.type === "cost_bio") {
                d.texture = this.bio_tex
            } else if (d.type === "cost_par") {
                d.texture = this.par_tex
            } else if (d.type === "cost_art") {
                d.texture = this.art_tex
            } else if (d.type === "cost_ene") {
                d.texture = this.ene_tex
            }
            if (d.type === "cost_neutral") {
                neu = d
            } else if (d.type !== "cost_gold") {
            costs.push(d)
            }
        }, this);
        costs.sort(function(a, b) {
            return b.cost - a.cost
        });
        costs.push(neu);
        return costs;
    }

    addCostSprites(costs) {
        costs.forEach(c=>{
            for(let i=0; i<c.cost; i++){
                let s = new PIXI.Sprite();
                s.texture = c.texture;
                s.x = this.costPos;
                s.y = this.app.width/13.87;
                s.width=this.app.width/20.2;
                s.height=this.app.width/20.2;
                this.costPos -=this.app.width/20;
                this.costs.push(s);
                this.app.stage.addChild(s);
            }
        }, this);
    }
}

const card = new CardView();
document.getElementById('render-view').appendChild(card.app.view);

card.app.view.addEventListener('wheel', e => {
    if(e.ctrlKey){

        card.image_settings.width += card.image_settings.width*e.deltaY/360;
        card.image_settings.height += card.image_settings.height*e.deltaY/360;
        card.setImageFrame();
    }else{

        card.image_settings.rotation += e.deltaY/360;
        card.setImageFrame();
    }
    e.preventDefault();
});

card.app.view.addEventListener('mousedown', e =>{
    card.drag = true;
});

card.app.view.addEventListener('mouseup', e =>{
    card.drag = false;
});

card.app.view.addEventListener('mousemove', e =>{
    if(card.drag){
        card.image_settings.x += e.movementX;
        card.image_settings.y += e.movementY;
        card.setImageFrame();
    }
});

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
card.setCost(costs);

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
        card.setCost(costs);
    }, this)
});
