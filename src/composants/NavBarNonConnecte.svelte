<script>
import logo from '../assets/logo-thestoryteller.png'
</script>

<main>
    <header class="header">
        <nav class="nav-bar-nonconnected">
            <a href="index.html" class="header__logo">
            
                <img src={logo} alt="Story Teller logo">
            </a>
            <form action="recherche.php" class="header__search">
                <label for="recherche" class="header__search-label"><i class="fa-solid fa-magnifying-glass"></i></label>
                <input type="text" id="recherche" name="recherche" placeholder="Recherchez" class="header__search-input"> 
            </form>
            <a href="connexion.html" class="header__connect">Connexion</a>
        </nav>
    </header>
</main>