<script>
      import { link } from "svelte-spa-router";
      import {getAPI, setToken} from "../utils/api";
      

        // Configuration de la requête
        

          let firstName = "leyti";
          let email = "leyti@gmail.com";
          let password = "**********";
          let avatar = "https://example.com/leyti.jpg";
          
          let newFirstName = "";
          let newEmail = "";
          let newPassword = "";
          let newAvatar = "";
      
          function handleFirstNameChange(event) {
            newFirstName = event.target.value;
          }
          function handleEmailChange(event) {
            newEmail = event.target.value;
          }
          function handlePasswordChange(event) {
            newPassword = event.target.value;
          }
          function handleAvatarChange(event) {
            newAvatar = event.target.value;
          }
          function handleEditClick() {
            getAPI().patch("/users/me", {
          "first_Name": newFirstName, 
          "email":newEmail ,
          "password": newPassword,
          "avatar": newAvatar,
          "id":"",

         } )
         .then (function(response){
          console.log(response);
         })
         .catch (function(response){
          
        })
            }

</script>
<div class="main-container">

  <h1>Gestion de compte</h1>
  
  <div class="edit-container">
    <h2>Profil d'utilisateur</h2>
    <div class="edit-elements">
      <p>Photo de profil</p>
      <p>
        <input type="text" value={newAvatar} on:input={handleAvatarChange} />
      </p>
      <p>Pseudo</p>
      <p>
        <input type="text" value={newFirstName} on:input={handleFirstNameChange} />
      </p>
      <p>Email</p>
      <p>
        <input type="text" value={newEmail} on:input={handleEmailChange} />
      </p>
      <p>Mot de passe</p>
      <p>
        <input type="password" value={newPassword} on:input={handlePasswordChange} />
      </p>
    </div>
  
    <div class="edit-button">
      <button id="valider" on:click={handleEditClick}>EDIT</button>
    </div>
  </div>
</div>

<style>
  
  h1 {
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
    padding: 25px;
    width: auto;
  } 
  
  h2 {
    text-align: center;
    font-size: 25px;
    margin-top: 0px;
    width: auto;
  } 

  .edit-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 15px;
    width: 50%;
    height: auto;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  .edit-elements {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10px;
    margin: 10px;
    width: 100%;
  }
  
  .edit-elements p {
    text-align: left;

  }
  
  .edit-elements input {
    text-align: right;
    width: 50%;
    height: 50%;
    border-radius: 10px;
    margin-left: 40%;
  }

  .edit-button {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    
  }
  @media (max-width:425px){
    .main-container{
        font-size: 1.8rem;
    }
  }
</style>
