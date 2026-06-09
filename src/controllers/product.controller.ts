import { Request, Response } from "express"; 
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/product.service";


const productService = new ProductService();

const productController: T = {};
productController .getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    res.render("product");
  } catch (err) {
    console.log("Error, getAllProducts :", err);
    if ( err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
    
  }
};

productController .creatNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("creatNewProduct");
    res.send("done");
  } catch (err) {
    console.log("Error, creatNewProduct :", err);
    if ( err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
    
  }
};

productController .updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    
  } catch (err) {
    console.log("Error, updateChosenProduct :", err);
    if ( err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
    
  }
};    

export default productController;