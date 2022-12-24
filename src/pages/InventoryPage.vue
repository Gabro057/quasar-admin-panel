<script setup>
const inventory = [
  {
    id: 1,
    label: 'Spicy Pants',
    description: 'Looks great in any era!',
    imageSrc: 'https://picsum.photos/300/180',
    categories: [
      {
        name: 'pants',
        color: 'green'
      },
      {
        name: 'clothes',
        color: 'blue'
      }
    ]
  },
  {
    id: 2,
    label: 'Spicy Pants',
    description: 'Looks great in any era!',
    imageSrc: 'https://picsum.photos/300/180',
    categories: [
      {
        name: 'pants',
        color: 'green'
      },
      {
        name: 'clothes',
        color: 'blue'
      }
    ]
  },
  {
    id: 3,
    label: 'Spicy Pants',
    description: 'Looks great in any era!',
    imageSrc: 'https://picsum.photos/300/180',
    categories: [
      {
        name: 'pants',
        color: 'green'
      },
      {
        name: 'clothes',
        color: 'blue'
      }
    ]
  }
]
</script>

<template>
  <q-page
    class="row justify-center"
    style="gap: 1rem"
    padding
  >
    <div
      v-for="item in inventory"
      :key="item.id"
      class="col full-width"
      style="min-width: 300px;max-width: 450px"
    >
      <q-card class="cursor-pointer">
        <q-img :src="item.imageSrc" />

        <h5 class="q-mb-none q-mt-sm q-ml-md text-grey-9">
          {{ item.label }}
          <q-chip
            v-for="category in item.categories"
            :key="category.id"
            :color="category.color"
            :label="category.name"
            text-color="white"
            size="sm"
          />
        </h5>

        <q-card-section>
          {{ item.description }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
