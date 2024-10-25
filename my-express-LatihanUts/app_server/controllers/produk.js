const mongoose = require("mongoose");
const Produk = mongoose.model("Mahasiswa");

const index = (req, res, next) => {
    Produk.find({}, { __v: 0 })
      .then((prd) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: prd
        };
        res.status(200).json(responseMessage);
      })
     .catch((e) => {
        const responseMessage = {

            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert mahasiswa
const insert = (req, res, next) => {
    const prd = new Produk({
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga,
      stok: req.body.stok,
      kategori_id:req.body.kategori_id,
      aktif: true
    });
  
    prd
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

