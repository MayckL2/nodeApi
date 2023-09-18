window.addEventListener('load', async ()=>{
    let json
    console.log('hola')
    const res = await fetch('http://localhost:3000/prod')
    const dados = await res.json()
    
    document.querySelector('h1').innerHTML = dados.msg
    console.log(dados)
})