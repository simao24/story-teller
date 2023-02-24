    <script>
        import logo from '../assets/logo-thestoryteller.png'
        import {
            link
        } from 'svelte-spa-router'
        import {
            getToken,
            removeToken
        } from '../utils/api';
        import {
            push
        } from 'svelte-spa-router';

        let token = getToken()


        function signoutHandle() {
            console.log('plouf')
            //script de déconnexion
            removeToken ()
            //push ("/")
            location.href = '/'
        }

        function search_something() {

        }
    </script>

    <header class="header">
        {#if token}
        <nav class="nav-bar" aria-label="header navigation">
            <a href="index.html" class="header__logo" title="The Story Teller" aria-label="accueil du site" use:link>
                <img src={logo} alt="Story Teller logo">
             </a>
        </nav>
        <form action="recherche.php" class="header__search">
            <label for="recherche" class="header__search-label"><i class="fa-solid fa-magnifying-glass"></i></label>
            <input type="text" id="recherche" name="recherche" placeholder="Recherchez" class="header__search-input"> 
        </form>
        <a href="profil.html" class="headerconnect" use:link>Pseudo</a>

        <h1>Gestion de compte</h1>
        <h2>Profil d'utilisateur</h2>
        
        <!-- Menu deroulant PSEUDO-->

        <menu class="dropdown">
            <button class="mainmenubtn">Pseudo</button>
            <div class="dropdown-child">
                <ul>
                    <!--<li><a href="/favorite" use:link>Favoris</a></li>
                    <li><a href="/create-story" use:link>créer une histoire</a></li>
                    <li><a href="/settings" use:link>Gestion de comppte</a></li>
                    <li><a href="/my-story" use:link>Mes histoires</a></li>-->
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
          <div class="div-nav-search">
            <i class="fa-solid fa-magnifying-glass fa-xl"></i>
            <input id="searchbar" on:input={search_something} type="text" name="search" placeholder="Rechercher">
          </div>
          <div class="div-nav-connexion">
            <a href="/connexion" class="connexion" title="link connexion" aria-label="lien vers la page de connexion"
            use:link>Connexion</a>
          </div>
      </nav>
    {/if}
    </header>

    <style>
       
        img {
            width: 27%;
            margin:15px;
          
        }
        a {
            text-decoration: none;
            color: azure;
            font-size:x-large; 
            font-weight: 700;
            margin-right: 50px;
         
        }

       
        #searchbar {
            width: auto;
            height: 20px;
            border-radius:25px;
           

        }
        i {
            color:white;
        }
        .logout{
            padding: .5em 1em;
            cursor: pointer;
            border-radius: .5em;
            background-color: yellow;
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
            
     
    </style>