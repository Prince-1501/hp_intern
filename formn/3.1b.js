document.getElementById("one").onchange = function () 
{
  document.getElementById("two").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("two").removeAttribute("disabled");
};