const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");

const register = async (req, res) => {
  const { nombre, correo, contrasena } = req.body;
  console.log("register");
  Usuario.findOne({ correo }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Correo en uso" });
    } else if (!nombre || !correo || !contrasena) {
      return res.json({ mensaje: "Verifica los datos!" });
    } else {
      bcrypt.hash(contrasena, 10, (error, contrasenaHasheada) => {
        if (error) return res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            nombre,
            correo,
            contrasena: contrasenaHasheada,
          });
          nuevoUsuario
            .save()
            .then((usuario) => {
              return res.json({ mensaje: "usuario creado" });
            })
            .catch((error) => console.log("Register nuevo usuario" + error));
        }
      });
    }
  });
}

module.exports = register;
