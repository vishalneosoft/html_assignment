$(document).ready(function(){
	$("#enterFirstName").hide();
	$("#enterLastName").hide();
	$("#enterPhoneNo").hide();
	$("#enterOfficeNo").hide();
	$("#enterEmail").hide();
	$("#enterPassword").hide();
	$("#enterSamePassword").hide();
	$("#enterGender").hide();
	$("#enterInterest").hide();
	$("#enterTextArea").hide();
	$("#enterDob").hide();

	var check_firstName=false;
	var check_lastName=false;
	var check_phoneNo=false;
	var check_OfficeNo=false;
	var check_email=false;
	var check_password=false;
	var check_samepassword=false;
	var check_gender=false;
	var check_interest=false;
	var check_textArea=false;
	var check_dob=false;



	$("#firstName").focusout(function(){
		checkFirstName();
	});

	$("#lastName").focusout(function(){
		checkLastName();
	});

	$("#phone").focusout(function(){
		checkPhoneNo();
	});

	$("#office").focusout(function(){
		checkOfficeNo();
	});

	$("#email").focusout(function(){
		checkEmail();
	});

	$("#password").focusout(function(){
		checkPassword();
	});

	$("#samePassword").focusout(function(){
		checkSamePassword();
	});

	$(".radio").on("click",function(){
		checkGender();
	});

	$(".checkbox").on("click",function(){
		checkInterest();
	});	

	$("#textArea").focusout(function(){
		checkTextArea();
	});

	$("#selectYear,#selectMonth,#selectDate").on("change",function(){
		checkDob();
	});

	function checkDob() {
		var yearBirth = $("#selectYear").val();
		var monthBirth = $("#selectMonth").val();
		var dayBirth = $("#selectDate").val(); 
		if( yearBirth == "Year" || monthBirth == "Month" || dayBirth == "Day")
		{
			$("#enterDob").text("*Enter Valid Birth Date");
			$("#enterDob").show();
			check_dob=true;
			$("#age").val('');
		}
		else
		{
			$("#enterDob").hide();
			var date1= new Date();
      var dateYear= date1.getFullYear();
      var dateMonth= date1.getMonth();
      var dateToday= date1.getDate(); 
      var age1 = dateYear - yearBirth;
      var age2 = 0;
        if (dateMonth<monthBirth)
        {
            age1--;
        }
        if ((monthBirth == dateMonth) && (dateToday < dayBirth))
        {
            age1--;
        }
        if ( dateMonth>=monthBirth)
        {
            age2=(dateMonth-monthBirth-1)/12;
        }
        else
        {
            age2=(12-(monthBirth-dateMonth-1))/12;
        }
        age1=age1+age2;
        age1 = age1.toFixed(1);
        $('#age').val(age1);
		}
	};


	function checkFirstName() {
		var firstNameLen = $("#firstName").val().length;
		if(firstNameLen<3)
		{
			$("#enterFirstName").text("*Enter First Name");
			$("#enterFirstName").show();
			check_firstName=true;
		}
		else
		{
			$("#enterFirstName").hide();
		}
	};

	function checkLastName() {
		var lastNameLen = $("#lastName").val().length;
		if(lastNameLen<3)
		{
			$("#enterLastName").text("*Enter Last Name");
			$("#enterLastName").show();
			check_lastName=true;
		}
		else
		{
			$("#enterLastName").hide();
		}
	};

	function checkPhoneNo() {
		var phoneNumeric = /^[0-9]+$/;
		var phoneLen = $("#phone").val().length;
		if( !($("#phone").val().match(phoneNumeric)) || phoneLen != 10)
		{
			$("#enterPhoneNo").text("*Enter Correct Phone No");
			$("#enterPhoneNo").show();
			check_phoneNo=true;
		}
		else
		{
			$("#enterPhoneNo").hide();
		}
	};

	function checkOfficeNo() {
		var officeNumeric = /^[0-9]+$/;
		var officeLen = $("#office").val().length;

		if(officeLen >= 1)
		{
			if(!($("#office").val().match(officeNumeric)))
				{
					$("#enterOfficeNo").text("*Enter Correct Office No");
					$("#enterOfficeNo").show();
					check_OfficeNo=true;
				}
			else
				{
					$("#enterOfficeNo").hide();
				}
		}
	};

	function checkEmail(){
		var emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;	
		var emailValue = $("#email").val();
		var emailLen = $("#email").val().length;
		if( emailLen < 1 || emailExpression.test(emailValue) == false)
			{
				$("#enterEmail").text("*Enter Correct Email Address");
				$("#enterEmail").show();
				check_email=true;
			}
		else
			{
				$("#enterEmail").hide();
			}
		
	};

	function checkPassword(){
		var passwordExpression = /^[0-9a-zA-Z]+$/;
		var passwordLength = $("#password").val().length;
		if( passwordLength > 0 )
		{
			if( $("#password").val().match(passwordExpression) )
			{
				if( passwordLength < 8 || passwordLength > 12)
				{
					$("#enterPassword").html("<pre>*Password can be in range of 8-12 character</pre>");
					$("#enterPassword").show();
					check_password=true;
				}
				else
				{
					$("#enterPassword").hide();
				}
			} 
			else
			{
				$("#enterPassword").html("<pre>*Password Should be AlphaNumeric</pre>");
				$("#enterPassword").show();
				check_password=true;
			}
		}
		else
		{
			$("#enterPassword").text("*Enter the Password");
			$("#enterPassword").show();
			check_password=true;
		}
	};

	function checkSamePassword(){
		var samePasswordExpression = $("#samePassword").val();
		if( samePasswordExpression != $("#password").val() )
		{
			$("#enterSamePassword").html("<pre>*Enter Same Password as Above</pre>");
			$("#enterSamePassword").show();
			check_samepassword=true;
		}
		else
		{
			$("#enterSamePassword").hide();
		}
	};

	function checkGender(){
		if (!$('input[name=gender]:checked').val() )
		{
			$("#enterGender").text("*Select Gender");
			$("#enterGender").show();
			check_gender=true;
		}
		else
		{
			$("#enterGender").hide();
		}
	};

	function checkInterest(){
		if (!$('input[name=activity]:checked').val())
		{
			$("#enterInterest").text("*Select any one Interest");
			$("#enterInterest").show();
			check_interest=true;
		}
		else
		{
			$("#enterInterest").hide();
		}
	};

	function checkTextArea(){
		var textAreaLen = $("#textArea").val().length;
		if(textAreaLen<3)
		{
			$("#enterTextArea").text("*Write Something About Yourself");
			$("#enterTextArea").show();
			check_textArea=true;
		}
		else
		{
			$("#enterTextArea").hide();
		}
	};

	$("#registrationForm").submit(function(){
		check_firstName=false;
		check_lastName=false;
		check_phoneNo=false;
		check_OfficeNo=false;
		check_email=false;
		check_password=false;
		check_samepassword=false;
		check_gender=false;
		check_interest=false;
		check_textArea=false;
		check_dob=false;

		checkFirstName();
		checkLastName();
		checkPhoneNo();
		checkOfficeNo();
		checkEmail();
		checkPassword();
		checkSamePassword();
		checkGender();
		checkInterest();
		checkTextArea();
		checkDob();

		if( check_firstName == false && check_lastName == false && check_phoneNo == false && check_OfficeNo == false && check_email == false && check_password == false && check_samepassword == false && check_gender == false && check_interest == false && check_textArea == false && check_dob == false)
		{
			alert("Form Submitted Successfully");
			return true;
		}
		else
		{
			return false;
		}
	});

});