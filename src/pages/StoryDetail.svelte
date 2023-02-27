<script>
    import imghomepage from "../assets/img-homepage.jpg"
    

</script>
  
    <main>
        
        <h1>DETAIL D'UNE HISTOIRE</h1>
        <div class="storydetails">
            <div class="storydetail-img">
                <img src={imghomepage} alt="Image du livre">
                <i class="fa-solid fa-thumbs-up"></i>
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

<style>
    main{
    display: flex;
    flex-direction: column;
    align-items: center;
       
  }

  h1{
    margin-top: 40px;
    font-size: large;
  }

  .storydetails {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }

  .storydetail-img {
    position: relative;
    margin-right: 20px;
    margin-top: 65px;
}

.storydetail-img img {
  width: 400px;
  
}
.storydetail-img i {
  position: absolute;
  bottom: -30px;
  right: -5px;
  
}
  h2 {
    margin-top: -65px;
    margin-left: 50px;
  }

  h3 { 
    margin-left: 50px;
  }

  p {
    margin-left: 50px;
  }

</style>