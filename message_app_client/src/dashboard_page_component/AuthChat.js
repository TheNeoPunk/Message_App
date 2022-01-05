class AuthChat {

    constructor(){

        this.authorize_Chat = false;
        const exist_chat_messages = null;

    }

    authorize(){

        this.authorize_Chat = true;

    }

    unAuthorize(){

        this.authorize_Chat = false;

    }

}

export default new AuthChat();