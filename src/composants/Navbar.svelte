<script>
  import logo from '../assets/logo-thestoryteller.png'
  import {
      link
  } from 'svelte-spa-router'
  import {
      getAPI,
      getToken,
      removeToken
  } from '../utils/api';
  import {
      push
  } from 'svelte-spa-router';
  let token = getToken()
  let user = null;
  //récuperer les données de l'utilisateur
  function getUserInfos(){
      if (!token) {
          return
      }
      getAPI().get('/users/me')
              .then(function(response){
                  // console.log(response);
                  user = response.data.data;
                  })
              .catch(function(err){
                  removeToken();
                  location.href = '/#/connexion';
                  //a chaque fois que directus envoie un message d'erreur on supprime le token et
                  //cela redirige vers la page de connexion
              })
  }
  getUserInfos();
  function signoutHandle() {
      console.log('plouf')
      //script de déconnexion
      removeToken ()
      //push ("/")
      location.href = '/'
  }
  function search_something() {
  }
  let showDropdown = false;
  function toggleDropdown() {
      showDropdown = !showDropdown;
  }
</script>
<header class="header">
{#if user}
<nav class="nav-bar" aria-label="header navigation">
  <a href="/" class="header__logo" title="The Story Teller" aria-label="accueil du site" use:link>
      <img src={logo} alt="Story Teller logo">
   </a>
</nav>
<!-- <form action="recherche.php" class="header__search">
  <label for="recherche" class="header__search-label"><i class="fa-solid fa-magnifying-glass"></i></label>
  <input type="text" id="recherche" name="recherche" placeholder="Rechercher" class="header__search-input">
</form> -->
<!-- Menu deroulant PSEUDO-->
<menu class="dropdown">
  {#if user }
      <button class="mainmenubtn">{user.first_name}</button>
  {/if}
  <div class="dropdown-child">
      <ul>
          <li><a href="/favorite" use:link>Favoris</a></li>
          <li><a href="/createStory" use:link>créer une histoire</a></li>
          <li><a href="/settings" use:link>Gestion de compte</a></li>
          <li><a href="/my-story" use:link>Mes histoires</a></li>
          <li>
              <button class="logout" on:click={signoutHandle}>Se deconnecter</button>
          </li>
      </ul>
  </div>
</menu>
{:else}
<nav class="nav-bar1" aria-label="header navigation">
<div class="div-nav-logo">
  <a href="/" class="logo" title="The Story Teller" aria-label="accueil du site" use:link>
      <img src={logo} alt="Logo de l'application">
  </a>
</div>
<!-- <div class="div-nav-search">
  <i class="fa-solid fa-magnifying-glass fa-xl"></i>
  <input id="searchbar" on:input={search_something} type="text" name="search" placeholder="Rechercher">
</div> -->
<div class="div-nav-connexion">
  <a href="/connexion" class="connexion" title="link connexion" aria-label="lien vers la page de connexion"
  use:link>Connexion</a>
</div>
</nav>
{/if}
</header>

<style>
img {
width: 6em;
margin:15px;
}
a {
text-decoration: none;
color: azure;
font-size:x-large;
font-weight: 700;
margin-right: 50px;
font-family: "Raleway", sans serif;
}
a:hover{
color:#5FC2BA;
transition: .3seconds;
}
/* .div-nav-search{
height: 3em;
} */
/* #searchbar {
width: auto;
height: 20px;
border-radius:25px;
} */
i {
color:white;
}
.logout{
padding: .5em 1em;
cursor: pointer;
border-radius: .5em;
background-color:#0B162C ;
color: white;
}
.nav-bar1{
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
text-decoration: none;
}
.div-nav-connexion {
color: beige;
}
.dropdown {
position: relative;
display: inline-block;
margin-right: 13%;
}
.dropdown-child {
display: none;
position: absolute;
z-index: 1;
border-radius: 15px;
line-height:1.5em;
}
.dropdown-child ul {
list-style: none;
padding: 0;
margin: 0;
}
.dropdown-child ul li {
display: block;
}
.dropdown-child ul li a {
display: block;
padding: 5px 10px;
color: #333;
font-size: 16px;
text-decoration: none;
}
.dropdown-child ul li:hover {
background-color: #F9F9F9;
}
.mainmenubtn {
width: 12em;
display: inline-block;
background-color: #0B162C;
color: white;
font-size: 16px;
border: none;
padding: 10px;
cursor: pointer;
border-radius: 50px;
border: solid 1px #CCC;
}
.mainmenubtn:hover {
background-color: #FFFFFF;
color:#0B162C
}
.dropdown:hover .dropdown-child {
display: block;
}
.logout {
text-align: center;
background-color:transparent;
color: #FFFFFF;
border: none;
padding: 5px 10px;
cursor: pointer;
font-size: 16px;
font-weight: bold;
text-decoration: none;
}
.logout:hover {
font-size:large;
color: red;
transition: .3seconds;
}
@media only screen and (max-width: 425px) {
.header {
display: flex;
flex-direction: column;
align-items: center;
}
img {
width: 3em;
margin:10px;
}
.nav-bar {
width: 100%;
flex-direction: column;
align-items: center;
margin-bottom: 1em;
}
.header__search {
width: 100%,
}
.dropdown {
margin-right: 0;
}
.mainmenubtn {
width: 100%;
margin-bottom: 0.5em;
}
.dropdown-child ul li {
margin-bottom: 0.5em;
}
.div-nav-logo img {
margin: 0;
}
.div-nav-search {
margin-right: 0;
margin-bottom: 1em;
}
.div-nav-connexion {
margin-right: 100rem;
font-size: 20%;
}
#searchbar {
width: 5rem;
}
}
</style>














