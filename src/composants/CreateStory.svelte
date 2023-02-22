<body>
  <header class="header">
    <a href="index.html" class="headerlogo">
      <img src="./assets/logo-thestoryteller.png" alt="Story Teller logo">
    </a>
    <form action="recherche.php" class="headersearch">
      <label for="recherche" class="headersearch-label">Recherche :</label>
      <input type="text" id="recherche" name="recherche" class="headersearch-input">
      <input type="submit" value="Rechercher" class="headersearch-submit">
    </form>
    <div class="dropdown">
      <button class="mainmenubtn">Pseudo</button>
      <div class="dropdown-child">
        <a href="">Favoris</a>
        <a href="">Créer une histoire</a>
        <a href="">Gestion du compte</a>
        <a href="">Mes histoires</a>
        <a href="">Se deconnecter</a>
      </div>

    </div>
  </header>
  <main>


    <section class="section-left">
      <img src="vite.svg" alt="image-profil">
      <h4>pseudo</h4>
    </section>
    <section class="section-centrale">
      <h2> Profil utilisateur</h2>
      <label for="story">ecrire une histoire</label>
      <textarea id="story" name="story" rows="5" cols="33">
            ça claque sa......
        </textarea>

      <button>envoyer</button>

    </section>

    <section class="sec-histoire">

      <div class="menu-deroulant-histoires"><a href="#">menu déroulant</a>
        <div class="sous-menu">
          <a href="#">Modifier</a>
          <a href="#">Supprimer</a>
          <a href="#">ajouter une image</a>
        </div>
      </div>
    </section>
  </main>

</body>

