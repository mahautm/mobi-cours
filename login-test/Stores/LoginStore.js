import Store from "./Store";
const DATA = [
    {
      id: 1,
      mail: "mmahaut@ensc.fr",
      pwd: "1"
    },
    {
      id: 2,
      mail: "bda@ensc.fr",
      pwd: "PulpaColada"
    },
    {
      id: 3,
      mail: "journal@ensc.fr",
      pwd: "MarsForever"
    }
  ];
// Centralizes app state (todos array)
// Mutates state
// Accepts observers and notify them when states changes
export default class LoginStore extends Store {
  
  
    constructor() {
    // Call to parent constructor is needed to init observation
    super();
    this.state = { mail: "*", pwd: "*", logged: false };
  }

  updateMail = text => {
    // change the tested mail
    this.state = {mail:text, pwd:this.state.pwd, logged:this.state.logged};
    this.notifyObservers();
  };

  updatePwd = text => {
    // change the tested pwd
    this.state = {mail:this.state.mail, pwd:text, logged:this.state.logged};
    this.notifyObservers();
  };

  testMailPwd = () => {
    if (DATA.map(x => x.mail).includes(this.state.mail)) {
        if (DATA.map(x => x.pwd).includes(this.state.pwd)) {
        alert("Well done, you are logged in !");
        this.state = {mail:this.state.mail, pwd:this.state.pwd, logged:true};
    } else {
        alert("Password is invalid !");
        }
    } else {
    alert("Uknown username : " + this.state.mail);
  }
    this.notifyObservers();
  };


  // Used in parent class to notify observers
  getState() {
    const state = this.state;
    return { state };
  }
}