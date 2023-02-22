<script>
    import Router from 'svelte-spa-router';

    import Accueil from "./composants/Accueil.svelte";
    import Connexion from './composants/Connexion.svelte';
    import Footer from "./composants/Footer.svelte";
    import NavBarNonConnecte from "./composants/NavBarNonConnecte.svelte";


    const routes = {
    '/': Accueil,
    '/Connexion': Connexion
    ,
  };
</script>
<header>
    <NavBarNonConnecte/>
</header>
<main>
    
    <Router {routes} />
</main>
<footer>
    <Footer/>

</footer>