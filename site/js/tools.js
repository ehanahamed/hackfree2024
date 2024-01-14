var tools = {
  current: "select",
  select: function () {
    document.getElementById("toolSelect").classList.add("selected");
    document.getElementById("toolMove").classList.remove("selected");
    document.getElementById("toolSize").classList.remove("selected");
    tools.current = "select";
  },
  move: function () {
    document.getElementById("toolSelect").classList.remove("selected");
    document.getElementById("toolMove").classList.add("selected");
    document.getElementById("toolSize").classList.remove("selected");
    tools.current = "move";
  },
  size: function () {
    document.getElementById("toolSelect").classList.remove("selected");
    document.getElementById("toolMove").classList.remove("selected");
    document.getElementById("toolSize").classList.add("selected");
    tools.current = "move";
  }
}

tools.select();
