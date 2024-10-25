let mongoose = require("mongoose");

//https://mongoosejs.com/docs/schematypes.html
//Create Collection Schema
let schemaPrd = new mongoose.Schema({
  nama: String,
  deskripsi: {
    type: String,
    require: true,
  },
  harga: {
    type: Number,
  },
  stok: {
    type: Number,
  },
  kategori_id: {
    type: Object
  },

  aktif: Boolean,
});

//create Model from Schema
mongoose.model("Produk", schemaPrd);