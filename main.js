const linksSocialMedia = {
    github: "vcalebe",
    youtube: "UC6zjbp6xinqgdxFUdH17xGQ",
    facebook: "mkbryto",
    instagram: "vcalebe_",
    twitter: "vcalebe_"
}

function changeSocialMediaLinks(){

    //* Duas formas de alterar um elemento
        //1. document.getElementById('userName').textContent = 'Victor' 
        //2. userName.textContent = "Victor" 
    
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
    }
}

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    //fetch -> Ira entrar na URL em que indicarmos pegar o conteudo dela e devolver
        //promise (then) -> "Promessa" do que ira ser devolvido, "Deu certo buscar algo na url ?
        //se sim o retorno caira no then"
    
    //Arrow function -> Funcao anonima, nao precisa de um nome, somente e necessario passar o argumento
    // dessa forma sem args "() => {}" 
    //com 1" argumento => {}"
    //ou com 2 args "(argumento1, argumento2) => {}"

    //Quando ha apenas uma linha na funcao, nao e necessario chaves

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userLogin.textContent = data.login
            userImage.src = data.avatar_url
    })

    
}

changeSocialMediaLinks()
getGitHubProfileInfos()
