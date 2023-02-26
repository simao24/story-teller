<script>
    import { link } from "svelte-spa-router";
  </script>
  
  <main aria-labelledby="title1">
    <div class="container-reading">
      <h1 id="title1">HISTOIRES</h1>
      <!-- Menu déroulant-->
  
      <nav class="nav-categories">
        <ul>
          <li class="menu-deroulant-categories">
            <a href="#" use:link>Catégories</a>
            <ul class="sous-menu">
              <li><a href="#" use:link>Aventures</a></li>
              <li><a href="#" use:link>Science-fiction</a></li>
              <li><a href="#" use:link>Thriller</a></li>
              <li><a href="#" use:link>Romantique</a></li>
              <li><a href="#" use:link>Horreur</a></li>
            </ul>
          </li>
        </ul>
      </nav>
  
      <div class="card">
        <img src="./src/assets/adventure-img.jpeg" alt="aventure au pole Nord" />
        <a href="/user/favoris" class="fa-regular fa-thumbs-up" use:link />
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
    .container-reading {
      display: flex;
      flex-direction: column;
      align-items: center;
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
  </style>
  