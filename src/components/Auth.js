class Auth {
    constructor(){
        this.authenticaded = false;
    }

    login(cb){
        this.authenticaded = true;
        cb(); //localStorage, cookies, etc
    }

    logout(cb){
        this.authenticaded = false;
        cb();
    }

    isAuthenticaded(){
        return this.authenticaded;
    }
}

export default new Auth();