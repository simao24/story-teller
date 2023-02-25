    <script>
        import imghomepage from "../assets/img-homepage.jpg"
        import {
            link
        } from "svelte-spa-router";
    </script>
    <body>
        
    
    <main>
    <div class="background">
        <h1 class="main__title">Bienvenue sur 
        
                <div class="waviy">
                    <span style="--i:1">S</span>
                    <span style="--i:2">T</span>
                    <span style="--i:3">O</span>
                    <span style="--i:4">R</span>
                    <span style="--i:5">Y</span>
                    <span style="--i:6"></span>
                    <span style="--i:7">T</span>
                    <span style="--i:8">E</span>
                    <span style="--i:9">L</span>
                    <span style="--i:10">L</span>
                    <span style="--i:11">I</span>
                    <span style="--i:12">N</span>
                    <span style="--i:13">g</span>
                 
                </div>
        </h1>
        <div class="main__buttons">
            <img class="hand" src="./assets/hand.jpeg" alt="" srcset="">

            <a href="/reading-page" use:link><button class="main__button">Lire</button></a>
            <a href="/create-story" use:link><button class="main__button">Écrire</button></a>
        </div>
        <div id="scroll-text">
        <h3 class="main__subtitle">Votre histoire originale pourrait être le prochain best-seller</h3>
        </div>

        <div class="main__image-text">
            <img src={imghomepage} alt="accueil">
            <div class="main__text">
                <h3 class="main__text-title">Découvrez des écrivains et partagez entre amis</h3>
                <p class="main__text-paragraph">Story Teller est un site de lecture en ligne où vous pouvez découvrir de
                    nouveaux récits <br>  et partager vos propres histoires avec la communauté. <br>
                    Rejoignez-nous dès maintenant
                    pour une expérience de lecture unique.</p>
            </div>
        </div>
    </div>
    </main>

</body>
    <style>
    
   body{
        background: linear-gradient(45deg, #5fc2ba, #b6d1ce, rgba(246,246,246,1));
        background-size: cover;
        margin:0;
        padding:0;
    }
    .hand{
        width: 60%;;
    }
    h1{
     margin-top: 25px;
    margin-bottom:55px;
    }

    .waviy {
    position: relative;
    -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.2));
    font-size: 60px;
    }

    .waviy span {
    font-family: 'Alfa Slab One', cursive;
    position: relative;
    display: inline-block;
    color: rgb(6, 6, 6);
    text-transform: uppercase;
    animation: waviy 1s infinite;
    animation-delay: calc(.1s * var(--i));
  
    }
    @keyframes waviy {
     0%,40%,100% {
    transform: translateY(0)
    }
     20% {
        transform: translateY(-20px)
    }
    }
        
    img {
    width: 25%;
    height: 60%;
    margin-left: 50px;
    margin-right: 50px;
    border-radius: 25px;
    }

    .main__button{
    width: 80%;
    justify-content: space-between;
    align-items: center;
    font-size: larger;
    margin: 10px;
    border-radius: 5px;
          
    }
    button:hover{
    color:  #5FC2BA;
    font-weight: bolder;
    transition: .3seconds;
    }
     
    .main__title{
    color: #3B556D;     
    }

    .main__subtitle{
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    font-size: 1.5rem;
    margin: 15px auto;
    font-family: "Courier New";
    border-right: 0.15em solid #5FC2BA;
    animation: typing 4s steps(38) 1s 1 normal both, blink 1s steps(1) infinite;
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



Resources
       
      
    
    h3{
    font-weight: 400;
    }

    .main__text{
    border:20px;
    border-color: #5FC2BA;
    }

    .main__text-title{
    font-weight: 500;

    }
        
    p{
    line-height: 30px;
          
    }



    </style>