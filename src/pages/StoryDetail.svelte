<script>
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
    }
  }  
 


    // Ajouter une histoire aux favoris
    const addFavorite = (story) => {
    getAPI().post("/items/favoris",{
      story_id:story.id
    }) 
    .then(data => {
    console.log(data);
    alert("l'histoire est bien ajoutée à vos favoris")   
  })
  .catch(error => {
    console.log('Erreur : ', error);
  });
  };

</script>

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

      <div class="storydetail-infos">
        <span class="auteur">Categorie:</span>
        <h3>{story.category?.name}</h3>
        <span class="auteur">Titre:</span>
        <p class="story-title-italique">{story.title}</p>
       

        <span class="auteur">Auteur:</span>
        <h3>{story.user?.first_name}</h3>
        <span>Resumé:</span>
        <p class="description">{story.resume}</p>
        <span>Content:</span>
        <p class="description">{story.content}</p>
      </div>
      <button class="fa-regular fa-pen-to-square fa-xl" on:click={()=> editingModeofStory = true}></button>
      <button class="fa-regular fa-trash-can fa-xl" on:click={()=>supprimerHistoire(story)}></button>
    </div>
  {/if}
  {#if editingModeofStory}
        <div class="card">
            <form on:submit|preventDefault={(event) => modifierHistoire(event, story)}>
              <div class="container">
                <h4><b>Modifier l'histoire</b></h4>
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
    background: linear-gradient(0deg, #5fc2ba, #accbd4, #eceff2);
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  .fa-thumbs-up {
    color: #3B556D;
    justify-content: flex-end;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
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
}
  
  h1 {
    margin-top: 40px;
    font-size: xx-large;
    font-weight: bolder;
    color: #1C2942;
  }

  .storydetails {
    display: flex;
    justify-content: center;
    align-items: center;
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

  .storydetail-img {

    position: relative;
    margin-right: 20px;
    margin-top: 65px;
    margin-bottom:30px;
    
  }

  .storydetail-img img {
    width: 400px;
    border-radius: 10px;
    margin-right: 20px;
    margin-left: 25px;
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

 .storydetail-infos p {
  font-size: large;
    margin: 0.5rem 0;
  }
  
    .storydetail-infos .auteur {
      margin-right: 0.5rem;
    }
  
    
  
    .storydetail-infos .description {
      margin-top: 0.5rem;
  
    }
    .description{
      text-indent: 40px;
      text-align: justify;
      letter-spacing: 0.5px;
    }
  
    .auteur {
      font-weight: bold;
      margin-right: 5px;
      display: inline-block;
    }


      /* Media query pour écran inférieur à 768px */
  @media screen and (max-width: 768px) {
    .storydetails {
      flex-direction: column; /* Changement de direction */
      margin-top: 40px; /* Modification de la marge */
    }

    .storydetail-img {
      margin-right: 0; /* Suppression de la marge */
      margin-top: 0; /* Suppression de la marge */
    }

    .storydetail-infos {
      margin-top: 40px; /* Modification de la marge */
    }

    .storydetail-img img {
      max-width: 100%; /* Modification de la largeur */
      height: auto; /* Ajout de height:auto */
    }
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
      font-family: "Raleway", sans serif;
}

.container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
}
h3{
  font-size: large;
}

  h4 {
        margin-bottom: 20px;
        font-size: larger;
        text-decoration: underline;
  }

  label {
        font-size: large;
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
    margin-right: 25px;
    margin-left: 50px;
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

  .story-title-italique{
    font-style: italic;
    font-size: larger;
    letter-spacing: 1px;

  }
 

</style>
