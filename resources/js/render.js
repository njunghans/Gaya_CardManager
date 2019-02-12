CardView = require('./cardView');

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

let effect = document.getElementsByName("card_effect")[0];
card.setText(effect.value);
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
effect.addEventListener('input', ()=>{
    card.setText(effect.value);
});