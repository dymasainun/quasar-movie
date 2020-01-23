<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  created () {
<<<<<<< HEAD
    this.$axios.get('http://www.omdbapi.com/?apikey=c0771d02&s=harrypotter')
=======
    this.$axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c0771d02')
>>>>>>> 9e3ffff01b9ce424551a4e6a23ed62c6eba11fa7
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
