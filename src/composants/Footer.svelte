<script>
export function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
</script>

<footer>
    <nav class="footer-nav">
       
        <div class="social-media">
            <ul> 
              <li>
                <a href="1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fa fa-facebook"></span>
               
              </li>
              <li>
                
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fa fa-twitter"></span>
                
              </li>
              <li>
                
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fa fa-instagram"></span>
                 
              </li>
              <li>
               
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fa fa-linkedin"></span>
                
              </li>
            </ul>  
          </div> 

        
            <div class="contact">
                <p>Contact : thestoryteller.maya5@gmail.com</p>
            </div>
            <div class="footer-name">
                <p>© The Story Teller 2023</p>
            </div>
            
            <button on:click={scrollToTop}>🔝</button>

            
</footer>



<style>   

@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
 

.footer-nav {
  background-color: #3B556D;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  display: flex;
  align-items: center;
  
}


* {
  padding: 0px;
  margin: 0px;
}

 ul {
   position: relative;
   display: flex;
   
   transform-style: preserve-3d;
   align-items: center;
   justify-content: center;
   
}
ul li {
    
  position: relative;
  list-style: none;
  width: 30px;
  height: 30px;
  margin: 0px 20px;
}
ul li:before{
  content: '';
  position: absolute;
  bottom: -10px;
  left: -5px;
  width: 100%;
  height: 10px;
  background: #1C2942;
  transform-origin: top;
  transform: skewX(-41deg);
}
ul li:after{
  content: '';
  position: absolute;
  top:5px;
  left: -9px;
  width: 9px;
  height: 100%;
  background: #2a2a2a;
  transform-origin: right;
  transform: skewY(-49deg);

}
ul li span{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex !important;
  background: #2a2a2a;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 25px !important;
  transition: 1.5s ease-out;
}
ul li:hover span {
  z-index: 1000;
  transition: .3s;
  color: #fff;
  box-shadow: -1px 1px 1px rgba(0, 0, 0, .5);
}
ul li:hover span:nth-child(5){
  transform: translate(40px, -40px);
  opacity: 1;
}
ul li:hover span:nth-child(4){
  transform: translate(30px, -30px);
  opacity: .8;
}
ul li:hover span:nth-child(3){
  transform: translate(20px, -20px);
  opacity: .6;
}
ul li:hover span:nth-child(2){
  transform: translate(10px, -10px);
  opacity: .4;
}ul li:hover span:nth-child(1){
  transform: translate(0px, 0px);
  opacity: .2;
}
ul li:nth-child(1):hover span{
  background: #52E19F !important;
}
ul li:nth-child(2):hover span{
  background: rgba(3, 148, 245, 0.895) !important;
}
ul li:nth-child(3):hover span{
  background: #EA6E96 !important;
}
ul li:nth-child(4):hover span{
  background: rgba(47, 3, 245, 0.895) !important;
  
}
@media (max-width:425px){
    .footer-nav{
        font-size: 1.8rem;
    }
}


    </style> 


