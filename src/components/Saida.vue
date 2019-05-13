<template>
  <div>
    <v-card class="pa-4" width="100%">
      <v-layout row wrap justify-center>
        <h4 class="mb-4">Saída</h4>
        <!-- <v-card-text>Saída</v-card-text> -->
        <!-- <v-btn color="primary" class="elevation-0" round>Adicionar</v-btn> -->
      </v-layout>
      <v-layout row>
        <v-text-field label="Nova saída" box v-model="novaSaida.qtdSaida"></v-text-field>
      </v-layout>
      <v-layout row>
        <v-text-field label="Descrição" box v-model="novaSaida.descricao"></v-text-field>
      </v-layout>
      <v-layout row wrap justify-end>
        <v-btn color="green lighten-1" dark round class="elevation-0" @click="criaNovaSaida">Salvar</v-btn>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    novaSaida: {
      qtdSaida: null,
      descricao: null
    }
  }),

  methods: {
    async criaNovaSaida () {
      await axios.post(`${process.env.VUE_APP_API}saida`, this.novaSaida)
        .then(() => {
          this.$emit('atualizaDeposito')
        })
        .catch(err => console.error('ERRO AO CRIAR SAÍDA', err))
    }
  }
}
</script>
