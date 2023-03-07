<script>
  import imghomepage from "../assets/img-homepage.jpg";
  import { getAPI, setToken } from "../utils/api";
  
  export let params = {};

  let story = {category:{}, user: {}};
  $: console.log("story : ", story);

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
</style>
