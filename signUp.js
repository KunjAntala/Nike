function validateForm(){

    var first_name = document.myform.first_name.value;
    var last_name = document.myform.last_name.value;
    var email = document.myform.email.value;
    var password = document.myform.password.value;
    var phone_number = document.myform.phone_number.value;
    var address = document.myform.address.value;

    if (first_name == null || first_name == ""){ 
        document.getElementById("error").innerHTML = "First Name is Required*";
        return false;
    } 
    else if (last_name == null || last_name == "") {
        document.getElementById("errorr").innerHTML = "Last Name is Required*";
        return false;
    }
    else if (email == null || email == "") {
        document.getElementById("errorrr").innerHTML = "Email is Required*";
        return false;
    }
    else if (password == null || password == "") {
        document.getElementById("errorrrr").innerHTML = "Password is Required*";
        return false;
    }
    else if (phone_number == null || phone_number == "") {
        document.getElementById("errorrrrr").innerHTML = "Phone Number is Required*";
        return false;
    }
    else if (address == null || address == "") {
        document.getElementById("errorrrrrr").innerHTML = "Address is Required*";
        return false;
    }
    else if (pass.length < 6) {
        document.getElementById("errorrrr").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }
    if (pass.length > 15) {
        document.getElementById("errorrrr").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    } 
    else {
        return true;
    }
    
}

function saveData() {
    let first_name,last_name,email,password,phone_number,address;

    first_name = document.getElementById("first_name").value;
    last_name = document.getElementById("last_name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    phone_number = document.getElementById("phone_number").value;
    address = document.getElementById("address").value;

    let user_records = [];
    user_records = JSON.parse(localStorage.getItem("users")) || []

    if (user_records.some((v) => {return v.email == email})){
        alert(email + "is already register.")
    }
    else{
        user_records.push({
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "password": password,
            "phone_number": phone_number,
            "address": address
        })

        localStorage.setItem("users",JSON.stringify(user_records))
        alert(email + " Thanks for Registration. \n Try to Login Now")
    }

    
}