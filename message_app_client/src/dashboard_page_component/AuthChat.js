class AuthChat {

    constructor(){

        this.authorize_Chat = false;
        
        //chats from both parties
        this.exist_chat_messages_from_sender = [];
        this.exist_chat_messages_from_receiver = [];
        
        //Join total messages together for rendering sorting
        this.exist_total_messages = [];

        this.updated_chat = [];
        this.receiver_name = null;

    }

    authorize(){

        this.authorize_Chat = true;

    }

    unAuthorize(){

        this.authorize_Chat = false;

    }

}

export default new AuthChat();