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
      for (var i2 = 0; i2 < layers.layers.length; i2++) {
        var layersListElement = document.createElement("div");
        layersListElement.classList.add("box");
        layersListElement.innerHTML = `<div class="flex row">` + 
        `  <p>${i2}</p>` +
        `  <div class="dropdown">` +
        `    <button class="toggle">.</button>` +
        `    <div class="content">` +
        `      <button onclick="layers.remove(${i2})">delete</button>` +
        `    </div>` +
        `  </div>` +
        `</div>`;
        layersList.appendChild(layersListElement);
      }
    }
  }
}

ui.setTheme(ui.getTheme());
