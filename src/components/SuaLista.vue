<template>
     <section>
            <span class="subtitulo-lg sua-lista-texto">Sua lista:</span>
            <ul
                class="ingredientes-sua-lista"
                v-if="props.ingredientes.length > 0">
                    <li 
                        v-for="ingrediente in props.ingredientes"
                        :key="ingrediente">
                            <tag 
                                :texto="ingrediente"
                                ativa />
                    </li>
            </ul>
            <p
                class="paragrafo lista-vazia"
                v-else>
                    <img src="../assets/icones/lista-vazia.svg" alt="Icone de pesquisa">
                    Sua lista está vazia, selecione ingredientes para iniciar.
            </p>
        </section>
</template>

<script setup>

import { defineProps } from 'vue'

import Tag from './Tag.vue'

const props = defineProps({
    ingredientes: Array
})

</script>

<style scoped>

.sua-lista-texto {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}

.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    color: var(--coral, #F0633C);
    text-align: center;
}

</style>