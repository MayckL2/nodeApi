const express = require('express')
const app = express()
const cors = require('cors')
const { stringify } = require('querystring')

app.use(express.json())

app.use((req, res, next) => {
    console.log('Cors funcionando!')
    res.header('Access-Control-Allow-Origin', '*')
    app.use(cors())
    next()
})

app.get('/prod', (req, res, next) => {
    // res.json({ msg: 'Retorno da api!' })
    res.json({status: 'sucesso', msg: 'Retorno da api!'})
})

app.get('/', (req, res) => {
    res.json({msg: 'Hello World'})
})

app.listen(3000, () => {
    console.log('Rodando com sucesso!')
})