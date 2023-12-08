<template>
    <BaseModal 
        v-if="modalOpen" 
        @click="onCloseModal()"
        :title="modalTitle" 
        :open="modalOpen" 
        :variant="modalIf">
        <template v-slot:modal-text> 
            {{ modalText }}
        </template>
    </BaseModal>

    <label class="search-bar"><InputText type="text" :placeholder="placeHolderText" v-model="idValue" maxlength="36"/><Button @click="searchItem()" icon="pi pi-search" aria-label="Search" rounded /></label>
    
    <!-- form com os v-models para enviar os dados alterados ao banco de dados -->
    <form v-if="isProductForm"  @submit.prevent="databaseResponse()">
        <label>Nome do produto<br> 
            <InputText type="text" required v-model="product.name_product" />
        </label>
        <br>
        <label>Preço do produto<br> 
            <InputText type="text" required v-model="product.price" />
        </label>
        <br>
        <label for="textArea"> Descrição do produto </label>
        <TextArea id="textArea" cols="30" rows="10" v-model="product.description" />
        <br>
        <label> Código do distribuidor <br>
            <InputText type="text" required v-model="product.distributor_id" maxlength="36"/>
        </label>
        <br>
        <Button label="Criar Produto" type="submit"/>
    </form>

    <form v-else-if="isDistributorForm" @submit.prevent="databaseResponse()">
        <label>Nome da empresa<br> 
        <InputText type="text" required v-model="distributor.company_name" />
        </label>
        <br>
        <label>Endereço da empresa<br> 
        <InputText type="text" required v-model="distributor.adress" />
        </label>
        <br>
        <label for="textArea"> Descrição da empresa </label>
            <TextArea id="textArea" cols="30" rows="10" v-model="distributor.description"/>
        <br>
        <Button label="Criar distribuidor" type="submit"/>
    </form>

</template>

<script setup>
import apiClient from '../../helpers/axios';
import BaseModal from '../BaseModal.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import TextArea from 'primevue/textarea';
import 'primeicons/primeicons.css'

import { ref } from 'vue';

// variaveis do modal
let modalOpen = ref(false)
let modalIf = ref('')
let modalTitle = ref('')
let modalText = ref('')

let idValue = ref('')

// objeto que sera alterado e enviado ao banco de dados
let product = ref({
    name_product: '',
    price: 0.0,
    description: '',
    distributor_id: '',
})

let distributor = ref({
    company_name: '',
    adress: '',
    description: '',
})

const props = defineProps({
    path: String,
    isProductForm: Boolean,
    isDistributorForm: Boolean,
    placeHolderText: String,
})

const onCloseModal = () =>
{
    modalOpen.value = false
    return modalOpen
}

// função para enviar os dados ao banco

const searchItem = () =>{
        if(props.isDistributorForm){
            apiClient.get(`${props.path}/{distributor_id}?ditributor_id=${idValue.value}`
        ).then(function (response){        
                distributor.value = response.data                
            }).catch(function (error){
                    modalIf.value = 'failed'
                    modalTitle.value = 'Distribuidor não encontrado'
                    modalText.value = 'O Distribuidor não foi encontrado no sistema verifique se foi inserido o id correto'
                    modalOpen.value = true
            })
        }else if(props.isProductForm){
            apiClient.get(`${props.path}/${idValue.value}`
            ).then(function (response){        
                product.value = response.data                
            }).catch(function (error){
                    modalIf.value = 'failed'
                    modalTitle.value = 'Produto não encontrado'
                    modalText.value = 'O produto não foi encontrado no sistema verifique se foi inserido o id correto'
                    modalOpen.value = true
            })
        }
    }

const databaseResponse = () =>
{
    if(props.isDistributorForm){
        apiClient.put(`${props.path}/${idValue.value}`,distributor.value
        ).then(function (response){
            modalIf.value = 'success'
            modalTitle.value = 'SUCESSO'
            modalText.value = 'Distribuidor criado com sucesso'
            modalOpen.value = true
            distributor.value.company_name = ''
            distributor.value.adress = ''
            distributor.value.description = ''
        }).catch(function(error){
            console.log(error)
            modalIf.value =  'failed'
            modalTitle.value =  'ERRO'
            modalText.value =  'Erro ao criar um distribuidor, verifique se ja não existe no sistema'
            modalOpen.value =  true
        })
    }else if(props.isProductForm){
        apiClient.put(`${props.path}/${idValue.value}`,product.value
        ).then(function (response){
            modalIf.value = 'success'
            modalTitle.value = 'SUCESSO'
            modalText.value = 'Produto criado com sucesso'
            modalOpen.value = true
            product.value.name_product = ''
            product.value.price = ''
            product.value.description = ''
            product.value.distributor_id = ''
        }).catch(function(error){
            modalIf.value ='failed'
            modalTitle.value ='ERRO'
            modalText.value = 'Erro ao criar produto, verifique se ja não existe no sistema'
            modalOpen.value =true
        })

    }
}


</script>

<style scoped>
    form{
        width: 30%;
        background-color: #2c9465dd;
        display: flex;
        flex-direction: column;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    }

    input{
        width: 350px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid gray;
        padding: 10px;
    }
    
    textarea{
        padding: 10px 12px;
        border-radius: 5px;
        border: 1px solid gray;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }

    .search-bar{
        width: 520px;
        height: 45px;
        border: 1px grey solid;
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 20px;
    }

    .search-bar input{
        width: 450px;
        border: none;
        margin-right: 20px;
    }

    .search-bar button{
        width: 30px;
        height: 30px;
        position: static;
    }

    input::placeholder{
        text-align: center;
    }

    .p-button{
        align-self: center;
        width: 200px;
      
        border: 1px solid gray;

    }
</style>