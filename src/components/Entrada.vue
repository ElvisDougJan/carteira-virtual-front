<template>
  <div>
    <v-card class="pa-4" width="100%">
      <v-layout row wrap justify-center>
        <h4 class="mb-4">Entrada</h4>
        <!-- <v-card-text>Saída</v-card-text> -->
        <!-- <v-btn color="primary" class="elevation-0" round>Adicionar</v-btn> -->
      </v-layout>
      <v-layout row>
        <v-text-field label="Nova entrada" type="number" box v-model="novaEntrada.qtdEntrada"></v-text-field>
      </v-layout>
      <v-layout row>
        <v-text-field label="Descrição" box v-model="novaEntrada.descricao"></v-text-field>
      </v-layout>
      <v-layout row wrap justify-end>
        <v-btn color="success" round class="elevation-0" @click="criarNovaEntrada">Salvar</v-btn>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    novaEntrada: {
      qtdEntrada: null,
      descricao: null
    }
  }),

  methods: {
    async criarNovaEntrada() {
      await axios.post(`${process.env.VUE_APP_API}entrada`, this.novaEntrada)
        .then(() => {
          this.$emit('atualizaDeposito')
        })
        .catch(err => console.error('Erro ao criar nova entrada',err))
    }
  }
};
</script>

