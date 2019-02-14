require('./initJQuery');
PIXI = require('pixi.js');

CardView = require('./cardView');

class Renderer {

  constructor() {
    this.imageSettings = $('#image_settings');
    
    this.cardView = new CardView();
    this.view = this.cardView.app.view;
    $('#render-view').append(this.view);
    this.addZoomEvent();
    this.addDragEvent();
    this.setValues();
    this.addImage();
  }

  addZoomEvent() {
    this.view.addEventListener('wheel', (e) => {
      try {
        let obj = JSON.parse(this.imageSettings.val());
        if (!e.ctrlKey) {
          obj.width += obj.width * e.deltaY / 360;
          obj.height += obj.height * e.deltaY / 360;
        } else {
          obj.rotation += e.deltaY / 360;
        }
        this.imageSettings.val(JSON.stringify(obj));
        this.cardView.setImageFrame();
        e.preventDefault();
      } catch (e) {}
    });
  }

  addDragEvent() {
    this.view.addEventListener('mousedown', () => {
      this.cardView.drag = true;
    });
    this.view.addEventListener('mouseup', () => {
      this.cardView.drag = false;
    });
    this.view.addEventListener('mousemove', (e) => {
      if (this.cardView.drag) {
        try {
          let obj = JSON.parse(this.imageSettings.val());
          obj.x += e.movementX;
          obj.y += e.movementY;
          this.imageSettings.val(JSON.stringify(obj));
          this.cardView.setImageFrame();
        } catch (e) {}
      }
    });
  }

  setAndListen(id, callback) {
    const e = $(id);
    e.on('input', () => {
      callback.call(this.cardView, e.val())
    });
    callback.call(this.cardView, e.val())
  }

  setValues() {
    this.setAndListen('#name',this.cardView.setTitle);
    this.setAndListen('#rarity', this.cardView.setRarity);
    this.setAndListen('#card_effect', this.cardView.setText);
    this.setAndListen('#cost_gold', this.cardView.setGoldText);
    this.setAndListen('#attack', this.cardView.setAttackText);
    this.setAndListen('#shield', this.cardView.setDefenseText);

    const cardType = $('#card_type');
    cardType.change(() => {
      const categoryType = cardType.val() + ', ' + categoryText.val();
      this.cardView.setCategory(categoryType);
    });

    const categoryText = $('#category_text');
    categoryText.on('input', () => {
      const categoryType = cardType.val() + ', ' + categoryText.val();
      this.cardView.setCategory(categoryType);
    });

    const categoryType = cardType.val() + ', ' + categoryText.val();
    this.cardView.setCategory(categoryType);
    //
    //
    //
    const imagePath = $('#image_path');
    imagePath.change(() => {
      const texture = PIXI.Texture.fromImage(imagePath.value);
      this.cardView.setImage(texture);
      this.textureEvent(texture);
      texture.update();
    });
    this.cardView.setImage(PIXI.Texture.fromImage(imagePath.val()));

    const costs = document.querySelectorAll("[name^=cost_]");
    costs.forEach((c) => {
      c.addEventListener('input', () => {
        this.cardView.setCost(costs);
        // ÄDNERN
      })
    });
    this.cardView.setCost(costs);
  }

  textureEvent(texture) {
    texture.on('update', () => {
      this.imageSettings.val('{"x":0,"y":0,"width":'
          + this.cardView.image.texture.baseTexture.realWidth
          + ',"height":'
          + this.cardView.image.texture.baseTexture.realHeight
          + ',"rotation":0}');
      this.cardView.setImageFrame();
    });
  }

  addImage() {
    const uploadImage =  $('#card_image');
    uploadImage.change(() => {
      let fReader = new FileReader();
      fReader.readAsDataURL(uploadImage.files[0]);
      fReader.onloadend = (event) => {
        const texture = PIXI.Texture.fromImage(event.target.result);
        this.cardView.setImage(texture);

        this.textureEvent(texture);
        texture.update();
      }
    });
  }

}

module.exports = Renderer;