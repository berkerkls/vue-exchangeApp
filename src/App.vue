<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="6">
        <v-subheader> Currency One </v-subheader>
      </v-col>
      <v-col cols="6">
        <div>
          <v-text-field
            v-model="currencyOne"
            label="Currency"
            :rules="rules"
          ></v-text-field>
        </div>
      </v-col>
      <v-col cols="6">
        <v-subheader>Amount</v-subheader>
      </v-col>
      <v-col cols="6">
        <v-select
          :items="amounts"
          v-model="selectedAmount"
          item-text="Number"
          label="Amount"
          v-on:change="computedCurrency"
          single-line
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-subheader> Currency Two </v-subheader>
      </v-col>
      <v-col cols="6">
        <div>
          <v-text-field
            v-model="currencyTwo"
            label="Currency"
            :rules="rules"
          ></v-text-field>
        </div>
      </v-col>
      <v-col cols="12">
        <v-btn
          depressed
          color="info"
          @click="searchExchangeRate(currencyOne, currencyTwo, selectedAmount)"
          >Change Rates</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
  <TablePage :selectedAmount="selectedAmount" />
</template>

<script lang="ts">
import TablePage from "./components/TablePage.vue";
import { defineComponent } from "vue";
import { getExchangeRate } from "./services/ExchangeApi";
import { mapActions, mapState } from "pinia";
import { useExchangeStore } from "./store/exchange";

export default defineComponent({
  name: "App",
  components: {
    TablePage,
  },
  data: () => {
    return {
      currencyOne: "",
      currencyTwo: "",
      rules: [
        (value: boolean) => !!value || "Required",
        (value: string) => (value && value.length >= 3) || "Min 3 characters",
      ],
      selectedAmount: 1 as any,
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  computed: {
    ...mapState(useExchangeStore, ["pastComputed"]),
  },
  methods: {
    // async searchExchangeRate(search: any) {
    //   const value = await getExchangeRate(search);
    //   this.rate = value.conversion_rates[this.currencyTwo];
    //   console.log("Data", this.rate);
    // },
    // getCurrencyNames() {
    //   return console.log(this.rate);
    // },
    ...mapActions(useExchangeStore, ["searchExchangeRate"]),
    computedCurrency(amount: any) {
      return console.log("asdasd", amount);
    },
  },
  watch: {},
});
</script>
