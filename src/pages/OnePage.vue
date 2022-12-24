<template>
  <q-page padding>
    <!-- content -->
    One page
    <pre>{{ myVar }}</pre>
    <q-input v-model="myVar"></q-input>
    <pre>{{ computedEx }}</pre>
    <q-btn label="Zmen na Gabro" @click="gabro"></q-btn>
  </q-page>
</template>

<script setup>
// import { computed } from '@vue/reactivity'
import { computed, ref } from 'vue'

const myVar = ref('Some Message')
const computedEx = computed(() => {
  return myVar.value + ' dalsi text'
})

const gabro = () => {
  myVar.value = 'Gabro'
}
</script>
