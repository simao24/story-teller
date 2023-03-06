<script>
  import { link } from "svelte-spa-router";
  import imghomepage from "../assets/img-homepage.jpg";
  import { getAPI, setToken } from "../utils/api";
  import Swal from 'sweetalert2';
  
  export let params = {};


  let story = {category:{}, user: {}};
  $: console.log("story : ", story);

 
  let editingModeofStory = false;
  let editedStory={title:"", category: {name:""}, resume:"", content:""}
  let updateStory={title:"", category: {name:""}, resume:"", content:""}
 

  // recupérer le détail d'une histoire via une requête Get
  // dans le get api on recuperee de maniere dynamique la story avec ID, les `` en début de et fin string et le $ peu importe ou dans la string ${params.id}
  // l'id est recuperé grâce "/story-detail/:id" dans app.svelte et ce id se remplit grâce qu lien dans reading page.

  getAPI()
    .get(
      `items/story/${params.id}?fields[]=*.*`
    )

    .then(function (response) {
      // console.log();
      // return response.data.data
      story = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
      // Afficher un message d'erreur
    });

  
    

    //Afficher la possibilité de modifer/supprimer une histoire

    function modifierHistoire(event, story){
    const title  = event.target[0].value
    const category = event.target[1].value
    const resume = event.target[2].value
    const content = event.target[3].value
  

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
          console.log('reponse axios : ', response.data.data);
          // mettre à jour la liste d'histoires avec la version mise à jour
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
    }
  }  
 

</script>

<main>
  {#if story }
   
    <h1>DETAIL D'UNE HISTOIRE</h1>
    <div class="storydetails">
      <div class="storydetail-img">
        <img src={imghomepage} alt="Image du livre" />
        <i class="fa-solid fa-thumbs-up" />
      </div>

      <div class="storydetail-infos">
        <span class="auteur">Categorie:</span>
        <p>{story.category?.name}</p>
        <h4>{story.title}</h4>

        <span class="auteur">Auteur:</span>
        <h3>{story.user?.first_name}</h3>
        <span class="description">resumé:</span>
        <p>{story.resume}</p>
        <span class="description">Content:</span>
        <p>{story.content}</p>
      </div>
      <button class="fa-regular fa-pen-to-square fa-xl" on:click={()=> editingModeofStory = true}></button>
      <button class="fa-regular fa-trash-can fa-xl" on:click={()=>supprimerHistoire(story)}></button>
    </div>
  {/if}
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
              </div>
              <button type="submit">Enregistrer</button>
              <button type="button" on:click={()=>editingModeofStory=false}>Annuler</button>

            </form>
        </div>
        {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-top: 40px;
    font-size: large;
  }

  .storydetails {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }

  .storydetail-img {
    position: relative;
    margin-right: 20px;
    margin-top: 65px;
  }

  .storydetail-img img {
    width: 400px;
  }
  .storydetail-img i {
    position: absolute;
    bottom: -30px;
    right: -5px;
  }
  .storydetail-infos h4 {
      margin: 0;
    }
  
    .storydetail-infos .auteur {
      margin-right: 0.5rem;
    }
  
    .storydetail-infos p {
      margin: 0.5rem 0;
    }
  
    .storydetail-infos .description {
      margin-top: 0.5rem;
    }
  
    .auteur {
      font-weight: bold;
      margin-right: 5px;
      display: inline-block;
    }
    /*.card {
      display: flex;
      align-items: center;
      margin: 2rem 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 10px;
      max-width: 600px;
    }*/

    /*formulaire modification*/

    .card {
      width: 30%;
      display:flex;
      flex-direction: row;
      justify-content: center;
      margin: 0 auto;
      background-color: #fff;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      padding: 20px;
      font-family: Arial, sans-serif;
}

.container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
}

  h4 {
        margin-bottom: 20px;
  }

  label {
        font-weight: bold;
        margin-bottom: 5px;
  }

  input[type="text"],
  textarea {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
  font-size: 16px;
  }

  button[type="submit"],
  button[type="button"] {
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #1C2942;
  color: #5FC2BA;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;

  }

  button[type="submit"]:hover,
  button[type="button"]:hover {
  background-color: #5FC2BA;
  color:#1C2942;
  }
</style>
