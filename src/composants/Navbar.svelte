    <script>
        import logo from '../assets/logo-thestoryteller.png'
	    import Router, {location, link} from 'svelte-spa-router';


        function signoutHandle(){
            //script de déconnexion
        }

        function search_something (){

        }
    </script>
    <header class="header">
        <nav class="nav-bar1" aria-label="header navigation">
            <a href="/" class="logo" title="The Story Teller" aria-label="accueil du site">
                <img src={logo} alt="Logo de l'application">
            </a>
            <a href="/stories" class="connexion" title="link connexion"
                aria-label="lien vers la page de connexion">Connexion</a>
        </nav>
        <!-- Menu deroulant PSEUDO-->

        <div class="dropdown">
            <button class="mainmenubtn">Pseudo</button>
            <div class="dropdown-child">
                <!--<a use:link={"/favorites"}>Favoris</a>-->
                <a use:link={"/create-story"}>Créer une histoire</a>
                <a use:link={"/settings"}>Gestion du compte</a>
                <a use:link={"/my-story"}>Mes histoires</a>
                <div class="signout" on:click={signoutHandle}>Se deconnecter</div>

            </div>
        </div>

        <!-- Search bar-->
        <nav class="nav-bar2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input id="searchbar" on:input ={search_something} type="text" name="search" placeholder="Rechercher">
        </nav>

    </header>

    <style>
     .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #3B556D;
      padding: 10px;
    }
  
    .header__logo {
      margin-right: 10px;
    }
  
    .header__logo img {
      height: 5rem;
      width: 5rem;
    }
  
    .header__search {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: auto;
      margin-bottom: 10px;
      flex-grow: 1; /* Modification */
    }
  
    .header__connect {
      color: #fff;
      text-decoration: none;
      margin-left: auto; /* Modification */
      margin-right: 10px; /* Modification */
    }
  
    .header__search-label {
      color: #fff;
      margin-right: 10px;
    }
  
    .header__search-input {
      padding: 5px;
      border-radius: 5px;
      border: none;
      margin: 0.2rem;
    }
  
    .header__search-submit {
      background-color: #fff;
      color: #333;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  

    </style>