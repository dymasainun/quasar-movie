<template>
  <q-page class="q-pa-md">
    <q-input
        v-model="search"
        debounce="1000"
        filled
        placeholder="Search"
      >
        <template v-slot:append>
          <button class="btn q-btn--outline-secondary" type="button"
          id="button-addon2">Button</button>
        </template>
      </q-input>    
  </q-page>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>

<style>
</style>
