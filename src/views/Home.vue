<template>
    <main>

        <BaseCard>
            <template v-slot:title >Adicionar um produto</template>
            <template v-slot:content>
                Atalho para adicionar um novo produto ao banco de dados da empresa, você pode verificar as demais funções envolvendo produtos na aba produtos 
            </template>
            <template v-slot:text-button>
                <router-link to="products/create" class="links">Adicionar</router-link>
            </template>
        </BaseCard>

        <BaseCard>
            <template v-slot:title >Adicionar Distribuidor</template>
            <template v-slot:content>
                Atalho para adicionar um novo distribuidor ao banco de dados da empresa, você pode verificar as demais funções envolvendo distribuidores na aba distribuidores 
            </template>Adicio
            <template v-slot:text-button><router-link to="/distributors/create" class="links">adicionar</router-link></template>
        </BaseCard>
        
        <BaseCard>
            <template v-slot:title >Ver um produto</template>
            <template v-slot:content>
                Atalho para verificar um produto no banco de dados da empresa, você pode verificar as demais funções na aba produtos 
            </template>
        
            <template v-slot:text-button><router-link to="products/search" class="links">Ir</router-link></template>
        </BaseCard>

        <BaseCard>
            <template v-slot:title >Ver um distribuidor</template>
            <template v-slot:content>
                Atalho para verificar um distribuidor no banco de dados da empresa, você pode verificar as demais funções  na aba distribuidores 
            </template>
            <template v-slot:text-button><router-link to="distributors/search" class="links">Ir</router-link></template>
        </BaseCard>
        
    </main>
</template>

<script setup>
    import BaseCard from '../components/BaseCard.vue';
</script>

<style scoped>

 main{
    min-height: calc(100vh - 80px);
    width: 100%;
    padding-top: 50px;
    display: grid;
    grid-template-columns: 400px 400px;
    column-gap: 100px;
    row-gap: 20px;
    justify-content: center;
    background-color: whitesmoke;
 }

 .links{
    text-decoration: none;
    color: black;
 }

</style>