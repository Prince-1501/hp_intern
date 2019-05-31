document.getElementById("two").onchange = function () {
  document.getElementById("three").setAttribute("disabled", "disabled");
  if (this.value == "0" )
    document.getElementById("three").removeAttribute("disabled");
};