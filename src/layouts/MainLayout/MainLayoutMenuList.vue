<script setup>
import menuItems from './menuItems'
</script>

<template>
  <q-list>
    <q-item class="bg-primary text-white">
      <q-item-section>
        <q-item-label>
          Menu
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      v-for="item in menuItems"
      :key="item.label"
      :to="item.to"
    >
      <q-item-section>
        {{ item.label }}
      </q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-selection>
        TEXT
      </q-item-selection>
    </q-item>
  </q-list>
</template>
