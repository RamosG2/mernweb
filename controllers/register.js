const bcrypt = require('bcrypt')
const Usuario = require('../model/usuario')

const register = async (req, res) => {
    const {nombre,correo,contrasena} = req.body;
    Usuario.findOne({correo}).then((usuario) => {
        if(usuario){
            return res.json({mensaje:"Correo en uso"});
        } else if(!nombre || !correo || !contrasena){
            return res.json("Verifica los datos!")
        }else{
            bcrypt.hash(contrasena,10, (error,contrasenaHasheada) => {
                if(err) res.json({err});
                else{
                    const nuevoUsuario = new Usuario({
                        nombre,
                        correo,
                        contrasena: contrasenaHasheada,
                    });
                    nuevoUsuario
                    .save()
                    .then(usuari => {
                        res.json({mensaje:"usuario creado"});  
                    })
                    .catch((error) => console.log(error)); 
                }
            });
        }
    });
};



module.exports = register;