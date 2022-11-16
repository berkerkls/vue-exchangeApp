export const getExchangeRate = async (search: any) => 
    await fetch(`https://v6.exchangerate-api.com/v6/506dc6b52354db0ee6cfd980/latest/${search}`)
    .then(val => val.json)
