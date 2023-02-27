<script>
    import { link } from "svelte-spa-router";
</script>

<main aria-labelledby="title1">
    
    <div class="favorites-container">

        <div class="profile-area">
            <img src="user_profile.jpeg" alt="Photo de profil">
            <h3 class="profile-username">Pseudo</h3>
        </div>

        <div class="stories">

            <h1 class="favoris">FAVORIS</h1>

            <div class="story">
                <div class="story-picture">
                    <img src="../accueil/img/adventure-img.jpeg" alt="Image de l'histoire" class="storyimage">
                    <div class="thumbs-up"><i class="fa-solid fa-thumbs-up"></i></div>
                </div>

                <div class="story-text">
                    <h3 class="story-title">Titre de l'histoire</h3>
                    <h4 class="author">Auteur</h4>
                    <p class="text-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laborum doloremque quae unde, fuga molestias maiores corporis, similique dolorum facilis aspernatur, inventore hic velit necessitatibus? Perspiciatis doloribus deserunt et autem ipsa iste, nulla, sapiente repellat officia ad dolorem vero. Nam.</p>
                </div>
            </div>
    
            <div class="story">
                <div class="story-picture">
                    <img src="../accueil/img/adventure-img.jpeg" alt="Image de l'histoire" class="storyimage">
                    <div class="thumbs-up"><i class="fa-solid fa-thumbs-up"></i></div>
                </div>

                <div class="story-text">
                    <h3 class="story-title">Titre de l'histoire</h3>
                    <h4 class="author">Auteur</h4>
                    <p class="text-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laborum doloremque quae unde, fuga molestias maiores corporis, similique dolorum facilis aspernatur, inventore hic velit necessitatibus? Perspiciatis doloribus deserunt et autem ipsa iste, nulla, sapiente repellat officia ad dolorem vero. Nam.</p>
                </div>
            </div>

        </div>
    </div>
</main>

<style>
    .favorites-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 15px;
    }

    h1 {
        text-align: center;
        margin-bottom: 100px;
    }

    .profile-area {
        width: 30%;
        margin-top: 100px;
    }

    .stories {
        margin: auto;
    }

    .story {
        width: 65%;
    }

    .thumbs-up {
        text-align: right;
    }

    .story-text {
        margin-left: 15px;
        margin-bottom: 15px;
    }
</style>