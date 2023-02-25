<script>
  import {
    link
  } from "svelte-spa-router";
</script>
    <h1>Gestion de compte</h1>
    <div class="edit-container">
        <h2>Profil d'utilisateur</h2>
      <div class="edit-elements">
          <p>Photo de profil</p>
          <p>Pseudo</p>
          <p>Email</p>
          <p>Mot de passe</p>
      </div>
      

      <div class="edit-button">
      <button id="valider">Edit</button>
      </div>
 
    </div>
<style>


h1{
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
  padding: 25px;
  width: auto;
} 
h2{
text-align: center;
font-size: 25px;
margin-top: 0px;
width: auto;
} 

.edit-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  width: 50%;
  height: 250px;
}
.edit-elements p {
  display: inline-block;
  margin: 10px;
  margin-top: 10px; 
}
.edit-button{
  margin-top: auto;
}
</style>