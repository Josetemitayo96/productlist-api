const db = require ('../db/db.js');


class productController{

    //To get all products
    getAllProducts(req, res){      
        res.status (200).send({
            success: 'true',
            message: ' All products retrieved successfully',
            db             
        })

    }

    //To single product using id
    getSingleProduct(req, res){
        const id = parseInt(req.params.id, 10);
        db.map((product)=>{
            if (product.id === id ){
                return res.status(200).send({
                    success: 'true',
                    message: 'product retrieved successfully',
                    product
                });
            }
        });
        return res.status(404).send({
            success: 'false',
            message: 'product does not exist'
        });
        
    }

}

const getProduct = new productController();
module.exports = getProduct;
