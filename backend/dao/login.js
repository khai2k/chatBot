module.exports.signIn = ({ user, password }) => {
    if (user == 'admin' && password == "admin") {
        console.log("trueeeeeee")
        return true;

    }
    return false;
}