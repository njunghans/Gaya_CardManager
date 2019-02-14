PIXI = require('pixi.js');
Utils = require('./utils');


class TextBoxWithIcons{

    constructor(box, text="", style=null, maxFontSize=80, minFontSize=16, align="center"){
        this.view=new PIXI.Container();
        this.view.frame=box;
        //this.textManager = new PIXI.TextMetrics.measureText(text, style);
        this.textViews=[];
        this.iconViews=[];
        this.box = box;
        this.maxFontSize=maxFontSize;
        this.minFontSize = minFontSize;
        this.align = align;
        this.baseStyle=style;
        this.style=style;
        this.text=text;
        this.updatedText=text;

    }

    setText(text){

        this.text=text;
        this.renderText();

    }
    setUpdatedText(){
        let regex = /(<icon(.*?)\/icon>)|(<icon(.*?)\/>)/;
        this.updatedText=this.text;
        while(regex.exec(this.updatedText)){
            let res = regex.exec(this.updatedText);
            let query_element = document.createElement('div');
            query_element.innerHTML = res[0];

            let element = query_element.childNodes[0];
            let str = " ";
            for(let i = 0; i<Math.ceil(element.getAttribute("width")); i++){
                str+=" ";
            }
            this.updatedText=this.updatedText.replace(res[0], str);
        }
    }
    getStyle(){
        //TODO Scaling
        return this.baseStyle;

    }

    renderText(){

        this.view.x = this.box.x;
        this.view.y = this.box.y;
        //this.view.width = this.box.width;
        //this.view.height = this.box.height;

        this.style = this.getStyle();//this.getFontStyle();


        while(this.view.children[0]) { this.view.removeChild(this.view.children[0]); }
        let lines = [[]];
        let textToWrite = this.text;
        while(textToWrite.length>0){
            let res = this.getTextToWriteUntilTagOrEndline(textToWrite, lines.last());
            let nextTextBit = res[0];
            let hasEndedTheLine=res[1];

            if(!nextTextBit){
                let regex = /(<icon(.*?)\/icon>)|(<icon(.*?)\/>)/;
                let result = regex.exec(textToWrite);
                if(result && result.index===0){
                    let query_element = document.createElement('div');
                    query_element.innerHTML = result[0];

                    let element = query_element.childNodes[0];
                    if(element.getAttribute("src")){

                        let icon = new PIXI.Sprite(PIXI.Texture.fromImage(element.getAttribute("src")));

                        //icon.y = lines.length*PIXI.TextMetrics.measureText(this.text,this.style).lineHeight;

                        if(lines.last().length>0) {
                            icon.x = lines.last().last().x + lines.last().last().width; //+margin ?
                        }else{
                            icon.x = 0;
                        }

                        icon.width = this.style.fontSize*element.getAttribute("width");
                        //console.log(icon.width);
                        icon.height = this.style.fontSize*element.getAttribute("height");
                        if(icon.x+icon.width>this.box.width){
                            icon.x = 0;

                            let newLine = [icon];
                            lines.push(newLine);
                        }else{
                            lines.last().push(icon);
                        }

                        this.view.addChild(icon);
                    }


                    textToWrite=textToWrite.replace(result[0],"");

                }else{
                    let newLine = [];
                    lines.push(newLine);
                }

            }else{

                let textView = new PIXI.Text(nextTextBit.replace(/(\r\n|\n|\r)/gm, ""));

                textView.style = this.style;
                //textView.y = lines.length*PIXI.TextMetrics.measureText(this.text,this.style).lineHeight;
                if(lines.last().length>0){
                    textView.x = lines.last().last().x+lines.last().last().width; //+char space?
                }else{
                    textView.x=0;
                }

                textView.width = PIXI.TextMetrics.measureText(nextTextBit,this.style).width;
                //textView.height = PIXI.TextMetrics.measureText(this.text,this.style).lineHeight;
                //textView.height=this.style.fontSize;
                this.view.addChild(textView);

                lines.last().push(textView);

                if(hasEndedTheLine){
                    lines.push([]);
                }

                textToWrite=textToWrite.replace(nextTextBit,"");
            }
        }
        //reajust lines
        let previousLineEnd = 0;
        for (let i =0; i< lines.length; i++){
            let line = lines[i];
            let lineHeight = 0;
            for(let j=0;j<line.length;j++){
                let v = line[j];
                lineHeight=Math.max(lineHeight, v.height);
            }

            for(let j=0;j<line.length;j++){
                let v = line[j];
                v.y = previousLineEnd + lineHeight/2 -v.height/2;
            }
            previousLineEnd+=lineHeight;
        }
    }

    getTextToWriteUntilTagOrEndline(textToWrite, line){
        if(textToWrite.length>0){
            let i = 0;
            let t = textToWrite.substring(0,1);
            let start = 0;
            if (line.length){
                start = line.last().x+line.last().width;
            }
            while (PIXI.TextMetrics.measureText(t, this.style).lines.length<2 && PIXI.TextMetrics.measureText(t, this.style).width+start<this.box.width-20 && i<textToWrite.length){
                i+=1;
                t = textToWrite.substring(0,i+1);
            }

            let regex = /(<icon(.*?)\/icon>)|(<icon(.*?)\/>)/;
            let result = regex.exec(textToWrite);
            if(result && result.index<i+1){
                return [textToWrite.substring(0,result.index), false];
            }
            return [t, true];
        }

    }
}

module.exports = TextBoxWithIcons;