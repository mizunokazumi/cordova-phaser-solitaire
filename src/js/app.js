import Phaser from 'phaser';
import PerspectiveImagePlugin from 'phaser3-rex-plugins/plugins/perspectiveimage-plugin.js';
import {TestScene} from './test';
// import './ads';

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-solitaire',  
    transparent: true,
    powerPreference: "high-performance", // "high-performance", "low-power" or "default"
    // desynchronized: true, // improves performance but becomes less stable
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1080,
        height: 1920,
    },
    dom: {
        createContainer: true
    },
    plugins: {
        global: [{
            key: 'rexPerspectiveImagePlugin',
            plugin: PerspectiveImagePlugin,
            start: true
        },]
    },
    scene: TestScene
};

export async function start() {
    const game = new Phaser.Game(config);
    await new Promise((r)=>game.events.once("ready", r));
}

