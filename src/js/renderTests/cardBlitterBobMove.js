export default function (scene, i) {
    var bob = scene.blitter.create(Math.random() * 900, Math.random() * 1200, scene.frame);

    scene.tweens.add({
        targets: bob,
        x: Math.random() * 900,
        y: Math.random() * 1200,
        delay: Math.random() * 2,
        ease: 'Sine.easeInOut',
        repeat: -1,
        yoyo: true
    });
}