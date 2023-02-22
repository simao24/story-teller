<body>

  <header class="header">
        <a href="index.html" class="header__logo">
            <img src="logo-thestoryteller.png" alt="Story Teller logo" class="logo">
        </a>

        <form action="recherche.php" class="header__search">
            <label for="recherche" class="header__search-label"></label>
            <input type="text" id="recherche" name="recherche" class="header__search-input">
            <input type="submit" value="Rechercher" class="header__search-submit">
        </form>

        <a href="connexion.html" class="header__connect">Connexion</a>
    </header>

    <main>
        <h1>DETAIL D'UNE HISTOIRE</h1>

        <div class="storydetails">
            <div class="storydetail-img">
                <img src="image_exemple.jpg" alt="Image du livre">
            </div>

            <div class="storydetail-infos">
                <h2>TITRE DE L'HISTOIRE</h2>
                <h3>Auteur</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
                    Possimus est ullam voluptatibus asperiores soluta dignissimos,<br>
                    praesentium hic dolorum ipsum perspiciatis quod, cum tenetur deleniti non,<br>
                    necessitatibus adipisci. Enim, dicta aliquid.<br>
                </p>
            </div>
        </div>

    </main>

    <footer class="footer">
      <a href="https://twitter.com/"><img src="votre_icone_twitter.png" alt="Twitter" class="footer__icon"></a>
      <a href="https://www.facebook.com/"><img src="votre_icone_facebook.png" alt="Facebook" class="footer__icon"></a>
      <a href="https://www.instagram.com/"><img src="votre_icone_instagram.png" alt="Instagram" class="footer__icon"></a>
    </footer>

</body>
