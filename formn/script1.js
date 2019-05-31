document.getElementById("one").onchange = function () 
{
  document.getElementById("two").setAttribute("disabled", "disabled");
  document.getElementById("three").setAttribute("disabled", "disabled");
  document.getElementById("four").setAttribute("disabled", "disabled");
  document.getElementById("five").setAttribute("disabled", "disabled");
  document.getElementById("six").setAttribute("disabled", "disabled");
  document.getElementById("seven").setAttribute("disabled", "disabled");
  document.getElementById("eight").setAttribute("disabled", "disabled");
  document.getElementById("nine").setAttribute("disabled", "disabled");
  document.getElementById("ten").setAttribute("disabled", "disabled");
  document.getElementById("eleven").setAttribute("disabled", "disabled");
  document.getElementById("twelve").setAttribute("disabled", "disabled");
  document.getElementById("thirteen").setAttribute("disabled", "disabled");
  document.getElementById("fourteen").setAttribute("disabled", "disabled");
  document.getElementById("fifteen").setAttribute("disabled", "disabled");
  document.getElementById("sixteen").setAttribute("disabled", "disabled");
  document.getElementById("seventeen").setAttribute("disabled", "disabled");
  document.getElementById("eighteen").setAttribute("disabled", "disabled");
  document.getElementById("nineteen").setAttribute("disabled", "disabled");

  if (this.value == "no"){

  	 document.getElementById("two").removeAttribute("disabled");
  	 document.getElementById("three").removeAttribute("disabled");
  	 document.getElementById("four").removeAttribute("disabled");
  	 document.getElementById("five").removeAttribute("disabled");
     document.getElementById("six").removeAttribute("disabled");
     document.getElementById("seven").removeAttribute("disabled");
     document.getElementById("eight").removeAttribute("disabled");
     document.getElementById("nine").removeAttribute("disabled");

  }

  else if (this.value == "yes"){
  	document.getElementById("ten").removeAttribute("disabled");
  	 document.getElementById("eleven").removeAttribute("disabled");
  	 document.getElementById("twelve").removeAttribute("disabled");
  document.getElementById("thirteen").removeAttribute("disabled");
  document.getElementById("fourteen").removeAttribute("disabled");
  document.getElementById("fifteen").removeAttribute("disabled");
  document.getElementById("sixteen").removeAttribute("disabled");
  document.getElementById("seventeen").removeAttribute("disabled");
  document.getElementById("eighteen").removeAttribute("disabled");
  document.getElementById("nineteen").removeAttribute("disabled");
  }

};
