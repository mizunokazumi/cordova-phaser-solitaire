export default function (scene, i) {
    let img = document.createElement('img');
    img.src = scene.textureSrc;
    img.width = 140;
    img.height = 190;
    let card = scene.add.dom(Math.random() * 900, Math.random() * 1200, img).setOrigin(0, 0);

    card.transformOnly = true
    card.setPerspective(800);
    card.rotate3d.set(0, 1, 0, 0);
    card.rotate3d.w = 50

    scene.tweens.add({
        targets: card.rotate3d,
        w: 100,
        delay: Math.random() * 2,
        ease: 'Sine.easeInOut',
        repeat: -1,
        yoyo: true
    });
}