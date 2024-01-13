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
  }
}

ui.setTheme(ui.getTheme());
