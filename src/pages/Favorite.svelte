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
          <a class="fa-regular fa-thumbs-up"/>

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

  .nav-categories ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-categories ul li {
    display: inline-block;
    position: relative;
    margin-right: 20px;
  }

  .nav-categories ul li a {
    display: block;
    padding: 5px 10px;
    color: #333;
    font-size: 16px;
    text-decoration: none;
  }

  .nav-categories ul li:hover > ul {
    display: block;
  }

  .nav-categories ul ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .nav-categories ul ul li {
    display: block;
    white-space: nowrap;
  }

  .nav-categories ul ul li a {
    font-size: 14px;
    color: #333;
    text-decoration: none;
    display: block;
    padding: 10px 20px;
  }

  /* Animation pour le lien de catégories */
  .nav-categories a {
    position: relative;
  }

  .nav-categories a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    border-radius: 5px;
    transition: opacity 0.9s ease;
  }

  .nav-categories a:hover::before {
    opacity: 1;
    animation: flicker 1s linear infinite;
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
