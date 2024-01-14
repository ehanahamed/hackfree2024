var ui = {
  setTheme: function (theme) {
    document.documentElement.classList.remove(
      "default",
      "purpleish",
      "light"
    );
    document.documentElement.classList.add(theme);

    if (localStorage) {
      localStorage.setItem("theme", theme);
    }
  },
  getTheme: function () {
    if (localStorage) {
      return localStorage.getItem("theme") || "default";
    } else {
      return "default";
    }    
  },
  layers: {
    refresh: function () {
      var layersList = document.getElementById("layersList");
      layersList.innerHTML = "";
      for (var i2 = (layers.layers.length - 1); i2 >= 0; i2 -= 1) {
        var layersListElement = document.createElement("div");
        layersListElement.classList.add("box");
        if (layers.layers[i2].hide == false) {
          layersListElement.innerHTML = `<div class="flex row alignCenter">` + 
          `  <div class="dropdown">` +
          `    <button class="toggle">` +
          `      <i class="nf nf-md-dots_vertical"></i>` + 
          `    </button>` +
          `    <div class="content">` +
          `      <button onclick="layers.move(${i2},${i2 + 1})">Move Up</button>` +
          `      <button onclick="layers.move(${i2},${i2 - 1})">Move Down</button>` +
          `      <button onclick="layers.hide(${i2})">Hide</button>` +
          `      <button onclick="layers.remove(${i2})" class="red">Delete</button>` +
          `    </div>` +
          `  </div>` +
          `  <p>${layers.layers[i2].name}</p>` +
          `</div>`;
          layersList.appendChild(layersListElement);
        } else if (layers.layers[i2].hide === true) {
          layersListElement.innerHTML = `<div class="flex row alignCenter">` + 
          `  <div class="dropdown">` +
          `    <button class="toggle">` +
          `      <i class="nf nf-md-dots_vertical"></i>` + 
          `    </button>` +
          `    <div class="content">` +
          `      <button onclick="layers.show(${i2})">Show</button>` +
          `      <button onclick="layers.remove(${i2})" class="red">Delete</button>` +
          `    </div>` +
          `  </div>` +
          `  <p>${layers.layers[i2].name}</p>` +
          `  <i class="bg3 nf nf-md-eye_off"></i>` +
          `</div>`;
          layersList.appendChild(layersListElement);
        }
      }
    }
  }
}

ui.setTheme(ui.getTheme());
