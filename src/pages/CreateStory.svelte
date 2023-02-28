<script>
  import { link } from "svelte-spa-router";
    import MyStory from "./MyStory.svelte";
    
  let user = null;

 // recuperation d'histoires depuis notre BDD- tentative-

 /*const load_stories = async () => {
        const token = localStorage.getItem('token');
        const resa_ids = await get_resa_ids(token, user_id);
        const newstory = await get_stories(token, resa_ids);
        return newstory
    }

    // Fonction de récupération de la liste des ids de résa
    const get_resa_ids = async (token, id) => {
        // Création du endpoint avec filtre et fields
        let endpoint = import.meta.env.VITE_API_URL+ "user/my-story?";
        endpoint += "filter[user_id][_eq]=" + id;
        endpoint += "&fields=user_id";

        // Appel de la requête
        const response = await fetch(endpoint, {
            headers: {          
                'Authorization': 'Bearer ' + token,
            }
        });
        // Extraction du json de la réponse
        const result = await response.json();

        //Extraction des ids pour les mettre dans un tableau
        let ids = [];
        result.data.forEach(item => {
            ids.push(item.user_id);
        });
        return ids;
    }

    // Fonction de récupération de la liste des commentaires
      const get_stories = async (token, resa_ids) => {
        let endpoint = import.meta.env.VITE_API_URL + "stories/my-story?";
        endpoint += "filter[resa_id][_in]=" + resa_ids.join(',');

        // Appel de la requête
        const response = await fetch(endpoint, {
            headers: {          
                'Authorization': 'Bearer ' + token,
            }
        });
        // Extraction du json de la réponse
        const result = await response.json();
        //Extraction et retour de la liste
        return result.data;
    }*/



</script>
<main>
  <section class="section-left">
    {#if user }
    <h4>{user.first_name}</h4>
    {/if}
  </section>
  
  <section class="section-centrale">
    <h2>Mon profil</h2>
    <label for="story">Écrire une histoire</label>
    <input type="text" id="title" name="title" placeholder="Titre" class="create__story-title">


    <input type="text" id="category" name="category" placeholder="Categorie" class="create__story-categorie">
    <textarea id="story" name="story" rows="5" cols="33" placeholder="Entrez votre histoire ici"></textarea>
    <button>Envoyer</button>
 </section>

  <section class="sec-histoire">
    <div class="menu-deroulant-histoires">
      <button aria-label="Ouvrir le menu des options pour cette histoire">
        <i class="fas fa-ellipsis-v"></i>
      </button>
      <div class="sous-menu" role="menu">
        <a href="#" role="menuitem" use:link>Modifier</a>
        <a href="#" role="menuitem" use:link>Supprimer</a>
        <a href="#" role="menuitem" use:link>Ajouter une image</a>
      </div>
    </div>
  </section>
</main>


<style>
  /* Reset de la marge et du padding */
  * {
    margin: 0;
    padding: 0;
  }

  /* Utilisation de flexbox pour aligner les sections */
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  /* Section de gauche */
  .section-left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-left img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  .section-left h4 {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  /* Section centrale */
  .section-centrale {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 2rem;
  }

  .section-centrale h2 {
    font-family: 'Raleway', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .section-centrale label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .section-centrale textarea {
    font-size: 1.2rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 25px;
    margin-right: 25px;
  }

  .section-centrale button {
    background-color:#1C2942;
    color: #fff;
    font-size: large;
    font-weight:bold ;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .section-centrale button:hover {
    background-color: #5FC2BA;
    color:#1C2942;
  }

  /* Section de droite */
  .sec-histoire {
    display: flex;
    flex-direction: column;
    align-items: flex
  }

  #title{
    text-align: center;
    border:2px solid grey;
    margin: 5px 105px;
    border-radius: 10px;

  }
  #category{
    text-align: center;
    border:2px solid grey;
    margin: 5px 105px;
    border-radius: 10px;

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
  
  </style>










