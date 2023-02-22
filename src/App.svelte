<script>

import Footer from "./composants/Footer.svelte";
import NavBarNonConnecte from "./composants/NavBarNonConnecte.svelte";


</script>

<body>
    <main>
       <NavBarNonConnecte/>
       
       
            <h1 class="main__title">Bienvenue sur Story Teller</h1>
            <div class="main__buttons">
                <a href="/readingNoConnected"><button class="main__button">Lecture</button></a>
                <a href="ecrire.html"><button class="main__button">Ecrire</button></a>
            </div>
            <h3 class="main__subtitle">Votre histoire originale pourrait être le prochain best-seller</h3>
            <div class="main__image-text">
                <img src="../assets/img-homepage.jpg" alt="Votre image" class="main__image">
                <div class="main__text">
                    <h3 class="main__text-title">Découvrez des écrivains et partagez entre amis</h3>
                    <p class="main__text-paragraph">Story Teller est un site de lecture en ligne où vous pouvez découvrir de
                        nouveaux récits et partager vos propres histoires avec la communauté. Rejoignez-nous dès maintenant
                        pour une expérience de lecture unique.</p>
                </div>
            </div>
       
       <Footer/>
      
    </main>
</body>