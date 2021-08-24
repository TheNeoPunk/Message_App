class AuthChat {

    constructor(){

        this.authorize_Chat = false;

    }

    authorize(){

        this.authorize_Chat = true;

    }

    unAuthorize(){

        this.authorize_Chat = true;

    }

}

export default new AuthChat();