document.getElementById("one").onchange = function () 
{
  document.getElementById("two").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("two").removeAttribute("disabled");
};


document.getElementById("three","four").onchange = function () 
{
  document.getElementById("five").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("five").removeAttribute("disabled");
};

document.getElementById("four").onchange = function () 
{
  document.getElementById("five");

  if (this.value == "Yes")

    document.getElementById("five").removeAttribute("disabled");
};


document.getElementById("six").onchange = function () 
{
  document.getElementById("seven").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("seven").removeAttribute("disabled");
};

document.getElementById("eight").onchange = function () 
{
  document.getElementById("nine").setAttribute("disabled", "disabled");

  if (this.value == "Preterm")

    document.getElementById("nine").removeAttribute("disabled");
};

document.getElementById("ten").onchange = function () 
{
  document.getElementById("eleven").setAttribute("disabled", "disabled");

  if (this.value == "Yes")

    document.getElementById("eleven").removeAttribute("disabled");
};