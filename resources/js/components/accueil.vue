<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Bienvenue dans notre site</div>
                    <div class="card-body">Vous êtes à la page d'accueil</div>
                </div>
                <router-link to="/listart"><button type="button" class="btn btn-primary btn-lg">Liste Articles</button></router-link>
                <router-link to="/addarticle"><button type="button" class="btn btn-secondary btn-lg">Ajouter Article</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
