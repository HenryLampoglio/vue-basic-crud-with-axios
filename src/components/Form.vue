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

    <label class="search-bar" v-if="isUpdateForm"><InputText type="text" :placeholder="placeHolderText" v-model="idValue" maxlength="36"/><Button @click="searchItem()" icon="pi pi-search" aria-label="Search" rounded /></label>
    
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
        <Button label="Editar Produto" type="submit"/>
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
        <Button label="Editar distribuidor" type="submit"/>
    </form>

</template>

<script setup>
import apiClient from '../helpers/axios';
import BaseModal from './BaseModal.vue';
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


// props passado pelo componente pai
const props = defineProps({
    isProductForm: Boolean,
    isDistributorForm: Boolean,
    placeHolderText: String,
    isUpdateForm: Boolean,
})

// função para fechar o modal
const onCloseModal = () =>
{
    modalOpen.value = false
    return modalOpen
}

// função para receber os dados do banco para edita-los
const searchItem = () =>{
        // verifica se a requisiação foi feito por um componente da aba de distribuidor ou de produto
        if(props.isDistributorForm)
        {
            apiClient.get(`distributors/{distributor_id}?ditributor_id=${idValue.value}`
        ).then(function (response)
        {        
                distributor.value = response.data                
            }).catch(function (error)
            {
                    modalIf.value = 'failed'
                    modalTitle.value = 'Distribuidor não encontrado'
                    modalText.value = 'O Distribuidor não foi encontrado no sistema verifique se foi inserido o id correto'
                    modalOpen.value = true
            })
        }else if(props.isProductForm)
        {
            apiClient.get(`products/${idValue.value}`
            ).then(function (response)
            {        
                product.value = response.data                
            }).catch(function (error)
            {
                    modalIf.value = 'failed'
                    modalTitle.value = 'Produto não encontrado'
                    modalText.value = 'O produto não foi encontrado no sistema verifique se foi inserido o id correto'
                    modalOpen.value = true
            })
        }
    }


// função para enviar os dados alterados ao banco
const databaseResponse = () =>
{   
    if(!props.isUpdateForm){
        if(props.isDistributorForm)
        {
            apiClient.post('distributors/',distributor.value
            ).then(function (response)
            {
                modalIf.value = 'success'
                modalTitle.value = 'SUCESSO'
                modalText.value = 'Distribuidor criado com sucesso'
                modalOpen.value = true

                distributor.value.company_name = ''
                distributor.value.adress = ''
                distributor.value.description = ''
            }).catch(function(error)
            {
                console.log(error)
                modalIf.value =  'failed'
                modalTitle.value =  'ERRO'
                modalText.value =  'Erro ao criar um distribuidor, verifique se ja não existe no sistema'
                modalOpen.value =  true
            })
        }else if(props.isProductForm)
        {
            apiClient.post('products/',product.value
            ).then(function (response)
            {
                modalIf.value = 'success'
                modalTitle.value = 'SUCESSO'
                modalText.value = 'Produto criado com sucesso'
                modalOpen.value = true

                product.value.name_product = ''
                product.value.price = ''
                product.value.description = ''
                product.value.distributor_id = ''
            }).catch(function(error)
            {
                modalIf.value ='failed'
                modalTitle.value ='ERRO'
                modalText.value = 'Erro ao criar produto, verifique se ja não existe no sistema'
                modalOpen.value =true
            })
        }
    }    
    if(props.isUpdateForm){
        if(props.isDistributorForm)
        {
            apiClient.put(`distributors/${idValue.value}`,distributor.value
            ).then(function (response)
            {
                modalIf.value = 'success'
                modalTitle.value = 'SUCESSO'
                modalText.value = 'Distribuidor criado com sucesso'
                modalOpen.value = true
                
                distributor.value.company_name = ''
                distributor.value.adress = ''
                distributor.value.description = ''
            }).catch(function(error)
            {
                console.log(error)
                modalIf.value =  'failed'
                modalTitle.value =  'ERRO'
                modalText.value =  'Erro ao criar um distribuidor, verifique se ja não existe no sistema'
                modalOpen.value =  true
            })
        }else if(props.isProductForm)
        {
            apiClient.put(`products/${idValue.value}`,product.value
            ).then(function (response)
            {
                modalIf.value = 'success'
                modalTitle.value = 'SUCESSO'
                modalText.value = 'Produto criado com sucesso'
                modalOpen.value = true

                product.value.name_product = ''
                product.value.price = ''
                product.value.description = ''
                product.value.distributor_id = ''
            }).catch(function(error)
            {
                modalIf.value ='failed'
                modalTitle.value ='ERRO'
                modalText.value = 'Erro ao criar produto, verifique se ja não existe no sistema'
                modalOpen.value =true
            })
        }
    }
}


</script>

<style scoped>
    .search-bar{
        width: 600px;
        height: 50px;
        border: 1px grey solid;
        border-radius: 5px;
        padding: 5px 0px 5px 20px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    }

    .search-bar input{
        width: 450px;
        border: none;
        margin-right: 12%;
    }

    .search-bar button{
        width: 30px;
        height: 30px;
        position: static;
    }

    input::placeholder{
        text-align: center;
    }

    form{
        width: 30%;
        background-color: #2c9465dd;
        display: flex;
        flex-direction: column;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    }

    .p-inputtext{
        width: 100%;
        height: 35px;
        border-radius: 5px;
        border: 1px solid gray;
        padding: 10px;
    }
    
    .p-inputtextarea{
        padding: 10px 12px;
        height: 10%;
        border-radius: 5px;
        border: 1px solid gray;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }

    .p-button{
        border-radius: 10px;
    }

    @media(max-width: 1150px){
        form{
            width: 50%;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
    }
    @media(max-width: 800px){
        form{
            width: 90%;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        .search-bar{
            width: 95%;
            height: 50px;
            padding-left: 40px;
        }

        .search-bar input{
            width: 85%;
            margin-right: 4%;
        }

    }
</style>