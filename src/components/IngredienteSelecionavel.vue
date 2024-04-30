<template>
    <button
        class="ingrediente"
        @click="aoClicar()"
        :aria-pressed="selecionado">
            <Tag
                :texto="props.ingrediente"
                :ativa="selecionado" />
    </button>
</template>

<script setup>

import { ref, defineProps, defineEmits } from 'vue'

import Tag from './Tag.vue'

const props = defineProps({
    ingrediente: String
})
const emit = defineEmits(['adicionarIngrediente', 'removerIngrediente'])
const selecionado = ref(false)
function aoClicar() {
    selecionado.value = !selecionado.value
    if(selecionado.value) {
        emit('adicionarIngrediente', props.ingrediente)
    }
    else {
        emit('removerIngrediente', props.ingrediente)
    }
}

</script>

<style scoped>

.ingrediente {
    cursor: pointer
}

</style>