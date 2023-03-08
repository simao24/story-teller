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
      .then(function (response) {
        showMessage = true;
        message = "Modification enregistrée avec succès";
        setTimeout(() => {
          showMessage = false;
        }, 2000);

      getAPI().patch(`/items/story/${story.id}?fields=*, category.name`, {
        title,
        category: 10, 
        resume, 
        content,
      })
      Swal.fire({
        icon:'success',
        title:'Votre histoire a été enregistrée avec succès!',
        showConfirmButton:false,
        timer:1700
        
      }) 
        
        .then(response => {
          location.reload();
          // @ts-ignore
          console.log('reponse axios : ', response.data.data);
          // mettre à jour la liste d'histoires avec la version mise à jour
          // @ts-ignore
          story.story = story.story.map(s => s.id === story.id ? response.data.data : s)
          story =  {...story}
        
       

          
        })
        .catch(error =>{
          console.log(error)
        })
      }

    // Function de suppression d'histoire
    function supprimerHistoire(story) {
      //Demander à l'utilisateur de confirmer s'il veut supprimer son histoire
      if (confirm(`Êtes-vous sûr de vouloir supprimer l'histoire "${story.title}?"`)){
        // Envoyer une requete DELETE à l'API pour supprimer l'histoire de la BDD
        getAPI().delete(`/items/story/${story.id}`)

        //Modale pour confirmer la suppression d'une histoire
        Swal.fire({
        icon:'warning',
        title:'Votre histoire a été supprimée avec succès!',
        showConfirmButton:false,
        timer:1700
        })
    
        .then(response => {
          location.reload();
          console.log(response)
          //Mettre à jour la liste d'histoires en la filtrant pour enlever l'histoire
          story.story = story.story.filter(s => s.id !== story.id)
          story = {...story}
         
           
     
        })
        .catch(error => {
          console.log(error)

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleDeleteUserClick() {
    const confirmDelete = confirm(
      "Voulez-vous vraiment supprimer votre compte ? Cette action est irréversible."
    );
    if (confirmDelete) {
      deleteUser();
    }
  }
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  function deleteUser() {
    const token = parseJwt(getToken());
    console.log(token);
    getAPI()
      .delete("/users/" + token.id)

      .then((data) => {
        console.log("Utilisateur supprimé : ", data);
        // Déconnecter l'utilisateur
        localStorage.removeItem("token");
        // Rediriger vers la page de connexion
        window.location.href = "/#/connexion";
      })
      .catch((error) => {
        console.log("Erreur : ", error);
      });
  }
</script>


<body>
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

<main>
  {#if story }
   
    <h1 class="animate-charcter">DETAIL D'UNE HISTOIRE</h1>
    <div class="storydetails">
      <div class="storydetail-img">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={imghomepage} alt="Image du livre" />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="fa-regular fa-thumbs-up fa-2xl"on:click={() => addFavorite(story)}>
        </div>
        </div>


        <div class="delete-user-button">
          <button on:click={deleteUser}>Supprimer mon compte</button>
        </div>
      </div>
    </div>
  </div>
</body>

<style>
  body {
    font-family: "Courier New", Courier, monospace;
    background-color: #e5e5f7;
    opacity: 0.9;
    background-image: radial-gradient(#5fc2ba 0.75px, #e5e5f7 0.75px);
    background-size: 15px 15px;
    min-height: 100vh;
    margin-top: 0;
    padding-top: 30px;
  }
  h1 {
    text-align: center;
    font-size: 30px;
    margin-top: 20px;

    padding: 25px;
    width: auto;

    margin-right: 20px;
}
  .fa-regular, .fa-pen-to-square, .fa-xl{
    /*background: linear-gradient(0deg, #5fc2ba, #accbd4, #eceff2);*/
    background-color: white;
    margin-left: 15px;


  }
  /*Animation pour h1*/

  .animate-charcter{
    font-family: "Raleway", sans serif;
    margin-top:25px;
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      #0B162C 0%,
      #1C2942 29%,
      #3B556D 67%,
      #5FC2BA 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 50px;
}

@keyframes textclip {
  to {
    background-position: 100% center;

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

    margin-top: 80px;
    margin-left:55px;
    margin-right: 55px;
    margin-bottom: 25px;
    padding-top: 25px;
    padding-right: 25px;
    line-height: 25px;
    border: 1px solid gray;
    box-shadow: 2px #3B556D;
    background-color: #ffffff;
    -webkit-box-shadow: 14px 11px 29px 0px rgba(59,85,109,0.82);
    -moz-box-shadow: 14px 11px 29px 0px rgba(59,85,109,0.82);
    box-shadow: 14px 11px 29px 0px rgba(59,85,109,0.82);
  }

  .storydetails:hover{
    -webkit-box-shadow: 34px -25px 29px -21px rgba(59,85,109,0.82);
  -moz-box-shadow: 34px -25px 29px -21px rgba(59,85,109,0.82);
  box-shadow: 34px -25px 29px -21px rgba(59,85,109,0.82);

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
  button {
    background-color: #1c2942;
    color: #5fc2ba;
    font-size: large;
    font-weight: bold;
    border-radius: 10px;
    padding: 10px 15px;
  }

  /* .storydetail-img i {
    position: absolute;
    bottom: -30px;
    right: -5px;
  } */
  .storydetail-infos span{
    margin-bottom:25px;
    font-size: x-large;
    font-weight: bold;
    color: #1C2942;
    text-decoration: underline;
  }
  /* .storydetail-infos h4 {
    font-size: large;
    margin: 0;
  } */


  button:hover {
    background-color: #5fc2ba;
    color: #1c2942;
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
    background-color: #1c2942;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  @media screen and (max-width: 767px) {
    body {
      width: 100%;
      align-items: center;
      background-image: radial-gradient(#5fc2ba 0.75px, #e5e5f7 0.75px);
      background-size: 15px 15px;
    }

    /* h1 {
  text-align: center;
  } */
    .edit-container {
      font-size: 1.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      /* height: 100vh; */
      width: 50%;
      margin-left: 20%;
      margin-bottom: 1rem;
    }

    /* .edit-container {
    width: 80%;
    padding: 1rem;
    border-radius: 0;
    border: none;
    width: 100%;
    display: inline-flex;
  } */

    .edit-elements p {
      width: 100%;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .edit-elements input {
      font-size: 1rem;
      padding: 0.5rem;
      margin-left: -25%;
      width: 100%;
      height: 5%;
    }

    /* .edit-elements p {
    font-size: 1rem;
    padding: 0.5rem;
  } */

    .delete-user-container {
      width: 100%;
      padding: 1rem;
    }

    #valider {
      font-size: 1rem;
      padding: 0.5rem;
    }

    .delete-user-button button {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    body {
      width: 50%;
      align-items: center;
    }
  }
</style>
