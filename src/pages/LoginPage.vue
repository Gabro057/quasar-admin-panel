<template>
  <q-page class="flex flex-center" padding>
    <q-card
      class="full-width"
      style="max-width: 370px"
    >
      <q-card-section
        class="text-center"
        style="font-size: 1.3em"
      >
        Login
      </q-card-section>
      <q-card-section>
        <q-input
          class="q-mb-md"
          filled
          label="Email"
          v-model="form.email"
        />
        <q-input
          filled
          label="Password"
          type="password"
          v-model="form.password"
        />
      </q-card-section>

      <q-btn
        class="full-width"
        color="primary"
        label="Login"
        @click="login"
      />
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  email: '',
  password: ''
})

const login = () => {
  // axios.post('/login', form.value)
  console.log('login value=' + form.value.email + ' psw=' + form.value.password)
}
</script>
