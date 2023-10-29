import currenyapi from '@everapi/currencyapi-js'

export default defineEventHandler(async (event) => {
    const { apiCurrencyKey } = useRuntimeConfig()
    const config = useRuntimeConfig()

    const { code } = event.context.params

    // const getCurrencyUri = () =>{
    //     //console.log(config.public.apiCurrency)
    //     return config.public.apiCurrency + `/v3/latest?currencies[]=${code}]`
    // }

    console.log(getCurrencyUri())
    // const { data } = $fetch(getCurrencyUri(), {
    //     method: 'GET',
    //     headers: { apiKey: apiCurrencyKey},
    // })
    const client = new currenyapi(apiCurrencyKey)
    const data = await client.currencies()

    console.log(data)
    return { message: data }
})