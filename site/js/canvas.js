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
          400,
          300
        );
      }
    }
    outerCtx.drawImage(mainCanvas, 0, 0, 400, 300);
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
