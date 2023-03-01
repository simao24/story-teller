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
                        console.log(response);
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
        <form action="recherche.php" class="header__search">
            <label for="recherche" class="header__search-label"><i class="fa-solid fa-magnifying-glass"></i></label>
            <input type="text" id="recherche" name="recherche" placeholder="Recherchez" class="header__search-input"> 
        </form>
        
        <!-- Menu deroulant PSEUDO-->

        <menu class="dropdown">
            {#if user }
                <button class="mainmenubtn">{user.first_name}</button>
            {/if}
            <div class="dropdown-menu">
                <ul>
                    <li><a href="/favorite" use:link>Favoris</a></li>
                    <li><a href="/createStory" use:link>Créer une histoire</a></li>
                    <li><a href="/settings" use:link>Gestion de compte</a></li>
                    <li><a href="/my-story" use:link>Mes histoires</a></li>
                    <li>   
                        <button class="logout" on:click={signoutHandle}>Se déconnecter</button>
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
           width: 6em;
           height:6em;
            margin:15px; 
        }

        a {
            text-decoration: none;
            color: azure;
            font-size:x-large; 
            font-weight: 700;
            margin-right: 50px;
            font-family: "Courier New";
        }

        a:hover{
            color:  #5FC2BA;
            font-size: x-large;
            transition: .3seconds;
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
            background-color: navy;
            color: white;
        }

        .nav-bar1 {
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
        }

        .dropdown button {
            padding: 10px;
            background-color: #0B162C;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
        }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: #0B162C;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .dropdown-menu ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .dropdown-menu li {
        margin-bottom: 10px;
    }

  .dropdown-menu a {
    display: block;
    padding: 5px;
    text-decoration: none;
    color: #fff;
  }

  .dropdown-menu a:hover {
    color: #5FC2BA;
  }
    </style>