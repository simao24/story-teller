<script>
    import Router from 'svelte-spa-router';

    import Accueil from "./pages/Accueil.svelte";
    import Connexion from "./pages/Connexion.svelte";
    import Footer from "./composants/Footer.svelte";
    import Navbar from "./composants/Navbar.svelte";
    import Readingpage from "./pages/Readingpage.svelte";
    import Settings from "./pages/Settings.svelte";
    import CreateStory from "./pages/CreateStory.svelte";
    import MyStory from "./pages/MyStory.svelte";
    import StoryDetail from "./pages/StoryDetail.svelte";
    import Error from "./pages/Error.svelte";


    const routes = {
        "/": Accueil,
        "/connexion": Connexion,
        "/reading-page": Readingpage,
        "/settings": Settings,
        "/create-story": CreateStory,
        "/my-story": MyStory,
        "/story-detail": StoryDetail,
        "*": Error,
    };

</script>

<Navbar/>

<Router {routes} />

<Footer/>
