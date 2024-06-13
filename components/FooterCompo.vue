<template>
    <footer>
        <img src="/img/Logoo.svg" alt="">
        <!-- <NuxtLink to="/MentionsLegales">Mentions Légales</NuxtLink>
        <NuxtLink to="/PolitiquesConfidentialites">Politique de confidentialité</NuxtLink> -->
    </footer>
</template>

<style>
footer{
    width: 100%;
    height: 100px;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
}
footer img{
    width: 200px !important;
    height: auto !important;
}


@media screen and (max-width: 650px) {
    footer{
        flex-direction: column;
        gap: 15px;
        padding-bottom: 50px;
    }
}
</style>