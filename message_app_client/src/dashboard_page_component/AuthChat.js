class AuthChat {

    constructor(){

        this.authorize_Chat = false;
        this.exist_chat_messages = [];

        console.log(this.exist_chat_messages);

    }

    authorize(){

        this.authorize_Chat = true;

    }

    unAuthorize(){

        this.authorize_Chat = false;

    }

}

export default new AuthChat();