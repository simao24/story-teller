<script>
    import { link } from "svelte-spa-router";
</script>

<main aria-labelledby="title1">
    <h1 class="favoris">FAVORIS</h1>

    <div class="stories-container">
        <div class="story">
                <div class="story-picture-icon">        
                    <img src="../accueil/img/adventure-img.jpeg" alt="Image de l'histoire" class="story__image">
                    <div class="story-thumbs">
                        <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                </div>
                <div class="story-text">
                    <h3 class="story-title">Titre de l'histoire</h3>
                    <h4 class="author">Auteur</h4>
                    <p class="text-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laborum doloremque quae unde, fuga molestias maiores corporis, similique dolorum facilis aspernatur, inventore hic velit necessitatibus? Perspiciatis doloribus deserunt et autem ipsa iste, nulla, sapiente repellat officia ad dolorem vero. Nam.</p>
                </div>
            </div>

            <div class="story">
                <div class="story-picture-icon"> 
                    <img src="../accueil/img/Captura de Pantalla 2023-02-21 a las 11.16.21.png" alt="Image de l'histoire" class="story__image">
                    <div class="story-thumbs">
                        <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                </div>
                <div class="story-text">
                    <h3>Titre de l'histoire</h3>
                    <h4 class="author">Auteur</h4>
                    <p class="text-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laborum doloremque quae unde, fuga molestias maiores corporis, similique dolorum facilis aspernatur, inventore hic velit necessitatibus? Perspiciatis doloribus deserunt et autem ipsa iste, nulla, sapiente repellat officia ad dolorem vero. Nam.</p>
                </div>
        </div>
    </div>
</main>

<style>
    h1 {
        text-align: center;
        margin-top: 15px;
        margin-bottom: 100px;
    }

    .stories-container {
        margin: auto;
        width: 50%;
    }

    .story-picture-icon, .story-text {
        flex-direction: column;
    }

    .story-thumbs {
        text-align: right;    
    }

    .story-picture-icon {
        margin-bottom: 50px;
    }

    .story-text {
        margin-left: 20px;
    }
</style>