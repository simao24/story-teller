<script>
  import imghomepage from "../assets/img-homepage.jpg";
  import { link } from "svelte-spa-router";
  import { getAPI, getTokenData } from "../utils/api";
  import cat_educatif from "../assets/category/Educative-pic.jpg";
  import cat_thriller from "../assets/category/thriller2.jpg";
  import cat_romantique from "../assets/category/romantique.jpg";
  import cat_sciencefiction from "../assets/category/sciencefiction.jpg";
  import cat_horror from "../assets/category/horror2.jpg";
  import cat_aventure from "../assets/category/aventure.jpg";

  let stories = [];
  let category ="";
  let token = getTokenData()
  

  const categoryStyles = {
    10: 'category_tag--aventures',
    15: 'category_tag--educatif',
    11: 'category_tag--science-fiction',
    12: 'category_tag--thriller',
    13: 'category_tag--romantique',
    14: 'category_tag--horreur',

  };

  const categoryImg = {
    10: cat_aventure,
    15: cat_educatif,
    11: cat_sciencefiction,
    12: cat_thriller,
    13: cat_romantique,
    14: cat_horror
  }


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

<!--template cards-->
<main aria-labelledby="title1">
  <div class="container-reading">
    <div class="container-reading-header">
    <h1 class="animate-charcter">Mes favoris</h1>
    <!-- Menu déroulant-->

    <nav class="nav-categories">
      <ul>
        <li class="menu-deroulant-categories">
          <h2>Catégories</h2>
          <select class="select-menu" bind:value={category} on:change={get_stories} name="" id="">
           <option class="select-menu-option" value="10">Aventures</option> 
           <option class="select-menu-option" value="15">Educatif</option> 
           <option class="select-menu-option" value="11">Science-fiction</option>
           <option class="select-menu-option" value="12">Thriller</option>  
           <option class="select-menu-option" value="13">Romantique</option> 
           <option class="select-menu-option" value="14">Horreur</option> 
          </select>

        </li>
      </ul>
    </nav>
  </div>
</div>

    <section class="articles">
      {#await get_stories()}
      <p>Chargement de la liste...</p>
      {:then _}
      {#each stories as story}
      <article>
        <div class="article-wrapper">
          <figure>
            <img src={categoryImg[story.category.id]} alt={story.category.name} />
          </figure>
          <div class="article-body">
            <h2>"{story.title}"</h2>
            <div class="tags">
              <p class={categoryStyles[story.category?.id]}>{story.category?.name}</p>
            </div>
            <p class="auteur-name">Auteur: {story.user?.first_name} </p>
            <p>
              {story.resume}
            </p>
            <a href="/story-detail/{story.id}" class="read-more" use:link>
              Voir plus <span class="sr-only">Détail de l'histoire</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>
  {/each}
  {/await}
      
    </section>

</main>

<style>
  .articles {
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

.auteur-name{
  font-weight: 600;

}
figure > img{
  width: fit-content;
    height: fit-content;
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 10px;
}

.category_tag--aventures{
  background-color: #FF8A65;
  font-weight: bold;
  border-radius: 10px;
  padding: .25em .5em;
  width:fit-content;
}

.category_tag--romantique{
  background-color: #E91E63;
  font-weight: bold;
  border-radius: 10px;
  padding: .25em .5em;
  width:fit-content;
}

.category_tag--science-fiction{
  background-color: #0D47A1;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  padding: .25em .5em;
  width:fit-content;
}
.category_tag--thriller{
  background-color: #0da18d;
  font-weight: bold;
  padding: .25em .5em;
  width:fit-content;
}
.category_tag--educatif{
  background-color: #d4f756;
  font-weight: bold;
  border-radius: 10px;
  padding: .25em .5em;
  width:fit-content;
}
.category_tag--horreur{
  background-color: #111111;
  color:white;
  font-weight: bold;
  border-radius: 10px;
  padding: .25em .5em;
  width:fit-content;
}

img {
  max-width: 100%;
  transform-origin: center;
  transform: scale(var(--img-scale));
  transition: transform 0.4s ease-in-out;
}
/* Style pour le template des cartes */

article {
  --img-scale: 1.001;
  --title-color: black;
  --link-icon-translate: -20px;
  --link-icon-opacity: 0;
  position: relative;
  border-radius: 16px;
  box-shadow: none;
  background: #fff;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
}

article a::after {
  position: absolute;
  inset-block: 0;
  inset-inline: 0;
  cursor: pointer;
  content: "";
}

/* basic article elements styling */
article h2 {
  margin: 0 0 18px 0;
  font-family: "Bebas Neue", cursive;
  font-size: 1.9rem;
  letter-spacing: 0.06em;
  color: var(--title-color);
  transition: color 0.3s ease-out;
}

figure {
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

article img {
  max-width: 100%;
  transform-origin: center;
  transform: scale(var(--img-scale));
  transition: transform 0.4s ease-in-out;
}

.article-body {
  padding: 24px;
}

article a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #28666e;
}

article a:focus {
  outline: 1px dotted #28666e;
}

article a .icon {
  min-width: 24px;
  width: 24px;
  height: 24px;
  margin-left: 5px;
  transform: translateX(var(--link-icon-translate));
  opacity: var(--link-icon-opacity);
  transition: all 0.3s;
}

/* using the has() relational pseudo selector to update our custom properties */
article:has(:hover, :focus) {
  --img-scale: 1.1;
  --title-color: #28666e;
  --link-icon-translate: 0;
  --link-icon-opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.article-body p{
  line-height: 20px;
  margin-bottom:20px;
}

/************************ 
Generic layout (demo looks)
**************************/

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 48px 0;
  font-family: "Figtree", sans-serif;
  font-size: 1.2rem;
  line-height: 1.6rem;
  background-image: linear-gradient(45deg, #7c9885, #b5b682);
  min-height: 100vh;
}

.articles {
  display: grid;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 24px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

@media screen and (max-width: 960px) {
  article {
    container: card/inline-size;
  }
  .article-body p {
    display: none;
  }
}

/*@container card (min-width: 380px) {
  .article-wrapper {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 16px;
  }
  .article-body {
    padding-left: 0;
  }
  figure {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  figure img {
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
} */

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}

/*fin des styles pour le template des cartes*/

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
    margin-left: 1000px;
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
 
  
</style>
