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

        this.setAttackSymbol(PIXI.Texture.fromImage('/data/AttackIcon.png'));
        this.setDefenseSymbol(PIXI.Texture.fromImage('/data/DefenseIcon.png'));


        this.container.addChild(this.image);
        this.container.filters = [new PIXI.filters.AlphaFilter()];

        this.setFrame(PIXI.Texture.fromImage("/data/Frame.png"));

        this.setGoldSymbol(PIXI.Texture.fromImage('/data/Gold.png'));

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


        this.setWidths(baseWidth);
        this.setStyles();
        this.setImageFrame();
    }

    setStyles() {
        let base = {
            fontFamily: "Arial",
            fontSize: 36,
            fontWeight: "normal",
            fill: "white",
            stroke: 'black',
            strokeThickness: 4,
            dropShadow: false,
            dropShadowColor: "#000000",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6
        };

        this.title.style = new PIXI.TextStyle(base);

        let category = jQuery.extend({}, base);
        category.fontSize = 26;
        this.category.style = new PIXI.TextStyle(category);

        let info = jQuery.extend({}, base);
        info.fill = "grey";
        info.stroke = "grey";
        info.fontSize = 18;
        info.strokeThickness = 0;
        this.info.style = new PIXI.TextStyle(info);

        let stat = jQuery.extend({}, base);
        stat.fontWeight = "bold";

        this.goldText.style = new PIXI.TextStyle(stat);
        this.attackText.style = new PIXI.TextStyle(stat);
        this.defenseText.style = new PIXI.TextStyle(stat);
    }

    setWidths(baseWidth) {

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

        this.title.x = baseWidth / 2.35;
        this.title.y = baseWidth / 6.5;
        this.title.anchor.x = 0.5;
        this.title.anchor.y = 0.5;

        this.category.x = baseWidth / 1.56;
        this.category.y = baseWidth / 1.1;
        this.category.anchor.x = 0.5;
        this.category.anchor.y = 0.5;

        this.info.rotation = Math.PI / 2;
        this.info.x = baseWidth / 17;
        this.info.y = baseWidth / 7.5;

        this.goldText.x = baseWidth / 1.12;
        this.goldText.y = baseWidth / 8.87;
        this.goldText.anchor.x = 0.5;
        this.goldText.anchor.y = 0.5;

        this.attackText.x = baseWidth / 11;
        this.attackText.y = baseWidth / 0.78;
        this.attackText.anchor.x = 0.5;
        this.attackText.anchor.y = 0.5;

        this.defenseText.x = baseWidth / 1.1;
        this.defenseText.y = baseWidth / 0.78;
        this.defenseText.anchor.x = 0.5;
        this.defenseText.anchor.y = 0.5;

        this.container.filterArea = new PIXI.Rectangle(baseWidth / 7.88, baseWidth / 7.7, baseWidth / 1.31, baseWidth / 1.26);
    }

    setTitle(txt) {
        this.title.text = txt;
        this.title.style = setFontStyle(txt, this.title.style, 200)
    }

    setCategory(txt) {
        this.category.text = txt;
        this.category.style = setFontStyle(txt, this.category.style, 200)
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

    setGoldSymbol(texture) {
        PIXI.Texture.removeFromCache(this.gold.texture);
        this.gold.texture = texture;
    }

    setAttackSymbol(texture) {
        PIXI.Texture.removeFromCache(this.attack.texture);
        this.attack.texture = texture;
    }

    setDefenseSymbol(texture) {
        PIXI.Texture.removeFromCache(this.defense.texture);
        this.defense.texture = texture;
    }

    setImage(texture) {
        PIXI.Texture.removeFromCache(this.image.texture);
        this.image.texture = texture;
    }

    setImageFrame() {
        let image_settings = document.getElementsByName("image_settings")[0];
        try {
            let obj = JSON.parse(image_settings.value);
            this.image.width = obj.width * this.app.width / 630;
            this.image.height = obj.height * this.app.width / 630;
            this.image.x = obj.x * this.app.width / 630 + this.image.width * this.image.anchor.x;
            this.image.y = obj.y * this.app.width / 630 + this.image.height * this.image.anchor.y;
            this.image.rotation = obj.rotation;
        } catch (e) {

        }
    }

    setCost(c) {
        let costs = this.sortCosts(c);
        this.costs.forEach(spr => {
            this.app.stage.removeChild(spr);
        }, this);
        this.costs = [];
        this.costPos = this.app.width / 1.32;
        this.addCostSprites(costs);
    }

    sortCosts(c) {
        let costs = [];
        let neu = {};
        c.forEach(e => {
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
        costs.sort(function (a, b) {
            return b.cost - a.cost
        });
        costs.push(neu);
        return costs;
    }

    addCostSprites(costs) {
        costs.forEach(c => {
            for (let i = 0; i < c.cost; i++) {
                let s = new PIXI.Sprite();
                s.texture = c.texture;
                s.x = this.costPos;
                s.y = this.app.width / 13.87;
                s.width = this.app.width / 20.2;
                s.height = this.app.width / 20.2;
                this.costPos -= this.app.width / 20;
                this.costs.push(s);
                this.app.stage.addChild(s);
            }
        }, this);
    }
}

const card = new CardView();
document.getElementById('render-view').appendChild(card.app.view);


card.app.view.addEventListener('wheel', e => {
    try {
        if (!e.ctrlKey) {

            let obj = JSON.parse(image_settings.value);
            obj.width += obj.width * e.deltaY / 360;
            obj.height += obj.height * e.deltaY / 360;
            image_settings.value = JSON.stringify(obj);

            card.setImageFrame();
        } else {
            let obj = JSON.parse(image_settings.value);
            obj.rotation += e.deltaY / 360;
            image_settings.value = JSON.stringify(obj);

            card.setImageFrame();
        }
        e.preventDefault();
    } catch (e) {

    }


});

card.app.view.addEventListener('mousedown', e => {
    card.drag = true;
});

card.app.view.addEventListener('mouseup', e => {
    card.drag = false;
});

card.app.view.addEventListener('mousemove', e => {
    if (card.drag) {
        try {
            let obj = JSON.parse(image_settings.value);
            obj.x += e.movementX;
            obj.y += e.movementY;
            image_settings.value = JSON.stringify(obj);
            card.setImageFrame();
        } catch (e) {

        }

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

let image_settings = document.getElementsByName("image_settings")[0];
card.setImageFrame();

let attack = document.getElementsByName("attack")[0];
card.setAttackText(attack.value);
let shield = document.getElementsByName("shield")[0];
card.setDefenseText(shield.value);
let costs = document.querySelectorAll("[name^=cost_]");
card.setCost(costs);

let upload_image = document.getElementById('card_image');
console.log(upload_image);
upload_image.addEventListener('change', () => {
    var fReader = new FileReader();
    fReader.readAsDataURL(upload_image.files[0]);
    fReader.onloadend = function(event){
        let texture = PIXI.Texture.fromImage(event.target.result);
        card.setImage(texture);

        texture.on('update', () => {
            image_settings.value = '{"x":0,"y":0,"width":'
                + card.image.texture.baseTexture.realWidth
                + ',"height":'
                + card.image.texture.baseTexture.realHeight
                + ',"rotation":0}';
            card.setImageFrame();
        });
        texture.update();
    }



});

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
    let texture = PIXI.Texture.fromImage(image_path.value);
    card.setImage(texture);

    texture.on('update', () => {
        image_settings.value = '{"x":0,"y":0,"width":'
            + card.image.texture.baseTexture.realWidth
            + ',"height":'
            + card.image.texture.baseTexture.realHeight
            + ',"rotation":0}';
        card.setImageFrame();
    });
    texture.update();
});
attack.addEventListener('input', () => {
    card.setAttackText(attack.value)
});
shield.addEventListener('input', () => {
    card.setDefenseText(shield.value)
});
costs.forEach(c => {
    c.addEventListener('input', () => {
        card.setCost(costs);
    }, this)
});

function setFontStyle(text, style, maxWidth, maxFontSize = 40, minFontSize = 18, align = "center") {
    style.fontSize = maxFontSize;
    style.wordWrap = false;
    style.align = align;
    let width = PIXI.TextMetrics.measureText(text, style).width;
    while (width > maxWidth && style.fontSize > minFontSize) {
        style.fontSize -= 1;
        width = PIXI.TextMetrics.measureText(text, style).width;
    }
    if (width > maxWidth && style.fontSize === minFontSize) {
        style.wordWrap = true;
        style.breakWords = true;
        style.wordWrapWidth = maxWidth;
    }
    return style
}
