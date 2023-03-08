export default function (scene, i) {
    let img = document.createElement('img');
    img.src = scene.textureSrc;
    img.width = 140;
    img.height = 190;
    let card = scene.add.dom(Math.random() * 900, Math.random() * 1200, img).setOrigin(0.5, 0.5);

    card.transformOnly = true
    card.setPerspective(800);

    card.x = Math.random() * 900
    img.animate([
        // key frames
        { transform: 'rotateY(45deg)' },
        { transform: 'rotateY(225deg)' },
      ], {
        // sync options
        duration: 1000,
        iterations: Infinity,
        easing: "linear"
      });
}