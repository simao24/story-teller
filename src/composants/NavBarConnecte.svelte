    <script>
        import logo from '../assets/logo-thestoryteller.png'
        import {link} from 'svelte-spa-router'

        const nav_links = [
    {
        "text": "Favoris",
        "url": "/Favoris"
    },
    {
        "text": "Créer une histoire",
        "url": "/CreateStory"
    },
    {
        "text": "Gestion du compte",
        "url": "/GestionDeCompte"
    },
    {
        "text": "Mes histoires",
        "url": "/MyStory"
    },
    

]
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
                {#each nav_links as nav}
                <a href="{nav.url}"use:link>{nav.text}</a>
                <a href="{nav.url}">{nav.text}</a>
                <a href="{nav.url}">{nav.text}</a>
                <a href="{nav.url}">{nav.text}</a>
                <a href="{nav.url}">{nav.text}</a>
                {/each}
            </div>
        </div>

        <!-- Search bar-->
        <nav class="nav-bar2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input id="searchbar" onkeyup="search_something()" type="text" name="search" placeholder="Rechercher">
        </nav>

    </header>
