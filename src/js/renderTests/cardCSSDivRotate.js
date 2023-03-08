import '../../assets/cards/clubs_king.svg';

export default function (scene, i) {
    // Inputs -- change this based on your art
    var tw  = 140; // Texture Atlas Tile Width (pixels)
    var th  = 190; // Texture Atlas Tile Height (pixels)
    var tx  =  0; // tile index x (relative) (column)
    var ty  =  0; // tile index y (relative) (row)
    var src = scene.textureSrc;

    // Calculations -- common code to sub-image of texture atlas
    var div = document.createElement('div');
    div.style.width              = tw + 'px';
    div.style.height             = th + 'px';
    div.style.backgroundImage    = "url('" + src + "')";
    div.style.backgroundPosition = '-' + tx + 'px -' + ty + 'px';
    let card = scene.add.dom(Math.random() * 900, Math.random() * 1200, div).setOrigin(0, 0);
    card.setPerspective(800);
    card.rotate3d.set(0, 1, 0, 0);

    scene.tweens.add({
        targets: card.rotate3d,
        w: 100,
        delay: Math.random() * 2,
        ease: 'Sine.easeInOut',
        repeat: -1,
        yoyo: true
    });
}