<template>
  <q-page padding>
    <!-- content -->
    One page
    <pre>{{ myVar }}</pre>
    <q-input v-model="myVar"></q-input>
    <pre>{{ computedEx }}</pre>
  </q-page>
</template>

<script>
// import { computed } from '@vue/reactivity'
import { computed, ref } from 'vue'

export default {
  setup () {
    const myVar = ref('Some Message')
    const computedEx = computed(() => {
      return myVar.value + ' dalsi text'
    })

    return {
      myVar,
      computedEx
    }
  }
}
</script>
