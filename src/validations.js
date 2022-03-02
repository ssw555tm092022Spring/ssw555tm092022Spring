
    function validateFirstName(first_name){

        if (first_name.value == "") {
            window.alert("Please enter your first name.");
            return false;
            }
    }

    function validateLastName(last_name){

        if (last_name.value == "") {
            window.alert("Please enter your last name.");
            return false;
            }
    }

    function validateEmail(inputText) {
        
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (inputText.value == "") {
            window.alert("Please enter a valid email address.");
            email.focus();
            return false;
            }
        
        else if(inputText.value.match(mailformat)) {
            alert("Valid email address!");
            document.form1.text1.focus();
            return true;
            }
        else {
            alert("You have entered an invalid email address!");
            document.form1.text1.focus();
            return false;
            }
    }

    function validatePassword() {

        var password= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

         
        if (password.value == "") {
            window.alert("Please enter your password");
            password.focus();
            return false;
            }

        else if(inputText.value.match(password)) { 
        return true;
        }

        else { 
        alert('Please match the requested format. Must contain at least one number and one uppercase and lowercase letter, and one special character and at least 8 or more characters')
        return false;
        }
    }
