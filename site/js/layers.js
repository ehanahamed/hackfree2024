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
    return (length - 1);
  },
};
