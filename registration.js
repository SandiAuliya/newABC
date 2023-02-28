var users = localStorage.getItem("users"); 
$(function () {

    });

    // Registration - Collect it in an array 
    // Store the array in local storage as json object 
function formValidation() {
    // Get the HTML elements
    var userId = GetUserID();
    var fullname = document.getElementById("fullname").value;
    if (!fullname) {
        alert('Please enter full name!')
        return false;
    }
    var username = document.getElementById("username").value;
    if (!username) {
        alert('Please enter user name!')
        return false;
    }
    var address = document.getElementById("address").value;
    if (!address) {
        alert('Please enter address!')
        return false;
    }
    var city = document.getElementById("city").value;
    if (!city) {
        alert('Please enter city!')
        return false;
    }
    var email = document.getElementById("email").value;
    if (!email) {
        alert('Please enter email!')
        return false;
    }
    var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailfilter.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }
    var phone = document.getElementById("phone").value;
    if (!phone) {
        alert('Please enter phone!')
        return false;
    }
    var password = document.getElementById("password").value;
    if (!password) {
        alert('Please enter password!')
        return false;
    }
    var confirmpassword = document.getElementById("confirmpassword").value;
    if (!confirmpassword) {
        alert('Please enter confirm password!')
        return false;
    }
    var date = document.getElementById("date").value;
    if (!date) {
        alert('Please enter date!')
        return false;
    }
    

    var userObj = {
        "id": userId,
        "fullname": fullname,
        "username": username,
        "address": address,
        "city": city,
        "email": email,
        "phone": phone,
        "password": password,
        "confirmpassword": confirmpassword,
        "date": date
    };
    addUserDataToLocalStorage(userObj);
    document.getElementById('fullname').value = "";
    document.getElementById('username').value = "";
    document.getElementById('address').value = "";
    document.getElementById('city').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('password').value = "";
    document.getElementById('confirmpassword').value = "";
    document.getElementById('date').value = "";

    return true;
}

function GetUserID() {
    const ID = Date.now();
    return ID;
}

function addUserDataToLocalStorage(userObj) {

    //already has data in localstorage then update it other create new one
    var users = JSON.parse(localStorage.getItem('userData'));
    if (users != null) {
        users.push(userObj);
       
        localStorage.setItem('userData', JSON.stringify(users));
    }
    else {
        var userData = new Array();
        userData.push(userObj);
        localStorage.setItem('userData', JSON.stringify(userData));

    }
}