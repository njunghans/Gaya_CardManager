Utils = require('./utils');
TextBoxWithIcons = require('./PIXI.TextBoxWithIcons');

class CardView {
    constructor(baseWidth = 640) {
        this.drag = false;
        this.app = new PIXI.Application(
            {width: baseWidth, height: baseWidth / 0.7159, transparent: true});

        this.frame = new PIXI.Sprite();
        this.rarityStone = new PIXI.Sprite();
        this.gold = new PIXI.Sprite();
        this.attack = new PIXI.Sprite();
        this.image = new PIXI.Sprite();
        this.defense = new PIXI.Sprite();

        this.title = new PIXI.Text('');
        this.category = new PIXI.Text('');
        this.info = new PIXI.Text('');
        this.goldText = new PIXI.Text('');
        this.attackText = new PIXI.Text('');
        this.defenseText = new PIXI.Text('');

        this.container = new PIXI.Container();

        this.text = new TextBoxWithIcons(new PIXI.Rectangle());

        this.setAttackSymbol(PIXI.Texture.fromImage('/data/AttackIcon.png'));
        this.setDefenseSymbol(PIXI.Texture.fromImage('/data/DefenseIcon.png'));

        this.container.addChild(this.image);
        this.container.filters = [new PIXI.filters.AlphaFilter()];

        this.setFrame(PIXI.Texture.fromImage('/data/Frame.png'));

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
        this.app.stage.addChild(this.text.view);

        this.costs = [];
        this.bio_tex = PIXI.Texture.fromImage('/data/ManaCrystalGreen.png');
        this.ene_tex = PIXI.Texture.fromImage('/data/ManaCrystalBlue.png');
        this.par_tex = PIXI.Texture.fromImage('/data/ManaCrystalRed.png');
        this.art_tex = PIXI.Texture.fromImage('/data/ManaCrystalBlack.png');
        this.neu_tex = PIXI.Texture.fromImage('/data/ManaCrystalNeutral.png');

        this.setStyles();
        this.setWidths(baseWidth);
        this.setImageFrame();
    }

    setStyles() {
        let base = {
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'normal',
            fill: 'white',
            stroke: 'black',
            strokeThickness: 4,
            dropShadow: false,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
        };
        this.text.baseStyle = new PIXI.TextStyle(base);
        this.text.baseStyle.fontSize = 22;
        this.text.baseStyle.strokeThickness = 0;
        this.text.baseStyle.fill = 'black';

        this.title.style = new PIXI.TextStyle(base);

        let category = jQuery.extend({}, base);
        category.fontSize = 26;
        this.category.style = new PIXI.TextStyle(category);

        let info = jQuery.extend({}, base);
        info.fill = 'grey';
        info.stroke = 'grey';
        info.fontSize = 18;
        info.strokeThickness = 0;
        this.info.style = new PIXI.TextStyle(info);

        let stat = jQuery.extend({}, base);
        stat.fontWeight = 'bold';

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

        this.container.filterArea = new PIXI.Rectangle(baseWidth / 7.88,
            baseWidth / 7.7, baseWidth / 1.31, baseWidth / 1.26);

        this.text.box = new PIXI.Rectangle(baseWidth / 7, baseWidth / 1.0,
            baseWidth / 1.34, baseWidth / 1.5);
        this.text.minFontSize = 12 * baseWidth / 640;
        this.text.maxFontSize = 36 * baseWidth / 640;
        this.text.fontSize = 22 * baseWidth / 640;

        this.text.setText(this.text.text);
    }

    setTitle(txt) {
        this.title.text = txt;
        this.title.style = Utils.setFontStyle(txt, this.title.style, 200);
    }

    setCategory(txt) {
        this.category.text = txt;
        this.category.style = Utils.setFontStyle(txt, this.category.style, 200);
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
            this.setRarityStone(
                PIXI.Texture.fromImage('/data/RarityStoneCommon.png'));
        } else if (rarity === 1) {
            this.setRarityStone(
                PIXI.Texture.fromImage('/data/RarityStoneRare.png'));
        } else if (rarity === 2) {
            this.setRarityStone(
                PIXI.Texture.fromImage('/data/RarityStoneEpic.png'));
        } else if (rarity === 3) {
            this.setRarityStone(
                PIXI.Texture.fromImage('/data/RarityStoneUnique.png'));
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
        let image_settings = document.getElementsByName('image_settings')[0];
        try {
            let obj = JSON.parse(image_settings.value);
            this.image.width = obj.width * this.app.width / 630;
            this.image.height = obj.height * this.app.width / 630;
            this.image.x = obj.x * this.app.width / 630 + this.image.width *
                this.image.anchor.x;
            this.image.y = obj.y * this.app.width / 630 + this.image.height *
                this.image.anchor.y;
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
            if (d.type === 'cost_neutral') {
                d.texture = this.neu_tex;
            } else if (d.type === 'cost_bio') {
                d.texture = this.bio_tex;
            } else if (d.type === 'cost_par') {
                d.texture = this.par_tex;
            } else if (d.type === 'cost_art') {
                d.texture = this.art_tex;
            } else if (d.type === 'cost_ene') {
                d.texture = this.ene_tex;
            }
            if (d.type === 'cost_neutral') {
                neu = d;
            } else if (d.type !== 'cost_gold') {
                costs.push(d);
            }
        }, this);
        costs.sort(function(a, b) {
            return b.cost - a.cost;
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

    setText(txt) {
        this.text.setText(txt);
    }
}

module.exports = CardView;