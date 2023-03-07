<script>
  import { push } from "svelte-spa-router";
  import imghomepage from "../assets/img-homepage.jpg";
  import { getAPI, setToken } from "../utils/api";
  import { link } from "svelte-spa-router";

  let stories = [];
  let category ="";
  
  const get_stories = async () => {
   let url = "";
    if (category=="") {
      url = import.meta.env.VITE_API_URL_GET_ITEMS + "/story?fields[]=*.*"
    }
    else{
      url= `${import.meta.env.VITE_API_URL_GET_ITEMS}/story/?filter[category][_eq]=${category}&fields[]=*.*`
    }
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    stories= json.data;
  };
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

<main aria-labelledby="title1">
  <div class="container-reading">
    <h1 id="title1">HISTOIRES</h1>
      <nav class="nav-categories">
      <ul>
        <li class="menu-deroulant-categories">
          <h2>categories</h2>
          
          <select bind:value={category} on:change={get_stories} name="" id="">
           <option value="10">Aventures</option> 
           <option value="15">Educatif</option> 
           <option value="11">Sciences-fiction</option>
           <option value="12">Thriller</option>  
           <option value="13">Romantique</option> 
           <option value="14">Horreur</option> 
          </select>

        </li>
      </ul>
    </nav>
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
            <p class="story-category">{story.category?.name}</p>
            <span class="auteur">Titre:</span>
            <h4>"{story.title}"</h4>
            <span class="auteur">Auteur:</span>
            <p>{story.user?.first_name}</p>
            <span>Description:</span>
            <p class="description">{story.resume}</p>
            <!--{story.category_id.category}-->
            <a href="/story-detail/{story.id}" use:link>voir le détail</a>
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
    font-style: italic;
    font-weight: 500;
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
  .description{
      text-align: justify;
      letter-spacing: 0.5px;
    }
  .story-category{
    border-bottom: 2px solid rgb(163, 162, 162);
  }
</style>
