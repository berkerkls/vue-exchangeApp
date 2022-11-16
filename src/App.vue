<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="6">
        <v-subheader>
          Prepended icon
        </v-subheader>
      </v-col>
      <v-col cols="6">
        <v-select
          onchange="searchExchangeRate(searchCurrnecyOne)"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="mdi-map"
          single-line
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-subheader>
          Appended icon
        </v-subheader>
      </v-col>
      <v-col cols="6">
        <v-select
          append-outer-icon="mdi-map"
          menu-props="auto"
          hide-details
          label="Select"
          single-line
        ></v-select>
      </v-col>
      <v-btn
      depressed
      color="primary"
    >
      Primary
    </v-btn>
    </v-row>
  </v-container>

</template>

  <script lang="ts">
  import HomePage from "./components/HomePage.vue"
  import {defineComponent} from "vue"
  import { getExchangeRate } from "./services/ExchangeApi"
  
  export default defineComponent({
    name: "App",
    components:  {
      HomePage
    },
    data: () => {
      return {
        data: {},
        searchCurrencyOne: "",
        searchCurrencyTwo:""
      }
    },
    methods: {
      async searchExchangeRate(search: string) {
        const value = await getExchangeRate(search)
        this.data = value
        console.log("Data", this.data)
      }
    }
    
    
  })
  </script>

