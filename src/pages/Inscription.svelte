<script>
    import { link } from "svelte-spa-router";
</script>

<main aria-labelledby="title1">
    <div class="container">
        <h1 id="title1">Inscription</h1>

        <form action="#" aria-label="Informations de connexion">
            
            <label for="pseudo">Pseudo</label>
            <input required type="pseudo" name="pseudo" id="pseudo" placeholder="pseudo">

            <label for="email">email</label>
            <input required type="name" name="email" id="email" placeholder="mon email">

            <label for="password">Mot de passe</label>
            <input required type="password" name="password" id="password" placeholder="***********">

            <label for="confirm">Confirmer le mot de passe</label>
            <input required type="confirm" name="confirm" id="confirm" placeholder="***********">

            <input type="submit" value="S'inscrire">

        </form>
            
    </div>
</main>