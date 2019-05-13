<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 md4 offset-md1 sm4 offset-sm1>
        <Entrada class="mt-3" @atualizaDeposito="atualizarDeposito"/>
      </v-flex>
      <v-flex xs12 md4 offset-md1 sm4 offset-sm1>
        <Saida class="mt-3" @atualizaDeposito="atualizarDeposito"/>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <Deposito class="mt-5" :atualizaDeposito="atualizaDeposito"/>
    </v-layout>
    <ListaEntradas/>
  </div>
</template>

<script>
import Entrada from "@/components/Entrada";
import Saida from "@/components/Saida";
import Deposito from "@/components/Deposito";
import ListaEntradas from "@/components/ListaEntradas";

export default {
  components: {
    Entrada,
    Saida,
    Deposito,
    ListaEntradas
  },

  data: () => ({
    atualizaDeposito: false
  }),

  methods: {
    atualizarDeposito() {
      setTimeout(() => {
        this.atualizaDeposito = true;
      }, 100);
      this.atualizaDeposito = false;
    }
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

