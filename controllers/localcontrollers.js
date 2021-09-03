const { findByIdAndDelete } = require("../models/User");

const ctrlHome = {};

//controlador 
ctrlHome.rutaGet = (req, res) => {
    res.send({ msg: 'Ruta Get' })
}

//controlador que almacena un nuevo usuario
ctrlHome.rutaPost = (req, res) => {
    console.log(req.body)
    res.send({ msg: 'Ruta post' })
    res.send(req.body)
}

ctrlHome.rutaPut = async(req, res) => {
    const { titulo, descripcion, id } = req.body;
    await pelis.findByIdAndUpdate(id, { titulo, descripcion }, { new: true });


}
ctrlHome.rutaDelete = async(req, res) => {
    const { id } = req.body;
    await findByIdAndDelete(id)
    res.json({

        msg: 'user eliminado correctamente'
    })
}




module.exports = ctrlHome;