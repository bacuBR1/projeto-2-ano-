function entrar(usuario, senha) {
    const bancodeusuarios = {
        usuario1: {
            email: "tryhardlmlg@gmail.com",
            senha: "20100204"
        },

        usuario2: {
            email: "larissameuamor@gmail.com",
            senha: "20080405"
        }
    }

    if (
        (usuario == bancodeusuarios.usuario1.email && senha == bancodeusuarios.usuario1.senha)
        || (usuario == bancodeusuarios.usuario2.email && senha == bancodeusuarios.usuario2.senha)
       ) {
        window.location.href = "paginicial.html"
    }
}

function receber() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    entrar(email, senha)
}