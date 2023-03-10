<script>

  import { link } from "svelte-spa-router";
  import { getAPI, getToken } from "../utils/api";
  import Swal from "sweetalert2";
  // Configuration de la requête
  let userInfos = {};
  let newFirstName = "";
  let newEmail = "";
  let newPassword = "";
  let newAvatar = "";
  let message = "";
  let showMessage = null;


  // Récupération des informations de l'utilisateur actuel
  getAPI()
    .get("/users/me")
    .then(function (response) {
      userInfos = response.data.data;
      console.log(userInfos);
      newFirstName = userInfos.first_name;
      newEmail = userInfos.email;
      //  newAvatar = "";
    })
    .catch(function (error) {
      console.log(error);
    });
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
    let data = {};
    if (newFirstName != "") {
      data.first_name = newFirstName;
    }
    if (newEmail != "") {
      data.email = newEmail;
    }
    if (newPassword != "") {
      data.password = newPassword;
    }
    if (newAvatar != "") {
      data.avatar = newAvatar;
    }
    getAPI()
      .patch("/users/me", data)
      //Ajout modale pour confirmer la modification
      Swal.fire({
        icon:'success',
        title:'Votre modification a été enregistrée avec succès!',
        showConfirmButton:false,
        timer:1700
        
      }) 
      .then(function (response) {
        showMessage = true;
        /*showMessage = true;
        message = "Modification enregistrée avec succès";
        setTimeout(() => {
          showMessage = false;
        }, 2000);
        }, 2000); */
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
                    }
  function handleDeleteUserClick() {
  const confirmDelete = confirm("Voulez-vous vraiment supprimer votre compte ? Cette action est irréversible.");
  if (confirmDelete) {
    
    deleteUser();
  }
}
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};
function deleteUser() {
  
  const token = parseJwt(getToken())
  console.log(token);
  //Demander à l'utilisateur de confirmer s'il veut supprimer son histoire
  if (confirm(`Êtes-vous sûr de vouloir supprimer votre compte?"${newFirstName}?"`)){
        // Envoyer une requete DELETE à l'API pour supprimer l'histoire de la BDD
  getAPI().delete("/users/"+ token.id)
  //ajout d'une modale pour confirmer la suppression de compte
  Swal.fire({
        icon:'warning',
        title:'Votre compte vient d\'être supprimée',
        showConfirmButton:false,
        timer:1700
        
      }) 
  
  .then(data => {
   
    console.log('Utilisateur supprimé : ', data);
    // Déconnecter l'utilisateur
    localStorage.removeItem("token");
    
    // Rediriger vers la page de connexion
    window.location.href = "/#/connexion";
    location.reload();
  })
  .catch(error => {
    console.log('Erreur : ', error);
  });
}
}
  
</script>

<!--New settings page-->
<body>
  

