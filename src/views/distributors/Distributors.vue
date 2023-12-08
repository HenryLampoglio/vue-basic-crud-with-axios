<template>
    <main>
        <section class="cards">
            <BaseCard>
                <template v-slot:title >Adicionar distribuidor</template>
                <template v-slot:content>
                    adicione um novo distribuidor ao banco de dados da empresa, este card te levara a um formulario onde você pode preencher as informações de um novo distribuidor 
                </template>
                <template v-slot:text-button><router-link to="/distributors/create" class="links">Adicionar</router-link></template>
            </BaseCard>

            <BaseCard>
                <template v-slot:title >Ver distribuidor</template>
                <template v-slot:content>
                    verifique os detalhes de um distribuidor no banco de dados, este card te levara a uma aba de pesquisa onde você ira inserir o id do distribuidor que deseja verificar
                </template>
            
                <template v-slot:text-button><router-link to="/distributors/search" class="links">Ir</router-link></template>
            </BaseCard>
            
            <BaseCard>
                <template v-slot:title >Editar distribuidor</template>
                <template v-slot:content>
                    Edite um distribuidor do banco de dados, este card ira te levar a um formulario para inserir o id do distribuidor que deseja alterar
                </template>
                <template v-slot:text-button><router-link to="distributors/put" class="links">Editar</router-link></template>
            </BaseCard>
            

            <BaseCard>
                <template v-slot:title >Excluir distribuidor</template>
                <template v-slot:content>
                    Exclua um distribuidor, este card te levara a uma aba de pesquisa para inserir o id do distribuidor que deseja excluir do banco de dados
                </template>
                <template v-slot:text-button><router-link to="/distributors/search" class="links">Ir</router-link></template>
            </BaseCard>
        </section>
        <aside>
            <h1>Lista de distribuidores</h1>
            <DinamicTable 
            :items="itemDistributors"
            field1="company_name"
            field2="adress"
            header1="Nome do Distribuidor"
            header2="Endereço"/>
        </aside>
    </main>
</template>

<script setup>
import BaseCard from '../../components/BaseCard.vue';
import DinamicTable from '../../components/DinamicTable.vue';

import { ref } from 'vue';
import apiClient from '../../helpers/axios';

let itemDistributors = ref([])

    apiClient.get('distributors/',{
        }).then(function (response){
            itemDistributors.value = []
            itemDistributors = response.data
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
        align-items: center;
        flex-direction: column;
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