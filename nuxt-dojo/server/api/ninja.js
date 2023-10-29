export default defineEventHandler(async (event) => {
    const { apiCurrencyKey } = useRuntimeConfig()
    const config = useRuntimeConfig()
    // // handle query params
    // const { name } = getQuery(event)

    // // handle post data
    // const { age } = await readBody(event)

    const getCurrencyUri = () =>{
        console.log(config.public.apiCurrency)
        //return config.public.apiCurrency + '/v3/latest'
        return config.public.apiCurrency + '/v3/currencies'
        //return config.public.apiCurrency + '/v3/latest'
    }

    // api call with private key
    //console.log(getCurrencyUri())
    //console.log(apiCurrencyKey)
    const { data } = await $fetch(getCurrencyUri(), {
         method: 'GET',
         headers: { apiKey: apiCurrencyKey}, 
    });

    return {
        message: data
    }
})