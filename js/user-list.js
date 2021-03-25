// const url = "http://localhost:8080/api/users/";

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

let allUsers = [];

$().ready(() => {

    userList()
        .done((users) => {
            console.log(users);
            allUsers = users;
            display(allUsers);
        })
        .fail()

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


    // console.log("Before call to getJSON");
    // $.getJSON(url)
    // .done((users) => {
    //     console.log(users);
    //     console.log("After call completed to getJSON");
    // })
    // .fail((err) => {
    //     console.error(err);
    // })
    // console.log("After call to getJSON");

})

const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        tr.append(tdId);
        tr.append($(`<td>${user.username}</td>`));
        let tdName = $(`<td>${user.firstName} ${user.lastName}</td>`);
        tr.append(tdName);
        let tdReviewer = $(`<td>${user.reviewer ? "Yes": "No"}</td>`);
        tr.append(tdReviewer);
        let tdAdmin = $(`<td>${user.admin ? "Yes": "No"}</td>`);
        tr.append(tdAdmin);
        tbody.append(tr);
    }
}