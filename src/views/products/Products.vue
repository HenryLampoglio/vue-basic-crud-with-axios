<template>
    <main>
        <aside>
            <h1>Lista de produtos</h1>
            <DinamicTable 
            :items="itemProducts"
            field1="name_product"
            field2="price"
            header1="Nome do Produto"
            header2="preço"/>
        </aside>
        <section class="cards">
            <BaseCard>
                <template v-slot:title >Adicionar um produto</template>
                <template v-slot:content>
                    adicione um novo produto ao banco de dados da empresa, este card te levara a um formulario onde você pode preencher as informações de um novo produto 
                </template>
                <template v-slot:text-button>
                    <router-link to="/products/create" class="links">Adicionar</router-link>
                </template>
            </BaseCard>

            <BaseCard>
                <template v-slot:title >Ver um produto</template>
                <template v-slot:content>
                    verifique os detalhes de um produto no banco de dados, este card te levara a uma aba de pesquisa onde você ira inserir o id do produto que deseja verificar
                </template>
            
                <template v-slot:text-button>
                    <router-link to="/products/search" class="links">IR</router-link>
                </template>
            </BaseCard>
            
            <BaseCard>
                <template v-slot:title >Editar um produto</template>
                <template v-slot:content>
                    Edite um produto do banco de dados, este card ira te levar a um formulario para inserir o id do produto que deseja alterar
                </template>
                <template v-slot:text-button>
                    <router-link to="/products/put" class="links">Editar</router-link>
                </template>
            </BaseCard>
            

            <BaseCard>
                <template v-slot:title >Exclua um produto</template>
                <template v-slot:content>
                    Exclua um produto do banco de dados, este card te levara a uma aba de pesquisa para inserir o id do produto que deseja excluir do banco de dados
                </template>
                <template v-slot:text-button>
                    <router-link to="/products/search" class="links">
                       IR
                    </router-link>   
                </template>
            </BaseCard>
        </section>     
    </main>
</template>

<script setup>
    import BaseCard from '../../components/BaseCard.vue'
    import DinamicTable from '../../components/DinamicTable.vue';
    import apiClient from '../../helpers/axios';
    import { ref } from "vue";

    let itemProducts = ref([])

    apiClient.get('products/',{
        }).then(function (response){
            itemProducts.value = []
            itemProducts = response.data
        })


</script>

<style scoped>
     main{
    min-height: calc(100vh - 80px);
    width: 100%;
    background-color: whitesmoke;
    display: flex;
 }
    aside{
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cards{
        width: 55%;
        display: grid;
        grid-template-columns: 400px 400px;
        column-gap: 80px;
        row-gap: 80px;
        justify-content: center;
        padding-top: 100px;
    }

    .links{
        text-decoration: none;
        color: black;
       
    }
    

</style>