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
        y: 0,
        hide: false
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
    canvas.draw();
    ui.layers.refresh();
  },
  hide: function (layer) {
    layers.layers[layer].hide = true;
    canvas.draw();
    ui.layers.refresh();
  },
  show: function (layer) {
    layers.layers[layer].hide = false;
    canvas.draw();
    ui.layers.refresh();
  }
};
