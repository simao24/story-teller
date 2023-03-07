<script>
  import { push } from "svelte-spa-router";
  import imghomepage from "../assets/img-homepage.jpg";
  import { link } from "svelte-spa-router";
    import { getAPI } from "../utils/api";

  let stories = [];
  let category ="";
  

  const get_stories = async () => {

   let url = import.meta.env.VITE_API_URL_GET_ITEMS + "/favoris?fields[]=*.*.*.*"
   getAPI().get(url)
   .then(data => {
    console.log(data);
    stories=data.data.data
   })
  .catch(error => {
    console.log('Erreur : ', error);
  });     
  };

  // Ajouter une histoire aux favoris
  const addFavorite = (story) => {
            
  }
</script>

<main aria-labelledby="title1">
  <div class="container-reading">
    <h1 id="title1">HISTOIRES</h1>
    <!-- Menu déroulant-->

   
    {#await get_stories()}
      <p>Chargement de la liste...</p>
    {:then _}
      {#each stories as story}
        <div class="card">
          <img src={imghomepage} alt="aventure au pole Nord" />
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="fa-regular fa-thumbs-up fa-2xl"on:click={() => addFavorite(story)}></div>

          <div class="container">
            <span class="auteur">Categorie:</span>
            <h4><b>{story.story_id.title}</b></h4>
            <p>{story.story_id.category?.name}</p>
            <!-- <span class="auteur">Auteur:</span> -->
            <!-- <p>{story.story_id.user?.first_name}</p> -->
            <span class="description">Description:</span>
            <p>{story.story_id.resume}</p>
            <!--{story.story_id.category_id.category}-->
            <a href="/story-detail/{story.story_id.id}" use:link>voir le detail</a>
          </div>
        </div>
      {/each}
    {/await}
  </div>
</main>

<style>

main {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* aligne les éléments de la flex box sur le bord supérieur */
    padding-top: 60px;
  }
  img {
    width: 25%;
    height: 60%;
    margin-left: 50px;
    margin-right: 50px;
    border-radius: 25px;
  }
  .container-reading {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@keyframes flicker {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .card {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 400px;
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
</style>
