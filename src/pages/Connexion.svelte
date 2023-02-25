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
    let username = ''

    function signin(e) {
        e.preventDefault()


        if (email.length > 0 && password.length > 0 && username.length > 0) {
            getAPI().post('/auth/login', {
                    username,
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
<body aria-labelledby="title1">

    <form action ="#" class="form" aria-label="Informations de connexion" on:submit={signin}>
        <h2 class="form__title">Connexion</h2>
        <p class="form__paragraph">Vous n'avez pas de compte?<a href="/inscription" class="form__link">Inscrivez-vous</a></p>

        <div class="form__container">
            <div class="form__group">
                
                <input type="name" name="name" class="form__input" placeholder=" " bind:value={username}>
                <label for="email"class="form__label">Pseudo</label>
                <span class="form__line"></span>
            </div>
            <div class="form__group">
                
                <input type="name" name="email" class="form__input" placeholder=" " bind:value={email}>
                <label for="email"class="form__label">email</label>
                <span class="form__line"></span>
            </div>
            <div class="form__group">
                
                <input required type="password" name="password" class="form__input" placeholder=" " bind:value={password}>
                <label for="password" class="form__label">Mot de passe</label>
                <span class="form__line"></span>
            </div>

            <input type="submit" class="form__submit" value="Se connecter">
        </div>
    </form>
   <!-- <div class="container">
        <h1 id="title1">Connexion</h1>

        <form action="#" aria-label="Informations de connexion" on:submit={signin}>

            <label for="email">email</label>
            <input required type="name" name="email" id="email" placeholder="mon email" bind:value={email}>

            <label for="password">Mot de passe</label>
            <input required type="password" name="password" id="password" placeholder="***********"
                bind:value={password}>
            
            <input class="submit-button" type="submit" value="Se connecter">
          
        </form>
        <h2>Vous n'avez pas de compte? <a aria-label="lien vers l'inscription" href="/Inscription"
                use:link>Inscrivez-vous</a></h2>

    </div>
    -->
</body>
<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courier New', Courier, monospace;
    background-color: #e5e5f7;
    opacity: 0.7;
    background-image: radial-gradient(#5FC2BA 0.75px, #e5e5f7 0.75px);
    background-size: 15px 15px;
    display: flex;
    min-height: 100vh;
}

.form{
    background-color: #ffffff;
    margin:auto;
    width:90%;
    max-width: 400px;
    padding: 4.5em 3em;
    border-radius: 10px;
    box-shadow: 0 5px 10px -5px rgb(0 0 0 / 30%);
    text-align: center;
}
.form__title{
    font-size: 2rem ;
    margin-bottom: .6rem;
    color: #1C2942;
    font-weight: bold;
    

}

.form__paragraph{
    font-weight: 300;
    
}

.form__link{
    font-weight: 600;
    color:rgb(0, 102, 255);
}
.form__container{
    margin-top: 3rem;
    display:grid;
    gap: 2.5em;

}

.form__group{
    position: relative;
    --color:#5757577e;
}

.form__input{
    width: 100%;
    background: none;
    color: #1C2942;
    font-size: 1rem;
    padding: .6em .3em;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color);
    font-family: 'Courier New', Courier, monospace;
}

.form__input:not(:placeholder-shown){
    color:#1C2942;
}

.form__input:focus + .form__label{
    transform:translateY(-12px) scale(.7);
    transform-origin: left top;
    color:#5FC2BA;
}

.form__label{
    color: var(--color);
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 5px;
    transform: translateY(10px);
    transition: transform .5s, color .3s;
    font-size: 20px;
    font-weight: bold;

}

.form__submit{
    background-color:  #1C2942;
    color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: 1rem;
    padding: .8em 0;
    border: none;
    border-radius: .5em;


}

.form__submit:hover{
    background-color: #5FC2BA;
    transition: .3s;
    color:  #1C2942;
}

.form__line{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color:  #1C2942;
    transform: scale(0);
    transform:left bottom; 
    transition: transform .4s;
}

.form__input:focus + .form__line,
.form__input:not(:placeholder-shown) + .form__line{
    transform: scale(1);

}

@media (max-width:425px){
    .form__title{
        font-size: 1.8rem;
    }
}



</style>