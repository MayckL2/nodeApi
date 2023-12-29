const express = require('express')
const app = express()
const cors = require('cors')
// const { stringify } = require('querystring')

app.use(express.json())

// CORS
app.use((req, res, next) => {
    console.log('Cors funcionando!')
    res.header('Access-Control-Allow-Origin', 'http://localhost:5500')
    // configuração de compartilhamento de credenciais
    res.header("Access-Control-Allow-Credentials", "true");
    app.use(cors({
        origin: 'http://localhost:5500',
        credentials: true,
        methods: 'GET, POST, PUT, DELETE'
    }))
    next()
})

// REQUISIÇÃO GET
app.get('/prod', (req, res) => {
    res.json({status: 'sucesso', msg: 'Retorno tipo GET!'})
})

// REQUISIÇÃO POST
app.post('/prod', (req, res) => {
    const { authorization } = req.headers

    if(req){
        // enviando cookie para o front-end com as configurações necessarias
        res.cookie('token', authorization, {maxAge: 30000, httpOnly: true, secure: true, sameSite: 'none'})
        res.json({status: 'sucesso', msg: 'Retorno tipo POST!', token: authorization})
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
    console.log('Rodando com sucesso na porta 3000!')
})
