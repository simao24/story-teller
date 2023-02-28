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
                <a href="/" class="header__logo" title="The Story Teller" aria-label="accueil du site" use:link>
                    <img src={logo} alt="Story Teller logo">
                </a>
            </nav>
            <form action="recherche.php" class="header__search">
                <label for="recherche" class="header__search-label"><i class="fa-solid fa-magnifying-glass"></i></label>
                <input type="text" id="recherche" name="recherche" placeholder="Recherchez" class="header__search-input"> 
            </form>

            <a href="/" class="headerconnect" use:link>Pseudo</a> 

            <h1>Gestion de compte</h1>

            <h2>Profil d'utilisateur</h2>
            
            <!-- Menu deroulant PSEUDO-->

            <nav>
                <ul>
                <li>
                    <button class="dropdown-toggle">Pseudo</button>
                    <ul class="dropdown-menu">
                    <li><a href="/favorite" use:link>Favoris</a></li>
                    <li><a href="/create-story" use:link>Créer une histoire</a></li>
                    <li><a href="/settings" use:link>Gestion du compte</a></li>
                    <li><a href="/my-story" use:link>Mes histoires</a></li>
                    <li><button id="logout-btn">Se déconnecter</button></li>
                    </ul>
                </li>
                </ul>
            </nav>

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
    nav {
        background-color: #1C2942;
        color: #fff;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        display: inline-block;
        position: relative;
    }

    a {
        color: #fff;
        display: block;
        padding: 10px;
        text-decoration: none;
    }

    button {
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
        display: block;
        font-size: 16px;
        padding: 10px;
        text-align: left;
        width: 100%;
    }

    .dropdown-toggle {
        border-radius: 25px;
    }

    .dropdown-menu {
        background-color: #1C2942;
        display: none;
        list-style: none;
        padding: 0;
        position: absolute;
        right: 0;
        top: 100%;
        z-index: 1;
    }

    .dropdown-menu li {
        display: block;
    }

    .dropdown-toggle:focus + .dropdown-menu,
    .dropdown-menu:focus {
        display: block;
    }
            
</style>