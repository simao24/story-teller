    <script>
        import logo from '../assets/logo-thestoryteller.png'
	    import Router, {location, link} from 'svelte-spa-router';


        function signoutHandle(){
            //script de déconnexion
        }
    </script>
    <header>
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
            <input id="searchbar" onkeyup="search_something()" type="text" name="search" placeholder="Rechercher">
        </nav>

    </header>
