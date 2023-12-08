<template>
    <header>
        <router-link class="router" to="/products">PRODUTOS</router-link>
        <router-link class="router" to="/">HOME</router-link>
        <router-link class="router" to="/distributors">DISTRIBUIDORES</router-link>
    </header>
</template>

<script setup>

</script>

<style scoped>
    header{
        width: 100%;
        border-bottom: 1px black solid;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #2C9465;
        position: -webkit-sticky;
        position: sticky;
        top: -1px;
    }
    .router{
        margin-left: 80px;
        text-decoration: none;
        font-size: 2rem;
        color: #29332F;
    }


    .router:hover{
        color: #4F635A;
        transition: 0.75s;
    }

    .router:focus{
        color: #30FCA0;
    }

</style>