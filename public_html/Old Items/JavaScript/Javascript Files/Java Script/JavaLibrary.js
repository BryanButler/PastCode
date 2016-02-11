 function makeML()
		{
			var sound;
			var part;
			var descrip;
			var vehicle;
			var animal;
			var story = "";

			person = window.document.myForm.txtPerson.value;
			vehicle = document.myForm.txtVehicle.value;
			animal = document.myForm.textAnimal.value;

			descrip = "";

			if (document.myForm.chkEvil.checked==true)
			{
				descrip += document.myForm.chkEvil.value;
				descrip += ", ";
			}

			if (document.myForm.chkGoofy.checked==true)
			{
				descrip += document.myForm.chkGoofy.value;
				descrip += ", ";
			}

			if (document.myForm.chkDysfunc.checked==true)
			{
				descrip += document.myForm.chkDysfunc.value;
				descrip += ", ";
			}

			if (document.myForm.chkWacky.checked==true)
			{
				descrip += document.myForm.chkWacky.value;
				descrip += ", ";
			}
		

		for( i = 0; i<=3;i++)
		{
			if (document.myForm.optSound[i].checked == true)
			{
				sound = document.myForm.optSound[i].value;
			}
		}
	var theSelect = document.myForm.selBody;

	var theOption = theSelect[theSelect.selectedIndex];

	part = theOption.value;

	story = "One day, a person named ";
	story += person;
	story += " was walking down the street. Suddenly, "
	story += person;
	story += " heard an awful, ";
	story += descrip;
	story += " mysterious ";
	story += sound;
	story += " sound. "
	story += person;
	story += " looked around and saw that the";
	story += sound;
	story += " was coming from a ";
	story += vehicle;
	story += " careening madly down the street. ";
	story += person;
	story += "'s fear turned to terror as";
	story += person;
	story += "realised that the ";
	story += vehicle;
	story += "was driven by none other than the evil Super-";
	story += animal;
	story += " Continued to taunt";
	story += person;
	story += " with the horrible"
	story += sound;
	story += " noise, but ";
	story += person;
	story += " was unconcerned. 'You can't bother me , Super-";
	story += animal;
	story += "! I know how to turn the other";
	story += part;
	story += "!";

	document.myForm.txtStory.value = story;
}


function basicaddition(myForm)
{
	var a = eval(myForm.textone.value);
	var b = eval(myForm.texttwo.value);
	alert(a);
	alert(b);
	alert(a+b);


}

function pizzatime()
{
	var name = document.myForm.txtName.value
	var address = document.myForm.txtAddress.value
	var city = document.myForm.txtCity.value
	var phonenumber = document.myForm.txtPhone.value
	var pizzasize;
	var toppings = "";
	var comfirmation = "";

	for( i = 0; i<=3;i++)
		{
			if (document.myForm.optSize[i].checked == true)
			{
				pizzasize = document.myForm.optSize[i].value;
			}
		}

		if (document.myForm.chkCheese.checked==true)
			{
				toppings += document.myForm.chkCheese.value;
				toppings += ", ";
			}

			if (document.myForm.chkPeperoni.checked==true)
			{
				toppings += document.myForm.chkPeperoni.value;
				toppings += ", ";
			}

			if (document.myForm.chkSausage.checked==true)
			{
				toppings += document.myForm.chkSausage.value;
				toppings += ", ";
			}

			if (document.myForm.chkMushrooms.checked==true)
			{
				toppings += document.myForm.chkMushrooms.value;
				toppings += ", ";
			}
			if (document.myForm.chkHam.checked==true)
			{
				toppings += document.myForm.chkHam.value;
				toppings += ", ";
			}

			if (document.myForm.chkPineapple.checked==true)
			{
				toppings += document.myForm.chkPineapple.value;
				toppings += ", ";
			}

			comfirmation = "Hello ";
			comfirmation += name;
			comfirmation += " you ordered a(n) ";
			comfirmation += pizzasize;
			comfirmation += " pizza with ";
			comfirmation += toppings;
			comfirmation += ". You live at "
			comfirmation += address;
			comfirmation += " and we can reach you at "
			comfirmation += phonenumber;

			document.alsomyForm.txtconfirm.value = comfirmation









}



