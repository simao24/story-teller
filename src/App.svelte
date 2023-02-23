<script>
    import Router from 'svelte-spa-router';

    import Accueil from "./pages/Accueil.svelte";
    import Connexion from './pages/Connexion.svelte';
    import Footer from "./composants/Footer.svelte";
    import NavBarNonConnecte from "./composants/NavBarNonConnecte.svelte";
  
    import ReadingNoConnected from './pages/ReadingNoConnected.svelte';
   


    const routes = {
    '/': Accueil,
    '/connexion': Connexion,
    '/ReadingNoConnected': ReadingNoConnected,

  };
</script>
<header>
    <NavBarNonConnecte/>
</header>
<main>
    
    <Router {routes} />
</main>

    <Footer/>

