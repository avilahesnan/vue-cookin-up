<template>
    <span :class="['tag', { ativa }]">
        {{ props.texto }}
    </span>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    texto: String,
    ativa: Boolean
})

</script>

<style scoped>

.tag {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--cinza);
    background: var(--cinza-claro);
    font-weight: 400;
}

.ativa {
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}

</style>