class User {
    static all = [];

    constructor({id, username}) {
        this.id = id;
        this.username = username;
        User.all.push(this);
    }
    static getAll() {
        return this.all
    }

    static findByUsername(username) {
        return this.all.find(user => user.username=== username) 
    }
    static findOrCreateBy(userObj) {
        return this.findByUsername(userObj.username) || new User(userObj)
    }
    static handleUserFormShow() {
        const userForm =
        `<form id="user-submit-form">
            <label for="username">UserName</label>
            <input type="text" id="username" minlength="4" maxlength="15"></input>
            <label for="submit"><input type="submit" value="submit"></label>
        </form>`
        userFormDiv.innerHTML = userForm
        document.getElementById('user-submit-form').addEventListener('submit', UserApi.submitUsername)
    }
    static displayUsername(username){
        const welcomeGreeting = 
        `<h3> Welcome ${username}!</h3>
        <button id="reset-user-btn">New/Change User</button>
        `
        userFormDiv.innerHTML = welcomeGreeting

        const resetUserBtn = document.getElementById('reset-user-btn')
        resetUserBtn.addEventListener('click', User.handleResetUserBtn)
    }
    static handleResetUserBtn() {
        User.handleUserFormShow();
        userMadeConversionList.innerHTML = ""
    }
    getUserConversions() {
        return Conversion.all.filter(convert => this.id === convert.user_id)
    }
}
