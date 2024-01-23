export function autenticar(id, pass){
    console.log(id,pass);
    
    fetch("http://localhost:4001/usuarios")
    
    .then(response => response.json())
   
    .then(usuarios => {
            console.log(usuarios);
            const usuarioAutenticado = usuarios.find(usuario => usuario.id === id &&
                usuario.pass === pass);
            
            console.log(usuarioAutenticado);
            
            if (usuarioAutenticado){
                localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioAutenticado));

                if(usuarioAutenticado.tipoId === 2){
                    window.location.href ="./html/funcionarios.html"
                } else if (usuarioAutenticado.tipoId === 3) {
                    window.location.href ="./html/clientes.html"
                }
                
            }else{
                alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
            }

            
                
            
    })
    .catch (error => {
        console.log("Error al autenticar ",error);
    })
}
/* 
export async function autenticar(id, pass) {
    const url = `http://localhost:4001/usuarios?id=${id}&pass=${pass}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Respuesta de servidor no válida");
            }
            return response.json();
        })
        .then(usuarioAutenticado => {
            if (usuarioAutenticado) {
                localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioAutenticado));

                if (usuarioAutenticado.tipoId === 2) {
                    window.location.href = "./html/funcionarios.html";
                } else if (usuarioAutenticado.tipoId === 3) {
                    window.location.href = "./html/clientes.html";
                }
            } else {
                throw new Error("Usuario o contraseña incorrectos");
            }
        })
        .catch(error => {
            console.error("Error en la autenticación:", error);
            alert("Error al autenticar. Por favor, inténtalo de nuevo.");
        });
} */