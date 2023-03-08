export default function (scene, i) {
    var tw  = 140; // Texture Atlas Tile Width (pixels)
    var th  = 190; // Texture Atlas Tile Height (pixels)
    var tx  =  0; // tile index x (relative) (pixels)
    var ty  =  0; // tile index y (relative) (pixels)
    var src = scene.textureSrc;

    // Calculations -- common code to sub-image of texture atlas
    var div = document.createElement('div');
    div.style.width              = tw + 'px';
    div.style.height             = th + 'px';
    div.style.backgroundImage    = "url('" + src + "')";
    div.style.backgroundPosition = '-' + tx + 'px -' + ty + 'px';
    let card = scene.add.dom(Math.random() * 900, Math.random() * 1200, div).setOrigin(0, 0);
}