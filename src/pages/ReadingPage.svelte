<script>
  import { push } from "svelte-spa-router";
  import imghomepage from "../assets/img-homepage.jpg";
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
    let favorites = [];

    // Récupérez les données stockées dans le local storage sous la clé "favorites"
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Si des favoris ont été trouvés, mettez à jour la liste des favoris
    if (storedFavorites.length > 0) {
      favorites = storedFavorites;
    }

    // Vérifiez si l'histoire existe déjà dans la liste des favoris
    const exists = favorites.find((favorite) => favorite.id === story.id);

    // Si l'histoire n'existe pas encore dans la liste des favoris, ajoutez-la
    if (!exists) {
      favorites.push({
        id: story.id,
        title: story.title,
        author: story.user.first_name,
        description: story.resume,
        image: imghomepage,
      });

      // Stockez la liste des favoris mise à jour dans le local storage sous la clé "favorites"
      localStorage.setItem("favorites", JSON.stringify(favorites));

      alert("Histoire ajoutée aux favoris !");
    } else {
      alert("Cette histoire est déjà dans vos favoris !");
    }
  };
</script>

<main aria-labelledby="title1">
  <div class="container-reading">
    <div class="container-reading-header">
    <h1 class="animate-charcter">HISTOIRES</h1>
    <!-- Menu déroulant-->

    <nav class="nav-categories">
      <ul>
        <li class="menu-deroulant-categories">
          <h2>Catégories</h2>
          <select class="select-menu" bind:value={category} on:change={get_stories} name="" id="">
           <option class="select-menu-option" value="10">Aventures</option> 
           <option class="select-menu-option" value="15">Educatif</option> 
           <option class="select-menu-option" value="11">Sciences-fiction</option>
           <option class="select-menu-option" value="12">Thriller</option>  
           <option class="select-menu-option" value="13">Romantique</option> 
           <option class="select-menu-option" value="14">Horreur</option> 
          </select>

        </li>
      </ul>
    </nav>
  </div>
    {#await get_stories()}
      <p>Chargement de la liste...</p>
    {:then _}
      {#each stories as story}
      <div >
        <div class="card">
          <img src={imghomepage} alt="aventure au pole Nord" />
          <a class="fa-regular fa-thumbs-up"/>

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
            <a href="/story-detail/{story.id}" class="story-detail-link" use:link>voir le détail</a>
          </div>
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
    background: linear-gradient(0deg, #5fc2ba, #afe1dd, rgba(234, 244, 244, 1), #ffffff);
  }
  .container-reading-header{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-bottom: 35px;
    justify-content: space-between;
  }
  .container-reading-header h2{
    text-align: center;
    font-size: larger;
    font-weight: bold;
    color:#333;
    padding-bottom: 15px;
  }
  .select-menu{
    width: 300px;
    height: 20px;

  }
 

  .select-menu-option{
    background-color: #3B556D;
    color:#ffffff;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;

  }
  .select-menu-option:hover{
    background-color:#5FC2BA;
    color:#1C2942;
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
    font-size: 60px;
    padding-bottom:25px;
}

@keyframes textclip {
  to {
    background-position: 100% center;
  }
}
  /*.container-cards{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width:max-content;
  }*/

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
    width: 320px;
    height: 900px;
    display: inline-block;
    margin: 10px;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 1rem;
    max-width: 450px; 
    background: linear-gradient(180deg, #ffffff, #f4fafa, #eaf4f4);
    /*animation: myAnim 2s ease 0s 1 normal forwards;*/
    animation: myAnim 1s ease 0s 1 normal forwards;
  }
  @keyframes myAnim {
	0% {
		transform: scale(0.5);
	}

	100% {
		transform: scale(1);
	}
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
  .story-detail-link{
    font-size: large;
    font-weight: 600;
  }
  .story-detail-link:hover{
    color:rgb(5, 109, 81);
  }
</style>
