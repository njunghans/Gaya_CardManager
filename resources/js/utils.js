class Utils {

    static setFontStyle(text, style, maxWidth, maxFontSize = 40, minFontSize = 18, align = "center") {
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

}

module.exports = Utils;