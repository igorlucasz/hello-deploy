import Fastify from 'fastify'

const app = Fastify()

app.get('/', async () => {
  return { message: 'Digite /hello ao final da URL' }
})


app.get('/hello', async () => {
  return { message: 'hello world' }
})

app.listen({ port: 3000, host: '0.0.0.0' }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('Servidor rodando na porta 3000')
})
