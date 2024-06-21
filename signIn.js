let name = localStorage.getItem("first_name") ? localStorage.getItem("first_name") : ""
console.log(name);

if (name != ""){
    alert("Please visit the Profile")
    window.location.href = "/WebSite/profile.html";
}

function saveData(){

    let email,password;

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let user_records = [];
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {return v.email == email && v.password == password})) {

        let current_user = user_records.find((v) =>  v.email === email)

        let loggedInUser = {
            name: current_user?.first_name,
            email : current_user?.email
        }
        
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        window.location.href = "/WebSite/profile.html";
       
        alert("Welcome");

    } else{
        alert("Password for" + email + "is wrong, Please try Again");
    }
}