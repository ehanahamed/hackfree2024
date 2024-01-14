var outerCanvas = document.getElementById("outerCanvas");
var outerCtx =  outerCanvas.getContext("2d");
var mainCanvas = document.createElement("canvas");
mainCanvas.width = "400";
mainCanvas.height = "300";
var mainCtx = mainCanvas.getContext("2d");

var canvas = {
  draw: function () {
    outerCtx.clearRect(0, 0, outerCanvas.width, outerCanvas.height);
    mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    for (var i = 0; i < layers.layers.length; i++) {
      if (layers.layers[i].hide === false) {
        mainCtx.drawImage(
          layers.layers[i].canvas,
          layers.layers[i].x,
          layers.layers[i].y,
          layers.layers[i].width,
          layers.layers[i].height
        );
      }
    }
    outerCtx.drawImage(mainCanvas, 0, 0, canvas.width, canvas.height);
  },
  /* initial default size */
  width: 400,
  height: 300,
  resize: function (width, height) {
    /* These values don't effect the real canvas,
    they're used in other calculations,
    for example the size of a new layer in layers.js */
    canvas.width = width,
    canvas.height = height;
    /* These values change the actual html canvas size */
    outerCanvas.width = width;
    outerCanvas.height = height;
    mainCanvas.width = width;
    mainCanvas.height = height;
  }
}

function drawA() {
  newLayer = layers.add();
  layers.layers[newLayer].canvas.getContext("2d").fillStyle = "#7a52cc";
  layers.layers[newLayer].canvas.getContext("2d").fillRect(10,10,500,500);
  canvas.draw();
}

var img = new Image()
/*img.addEventListener(
  "load",
  function () {
    mainCtx.drawImage(img, 0, 0);
    draw();
  },
  false
)*/
img.src = "./image.png"

function drawB(layer) {
  layers.layers[layer].canvas.getContext("2d").drawImage(img, 0, 0);
  canvas.draw();
}
