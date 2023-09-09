const mongoose= require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
          type:String,
          required:[true,"please Enter Product Name"],
          trim:true
         },
    description:{
            type:String,
            required:[true,"Please Enter Description"]
         },
     price:{
            type:Number,
            required:[true,"Please Enter Product Price"],
            maxLength:[8,"price cannot exeed 8 charecters"]
         },
    ratings:
         {
          type:Number,
          default:0
         },
    images:[
    {
        public_id:{
            type:String,
            required:true
        },
    url:{
            type:String,
            required:true
        }
    }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Product Category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numofReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
              type:Number,
              required:true,  
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }


})

module.exports=mongoose.model("Product",productSchema);