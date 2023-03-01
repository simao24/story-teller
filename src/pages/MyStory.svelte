  <script>
import { each } from "svelte/internal";


  import imghomepage from "../assets/img-homepage.jpg"
  import {getAPI,setToken} from "../utils/api";
  
  
  let stories = []

  getAPI().get("/items/story")

  .then(function(response) {
    console.log(response);
    stories = response.data.data

  })
              
</script> 

    <main aria-labelledby="title1">
    <div class="profile-area">
      <img src={imghomepage} alt="accueil">

      <h3 class="profile-username">Pseudo</h3>
    </div>
  
    <div class="container-reading">
      <h1 id="title1">MES HISTOIRES</h1>
        {#each stories as story}
      <div class="card">
        <img src={story.image} alt="aventure au pole Nord" />
        <!-- <a href="#/user/favoris" class="fa-regular fa-thumbs-up" use:link /> -->
       
        <div class="container">
          <h4><b>{story.title}</b></h4>
          <span class="auteur">Auteur:</span>
          
          <span class="description">{story.content}</span>
          <p>{story.resume}</p>
          </div>
      </div>
      {/each}
      
     </main>
  
  <style>

    main {
     
      display: flex;
      justify-content: center;
    }
  
    .container-reading {


      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-left: 50px;
      padding-left: 20px;
     

    }
  
  
    .profile-area {
      
      display: flex;
      flex-direction: column;
      align-items: center;
      border-left: 3px solid #ccc;
      border-right:3px solid #ccc; ;
      width: 13%;
      padding-right: 1px;

      background: linear-gradient(180deg, #6ed5cc, #479aaf, rgba(59,85,109,1))

    }
  
    .profile-area img {
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      object-fit: cover;
   
    }
  
    .card {
      display: flex;
      align-items: center;
      margin: 2rem 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 10px;
      max-width: 600px;
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
  
    #title1 {
      text-align: center;
    }
  
    .divider {
      border-left: 1px solid #ccc;
      height: 100%;
      position: absolute;
      left: 18%;
      top: 0;
    }
  
    .profile-area {
      position: relative;
    }
  </style>
  
