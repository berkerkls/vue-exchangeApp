<template>
  <v-table height="300px" v-if="pastComputed">
    <thead>
      <tr>
        <th class="text-center">Currency One</th>
        <th class="text-center">Currency Two</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in pastComputed" :key="item.rate">
        <td>{{ this.selectedAmount }} {{ item.curr1 }}</td>
        <td>{{ item.curr2 }} {{ item.rate }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { defineComponent } from "vue";
import { useExchangeStore } from "../store/exchange";

export default defineComponent({
  name: "Home",
  computed: {
    ...mapState(useExchangeStore, ["pastComputed"]),
  },
  props: ["selectedAmount"],
});
</script>
