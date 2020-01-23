<template>
    <q-page padding>
        <div class="row q-gutter-xl">
            <div class="col-12 col-md-8">Search Movie</div>
        </div>
        <div>
            <q-input v-model="text" filled type="search" label="Movie title...">
              <template v-slot:append>
                <q-btn name="search" color="primary" label="Primary" @click="searchbutton" />
              </template>
            </q-input>
<<<<<<< HEAD
=======
            <q-btn color="teal" @click="showLoading" label="Show Loading" />
>>>>>>> 9e3ffff01b9ce424551a4e6a23ed62c6eba11fa7
        </div>
        <template>
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card" flat bordered>
              <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />

              <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="dark" label="Share" />
                <q-btn flat color="primary" label="Book" />

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

              <q-slide-transition>
                <div v-show="expanded">
                  <q-separator />
                  <q-card-section class="text-subitle2">
                    {{ lorem }}
                  </q-card-section>
                </div>
              </q-slide-transition>
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
<<<<<<< HEAD
      this.text = 'oi'
=======
      this.text = 'input'
    },
    showLoading () {
      this.$q.loading.show()

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 2000)
>>>>>>> 9e3ffff01b9ce424551a4e6a23ed62c6eba11fa7
    }
  }
}
</script>
