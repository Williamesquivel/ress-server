const { model, Schema } = require('mongoose');

const localSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    }
});


module.exports = model('recursos', localSchema);