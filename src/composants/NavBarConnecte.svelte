    <header>
        <nav class="nav-bar1" aria-label="header navigation">
            <a href="/" class="logo" title="The Story Teller" aria-label="accueil du site">
                <img src="./img/logo-thestoryteller.png" alt="Logo de l'application">
            </a>
            <a href="/stories" class="connexion" title="link connexion"
                aria-label="lien vers la page de connexion">Connexion</a>
        </nav>
        <!-- Menu deroulant PSEUDO-->

        <div class="dropdown">
            <button class="mainmenubtn">Pseudo</button>
            <div class="dropdown-child">
                <a href="">Favoris</a>
                <a href="">Créer une histoire</a>
                <a href="">Gestion du compte</a>
                <a href="">Mes histoires</a>
                <a href="">Se deconnecter</a>
            </div>
        </div>

        <!-- Search bar-->
        <nav class="nav-bar2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input id="searchbar" onkeyup="search_something()" type="text" name="search" placeholder="Rechercher">
        </nav>

    </header>
