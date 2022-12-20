const Usuario = require("../model/usuario");

const getUserById = async (req, res) => {
    const { userId } = req.params;
    if(userId.length === 24){
        Usuario.findById(userId).then((usuario) => {
            if(!usuario) {
                return res.json({mensaje:"usuario no encontrado"});
            }else{
                const { id, contrasena, v, ...resto } = usuario._doc;
                res.json(resto);
            }
        });
    }else{
        res.json({ mensaje:"usuario incorrecto"} );
    } 
    //res.json( {mensaje: "Get user by id"} );
};

module.exports = getUserById;