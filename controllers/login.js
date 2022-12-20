const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");

const login = async (req, res) => {
   const { correo, contrasena } = req.body;
   //
   Usuario.findOne({correo}).then((usuario) => {
      if(!usuario){
         return res.json({ mensaje: "Usuario no encontrado Login! Fail" });
      }
      //bcrypt primero buscamos el usuario en la base de datos por el correo, y delegamos la comparación de password a la librería bcrypt, la cual nos dirá si son la misma o no.
      bcrypt.compare(contrasena, usuario.contrasena).then((esCorrecta) => {
         if(esCorrecta){
            const { id, nombre } = usuario;

            res.json({ mensaje: "Login correcto!",
               usuario: {
                  id,
                  nombre,
               } 
            });
         }else{
            res.json({ mensaje: "Contraseña incorrecta!"})
         }
      })
   })
    //res.json({ mensaje: "¡Hola app get login controller!" }) 
 }
 
module.exports = login;