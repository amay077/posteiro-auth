const handler = async (event) => {
  return {
    statusCode: 200,
    headers,
    body: `Pong at ${new Date().toISOString()}`
  }
}

module.exports = { handler }