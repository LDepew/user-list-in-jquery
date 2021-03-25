const url = "http://localhost:8080/api/users/";

const userList = () => {
    return $.getJSON(url);
}