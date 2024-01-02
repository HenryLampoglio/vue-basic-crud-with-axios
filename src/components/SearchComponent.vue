<template>
    <BaseModal
    @click="onCloseModal()"
    :title="modalTitle" 
    :open="modalOpen" 
    :variant="modalIf">
        <template v-slot:modal-text> 
            {{ modalText }}
        </template>
    </BaseModal>  

    <!-- área para pesquisar ou excluir um produto determinado pelo seu id-->
    <section>
        <InputText maxlength="36" type="text" v-model="idValue" placeholder="insira o id aqui" />
        <br>
        <Button @click="showItem()" label="mostrar"/>  
        <Button @click="deleteItem()" label="excluir"/>
    </section>

    <!-- card com os produto o produto no qual o id foi pesquisado -->
    <Card v-if="itemCardIF && props.isProduct" class="item-card">
        <template #title><div class="title-card">{{ item.name_product }}</div></template>
        <template #content>
            Código: {{ item.id }} <br>
            Preço: {{ item.price }} <br>
            Descrição: {{ item.description }} <br>
            Código do distribuidor: {{ item.distributor_id }}
        </template>    
    </Card>
    
    <Card v-else-if="itemCardIF && props.isDistributor">
        <template #title><div class="title-card">{{ item.company_name }}</div></template>
        <template #content>
            Código: {{ item.id }} <br> 
            Endereço: {{ item.adress }} <br>
            Descrição: {{ item.description }}
        </template>
    </Card>
</template>

<script setup>
import BaseModal from './BaseModal.vue';
import { ref } from 'vue';
import apiClient from '../helpers/axios';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/button';

// variaveis necessarias do modal
let modalIf = ref('')
let modalTitle = ref('')
let modalText = ref('')
let idValue = ref('')
let modalOpen = ref(false)

let itemCardIF = ref(false)
let item = ref({})

    //função para fechar o modal
    const onCloseModal = () =>
    {
        modalOpen.value = false
        return modalOpen
    }

    // variavel para mostrar um item especifico pelo id
    const showItem = () =>
    {
        // verifica se valor passado tenho tamanho padrão de um id
        if(idValue.value.length == 36)
        {
            if(props.isProduct)
            {
                apiClient.get(`${props.path}/${idValue.value}`,{
                }).then(function (response)
                {
                    itemCardIF.value = true
                    item.value = response.data               
                }).catch(function (error)
                {
                        console.log(error)
                        modalIf.value = 'failed'
                        modalTitle.value = 'Erro'
                        modalText.value = 'produto não encontrado no sistema'
                        modalOpen.value = true
                })
            }
            else
            {
                apiClient.get(`${props.path}/{distributor_id}?ditributor_id=${idValue.value}`,{
                }).then(function (response) 
                {
                    itemCardIF.value = true
                    item.value = response.data
                    console.log(response.data)                
                }).catch(function (error)
                {
                        console.log(error)
                        modalIf.value = 'failed'
                        modalTitle.value = 'Erro'
                        modalText.value = 'distribuidor não encontrado no sistema'
                        modalOpen.value = true
                })
            }
        }
    }

    // função para excluir um produto a partir do seu id
    const deleteItem = () =>
    {
        apiClient.delete(`${props.path}/${idValue.value}`,{
        }).then(function (response)
        {
            modalIf.value = 'success'
            modalTitle.value = 'Sucesso'
            modalText.value = 'Item excluido com sucesso do sistema'
            modalOpen.value = true                
        }).catch(function (error)
        {
            modalIf.value = 'failed'
            modalTitle.value = 'Erro'
            modalText.value = 'não foi possivel excluir item do sistema'
            modalOpen.value = true
        })
    }

    const props = defineProps({
        path: String,
        isProduct: Boolean,
        isDistributor: Boolean,
    })
</script>

<style scoped>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
    }
    
    .p-inputtext{
        width: 500px;
        height: 30px;
        padding: 15px;
    }

    .p-inputtext::placeholder{
        text-align: center;
    }

    .p-button{
        width: 400px;
        height: 40px;
        border-radius: 10px;
        margin-bottom: 30px;
        font-size: 0.9rem;
        color: black;
    }

   .buttons:hover{
        background-color: #2c9465dd;
        cursor: pointer;
    }

    .buttons:active{
       background-color: #247852;
    }

    .p-card{
        width: 450px;
        height: 230px;
    }

    .title-card{
        text-align: center;
        margin-bottom: 5px;
    }
    @media(max-width: 500px){
        .p-card{
            width: 350px;
            height: 230px;
        }

        .p-inputtext{
            width: 350px;
        }

        .p-button{
            width: 250px;
        }
    }
</style>