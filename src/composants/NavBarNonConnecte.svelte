<script>
import logo from '../assets/logo-thestoryteller.png'
</script>

<main>
    <header class="header">
        <a href="index.html" class="header__logo">
            
            <img src={logo} alt="Story Teller logo">
        </a>
        <form action="recherche.php" class="header__search">
            <label for="recherche" class="header__search-label">Recherche :</label>
            <input type="text" id="recherche" name="recherche" class="header__search-input">
            <input type="submit" value="Rechercher" class="header__search-submit">
        </form>
        <a href="connexion.html" class="header__connect">Connexion</a>
    </header>
</main>