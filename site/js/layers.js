var layers = {
  layers: [],
  sessionLayerCount: 1, /* user-facing layer number */
  add: function (width, height) {
    var newCanvas = document.createElement("canvas");
    newCanvas.width = width || canvas.width;
    newCanvas.height = height || canvas.height;
    var length = layers.layers.push(
      {
        canvas: newCanvas,
        x: 0,
        y: 0,
        /* the || (two pipes) ("or" operator) uses 
        canvas.width if width isn't defined */
        width: width || canvas.width,
        height: height || canvas.height,
        hide: false,
        name: "Layer " + layers.sessionLayerCount
      }
    );
    layers.sessionLayerCount += 1;
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
  },
  move: function (fromIndex, toIndex) {
    if (
      (
        (fromIndex >= 0) && (fromIndex < layers.layers.length)
      ) &&
      (
        (toIndex >= 0) && (toIndex < layers.layers.length)
      )
    ) {
      /* Store value */
      var value = layers.layers[fromIndex];
      /* Remove from array at old index */
      layers.layers.splice(fromIndex, 1);
      /* Add to array at new index,
      using value that was stored before */
      layers.layers.splice(toIndex, 0, value);
    }
    /* Update canvas and ui */
    canvas.draw();
    ui.layers.refresh();
  },
  clear: function () {
    layers.layers = [];
    canvas.draw();
    ui.layers.refresh();
  }
};
