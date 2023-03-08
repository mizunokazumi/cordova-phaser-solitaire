/** @param {Phaser.Scene} scene */
export default function (scene, i) {
    var card = scene.add.renderTexture(Math.random() * 900, Math.random() * 1200, 140, 190)
    const canvas = card.canvas
    const ctx = canvas.getContext("2d")
    card.drawFrame(scene.texture, scene.frame)
    ctx.transform(1, 0.2, 0.8, 1, 0, 0);

    // scene.tweens.add({
    //     targets: card,
    //     x: Math.random() * 900,
    //     y: Math.random() * 1200,
    //     delay: Math.random() * 2,
    //     ease: 'Sine.easeInOut',
    //     repeat: -1,
    //     yoyo: true
    // });
}