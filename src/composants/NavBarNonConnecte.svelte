<script>
import logo from '../assets/logo-thestoryteller.png'
import {link} from 'svelte-spa-router'
    import Connexion from '../pages/Connexion.svelte';
    import Accueil from '../pages/Accueil.svelte';
    

</script>

<main>
    <header class="header">
        <nav class="nav-bar-nonconnected" >
            <a href="{Accueil}" class="header__logo"use:link>
            
                <img src={logo} alt="Story Teller logo">
            </a>
            <form action="recherche.php" class="header__search">
                <label for="recherche" class="header__search-label"><i class="fa-solid fa-magnifying-glass"></i></label>
                <input type="text" id="recherche" name="recherche" placeholder="Recherchez" class="header__search-input"> 
            </form>
            
            <a href="{Connexion}}" class="header__connect" use:link>Connexion</a>
            
        </nav>
    </header>
</main>