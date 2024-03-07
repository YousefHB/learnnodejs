const PRODUCT =require('../module/productSchema')
module.exports={
    getProduct : async(req,res,next)=>{
        const product=await PRODUCT.find();

        res.json({
            result:product.map(res=>{
                return{
                    id : res.id,
                    name : res.name,
                }
            })
        })
    },
    getProductID: async(req,res,next)=>{
        const id = req.params.id;
        const prod = await PRODUCT.findByIdAndDelete(id);
        res.json({
           prod
        })
    },
    insertProduct:async (req,res)=>{
const product = await new PRODUCT({
    name:req.body.name,
    price:req.body.price,
    desc:req.body.desc,
}).save()
res.json({"message":"inserted succesfully",
id:product.id,
name:product.name})
    },
    deleteProduct:async(req,res)=>{
        const id = req.params.id;
        const del = await PRODUCT.findByIdAndDelete(id);
        res.json({"delete":del});
    }
}