<script>
  import { link } from "svelte-spa-router";
</script>
<main>
  <section class="section-left">

    <h4>pseudo</h4>
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