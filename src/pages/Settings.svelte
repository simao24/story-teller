<script>
  import { link } from "svelte-spa-router";
  import {getAPI, getToken } from "../utils/api";
 
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
      .then(function (response) {
        showMessage = true;
        message = "Modification enregistrée avec succès";
        setTimeout(() => {
          showMessage = false;
        }, 2000);
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
  getAPI().delete("/users/"+ token.id)
  
  .then(data => {
    console.log('Utilisateur supprimé : ', data);
    // Déconnecter l'utilisateur
    localStorage.removeItem("token");
    // Rediriger vers la page de connexion
    window.location.href = "/#/connexion";
  })
  .catch(error => {
    console.log('Erreur : ', error);
  });
}

  
</script>

<div class="main-container">
  <h1>Gestion de compte</h1>

  <div class="edit-container">
    <h2>Profil d'utilisateur</h2>

    <div class="edit-elements">
      <p>Photo de profil</p>
      <p>
        <input
          type="text"
          id="avatar"
          value={newAvatar}
          on:input={handleAvatarChange}
        />
      </p>
      <p>Pseudo:</p>

      <p>
        <input
          type="text"
          value={newFirstName}
          on:input={handleFirstNameChange}
        />
      </p>
      <p>Email:</p>
      <p>
        <input type="text" value={newEmail} on:input={handleEmailChange} />
      </p>
      <p>Mot de passe:</p>
      <p>
        <input
          type="password"
          value={newPassword}
          on:input={handlePasswordChange}
        />
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
    /* text-align: right; */
    width: 50%;
    height: 50%;
    border-radius: 10px;
    margin-left: 40%;
  }

  .delete-user-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 50%;
 
}
button{
  background-color: #1C2942;
  color:#5FC2BA;
  font-size: large;
  font-weight: bold;
  border-radius: 10px;
  padding:10px 15px;
}

button:hover{
  background-color: #5FC2BA;
  color:#1C2942;
}
  /*.edit-button {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }*/
  .message {
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    background-color: #1C2942;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  @media (max-width: 425px) {
    .main-container {
      font-size: 1.8rem;
    }
  }
</style>
