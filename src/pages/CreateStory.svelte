<script>
    import {
      link
    } from "svelte-spa-router";
  </script>
  
  <main>
    <section class="section-left">
      <img src="vite.svg" alt="image-profil">
      <h4>pseudo</h4>
    </section>
    <section class="section-centrale">
      <h2> Profil utilisateur</h2>
      <label for="story">ecrire une histoire</label>
      <textarea id="story" name="story" rows="5" cols="33">
              ça claque sa......
          </textarea>
  
      <button>envoyer</button>
  
    </section>
  
    <section class="sec-histoire">
  
      <div class="menu-deroulant-histoires"><a href="#">menu déroulant</a>
        <div class="sous-menu">
          <a href="#" use:link>Modifier</a>
          <a href="#" use:link>Supprimer</a>
          <a href="#" use:link>ajouter une image</a>
        </div>
      </div>
    </section>
<<<<<<< HEAD
  </main>
  
=======
  </main>
>>>>>>> ed48fa3 (CreateStory)
