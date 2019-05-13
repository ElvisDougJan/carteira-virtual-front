<template>
  <div>
    <v-toolbar color="blue" class="headline" dark>
      <span style="text-align: start; width: 100%">CARTEIRA VIRTUAL</span>
      <v-tooltip bottom>
        <v-btn slot="activator" fab small flat :to="{name: 'Movimentacao'}">
          <v-icon>account_balance_wallet</v-icon>
        </v-btn>
        <span>Realizar nova movimentação</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" fab small flat :to="{name: 'Grafico'}">
          <v-icon>show_chart</v-icon>
        </v-btn>
        <span>Visualizar em modo gráfico</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" fab small flat :to="{name: 'ListaMovimentacoes'}">
          <v-icon>list</v-icon>
        </v-btn>
        <span>Visualizar em modo lista</span>
      </v-tooltip>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>
