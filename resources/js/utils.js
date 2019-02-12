S = require('spin.js').Spinner;

class Utils {

  static setFontStyle(
      text, style, maxWidth, maxFontSize = 40, minFontSize = 18,
      align = 'center') {
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
    return style;
  }

  initLoader() {
    const opts = {
      lines: 14, // The number of lines to draw
      length: 22, // The length of each line
      width: 8, // The line thickness
      radius: 25, // The radius of the inner circle
      scale: 1, // Scales overall size of the spinner
      corners: 1, // Corner roundness (0..1)
      color: '#7f7f7f', // CSS color or array of colors
      fadeColor: 'transparent', // CSS color or array of colors
      speed: 1, // Rounds per second
      rotate: 0, // The rotation offset
      animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
      direction: 1, // 1: clockwise, -1: counterclockwise
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      className: 'spinner', // The CSS class to assign to the spinner
      top: '50%', // Top position relative to parent
      left: '50%', // Left position relative to parent
      shadow: '0 0 1px transparent', // Box-shadow for the lines
      position: 'absolute' // Element positioning
    };

    this.spinner = new S(opts);
  }

  removeLoader() {
    this.spinner.stop();
  }

  startLoader(parent = document.getElementById('body')) {
    if (!this.spinner) {
      this.initLoader();
    }
    this.spinner.spin(parent)
  }

}

module.exports = Utils;