    <script>
    import imghomepage from "../assets/img-homepage.jpg"  
    
   

    </script>      
      
      <main>
        <h1 class="main__title">Bienvenue sur Story Teller</h1>
        <div class="main__buttons">
          <button>Lecture</button>
            <a href="lecture.html"><button class="main__button">Lecture</button></a>
            <a href="ecrire.html"><button class="main__button">Ecrire</button></a>
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
    
    <style lang="scss">
        img{
            width: 40%;
            height: 30%;
            margin-left: 45px;
            margin-right: 25px;
            border-radius: 10px;
           
        }
        .main__title {
      text-align: center;
      font-size: 36px;
      margin-top: 50px;
    }
    
    .main__buttons {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
    
    .main__button {
      background-color:#3B556D;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      margin: 0 10px;
      cursor: pointer;
    }
    
    .main__subtitle {
      text-align: center;
      font-size: 24px;
      margin-top: 50px;
    }
    
    .main__image-text {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
    }
    
    .main__image {
      width: 40%;
      margin-right: 20px;
      border-radius: 1em;
      margin: 1rem;
    }
    
    .main__text-title {
      font-size: 24px;
      margin-bottom: 20px;
    }
    
    .main__text-paragraph {
      font-size: 18px;
    }
    
    .like {
      margin-left: 350px;
      height: 3rem;
      color: #3B556D;
      width: 100%;
    }

    .fa-thumbs-up {
      color: #3B556D;
      justify-content: right;
    }
        
    </style>


