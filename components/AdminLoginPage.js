import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Redirect
} from "react-router-dom"; // importeer react libs
  
class AdminLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectToUsersListing: false // We zullen deze variabele gebruiken voor het omleiden
    };
  }

  // wanneer gebruiker leeg is dan weer weergeven login formulier
  render() {
    if (this.state.username === "" && 
        this.state.password === "" ) { 
      return (
        <div className="admin-login-wrapper">
          <h1>Admin Login Pagina</h1>
          
          {/* Gebruikersnaam & Wachtwoord Velden */}
          <form className="admin-login-form" onSubmit={this.handleSubmit}>
            <label for="username">Gebruikersnaam:</label>
            <input type="text" name="username" placeholder="Gebruikersnaam..."
              value={this.state.username} 
              onChange={this.handleInputChange} />

            <label for="password">Wachtwoord:</label>
            <input type="password" name="password"
              value={this.state.password} 
              onChange={this.handleInputChange} />
            
            <button type="submit">Inloggen</button>
          </form> 
        </div>
      );
    } 
    
    // Als geldige gebruiker is ingevoerd - Leid naar users listing pagina
    else if (this.state.redirectToUsersListing === true) {
      return <Redirect to="/users/list-all-users" />
    }
  }
  
  // Form data aanpassen in state
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  
  // Submit evenement gedrag
  handleSubmit = (event) => {
    event.preventDefault(); // voorkom dat pagina herladen wordt 
    
    // check of inloggegevens correct zijn
    if (this.isValidCredentials()) {
      this.setState({
        redirectToUsersListing: true // Verander waarde van this.state.redirectToUsersListing
      })
    }
  }
  
  /* Hierin moet de business logica gezet worden die de user intake kijkt
   * of de LOGIN inhoud correct is. Dit is ter bescherming van hackers om 
   * in te loggen op uw backend website.
   */
  isValidCredentials = () => {
    // return true or false
  }
}

export default AdminLoginPage;
