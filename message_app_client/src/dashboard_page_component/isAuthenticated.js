class Auth {  //Global authentication variable
    
    //Create global auth variable
    constructor() {
      this.authenticated = false;
      console.log(this.authenticated);
    }
  
    //function to return valid authentication
    login() {
      this.authenticated = true;
      
    }
  
    //Function to return unauthorized authentication
    logout() {
      this.authenticated = false;
      
    }
  
    //Returns authentication value
    /*
    isAuthenticated() {
      console.log(this.authenticated);
      return this.authenticated;
    }*/
  }
  
  export default new Auth();
  