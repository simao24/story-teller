<script>
    
    import imghomepage from "../assets/img-homepage.jpg"
    import {
        link
    } from "svelte-spa-router";

    const get_stories = async () => {
        const response = await fetch(import.meta.env.VITE_API_URL_GET_ITEMS + "/story?fields=*,user_id.*,category_id.*");
        const json = await response.json();
        return json.data;
        
    }

</script>


<main aria-labelledby="title1">
    <div class="container-reading">
        <h1 id="title1">HISTOIRES</h1>
        <!-- Menu déroulant-->

        <nav class="nav-categories">
            <ul>
                <li class="menu-deroulant-categories"><a href="#" use:link>Catégories</a>
                    <ul class="sous-menu">
                        <li><a href="/aventures" use:link>Aventures</a></li>
                        <li><a href="/Science-fiction" use:link>Science-fiction</a></li>
                        <li><a href="/Thriller" use:link>Thriller</a></li>
                        <li><a href="/Romantique"use:link>Romantique</a></li>
                        <li><a href="/Horreur" use:link>Horreur</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        {#await get_stories()}
        <p>Chargement de la liste...</p>
        {:then stories} 
        {#each stories as story}
        <div class="card">
            
            <img src={imghomepage} alt="aventure au pole Nord">
            <a href="/favorite" class="fa-regular fa-thumbs-up" use:link></a>
                        <div class="container">
                <h4><b>{story.title}</b></h4>
                <span class="auteur">Auteur:</span>
                <p>{story.user_id.pseudo}</p>
                <span class="description">Description:</span>
                <p>{story.resume} </p>
                {story.category_id.category}
                
            </div>
            </div>
        {/each}
        {/await}
        
</main>

<style>
    img {
    width: 25%;
    height: 60%;
    margin-left: 50px;
    margin-right: 50px;
    border-radius: 25px;
    }

</style>