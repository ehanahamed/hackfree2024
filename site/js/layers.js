var layers = {
  layers: [],
  add: function () {
    var newCanvas = document.createElement("canvas");
    newCanvas.width = "400";
    newCanvas.height = "300";
    var length = layers.layers.push(
      {
        canvas: newCanvas,
        x: 0,
        y: 0
      }
    );
    canvas.draw();
    ui.layers.refresh();
    return (length - 1);
  },
  remove: function (layer) {
    if (layer < layers.layers.length) {
      layers.layers.splice(layer,1);
    }
    ui.layers.refresh();
  }
};
