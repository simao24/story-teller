<script>
    import Router from 'svelte-spa-router';

    import Accueil from "./composants/Accueil.svelte";
    import Connexion from './composants/Connexion.svelte';
    import Footer from "./composants/Footer.svelte";
    import NavBarNonConnecte from "./composants/NavBarNonConnecte.svelte";
    import NavBarConnecte from './composants/NavBarConnecte.svelte';
    import ReadingNoConnected from './composants/ReadingNoConnected.svelte';
    import ReadingConnected from './composants/ReadingConnected.svelte';
    import GestionDeCompte from './composants/GestionDeCompte.svelte';
    import CreateStory from './composants/CreateStory.svelte';
    import MyStory from './composants/MyStory.svelte';
    import StoryDetail from './composants/StoryDetail.svelte';


    const routes = {
    '/': Accueil,
    '/Connexion': Connexion,
    '/ReadingNoConnected': ReadingNoConnected,

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