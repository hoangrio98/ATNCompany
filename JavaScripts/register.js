// JavaScript Document
function checklogin()
{
	var fullname = f1.txtFull.value;
	var username = f1.txtName.value;
	var password = f1.txtPass.value;
	var confirm = f1.txtConfirm.value;
	var address = f1.txtAdd.value;
	var phone = f1.txtPhone.value;
	var mail = f1.txtMail.value;
	var dob = f1.txtDate.value;
	var city = f1.txtCity.value;
	alert("Welcome"+fullname+"! You have successfully registered. Please check the information !!!");
	document.writeln("Fullname: "+fullname+"<br/>");
	document.writeln("Username: "+username+"<br/>");
	document.writeln("Password: "+password+"<br/>");
	document.writeln("Confirm Password: "+confirm+"<br/>");
	document.writeln("Address: "+address+"<br/>");
	document.writeln("Phone Number: "+phone+"<br/>");
	document.writeln("E-mail: "+mail+"<br/>");
	document.writeln("Date of Birth: "+dob+"<br/>");
	document.writeln("City: "+city+"<br/>");
	document.writeln("Gender: "+gt+"<br/>");
	document.writeln("Hobbies: "+st+"<br/>");
	
}