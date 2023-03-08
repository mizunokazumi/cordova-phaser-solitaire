import Phaser from 'phaser';

import cardsAtlasJson from '../assets/cards/cards.json';
import cardsAtlasPng from '../assets/cards/cards.png';
import cardsKingSvg from '../assets/cards/clubs_king.svg';

import cardBlitterBobMove from './renderTests/cardBlitterBobMove'
import cardCSSDivRotate from './renderTests/cardCSSDivRotate'
import cardCSSImgRotate from './renderTests/cardCSSImgRotate'
import cardCSSImgRotate2 from './renderTests/cardCSSImgRotate2'
import cardCSSStatic from './renderTests/cardCSSStatic'
import cardImageMove from './renderTests/cardImageMove'
import cardImageScale from './renderTests/cardImageScale'
import cardWebGlImgRotate from './renderTests/cardWebGlImgRotate'

export class TestScene extends Phaser.Scene {
    constructor () {
        super();
        this.blitter
        this.textureSrc = '/assets/cards/card.png'
        this.texture = 'atlas'
        this.frame = 'back'
        this.numbers = []
    }

    preload () {
        this.load.atlas('atlas', cardsAtlasPng, cardsAtlasJson);
        this.load.svg('king', cardsKingSvg, { scale: 0.5 });
    }

    create () {    
        this.blitter = this.add.blitter(0, 0, this.texture, this.frame);

        for (var i = 0; i < 256; ++i)
        {
            // cardBlitterBobMove(this, i)
            // cardCSSDivRotate(this, i)
            cardCSSImgRotate(this, i)
            // cardCSSStatic(this, i)
            // cardImageMove(this, i)
            // cardCSSImgRotate2(this, i)
            // cardImageScale(this, i)
            // cardWebGlImgRotate(this, i)
        }
    
        this.fps = this.add.text(540, 1920 - 360, "FPS: 0", { "color": "#00ff00ff", "fontSize": "100px", "fontStyle": "bold" });
        this.fps.setOrigin(0.5, 0.5)

        const button = this.add.text(540, 1920 - 160, "Show Mediation Debugger", {
            color: "#ffffff",
            fontSize: "60px",
            fontStyle: "bold",
            backgroundColor: "#000",
            padding: {
                x: 20,
                y: 20
            }
        })
        button.setOrigin(0.5, 0.5)
        button.setInteractive().on(Phaser.Input.Events.POINTER_UP, () => {
            var AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX')
            AppLovinMAX.showMediationDebugger()
        })
    }

    update() {
        this.fps.setText( "FPS: " + this.game.loop.actualFps.toFixed(2))
    }
}