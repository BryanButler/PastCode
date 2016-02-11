function carcalc()
{
	var Name;
	var Address;
	var State;
	var City;
	var Zip;
	var Manufact;
	var CarStyle;
	var basecost;
	var additionalcost = 0;
	var lastmessage;
	var counter = 0;

	Name = window.document.CarOrder.txtFirstName.value;
	Name += document.CarOrder.txtLastName.value;
	Address = document.CarOrder.txtStreetAddress.value;
	State = document.CarOrder.txtState.value;
	City = document.CarOrder.txtCity.value;
	Zip = document.CarOrder.txtZipCode.value

	for(counter = 0;counter < 3;counter++)
	{
		if (document.CarOrder.radCarStyle[counter].checked == true)
		{
			basecost = eval(document.CarOrder.radCarStyle[counter].value);
		}
	}
	 
	if (document.CarOrder.chkAC.checked==true)
	{
		additionalcost += eval(document.CarOrder.chkAC.value);
	}
	if (document.CarOrder.chkTrans.checked==true)
	{
		additionalcost += eval(document.CarOrder.chkTrans.value);
	}
	if (document.CarOrder.chkSound.checked==true)
	{
		additionalcost += eval(document.CarOrder.chkSound.value);
	}
	if (document.CarOrder.chkWheels.checked==true)
	{
		additionalcost += eval(document.CarOrder.chkWheels.value);
	}
	if (document.CarOrder.chkTires.checked==true)
	{
		additionalcost += eval(document.CarOrder.chkTires.value);
	}
	if (document.CarOrder.chkWarrenty.checked==true)
	{
		additionalcost += eval(document.CarOrder.chkWarrenty.value);
	}
	Manufact = document.CarOrder.Manufacturer.value;












	lastmessage = "Thank you ";
	lastmessage += Name;
	lastmessage += "for purchasing a ";
	lastmessage += Manufact;
	lastmessage += " with a base cost of ";
	lastmessage += basecost;
	lastmessage += " and "
	lastmessage += additionalcost;
	lastmessage += " worth of features for a total price tag of ";
	lastmessage += basecost+additionalcost;
	lastmessage +=" We will have this shipped to a dealership near ";
	lastmessage += Address;
	lastmessage += " , ";
	lastmessage += City;
	lastmessage += " , ";
	lastmessage += State;
	lastmessage += " , ";
	lastmessage += Zip;

	document.CarOrder.txtconfirm.value = lastmessage;


}