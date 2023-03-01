<script>
  import { link } from "svelte-spa-router";
    import MyStory from "./MyStory.svelte";
   
    
  let user = null;
  import {
    getAPI,
            getToken,
            removeToken
        } from '../utils/api';



 

  // 1. Fonction pour envoyer les histoires écrites par l'utilisateur dans ma bdd

  
  let title ='';
  let resume='';
  let content='';
  // 1.1- Définir la fonction handleSubmit qui sera applée lorsque l'utilisateur soumettra le formulaire. 
  //Cette fonction effectuera une requête HTTP POST à notre API Directus pour enregistrer l'histoire dans notre bdd.

  async function handleSubmit(event) {
    event.preventDefault();
      try{
        const reponse = await getAPI().post('/items/story',{title, resume, content});
       

     
      console.log(reponse.data);// Affiche la réponse de l'API dans la console
      content=''; // Efface le texte dans le textarea
      title=''; //
      resume=''; //

  } catch(error){
    console.error(error);
  }
  }
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
<!--<main>

    <section class="section-left">
      {#if user }
      <h4>{user.first_name}</h4>
      {/if}
    </section>
    
    <section class="section-centrale">
      <h2>Mon profil</h2>
      <form on:submit={handleSubmit}>
        <label for="story">Écrire une histoire</label>
        <input type="text" id="title" name="title" placeholder="Titre" class="create__story-title" bind:value={title}>
        <label for="resume">Resume</label>
        <textarea id="resume" name="resume" rows="5" cols="33" placeholder="Entrez votre resume ici" bind:value={resume}></textarea>
        <label for="category">Categorie</label>
        <input type="text" id="category" name="category" placeholder="Categorie" class="create__story-categorie">
        <label for="writemystory">Mon histoire</label>
        <textarea id="story" name="story" rows="5" cols="33" placeholder="Entrez votre histoire ici" bind:value={content}></textarea>
      
        <button type="submit">Envoyer</button>
    </form>
  </section>

    <section class="sec-histoire">
      <div class="menu-deroulant-histoires">
        <button aria-label="Ouvrir le menu des options pour cette histoire">
          <i class="fas fa-ellipsis-v"></i>
        </button>
        <div class="sous-menu" role="menu">


          <a href="/" role="menuitem" use:link>Modifier</a>
          <a href="/" role="menuitem" use:link>Supprimer</a>
          <a href="/" role="menuitem" use:link>Ajouter une image</a>

        </div>
      </div>
    </section>
</main>-->
<body>
  <div id="container">
    <h1>&bull; Écrire une histoire &bull;</h1>
    <div class="underline">
    </div>
    <div class="icon_wrapper">
      <span class="icon">
        <i class="fa-solid fa-feather fa-2xl"></i>
      </span>
    </div>
    <form action="#" method="post" id="contact_form" on:submit={handleSubmit}>
      <div class="name">
        <label for="titre"></label>
        <input type="text" placeholder="Titre" name="name" id="name_input" required bind:value={title}>
      </div>
     
      
      <div class="subject">
        <label for="subject"></label>
        <select placeholder="Categorie" name="subject" id="subject_input" required>
          <option disabled hidden selected>Categorie</option>
          <option>Aventures</option>
          <option>Science-fiction</option>
          <option>Thriller</option>
          <option>Horreur</option>
          <option>Romantique</option>
        </select>
      </div>
      <div class="message">
        <label for="message"></label>
        <textarea name="message" placeholder="Resume" id="message_input" cols="3" rows="2" required bind:value={resume}></textarea>
      </div>
      <div class="message">
        <label for="message"></label>
        <textarea name="message" placeholder="Mon histoire" id="message_input" cols="30" rows="5" required bind:value={content}></textarea>
      </div>
      <div class="submit">
        <input type="submit" value="Publier" id="form_button" />
      </div>
    </form><!-- // End form -->
  </div><!-- // End #container -->
</body>
<style>

body {

  background: #F2F3EB;
  font-family: 'Courier New', Courier, monospace;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
#container{
  background-color: #FFFFFF;
}
button {
  overflow: visible;
}


button, select {
  text-transform: none;

}

button, input, select, textarea {
  color: #1C2942;
  font: inherit;
  margin: 0;
  
}

input {
  line-height: normal;
}

textarea {
  overflow: auto;
}

#container {
  border: solid 3px #1C2942;
  max-width: 768px;
  margin: 60px auto;
  position: relative;
  
}

form {
  padding: 37.5px;
  margin: 50px 0;
}

h1 {
  color: #1C2942;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 7px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 20px;
}



.icon_wrapper {
  margin: 50px auto 0;
  width: 100%;
}

.icon {
  display: block;
  fill: #474544;
  height: 50px;
  margin: 0 auto;
  width: 50px;
}

.email {
	float: right;
	width: 45%;
}

input[type='text'], [type='email'], select, textarea {
	background: none;
  border: none;
	border-bottom: solid 2px #474544;
	color: #1C2942;
	font-size: 1.300em;
  font-weight: 500;
  letter-spacing: 1px;
	margin: 0em 0 1.875em 0;
	padding: 0 0 0.875em 0;
	width: 100%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}

input[type='text']:focus, textarea:focus {
	outline: none;
	padding: 0 0 0.875em 0;
}

.message {
	float: none;
}

.name {
	float: left;
	width: 45%;
}

select {
  background: url('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-32.png') no-repeat right;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

select::-ms-expand {
  display: none;
}

.subject {
  width: 100%;
}


textarea {
	line-height: 150%;
	height: 150px;
	resize: none;
  width: 100%;
}

::-webkit-input-placeholder {
	color: #474544;
}

:-moz-placeholder { 
	color: #474544;
	opacity: 1;
}

::-moz-placeholder {
	color: #474544;
	opacity: 1;
}

:-ms-input-placeholder {
	color: #474544;
}
.submit {
  margin:0 35%;
}
#form_button {
  background-color:#3B556D ;
  border: solid 2px #1C2942;
  border-radius: 10px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block; 
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 1.3em;
  font-weight: bold;
  outline: none;
  padding: 25px 75px;
  -webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}

#form_button:hover {
  background: #5FC2BA;
  color: #1C2942;
  font-size:1.4em;
  font-weight: bolder;
}

@media screen and (max-width: 768px) {
  #container {
    margin: 20px auto;
    width: 95%;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 26px;
  }
  
  .underline {
    width: 68px;
  }
  
  #form_button {
    padding: 15px 25px;
  }
}

@media screen and (max-width: 420px) {
  h1 {
    font-size: 18px;
  }
  
  .icon {
    height: 35px;
    width: 35px;
  }
  
  .underline {
    width: 53px;
  }
  
  input[type='text'], [type='email'], select, textarea {
    font-size: 0.875em;
  }
}
</style>