/** @param {Phaser.Scene} scene */
export default function (scene, i) {
    var card = scene.add.image(Math.random() * 900, Math.random() * 1200, scene.texture, scene.frame);

    scene.tweens.add({
        targets: card,
        scaleX: 0,
        delay: Math.random() * 2,
        ease: 'Sine.easeInOut',
        repeat: -1,
        yoyo: true
    });
}