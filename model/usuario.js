const {model, Schema} = require("mongoose");

const UsuarioSchema = new Schema({
    nombre: { type: String, require: true },
    correo: { type: String, require: true, unique: true },
    constrasena: { type:String, require: true }
});

module.export = model("Usuario",UsuarioSchema);