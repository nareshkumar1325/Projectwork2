const express = require("express");
const bookRouter = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const book=require("../model/bookSchema")
const loginDB=require("../model/loginSchema")
const checkAuth = require("../middlewares/checkAuth");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter });


bookRouter.get("/view-books", async (req, res) => {
    try {
      const products = await book.find();
      return res.status(201).json({
        success: true,
        error: false,
        data: products,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Data can't be viewed",
      });
    }
})


bookRouter.post("/add-book", upload.single('image'),async(req,res)=>{
    try {
        const Data = {   
            title: req.body.title,
            author: req.body.author,
            about: req.body.about,
            price: req.body.price,    
          // image: req.file ? req.file.path : null,
          image: req.file.filename,

        };
        console.log(Data);
        const result = await book(Data).save();
        if (result) {
          return res.status(201).json({
            success: true,
            error: false,
            data: Data,
          })
        } else {
          return res.status(400).json({
            success: false,
            error: true,
            message: "Data not Added",
          });
        }
      } catch (error) {
        return res.status(501).json({
          success: false,
          error: true,
          message: "Data not Added",
          errorMessage: error.message,
        });
      }
})

bookRouter.delete("/delete-book/:id", (req, res) => {
    book
      .deleteOne({
        _id: req.params.id,
      })
      .then((data) => {
        res.send({ data });
        console.log("deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  bookRouter.put(
    "/update-book/:id",
    upload.single("image"),
    (req, res) => {
    book
        .findOne({
          _id: req.params.id,
        })
        .then((data) => {
          (data.title = req.body.title),
            (data.author= req.body.author),
            (data.about = req.body.about),
            (data.price = req.body.price),
          // data.image = req.file.filename;
          data.image = req.file ? req.file.path : null;
  
          data
            .save()
            .then((data) => {
              return res.status(201).json({
                success: true,
                error: false,
                data: data,
              });
            })
            .catch((error) => {
              return res.status(400).json({
                success: false,
                error: true,
                message: "Data not updated",
              });
            });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            error: true,
            message: "Data not updated ,error of id",
          });
        });
    }
  )
  bookRouter.get("/profile", checkAuth, (req, res) => {
    loginDB
      .aggregate([
        {
          $lookup: {
            from: "register_tbs",
            localField: "_id",
            foreignField: "login_id",
            as: "results",
          },
        },
        {
          $unwind: "$results",
        },
        {
          $match: {
            _id: new mongoose.Types.ObjectId(req.userData.userId),
          },
        },
        {
          $group: {
            _id: "$_id",
            name: { $first: "$results.name" },
            phone: { $first: "$results.phone" },
            email: { $first: "$results.email" },
            username: { $first: "$username" },
            password: { $first: "$password" },
          },
        },
      ])
      .then((data) => {
        return res.status(201).json({
          success: true,
          error: false,
          data: data[0],
        });
      });
  });

module.exports=bookRouter