const fetch = require('node-fetch')

const handler = async (event) => {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const resText = await res.json();
    console.log(`handler ~ resText:`, resText);
    const name = event.queryStringParameters.name ?? 'World'
    return {
      statusCode: 200,
      body: JSON.stringify(resText) //JSON.stringify({ message: `Hello ${name}!` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }