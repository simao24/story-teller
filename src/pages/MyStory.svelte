  <script>
// @ts-nocheck



    import { link } from "svelte-spa-router";


  import imghomepage from "../assets/img-homepage.jpg"
  import {getAPI,setToken} from "../utils/api";
    import StoryDetail from "./StoryDetail.svelte";
  
  
  let userInfos = {
    story: []
  };
  let editingModeofStory = false;
  let editedStory={title:"", category: {name:""}, resume:"", content:""}
  let updateStory={title:"", category: {name:""}, resume:"", content:""}
  
  
  $ : console.log('user : ', userInfos)
    
    // Retrouver la liste d'histoires
  getAPI().get("/users/me?fields=first_name, story.*, story.category.name")

  .then(function(response) {
    userInfos = response.data.data

  })

  function modifierHistoire(event, story){
    const title  = event.target[0].value
    const category = event.target[1].value
    const resume = event.target[2].value
    const content = event.target[3].value
    // editingStory=story;
    // editedStory={...story};
    //   //Afficher une boîte de dialogue ou un formulaire pour permettre à l'utilisateur de modifier les details d'une histoire
    //   // Une fois les détails modifiés, envoyer une requete PUT a l'API pour mettre à jour l'histoire dans la BDD

      getAPI().patch(`/items/story/${story.id}?fields=*, category.name`, {
        title,
        category: 10, 
        resume, 
        content,
      })
        .then(response => {
          console.log('reponse axios : ', response.data.data);
          // mettre à jour la liste d'histoires avec la version mise à jour
          userInfos.story = userInfos.story.map(s => s.id === story.id ? response.data.data : s)
          userInfos =  {...userInfos}
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
        .then(response => {
          console.log(response)
          //Mettre à jour la liste d'histoires en la filtrant pour enlever l'histoire
          userInfos.story = userInfos.story.filter(s => s.id !== story.id)
          userInfos = {...userInfos}
        })
        .catch(error => {
          console.log(error)
      })
    }
  }          

</script> 

    <main aria-labelledby="title1">
    <div class="profile-area">
      <img src={imghomepage} alt="accueil">

      <h3 class="profile-username">{userInfos.first_name}</h3>
    </div>
  
    <div class="container-reading">
      <h1 id="title1">MES HISTOIRES</h1>
        {#each userInfos.story as story}
      <div class="card">
        
        <img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' alt="aventure au pole Nord" />
        <!--<a href="#/user/favoris" class="fa-regular fa-thumbs-up" use:link />-->
       
        <div class="container">
          <h4><b>{story.title}</b></h4>
          <span class="auteur">Categorie:</span>
          <p>{story.category.name}</p>
          <span class="auteur">Auteur:</span>
          <p>{userInfos.first_name}</p>
          <span class="description">Resume:</span>
          <p>{story.resume}</p>
          <a href="/story-detail/{story.id}" use:link>voir le detail</a>
        </div>
        <button class="fa-regular fa-pen-to-square fa-xl" on:click={()=> editingModeofStory = true}></button>
        <button class="fa-regular fa-trash-can fa-xl" on:click={()=>supprimerHistoire(story)}></button>
      </div>
      {#if editingModeofStory}
        <div class="card">
            <form on:submit|preventDefault={(event) => modifierHistoire(event, story)}>
              <div class="container">
                <h4><b>Modifier Histoire</b></h4>
                <label for="title">Titre:</label>
                <input type="text" id="title" bind:value={editedStory.title}/>
                <label for="category">Catégorie:</label>
                <input type="text" id="category" bind:value={editedStory.category.name}/>
                <label for="resume">Résumé:</label>
                <textarea id="resume" cols="3" rows="3" bind:value={editedStory.resume}></textarea>
                <label for="contenu">Contenu:</label>
                <textarea id="contenu" cols="3" rows="3" bind:value={editedStory.content}></textarea>
                <button type="submit">Enregistrer</button>
                <button type="button" on:click={()=>editingModeofStory=false}>Annuler</button>
              </div>
            </form>
        </div>
        {/if}
      {/each}
    </div> 
  </main>
  
  <style>

    main {
     
      display: flex;
      justify-content: center;
    }
  
    .container-reading {


      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-left: 50px;
      padding-left: 20px;
     

    }
  
  
    .profile-area {
      
      display: flex;
      flex-direction: column;
      align-items: center;
      border-left: 3px solid #ccc;
      border-right:3px solid #ccc; ;
      width: 13%;
      padding-right: 1px;

      background: linear-gradient(180deg, #6ed5cc, #479aaf, rgba(59,85,109,1))

    }
  
    .profile-area img {
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      object-fit: cover;
   
    }
  
    .card {
      display: flex;
      align-items: center;
      margin: 2rem 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 10px;
      max-width: 600px;
    }
    button{
      display: flex;
      justify-content:left;
     

    }
    .card img {
      margin-right: 1rem;
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  
    .card .container {
      display: flex;
      flex-direction: column;
    }
  
    .card h4 {
      margin: 0;
    }
  
    .card .auteur {
      margin-right: 0.5rem;
    }
  
    .card p {
      margin: 0.5rem 0;
    }
  
    .card .description {
      margin-top: 0.5rem;
    }
  
    .auteur {
      font-weight: bold;
      margin-right: 5px;
      display: inline-block;
    }
  
    #title1 {
      text-align: center;
    }
  
    .divider {
      border-left: 1px solid #ccc;
      height: 100%;
      position: absolute;
      left: 18%;
      top: 0;
    }
  
    .profile-area {
      position: relative;
    }
  </style>
  
