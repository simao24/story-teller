<script>
    let email = ''
    let password = ''


    function signin(e){
        e.preventDefault()
        

        if(email.length >0 && password.length > 0){
            fetch('https://w5sbygse.directus.app/auth/login', {
                method: 'POST', 
                body: JSON.stringify({
                    email,
                    password
                })
            })
            .then(function(res){
                console.log('ok', res)
            })
            .catch(function(){
                console.log('error')
            })
        }
        else{
          //  alert('champs vides')
        }

    }

</script>
<main aria-labelledby="title1">
    <div class="container">
        <h1 id="title1">Connexion</h1>

        <form action="#" aria-label="Informations de connexion" on:submit={signin}>

            <label for="email">email</label>
            <input required type="name" name="email" id="email" placeholder="mon email" bind:value={email}>

            <label for="password">Mot de passe</label>
            <input required type="password" name="password" id="password" placeholder="***********" bind:value={password}>

            <input type="submit" value="Se connecter">

        </form>
        <h2>Vous n'avez pas de compte? <a role="link" aria-label="lien vers l'inscription"
                href="#">Inscrivez-vous</a></h2>

    </div>
</main>
    


