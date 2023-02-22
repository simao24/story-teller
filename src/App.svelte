<script>
    import Router from 'svelte-spa-router';

    import Accueil from "./pages/Accueil.svelte";
    import Connexion from './pages/Connexion.svelte';
    import Footer from "./composants/Footer.svelte";
    import NavBarNonConnecte from "./composants/NavBarNonConnecte.svelte";
    import NavBarConnecte from './composants/NavBarConnecte.svelte';
    import ReadingNoConnected from './pages/ReadingNoConnected.svelte';
    import ReadingConnected from './pages/ReadingConnected.svelte';
    import GestionDeCompte from './pages/GestionDeCompte.svelte';
    import CreateStory from './pages/CreateStory.svelte';
    import MyStory from './pages/MyStory.svelte';
    import StoryDetail from './pages/StoryDetail.svelte';


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

    <Footer/>

