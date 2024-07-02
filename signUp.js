function saveData() {
    let first_name, last_name, email, password, phone_number, address;

    first_name = document.getElementById("first_name").value;
    last_name = document.getElementById("last_name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    phone_number = document.getElementById("phone_number").value;
    address = document.getElementById("address").value;

    let user_records = [];
    user_records = JSON.parse(localStorage.getItem("users")) || []

    if (user_records.some((v) => { return v.email == email })) {
        alert(email + "is already register.")
    }
    else {
        user_records.push({
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "password": password,
            "phone_number": phone_number,
            "address": address
        })

        localStorage.setItem("users", JSON.stringify(user_records))
        alert(email + " Thanks for Registration. \n Try to Login Now")
    }


}

function validateForm() {

    var first_name = document.myForm.first_name.value;
    var last_name = document.myForm.last_name.value;
    var email = document.myForm.email.value;
    var password = document.myForm.password.value;
    var phone_number = document.myForm.phone_number.value;
    var date = document.myForm.date.value;
    var address = document.myForm.address.value;

    if (first_name === "" && last_name === "" && email === "" && password === "" && phone_number === "" && address === "") {
        if (first_name == null || first_name == "") {
            document.getElementById("e1").innerHTML = "First Name is Required*";

        }
        if (last_name == null || last_name == "") {
            document.getElementById("e2").innerHTML = "Last Name is Required*";

        }
        if (email == null || email == "") {
            document.getElementById("e3").innerHTML = "Email is Required*";

        }
        if (password == null || password == "") {
            document.getElementById("e4").innerHTML = "Password is Required*";

        }
        if (phone_number == null || phone_number == "") {
            document.getElementById("e5").innerHTML = "Phone Number is Required*";

        }
        if (date == null || date == "") {
            document.getElementById("e6").innerHTML = "Birth Date is Required*";

        }
        if (address == null || address == "") {
            document.getElementById("e7").innerHTML = "Address is Required*";

        }
        if (password.length < 6) {
            document.getElementById("e4").innerHTML = "Password length must be atleast 8 characters*";

        }
        if (password.length > 15) {
            document.getElementById("e4").innerHTML = "Password length must not exceed 15 characters*";
        }
        return false;
    } else {
        saveData()
    }

}

