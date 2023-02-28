<script>
  import { onMount } from "svelte";
  import { getFavorites } from "../api/favorites";
  import imghomepage from "../assets/img-homepage.jpg"; // Définir la variable ici

  let favoriteBooks = [];

  const loadFavoriteBooks = async () => {
    favoriteBooks = await getFavorites();
  };

  onMount(() => {
    loadFavoriteBooks();
  });
</script>

<main aria-labelledby="title1">
  <div class="profile-area">
    <img src={imghomepage} alt="accueil">
    <h3 class="profile-username"></h3>
  </div>

  <div class="container-reading">
    <h1 id="title1">FAVORIS</h1>

    {#each favoriteBooks as book}
      <div class="card">
        <img src={book.imageUrl} alt={book.title} />
        <a href="#/user/favoris" class="fa-regular fa-thumbs-up" use:link />
        <div class="container">
          <h4><b>{book.title}</b></h4>
          <span class="auteur">Auteur:</span>
          <p>{book.author}</p>
          <span class="description">Description:</span>
          <p>{book.description}</p>
        </div>
      </div>
    {/each}
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
      
    