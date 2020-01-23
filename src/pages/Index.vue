<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  created () {
    this.$axios.get('http://www.omdbapi.com/?apikey=c0771d02&s=harrypotter')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
