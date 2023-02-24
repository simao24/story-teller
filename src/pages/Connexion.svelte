<script>
    import {
        link,
    } from "svelte-spa-router";
    import { push } from 'svelte-spa-router';
    import {
        getAPI,
        setToken
    } from "../utils/api";


    let email = ''
    let password = ''

    function signin(e) {
        e.preventDefault()


        if (email.length > 0 && password.length > 0) {
            getAPI().post('/auth/login', {
                    email,
                    password
                })
                .then(function (result) {
                    setToken(result.data.data.access_token)
                    //push("/")
                    location.href = '/'
                })
                .catch(function () {
                    console.log('error')
                })
            /*fetch('https://w5sbygse.directus.app/auth/login', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            .then((response) => response.json())
            .then(function(data){
                console.log('ok', data)
            })
            .catch(function(){
                console.log('error')
            })*/
        } else {
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
            <input required type="password" name="password" id="password" placeholder="***********"
                bind:value={password}>

            <input type="submit" value="Se connecter">

        </form>
        <h2>Vous n'avez pas de compte? <a aria-label="lien vers l'inscription" href="/Inscription"
                use:link>Inscrivez-vous</a></h2>

    </div>
</main>