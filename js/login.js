function login(form){
    /**
     * Sends user credentials to the backend for login
     * @param {form} of the html for user input
     * @returns {null}
     */

    const user = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // error check for empty fields, can also add other password requirements
    if (username == '' || password == ''){
        console.log("null field")
    }else{
        // valid pass and user, pass to backend and recieve a token
        console.log(user);
        console.log(password);
    }



}