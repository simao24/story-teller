<script>
    import Router from 'svelte-spa-router';

    import Accueil from "./composants/Accueil.svelte";
    import Footer from "./composants/Footer.svelte";
    import NavBarNonConnecte from "./composants/NavBarNonConnecte.svelte";


    const routes = {
    '/': Accueil
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