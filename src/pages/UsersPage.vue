<script setup>
import { ref } from 'vue'

const data = ref([
  {
    id: 1,
    name: 'Jan Hrbek',
    email: 'jhr@email.cz'
  },
  {
    id: 2,
    name: 'Jana Hrbkova',
    email: 'jhra@email.cz'
  },
  {
    id: 3,
    name: 'Nikol Hrbkova',
    email: 'niki@email.cz'
  },
  {
    id: 4,
    name: 'Martin Hrbek',
    email: 'martik@email.cz'
  },
  {
    id: 5,
    name: 'Michael Hrbek',
    email: 'miky@email.cz'
  }
])

const columns = [
  {
    field: 'id',
    name: 'id',
    align: 'center',
    label: 'ID'
  },
  {
    field: 'name',
    name: 'name',
    align: 'left',
    label: 'Jméno'
  },
  {
    field: row => 'email: ' + row.email,
    name: 'email',
    align: 'left',
    label: 'Hlavní email'
  }
]

const showDialog = ref(false)
const createUser = async () => {
  // const { err } = await createUserWithLaravel()
  console.log('create name=' + createUserForm.value.name + ' email=' + createUserForm.value.email)
  data.value.push({
    id: data.value.length + 1,
    name: createUserForm.value.name,
    email: createUserForm.value.email
  })

  showDialog.value = false
}
const createUserForm = ref({
  email: '',
  name: ''
})
</script>

<template>
  <q-page padding>
    <q-table
      :columns="columns"
      :rows="data"
      dark
      title="Uživatelé"
    >
      <template #top>
        <q-btn
          color="primary"
          icon="add"
          round
          @click="showDialog = true"
        />
      </template>
      <template #body-cell-name="props">
        <q-td :props="props">
          <q-input
            v-model="props.row.name"
            dense
            borderless
            color="white"
            class="text-white"
          />
        </q-td>
      </template>
      <template #body-cell-email="props">
        <q-td :props="props">
          <q-chip
            color="primary"
            class="text-white"
          >
            {{ props.row.email }}
          </q-chip>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="showDialog">
      <q-card
        class="full-width"
        style="max-width: 600px"
      >
        <q-toolbar>
          <q-toolbar-title>
            Přidání uživatele
          </q-toolbar-title>
          <q-btn
            v-close-popup
            flat
            round
            size="sm"
            icon="close"
          />
        </q-toolbar>
        <q-card-section>
          <q-input
            v-model="createUserForm.name"
            class="q-mb-md"
            filled
            label="name"
          />
          <q-input
            v-model="createUserForm.email"
            filled
            label="email"
          />
        </q-card-section>

        <q-btn
          class="full-width"
          color="primary"
          label="Uložit"
          @click="createUser"
        />
      </q-card>
    </q-dialog>
  </q-page>
</template>
