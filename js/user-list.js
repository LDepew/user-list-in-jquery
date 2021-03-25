const url = "http://localhost:8080/api/users/";

$().ready(() => {

    console.log("jQuery is ready!")

    $.getJSON(url)
        .done((users) => {
            console.log(users);
        })
        .fail((err) => {
            console.error(err);
        })

});