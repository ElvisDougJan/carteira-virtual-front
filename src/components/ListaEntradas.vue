<template></template>


<script>
import axios from "axios";
export default {
  data: () => ({}),

  methods: {
    consultaTodasEntradas() {
      axios
        .get(`${process.env.VUE_APP_API}entrada`)
        .then(res => console.log(res.data))
        .catch(err => console.error("ERRO AO CONSULTAR ENTRADAS"));
    }
  },

  mounted() {
    this.consultaTodasEntradas();
  }
};
</script>
