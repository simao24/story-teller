    <script>
        import imghomepage from "../assets/img-homepage.jpg"
        import {
            link
        } from "svelte-spa-router";
    </script>

    <main>
        <h1 class="main__title">Bienvenue sur Story Teller</h1>
        <div class="main__buttons">

            <a href="/reading-page" use:link><button class="main__button">Lecture</button></a>
            <a href="/create-story" use:link><button class="main__button">Ecrire</button></a>
        </div>
        <h3 class="main__subtitle">Votre histoire originale pourrait être le prochain best-seller</h3>
        <div class="main__image-text">
            <img src={imghomepage} alt="accueil">
            <div class="main__text">
                <h3 class="main__text-title">Découvrez des écrivains et partagez entre amis</h3>
                <p class="main__text-paragraph">Story Teller est un site de lecture en ligne où vous pouvez découvrir de
                    nouveaux récits et partager vos propres histoires avec la communauté. Rejoignez-nous dès maintenant
                    pour une expérience de lecture unique.</p>
            </div>
        </div>
    </main>


    <style>
        img {
            width: 20%;
            height: 50%;
        }
    </style>