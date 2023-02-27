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
    <h2>Profil utilisateur</h2>
    <label for="story">Écrire une histoire</label>
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
    margin-bottom: 1rem;
  }

  .section-centrale button {
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .section-centrale button:hover {
    background-color: #0069d9;
  }

  /* Section de droite */
  .sec-histoire {
    display: flex;
    flex-direction: column;
    align-items: flex
  }
  </style>










