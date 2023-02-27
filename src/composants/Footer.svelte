<script>
    export let data;
</script>

<footer>
    <nav class="footer-nav">
        <ul class="footer-links">
          {#each data.links as link}
            {#if link.displayInFooter}
              <li class="footer-item">
                <a href={link.url}>{link.linkText}</a>
              </li>
            {/if}
          {/each}
        </ul>
        <div class="social-media-icons">
            
                <i class="fab fa-facebook-f"></i>
           
                <i class="fab fa-twitter"></i>
            
                <i class="fab fa-instagram"></i>
           
        </div>

        <button class="back-to-top" aria-label="Retour en haut de page">
            <i class="fas fa-arrow-up"></i>
        </button>
</footer>


<style>   
 
.footer-nav {
  background-color: #222;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
}

.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.footer-item {
  margin: 0.5rem;
  font-size: 1.2rem;
}

.footer-item a {
  color: #fff;
  text-decoration: none;
}

.footer-item:hover {
  border-bottom: 2px solid #fff;
}

.social-media-icons {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.social-media-icons a {
  color: #fff;
  margin-right: 1rem;
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #222;
  color: #fff;
  border: none;
  font-size: 2rem;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 9999;
}

.back-to-top:hover {
  background-color: #fff;
  color: #222;
  transform: scale(1.1);
}

    
    </style> 
