import Phaser from 'phaser';

import cardsAtlasJson from '../assets/cards/cards.json';
import cardsAtlasPng from '../assets/cards/cards.png';

export class TestScene extends Phaser.Scene {
    constructor () {
        super();
        this.blitter
        this.frame = 'back'
        this.numbers = []
    }

    preload () {
        this.load.atlas('atlas', cardsAtlasPng, cardsAtlasJson);
    }

    launch(i) {
        var bob = this.blitter.create(Math.random() * 900, Math.random() * 1200, this.frame);

        this.tweens.add({
            targets: bob,
            x: Math.random() * 900,
            y: Math.random() * 1200,
            delay: Math.random() * 2,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true
        });
    }

    create () {    
        this.blitter = this.add.blitter(0, 0, 'atlas');

        for (var i = 0; i < 256; ++i)
        {
            this.launch(i);
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