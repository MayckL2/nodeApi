const express = require('express')
const app = express()
const cors = require('cors')
const { stringify } = require('querystring')

app.use(express.json())

// CORS
app.use((req, res, next) => {
    console.log('Cors funcionando!')
    res.header('Access-Control-Allow-Origin', '*')
    app.use(cors())
    next()
})

// REQUISIÇÃO GET
app.get('/prod', (req, res) => {
    res.json({status: 'sucesso', msg: 'Retorno tipo GET!'})
})

// REQUISIÇÃO POST
app.post('/prod', (req, res) => {
    if(req){
        res.json({status: 'sucesso', msg: 'Retorno tipo POST!'})
        console.log(req.body)
    }else{
        res.json({status: 'false', msg: 'Erro na requisição!'})
    }
})

// REQUISIÇÃO PUT
app.put('/prod', (req, res) => {
    if(req){
        res.json({status: 'sucesso', msg: 'Retorno tipo PUT!'})
        console.log(req.body)
    }else{
        res.json({status: 'false', msg: 'Erro na requisição!'})
    }
})

// REQUISIÇÃO DELETE
app.delete('/prod', (req, res) => {
    if(req){
        res.json({status: 'sucesso', msg: 'Retorno tipo DELETE!'})
        console.log(req.body)
    }else{
        res.json({status: 'false', msg: 'Erro na requisição!'})
    }
})

// RETORNO DA ROTA PRINCIPAL
app.get('/', (req, res) => {
    res.json({msg: 'Hello World'})
})

app.listen(3000, () => {
    console.log('Rodando com sucesso!')
})