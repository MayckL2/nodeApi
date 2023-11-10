let retorno = document.querySelector('#retorno')

// REQUISIÇÃO TIPO GET
document.querySelector('#get').addEventListener('click', async () => {

    const res = await fetch('https://node-api-9w1o.vercel.app/prod', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
    const dados = await res.json()

    console.log(dados)
    retorno.innerHTML = dados.msg
})

// REQUISIÇÃO TIPO POST
document.querySelector('#post').addEventListener('click', async () => {

    const res = await fetch('https://node-api-9w1o.vercel.app/prod', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({status: 'sucess', msg: 'postagem feita!'})
    })
    const dados = await res.json()

    console.log(dados)
    retorno.innerHTML = dados.msg
})

// REQUISIÇÃO TIPO PUT
document.querySelector('#put').addEventListener('click', async () => {

    const res = await fetch('https://node-api-9w1o.vercel.app/prod', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({status: 'sucess', msg: 'putagem feita! kkk'})
    })
    const dados = await res.json()

    console.log(dados)
    retorno.innerHTML = dados.msg
})

// REQUISIÇÃO TIPO DELETE
document.querySelector('#delete').addEventListener('click', async () => {

    const res = await fetch('https://node-api-9w1o.vercel.app/prod', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({status: 'sucess', msg: 'Deletado com sucesso!'})
    })
    const dados = await res.json()

    console.log(dados)
    retorno.innerHTML = dados.msg
})