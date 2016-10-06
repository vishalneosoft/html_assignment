function validateForm() {
	if( document.myForm.firstname.value == "" )
         {
            alert( "Please provide your First name!" );
            document.myForm.firstname.focus();
            return false;
         }

    if( document.myForm.lastname.value == "" )
         {
            alert( "Please provide your Last name!" );
            document.myForm.lastname.focus();
            return false;
         }

    if( document.myForm.phone.value == "" )
    {
    	alert( "Please provide your Phone number!" );
    	document.myForm.phone.focus();
    	return false;
    }

    if( isNaN(document.myForm.phone.value))
    {
    	alert( "Phone number can be Numeric Only!" );
    	document.myForm.phone.focus();
    	return false;
    }

    var phoneNum= document.myForm.phone.value;
    var phoneLen= phoneNum.length;

    if( phoneLen > 10 ||  phoneLen < 10)
    {
    	alert( "Enter 10 digit Phone number only!" );
    	document.myForm.phone.focus();
    	return false;
    }

    if( isNaN(document.myForm.office.value))
    {
    	alert( "Office number can be Numeric Only!" );
    	document.myForm.office.focus();
    	return false;
    }

    var emailAddress=document.myForm.email.value;
    var aposition= emailAddress.indexOf("@");
    var dotposition= emailAddress.lastIndexOf(".");
    if (aposition<1 || dotposition<aposition+2 || dotposition+2>=emailAddress.length)
    {
        alert( "Enter valid e-mail address" );
        document.myForm.email.focus();
        return false;
    }


    var pass= document.myForm.password.value;
    var passLength= pass.length;

    if( pass == "")
    {
    	alert( "Enter the password!" );
    	document.myForm.password.focus();
    	return false;
    }

    if( pass.includes("!") || pass.includes("@") || pass.includes("#") || pass.includes("$") || pass.includes("%") || pass.includes("^") || pass.includes("&") || pass.includes("*"))
    {
    	alert( "Password should not contain Special characters" );
    	document.myForm.password.focus();
    	return false;
    }


    if( passLength < 8 || passLength > 12)
    {
    	alert( "Password can be in range of 8-12 characters only!" );
    	document.myForm.password.focus();
    	return false;
    }

    var samepass= document.myForm.confirmpassword.value;

    if( samepass == "")
    {
    	alert( "Re-Enter the password!" );
    	document.myForm.confirmpassword.focus();
    	return false;
    }

    if( samepass != pass)
    {
    	alert( "Password is Not Matching!" );
    	document.myForm.confirmpassword.focus();
    	return false;
    }
}

function resetform() {
	alert( "Form has been Reset" );
	document.getElementById("myForm").reset();
}