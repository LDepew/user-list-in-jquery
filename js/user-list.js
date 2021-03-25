const url = "http://localhost:8080/api/users/";

let newuser = {
    id: 0, 
    username: "bus", 
    password: "bus", 
    firstName: "Nbormal", 
    lastName: "Ubser",
    phoneNumber: "555-555-1212",
    email: "binfo@user.com",
    isReviewer: false,
    isAdmin: false
}

$().ready(() => {

    $.ajax({
        method: "POST",
        url: url,
        data: JSON.stringify(newuser),
        contentType: 'application/json'
    })
    .done((res) => {
        console.log(res);
    })
    .fail((err) => {
        console.error(err);
    })



    // $.getJSON(url)
    //     .done((users) => {
    //         console.log(users);
    //     })
    //     .fail((err) => {
    //         console.error(err);
    //     })

});