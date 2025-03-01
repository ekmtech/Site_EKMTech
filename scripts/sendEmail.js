const btnSend = document.getElementById('btnSend')
btnSend.addEventListener('click', () =>{
    let assunto = document.getElementById('assunto').value
    let email = document.getElementById('email').value
    let mensagem = document.getElementById('mensagem').value
    
    let Email = {
        assunto : assunto,
        email : email,
        mensagem : mensagem
    }
    Send(Email)
})
async function Send(email){
    try{
        const response = await fetch("https://localhost:7204/email/Send",
        {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(
                {
                    destintario: email.email,
                    assunto: email.assunto,
                    mesagem: email.mensagem
                })
        })
        const dados = await response.json()
        console.log("Sucesso : ",dados)
    }
    catch(erro){
        console.error("Erro : ", erro)
    }
}
