const url = "http://localhost:8080/api/users/";

let newuser = {
    id: 0, 
    username: "us", 
    password: "us", 
    firstName: "Normal", 
    lastName: "User",
    phoneNumber: "555-555-1212",
    email: "info@user.com",
    isReviewer: false,
    isAdmin: false
}

$().ready(() => {

    // $.ajax({
    //     method: "POST",
    //     url: url,
    //     data: JSON.stringify(newuser),
    //     contentType: 'application/json'
    // })
    // .done((res) => {
    //     console.log(res);
    // })
    // .fail((err) => {
    //     console.error(err);
    // })


    console.log("Before call to getJSON");
    $.getJSON(url)
    .done((users) => {
        console.log(users);
        console.log("After call completed to getJSON");
    })
    .fail((err) => {
        console.error(err);
    })
    console.log("After call to getJSON");

});