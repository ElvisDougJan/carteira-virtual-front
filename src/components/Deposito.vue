<template>
  <div>
    <v-card class="pa-3">
      <v-card-title primary-title>Valor salvo em depósito.</v-card-title>
      <v-layout row wrap justify-center>
        <h3>R$ {{qtdDeposito}}</h3>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props:{
    atualizaDeposito: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    qtdDeposito: 0
  }),

  watch: {
    atualizaDeposito: function () {
      if (this.atualizaDeposito) {
        this.consultaDeposito()
      }
    }
  },

  methods: {
    async consultaDeposito() {
      this.qtdDeposito = 0
      await axios.get(`${process.env.VUE_APP_API}deposito`)
        .then(res => this.qtdDeposito = res.data.qtdDeposito)
        .catch(err => console.error('ERRO AO CONSULTAR DEPOSITO', err))
      }
  },

  mounted() {
    this.consultaDeposito()
  }
};
</script>
