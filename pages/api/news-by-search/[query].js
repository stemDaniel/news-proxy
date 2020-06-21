const axios = require('axios')

export default async function NewsBySearch(request, response) {
    const { query } = request.query
    const headers = { 'Authorization': 'bearer 1d4c72910ba54321b8601c9a91fafd52' }
    const url = `https://newsapi.org/v2/everything?q=${query}`
    response.setHeader('Access-Control-Allow-Origin', '*')
    await axios.get(url, {headers}).then(res => response.json(res.data)).catch(e => console.log(e))
}