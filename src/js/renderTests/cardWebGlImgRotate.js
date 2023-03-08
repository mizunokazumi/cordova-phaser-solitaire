export default function (scene, i) {
    let card = scene.add.rexPerspectiveImage(Math.random() * 900, Math.random() * 1200, scene.texture, scene.frame, { hideCCW: false })

    scene.tweens.add({
        targets: card,
        rotationY: 1,
        delay: Math.random() * 2,
        ease: 'Sine.easeInOut',
        repeat: -1,
        yoyo: true
    });
}