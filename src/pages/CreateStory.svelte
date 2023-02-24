<script>
<<<<<<< HEAD

  import {
    link
  } from "svelte-spa-router";
=======
  import {
    link
  } from "svelte-spa-router";
  const dispatch = createEventDispatcher();
  let title = '';
  let content = '';
  let category = '';
  let message = '';

  function handleSubmit() {
    const newStory = {
      title: title,
      content: content,
      category: category,
      date: new Date().toLocaleString(),
    };
    handleCreate(newStory); 
  }

  function handleCreate(story) {
    fetch('https://ylf19dmf.directus.app/items/story', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
                "content" : content,
                "title": title,
                "category": category
            })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Story published:', data);
      message = 'Votre histoire a été publiée avec succès.';
      // Mettre à jour l'état de l'application pour refléter la nouvelle histoire publiée
    })
    .catch(error => {
      console.error('Error publishing story:', error);
      message = 'Une erreur est survenue lors de la publication de votre histoire.';
      // Gérer les erreurs de publication de l'histoire
    });
  }
</script>
>>>>>>> 1a8a4f7 (CreateStory)
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
<<<<<<< HEAD

      </div>
    </section>
  </main>
  
=======
      </div>
    </div>
  </section>
</main>
>>>>>>> 1a8a4f7 (CreateStory)
