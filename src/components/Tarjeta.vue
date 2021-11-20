<template lang="html">
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="200px"
          v-bind:src="poster"
        ></v-img>
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Datos
          </div>
          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Titulo: {{titulo}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Clave: {{id}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Tipo: {{tipo}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Año: {{fecha}}</strong>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Tarjeta',
  props: ['id', 'titulo', 'tipo', 'fecha', 'poster']
}
</script>
<style>

</style>
