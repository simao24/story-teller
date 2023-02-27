  <script>

import imghomepage from "../assets/img-homepage.jpg"
    import {
         link
     } from "svelte-spa-router";
    
  </script> 

  
  <main aria-labelledby="title1">
    <div class="profile-area">
      <img src={imghomepage} alt="accueil">

      <h3 class="profile-username"></h3>
    </div>
  
    <div class="container-reading">
      <h1 id="title1">MES HISTOIRES</h1>
  
      <div class="card">
        <img src="./src/assets/adventure-img.jpeg" alt="aventure au pole Nord" />
        <a href="#/user/favoris" class="fa-regular fa-thumbs-up" use:link />
        <div class="container">
          <h4><b>Aventure au Pole Nord</b></h4>
          <span class="auteur">Auteur:</span>
          <p>Frederic Wonderberg</p>
          <span class="description">Description:</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quaerat
            amet perspiciatis, saepe ducimus quibusdam tempora voluptatum ea esse,
            quis at quidem doloribus
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="./src/assets/Captura de Pantalla 2023-02-21 a las 11.16.21.png"
          alt="Détective Loup"
        />
        <a href="/user/favoris" class="fa-regular fa-thumbs-up" use:link />
        <div class="container">
          <h4><b>Detective Loup</b></h4>
          <span class="auteur">Auteur:</span>
          <p>Marie-Anne Strump</p>
          <span class="description">Description:</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quaerat
            amet perspiciatis, saepe ducimus quibusdam tempora voluptatum ea esse,
            quis at quidem doloribus
          </p>
        </div>
      </div>
    </div>
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
      width: 80%;
      margin-left: 100px;
      padding-left: 20px;
      border-left: 1px solid #ccc;
    }
  
    .profile-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 1%;
      padding-right: 1px;
      border-right: 1px #ccc;
    }
  
    .profile-area img {
      margin-bottom: 1rem;
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
  
