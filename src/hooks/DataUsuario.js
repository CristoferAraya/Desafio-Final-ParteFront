// registro
const url = "http://localhost:8080";


export function crearUsuario(nombre, apellido, nombreMascota,email, telefono, contraseña){ 
    console.log("llegue");
    return new Promise(async (resolve, reject) => {
        try{

            const requestEnvio = {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    "nombre":nombre,
                    "apellido":apellido,
                    "nombreMascota":nombreMascota,
                    "email":email,
                    "telefono":telefono,
                    "contraseña":contraseña
                })
            };
            console.log("paso");
            const response = await fetch (url+"/usuarios",requestEnvio);
            if (response.status == 200) {
                window.location = "/login";
                return true;
            }else{
                alert("Error al registrar usuario");
                return false
            }
    
        }catch(error){
            reject(error)
        }
        
    })
}