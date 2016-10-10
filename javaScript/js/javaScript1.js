
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
    var dot=/\.{2}/g;
    var dot1=/\@{2}/g;
    if (aposition<1 || dotposition<aposition+2 || dotposition+2>=emailAddress.length || dot.test(emailAddress) || dot1.test(emailAddress) || ((emailAddress.match(/\@/g).length)> 1))
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

    var specialChar= /^[0-9a-zA-Z]+$/;

    if( !pass.match(specialChar))
    {
        alert( "Password should contain alphaNumeric characters only!" );
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

    var month1=document.myForm.month.value;
    var day1=document.myForm.day.value;
    var year1=document.myForm.year.value;

    if( month1 == "Month" || day1 == "Day" || year1 == "Year")
    {
        alert ( "Please Enter Valid Birth Date" );
        return false;
    }

    if( document.myForm.age.value == "" )
    {
        alert ( "Click on Age" );
        return false;
    }

    if ( ( myForm.gender[0].checked == false ) && ( myForm.gender[1].checked == false ) )
    {
        alert ( "Please choose your Gender" );
        return false;
    }

    if ( ( myForm.activity[0].checked == false ) && ( myForm.activity[1].checked == false ) && ( myForm.activity[2].checked == false ) )
    {
        alert ( "Please select atleast one Interest" );
        return false;
    }

    if( document.myForm.textArea.value == "" )
    {
        alert( "Please write something About yourself!" );
        document.myForm.textArea.focus();
        return false;
    }

    else    
    {
        document.myForm.firstname.focus();
        document.myForm.reset();
        alert( "Successfully Submitted the Form" );
        return false;

    }

}

function calculateAge()
    {
        var month1=document.myForm.month.value;
        var day1=document.myForm.day.value;
        var year1=document.myForm.year.value;
        var date1= new Date();
        var dateYear= date1.getFullYear();
        var dateMonth= date1.getMonth();
        var dateToday= date1.getDate(); 
        var age1 = dateYear - year1;
        var age2 = 0;
        if (dateMonth<month1)
        {
            age1--;
        }
        if ((month1 == dateMonth) && (dateToday < day1))
        {
            age1--;
        }
        if ( dateMonth>=month1)
        {
            age2=(dateMonth-month1-1)/12;
        }
        else
        {
            age2=(12-(month1-dateMonth-1))/12;
        }
        age1=age1+age2;
        age1 = age1.toFixed(1);
        document.myForm.age.value=age1;
    }

function resetform() 
    {
        document.myForm.firstname.focus();
        document.myForm.reset();
        alert( "Form has been Reset" );
        return false;
    }