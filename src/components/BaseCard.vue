<template>
    <Card>
        <template #title> <slot name="title"/> </template>
        <template #content>
            <p class="m-0">
                <slot name="content" />
            </p>
            <br>
            <button>
            <slot name="text-button"/>
            </button>
        </template>
    </Card>
</template>

<script setup>
import Card from 'primevue/card';
</script>

<style scoped>

    .p-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 450px;
        height: 300px;
        padding: 1rem;
        text-align: center;
    }

    .p-card .p-card-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    button{
        width: 100px;
        height: 40px;
        background-color: #2c9465;
        border-radius: 12px;
        border: 1px black solid;
    }

    button:hover{
        background-color: #2c9465dd;
    }

    button:active{
       background-color: #247852;
    }

</style>