<main class="settings">
  <form>
    <h1><i class="fa fa-cogs"></i> Settings</h1>
    <div class="settings-options">
      <label for="profile"><i class="fa fa-user"></i> Mon profil</label>
      <label for="preferences"><i class="fa fa-cog"></i> Préférences</label>
      <label for="account"><i class="fa fa-wrench"></i> Mon compte</label>
    </div>

    <input type="radio" class="helper-input" name="settings-page" id="profile" checked="checked">
    <div class="panel profile">
      <h2><i class="fa fa-user"></i> Mon profil</h2>

      <input type="text" value={newFirstName} on:input={handleFirstNameChange}/>
      <label for="name" class="text-label">Pseudo</label>

      <hr>

      <input type="text" id="location"  placeholder="Email" value={newEmail} on:input={handleEmailChange} />
      <label for="location" class="text-label">Email</label>

      <hr>
      <input type="password" id="location" value={newPassword} on:input={handlePasswordChange}/>   
      <label for="password" class="text-label">Mot de passe</label>

      <hr>

      <label for="bio">Bio</label>
      <textarea name="bio" id="bio" placeholder="A propos de moi"></textarea>
    </div>

    <input type="radio" class="helper-input" name="settings-page" id="preferences">
    <div class="panel preferences">
      <h2><i class="fa fa-cog"></i> Préférences</h2>
      <label>Email Alerts</label>
      <p>Vous avez plusieurs options</p>

      <input type="checkbox" class="helper-input" name="email-input" id="email-input">
      <label for="email-input" class="select-toggle"><span class="screen-reader-text">Montrer Email Options</span></label>
      <div class="select">
        <input type="checkbox" name="email" id="daily"> <label for="daily">Journalière</label>
        <input type="checkbox" name="email" id="weekly" checked="checked"> <label for="weekly">Hebdomadaire</label>
        <input type="checkbox" name="email" id="monthly"> <label for="monthly">Mensuel</label>
        <input type="checkbox" name="email" id="yearly"> <label for="yearly">Annuel</label>
      </div>
    </div>

    <input type="radio" class="helper-input" name="settings-page" id="account">
    <div class="panel account">
      <h2><i class="fa fa-wrench"></i> Mon compte</h2>
      <button type="submit" class="material-delete" id="supprimer" on:click={deleteUser}><i class="fa fa-cloud"></i>Supprimer mon compte</button>
    </div>
    <button type="submit" class="material-button" id="valider" on:click={handleEditClick}>
      <i class="fa fa-cloud"></i>
      Valider
    </button>
    {#if showMessage}
    <div class="message">{message}</div>
  {/if}
    
  </form>
</main>
</body>
<!--Fin nex settings page-->



<!--<body>

  <img alt="Andrew Jones" src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle img-responsive mt-2" width="128" height="128">

  <div class="main-container">
    <h1>Gestion de compte</h1>

    <div class="edit-container">
      <h2>Profil d'utilisateur</h2>

      <div class="edit-elements">
        <p>Photo de profil</p>
        <p>
          <input type="text" id="avatar" value={newAvatar} on:input={handleAvatarChange}/>
        </p>
        <p>Pseudo:</p>

        <p>
          <input type="text" value={newFirstName} on:input={handleFirstNameChange}/>
        </p>
        <p>Email:</p>
        <p>
          <input type="text" value={newEmail} on:input={handleEmailChange} />
        </p>
        <p>Mot de passe:</p>
        <p>
          <input type="password" value={newPassword} on:input={handlePasswordChange}/>
        </p>
      </div>
      <div class="delete-user-container">
        <button id="valider" on:click={handleEditClick}>Edit</button>
        {#if showMessage}
          <div class="message">{message}</div>
        {/if}

        <div class="delete-user-button">
          <button on:click={deleteUser}>Supprimer mon compte</button>
        </div>
      </div>
    </div>
  </div>
</body>
-->
<style>

  /*new settings style*/



  main {
  padding: 0.5rem;
  margin: 1.5rem auto;
  width: 400px;
  background: #fefefe;
  border-radius: 3px;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
}
main h1:first-child {
  margin: -1rem -1rem 1rem;
  background: #333333;
  color: #fefefe;
  padding: 1rem;
  font-size: 2em;
}
h2{
  font-size: 1.5em;
  font-weight: bold;
  padding-bottom: 0.8em;
}

.settings-options {
  padding: 0.25rem;
  margin: -1rem -1rem 1rem;
  background: rgba(51, 51, 51, 0.075);
  border-bottom: 1px solid rgba(51, 51, 51, 0.15);
  box-shadow: inset 0 0 3px 3px rgba(0, 0, 0, 0.05);
  text-align: center;

  
}
.settings-options label {
  margin-right: 2rem;
  cursor: pointer;
  opacity: 0.75;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 800;
  border-bottom: 5px solid transparent;
  padding-bottom: 1px;
}
.settings-options label:hover, .settings-options label:active, .settings-options label:focus {
  opacity: 1;
  border-color: #333333;
}
main {
  width: 70%;
  padding:2em 2em;
  overflow: hidden;
  -webkit-box-shadow: 14px 9px 43px 23px rgba(59,85,109,0.19);
-moz-box-shadow: 14px 9px 43px 23px rgba(59,85,109,0.19);
box-shadow: 14px 9px 43px 23px rgba(59,85,109,0.19);
}
.settings .panel > label {
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
}
.settings .panel {
  position: relative;
}
.settings .panel .text-label, .settings .panel > label {
  display: block;
  margin-top: -1rem;
  padding-bottom: 1.4em;
  position: relative;
  z-index: 5;
  transition: all 0.15s ease-in-out;
}
.settings .panel > label {
  margin: 0 0 0.5rem;
  padding: 0;

}
.settings .panel > label + p {
  margin: 0 0 0.75rem;
  font-size: 1.6em;
}
.settings .panel input[type=text], .settings .panel input[type=number], .settings .panel input[type=password], .settings .panel input[type=email] {
  width: 100%;
  font-size: 1.2em;
  position: relative;
  z-index: 10;
  overflow: hidden;
  background: #fefefe;
}
.settings .panel input[type=text]:focus + .text-label, .settings .panel input[type=number]:focus + .text-label, .settings .panel input[type=password]:focus + .text-label, .settings .panel input[type=email]:focus + .text-label {
  margin-top: -2.5rem;
  padding-bottom: 2.5rem;
}
.settings .panel textarea {
  width: 100%;
  min-height: 250px;
  border-radius: 5px;
  border: 1px solid rgba(51, 51, 51, 0.15);
  padding: 0.5rem;
}
.settings hr {
  clear: both;
  margin: 0.5rem;
  visibility: hidden;
}
.select-toggle {
  z-index: 20;
  position: absolute !important;
  z-index: 20 !important;
  right: 0;
  left: 0;
  text-align: right;
  transition: none !important;
  cursor: pointer;
}
.select-toggle:after {
  display: block;
  position: relative;
  z-index: 25;
  padding: 0.25rem 0.75rem;
  margin: 0.35rem 0.35rem;
  font-family: FontAwesome;
  font-size: 1rem;
  font-family: "FontAwesome";
  content: "\f0d7";
  font-size: 1rem;
}
.helper-input:checked + .select-toggle {
  left: initial;
  transform: rotate(90deg);
}
.select {
  position: relative;
  z-index: 10;
  width: 100%;
  background: rgba(51, 51, 51, 0.075);
  border: 1px solid rgba(51, 51, 51, 0.15);
  padding: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  transition: height 0.25s ease-in-out;
  max-height: 2.25rem;
  overflow: hidden;
  font-size: 0;
}
.select input {
  display: none;
}
.select input + label {
  font-size: 1rem;
  max-height: 0;
  max-width: 0;
  opacity: 0;
  cursor: pointer;
  display: inline-block;
  transition: max-height 0.35s ease-in-out;
}
.select input + label:hover {
  background: rgba(51, 51, 51, 0.1);
}
.select input + label:before {
  font-family: "FontAwesome";
  margin-right: 0.5rem;
}
.select input[type=radio] + label:before {
  content: "\f10c";
}
.select input[type=checkbox] + label:before {
  content: "\f096";
}
.select input[type=radio]:checked + label, .select input[type=checkbox]:checked + label {
  opacity: 1;
  max-height: 99rem;
  max-width: initial;
  font-weight: 800;
  margin-right: 0.5rem;
}
.select input[type=radio]:checked + label:before, .select input[type=checkbox]:checked + label:before {
  content: "\f05d";
}
.select input[type=checkbox]:checked + label {
  font-weight: 400;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 0.1rem 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
}
.select input[type=checkbox]:checked + label:before {
  content: "";
  margin: 0;
  
}
.helper-input:checked + label + .select {
  max-height: 99rem;
}
.helper-input:checked + label + .select input + label {
  font-size: 1.6rem;
  opacity: 1;
  max-width: 999rem;
  margin: 0 -0.5rem;
  padding: 0.5rem;
  max-height: 99rem;
  width: 200%;
  overflow: visible;
  border: 0;
  background: transparent;
}
.helper-input:checked + label + .select input + label:before {
  margin-right: 0.5rem;
}
.helper-input:checked + label + .select input:first-child + label {
  border: 0;
  margin-top: -0.5rem;
}
.helper-input:checked + label + .select label:last-child {
  margin-bottom: -0.5rem;
}
.helper-input:checked + label + .select input[type=checkbox]:checked + label:before {
  content: "\f046";
}
.helper-input:checked + label + .select label ~ label {
  border-top: 1px solid rgba(51, 51, 51, 0.15);
}
.helper-input {
  display: none;
}
.helper-input + .panel {
  height: auto;
  max-height: 0px;
  opacity: 0;
  transition: all 0.15s ease-in-out;
  overflow: hidden;
}
.helper-input:checked + .panel {
  display: block;
  opacity: 1;
  max-height: 999px;
}
.screen-reader-text {
  display: none;
}
*, *::before, *::after {
  box-sizing: border-box;
}
html, body {
  min-height: 100%;
  font-family: 'Roboto', sans-serif;
}
main p:first-child {
  margin-top: 0;
}
main p:last-child {
  margin-bottom: 0;
}
body {
  
  color: #333333;
  background: linear-gradient(65deg,#eefdfc, #b3f6f2, #37cdc5);
}
input {
  transition: border-color 0.15s ease-in-out;
  margin: 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(51, 51, 51, 0.15);
  padding: 0.15rem;
  color: rgba(51, 51, 51, 0.95);
}
input:hover {
  color: #333;
  border-color: rgba(51, 51, 51, 0.75);
}
input:focus {
  outline: none;
  border-bottom: 3px solid #333333;
  margin-bottom: -2px;
}
.material-button, .material-delete {
  
  transition: all 0.15s ease-in-out;
  background: #5FC2BA;
  border: none;
  font-size: 1.8rem;
  line-height: 2rem;
  border-radius: 12px;
  color: #1C2942;
  box-shadow: 1px 1px 3px 0 rgba(51, 51, 51, 0.15);
  text-transform: uppercase;
}
.material-button:hover, .material-delete:hover {
  background: #1C2942;
  color:#5FC2BA;
  transition: 0.3s;
  font-weight: bold;
  box-shadow: 1px 3px 3px 0 rgba(51, 51, 51, 0.15);
}
.material-button:active, .material-delete:active {
  top: -0.7rem;
  outline: 0;
  box-shadow: none;
}


 

</style>
