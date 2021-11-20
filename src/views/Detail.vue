<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="2">
        <v-img
          v-bind:src="pelicula.Poster"
          height="600"
        ></v-img>
      </v-col>
      <v-col cols="8">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Propiedad
                </th>
                <th class="text-left">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Actor</td>
                <td>{{ pelicula.Actors }}</td>
              </tr>
              <tr>
                <td>Descripción</td>
                <td>{{ pelicula.Plot }}</td>
              </tr>
              <tr>
                <td>Duración</td>
                <td>{{ pelicula.Runtime }}</td>
              </tr>
              <tr>
                <td>Pais</td>
                <td>{{ pelicula.Country }}</td>
              </tr>
              <tr>
                <td>Genero:</td>
                <td>{{ pelicula.Genre }}</td>
              </tr>
              <tr>
                <td>Lenguaje:</td>
                <td>{{ pelicula.Language }}</td>
              </tr>
              <tr>
                <td>Puntaje</td>
                <td v-if="pelicula.imdbRating >= 8.0" style="color: green">{{ pelicula.imdbRating }}</td>
                <td v-else-if="pelicula.imdbRating >= 5.0 && pelicula.imdbRating < 8.0" style="color: yellow">{{ pelicula.imdbRating }}</td>
                <td v-else style="color: red">{{ pelicula.imdbRating }}</td>
              </tr>
              <tr>
                <td>Sitio web: </td>
                <td>{{ pelicula.Website }}</td>
              </tr>
              <tr>
                <td>Año:</td>
                <td>{{ pelicula.Year }}</td>
              </tr>
              <tr>
                <td>Votos:</td>
                <td>{{ pelicula.imdbVotes }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="2">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Detail',
  computed: {
    ...mapState(['pelicula'])
  },
  methods: {
    ...mapActions(['getPelicula'])
  },
  created () {
    this.getPelicula(this.$route.params.id)
  }
}
</script>
