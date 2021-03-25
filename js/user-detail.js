let singleUser = null;

$().ready(() => {

        userDetail()
        .done((user) => {
            singleUser = user;
            display(singleUser);
        })
})