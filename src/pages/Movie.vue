<template>
    <q-page padding>
        <div class="row q-gutter-xl">
            <div class="col-12 col-md-8">Search Movie</div>
        </div>
        <div>
            <q-input v-model="text" filled type="search" label="Movie title...">
              <template v-slot:append>
                <q-btn name="search" color="primary" label="Search" @click="searchbutton" />
              </template>
            </q-input>
        </div>
        <template>
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card" flat bordered>
              <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />

              <q-card-section>
                <div class="text-h5 q-mt-sm q-mb-l">Judul Film</div>
                <div class="text-caption text-grey">Tahun</div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="dark" label="See Detail" />
              <q-space />

              <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
              />
              </q-card-actions>
            </q-card>
          </div>
        </template>

    </q-page>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    searchbutton () {
      this.text = 'Harry Potter'
    }
  },
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
