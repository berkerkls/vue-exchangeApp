import { defineStore } from "pinia"
import { getExchangeRate } from "../services/ExchangeApi";

export type Exchanged = {
    curr1: String,
    curr2: String,
    rate: number
}

export const useExchangeStore = defineStore("exchange", {
    state: () => ({
        pastComputed: [] as Exchanged[],
        amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }),
    actions: {
        async searchExchangeRate(search: any, secondCurrency: string) {
            const value = await getExchangeRate(search);
            const newCal: Exchanged = {
                curr1: search,
                curr2: secondCurrency,
                rate: value.conversion_rates[secondCurrency]
            }
            this.pastComputed.push(newCal)
            console.log(this.pastComputed)
        }
    }

})