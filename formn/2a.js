document.getElementById("one").onchange = function () {
  document.getElementById("two").setAttribute("disabled", "disabled");
  if (this.value == "0" )
    document.getElementById("two").removeAttribute("disabled");
};
