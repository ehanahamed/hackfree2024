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
        layersListElement.innerText = i2;
        layersList.appendChild(layersListElement);
      }
    }
  }
}

ui.setTheme(ui.getTheme());
