var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/db_ejemplo");

var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    titulo: {
        type: String,
        trim: true,
        set: function(title) {
            var newTitle = title.replace(/\s/g, " ");
            /*var newTitle = title.replace("  ", " ");
            while (newTitle.indexOf("  ") >= 0) {
                newTitle = newTitle.replace("  ", " ");
            } */
            return newTitle;
        }
    },
    autor: String,
    sinopsis: {
        type: String,
        trim: true
    },
    fecha: Date,
    categoria: String,
    campos_biblioteca: {
        ejemplares: Number,
        reservas: Number,
        ultima_reserva: {
            type: Date,
            default: Date.now
        }
    },
    sitioweb: {
        type: String,
        set: function(url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf("https://") !== 0) {
                    url = "http://" + url;
                }
                return url;
            }
        }
    }
});
LibroSchema.add({ estado: String });

var Libro = mongoose.model("Libro", LibroSchema);

var docLOTR = new Libro({
    titulo: "  Lord   of   the   rings - Comunidad  ",
    autor: "JRR    Tolkien",
    sinopsis: "   KLJ   kljlñks   fklajs fklasfjsdj asjlkfa    ",
    estado: "Nuevo estado",
    campo_que_no_existe: "Un valor",
    fecha: new Date("1957-03-05 07:00:00"),
    campos_biblioteca: {
        ejemplares: 9
    },
    sitioweb: "www.lotr_1.com"
});
var docLOTR_2 = new Libro({
    titulo: "  Lord   of   the   rings - Las dos torres  ",
    autor: "JRR    Tolkien",
    sinopsis: "   KLJ   kljlñks   fklajs fklasfjsdj asjlkfa    ",
    estado: "Nuevo estado",
    campo_que_no_existe: "Un valor",
    fecha: new Date("1957-03-05 07:00:00"),
    campos_biblioteca: {
        ejemplares: 9
    },
    sitioweb: "https://www.lotr_2.com"
});
docLOTR.save(alGuardar);
docLOTR_2.save(alGuardar);

function alGuardar(error) {
    if (error) {
        console.error("Error al guardar: ", error);
    } else {
        console.log("Guardado con id: " + docLOTR._id);
        Libro.find((error, data) => {
            console.log(data);
        });
    }
};
Libro.find((error, data) => {
    console.log(data);
});