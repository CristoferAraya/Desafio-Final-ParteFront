const url = "http://localhost:8080";


export function getLogin(usuario, pass){ 
    console.log("llegue");
    return new Promise(async (resolve, reject) => {
        try{

            const requestEnvio = {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    "email":usuario,
                    "contraseña":pass
                })
            };
            console.log("paso");
            const response = await fetch (url+"/login",requestEnvio);

            if (response.status == 200) {
                window.location = "/";
            } else {
                alert("CONTRASEÑA O USUARIO INCORRECTA!!");
            }
            
    
        }catch(error){
            reject(error)
        }
        
    })
}