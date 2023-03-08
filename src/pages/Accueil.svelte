<script>
    import imghomepage from "../assets/img-homepage.jpg";
    import { link } from "svelte-spa-router";
</script>
<body>
    <main>
        <div class="background">
            <h1 class="main__title">
                Bienvenue sur
                <div class="waviy">
                    <span style="--i:1">S</span>
                    <span style="--i:2">T</span>
                    <span style="--i:3">O</span>
                    <span style="--i:4">R</span>
                    <span style="--i:5">Y</span>
                    <span style="--i:6" />
                    <span style="--i:7">T</span>
                    <span style="--i:8">E</span>
                    <span style="--i:9">L</span>
                    <span style="--i:10">L</span>
                    <span style="--i:11">E</span>
                    <span style="--i:12">R</span>
                </div>
            </h1>
            <div class="main__buttons">
                <a href="/reading-page" use:link
                    ><button class="main__button">Lire</button></a
                >
                <a href="/createStory" use:link
                    ><button class="main__button">Écrire</button></a
                >
            </div>
            <div id="scroll-text">
                <h3 class="main__subtitle">
                    Votre histoire originale pourrait être le prochain
                    best-seller
                </h3>
            </div>
            <div class="main__image-text">
                <img src={imghomepage} alt="accueil" />
                <div class="main__text">
                    <h3 class="main__text-title">
                        Découvrez des écrivains et partagez entre amis
                    </h3>
                    <p class="main__text-paragraph">
                        Story Teller est un site de lecture en ligne où vous
                        pouvez découvrir <br> de nouveaux récits et partager
                        vos propres histoires avec la communauté. <br>
                        Rejoignez-nous dès maintenant pour une expérience de lecture
                        unique.
                    </p>
                </div>
            </div>
        </div>
    </main>
</body>
<style>
    body {
        background: linear-gradient(
            45deg,
            #5FC2BA,
            #B6D1CE,
            rgba(246, 246, 246, 1)
        );
        background-size: cover;
        margin: 0;
        padding: 0;
    }
    h1 {
        margin-top: 0;
        margin-bottom: 45px;
        padding-top: 35px;
        line-height: 60px;
    }
    .waviy {
        position: relative;
        -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
        font-size: 60px;
    }
    .waviy span {
        font-family: "Alfa Slab One";
        position: relative;
        display: inline-block;
        color: rgb(6, 6, 6);
        text-transform: uppercase;
        animation: waviy 1s infinite;
        animation-delay: calc(0.1s * var(--i));
    }
    @keyframes waviy {
        0%,
        40%,
        100% {
            transform: translateY(0);
        }
        20% {
            transform: translateY(-20px);
        }
    }
    img {
        width: 25%;
        height: 60%;
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 25px;
        border-radius: 25px;
    }
    .main__button {
        width: 80%;
        justify-content: center;
        align-items: center;
        font-size: larger;
        font-weight: 600;
        margin: 10px;
        border-radius: 5px;
        padding: 15px 60px;
    }
    button:hover {
        color: #5FC2BA;
        font-size: x-large;
        font-weight: bolder;
        transition: 0.3seconds;
    }
    .main__title {
        color: #3B556D;
    }
    .main__subtitle {
        width: 0;
        overflow: hidden;
        white-space: nowrap;
        font-size: 1.5rem;
        margin: 15px auto;
        font-family: "Courier New";
        border-right: 0.15em solid #5FC2BA;
        animation: typing 4s steps(38) 1s 1 normal both,
            blink 1s steps(1) infinite;
    }
    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }
    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }
    h3 {
        font-weight: 400;
        padding-top: 25px;
    }
    .main__text {
        border: 20px;
        border-color: #5FC2BA;
    }
    .main__text-title {
        font-weight: 600;
    }
    .main__text-paragraph{
        text-align: justify;
    }
    p {
        line-height: 30px;
        text-align: justify;
        vertical-align: auto;
    }
    /* Style pour les petits écrans */
@media screen and (max-width: 767px) {
  /* Réduire la taille de la police pour une meilleure lisibilité */
  body {
    font-size: 14px;
    width: 100%;
  }
  /* Centrer les éléments du header */
  header {
    text-align: center;
  }
  /* Mettre le logo en haut de la page */
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .main__button {
    width: 1px;
    margin: 0;
  }
  .waviy {
    font-size: 2rem;
    align-items: center;
  }
  .main__subtitle {
    font-size: 0.8rem;
    width: 0.5rem;
  }
  /* Augmenter la taille de la police des titres */
  h1, h2, h3 {
    font-size: 28px;
  }
  /* Réduire la taille de la police du texte */
  p {
    font-size: 12px;
    text-align: center;
  }
  /* Réduire la largeur de la carte */
  .card {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
}
/* Style pour les écrans moyens */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  /* Augmenter la taille de la police pour une meilleure lisibilité */
  body {
    font-size: 16px;
  }
  /* Centrer les éléments du header */
  header {
    text-align: center;
  }
  /* Mettre le logo en haut de la page */
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  /* Augmenter la taille de la police des titres */
  h1, h2, h3 {
    font-size: 32px;
  }
  /* Réduire la taille de la police du texte */
  p {
    font-size: 18px;
  }
  /* Réduire la largeur de la carte */
  .card {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}
/* Style pour les grands écrans */
@media screen and (min-width: 1024px) {
  /* Augmenter la taille de la police pour une meilleure lisibilité */
  body {
    font-size: 18px;
  }
  /* Centrer les éléments du header */
  header {
    text-align: center;
  }
  /* Mettre le logo en haut de la page */
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  /* Augmenter la taille de la police des titres */
  h1, h2, h3 {
    font-size: 1px;
  }
  /* Réduire la taille de la police du texte */
  p {
    font-size: 15px;
  }
  /* Réduire la largeur de la carte */
  .card {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}
</style>









