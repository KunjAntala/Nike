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
    }else{
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