<template>
    <Dialog :visible="open" modal :header="title" :class="computedModal" :style="{ width: '300px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <slot name="modal-text"/>
    </Dialog>
</template>

<script setup>
import { computed } from 'vue';
import Dialog from 'primevue/dialog';

// props para receber a classe do modal
const modalProp = defineProps(
{
    variant:
    {
        type: String,
        default: ''
    },
    open: Boolean,
    title: String,    
})

// essa função recebe o props com o valor da classe de acordo com o retorno da requisição, de deu errado retorna failed se deu certo retorna succes
// se for passado um nome diferente das classes o modal vira com um background branco
const computedModal = computed(() =>
{    
    return['p-dialog', modalProp.variant ? `${modalProp.variant}` : '']
})

</script>


<style>
    .p-dialog{
        padding: 15px;
    }

    .p-dialog .p-dialog-header{
        padding: 0.5rem;
    }

    .p-dialog .p-dialog-content{
        color: black;
        padding: 5px;
    }

    .success{
        background-color: chartreuse;
    }

    .failed{
        background-color:red;
    }
</style>