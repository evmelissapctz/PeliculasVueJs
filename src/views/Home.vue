<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="4">
        <v-row>
          <hello-world />
        </v-row>
        <v-row>
          <v-text-field
            label="Busqueda"
            prepend-icon="mdi-map-marker"
            v-model="busqueda"
          ></v-text-field>
          <v-btn
            depressed
            color="secondary"
            x-small
            @click="valida">
            Buscar
          </v-btn>
        </v-row>
      </v-col>
      <v-col cols="8">
        <v-row v-for="pelicula in peliculas" :key="pelicula.imdbID">
          <v-col cols="12">
            <router-link :to="`/${pelicula.imdbID}`">
              <Tarjeta :id="pelicula.imdbID" :titulo="pelicula.Title" :tipo="pelicula.Type" :fecha="pelicula.Year" :poster="pelicula.Poster"/>
            </router-link>
            </v-col>
        </v-row>
        <v-row>
          <h1 v-if="peliculas === undefined">No se encontraron coincidencias</h1>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HelloWorld from '../components/HelloWorld'
import Tarjeta from '../components/Tarjeta.vue'

export default {
  name: 'Home',
  data () {
    return {
      busqueda: ''
    }
  },
  computed: {
    ...mapState(['peliculas'])
  },
  methods: {
    valida () {
      if (this.busqueda.length === 0) {
        alert('Es necesario escribir algo en el campo de texto para buscar')
        return
      }
      this.getPeliculas(this.busqueda)
    },
    ...mapActions(['getPeliculas'])
  },
  components: {
    HelloWorld,
    Tarjeta
  }
}
</script>
