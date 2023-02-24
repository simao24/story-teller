<script>
    import Router from 'svelte-spa-router';

    import Accueil from "./pages/Accueil.svelte";
    import Connexion from "./pages/Connexion.svelte";
    import Inscription from './pages/Inscription.svelte';
    import Navbar from "./composants/Navbar.svelte";
    import Readingpage from "./pages/Readingpage.svelte";
    import Settings from "./pages/Settings.svelte";
    import CreateStory from './pages/createStory.svelte';
    import MyStory from "./pages/MyStory.svelte";
    import Favorite from './pages/Favorite.svelte';
    import StoryDetail from "./pages/StoryDetail.svelte";
    
    import Error from "./pages/Error.svelte";


    const routes = {
        "/": Accueil,
        "/connexion": Connexion,
        "/inscription": Inscription,
        "/reading-page": Readingpage,
        "/settings": Settings,
        "/create-story": CreateStory,
        "/favorite": Favorite,
        "/my-story": MyStory,
        "/story-detail": StoryDetail,
        "*": Error,
    };

</script>
<header>
    <Navbar/>
</header>
<main>
    <Router {routes} />
</main>
<footer>
    
</footer>

