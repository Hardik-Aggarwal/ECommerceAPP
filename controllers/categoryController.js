import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async(req,res)=>{
    try {
        const {name} = req.body;
        //check if already exist
        const existCategory = await categoryModel.findOne({name:name});
        if(existCategory)
        {
            return res.status(200).send({message:"Category already exists"});
        }
        //create category
        const category = await new categoryModel({name:name,slug:slugify(name)}).save();
        return res.status(201).send({message:"Category Created",category});
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal Server Error"});
    }
};


export const updateCategoryController = async(req,res)=>{
    try {
        const {name} = req.body;
        const {id} = req.params;
        //check if not exist
        const existCategory = await categoryModel.findById({_id:id});
        if(!existCategory)
        {
            return res.status(200).send({message:"Category Not exists"});
        }
        //update category
        const category = await categoryModel.findByIdAndUpdate(id,{name:name,slug:slugify(name)},{new:true});

        return res.status(200).send({message:"Category Updated",category});
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal Server Error"});
    }
};

export const categoryController = async(req,res)=>{
    try {
        const category = await categoryModel.find({});
        return res.status(200).send({message:"All Categories",category});
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal Server Error"});
    }
};

export const singleCategoryController = async(req,res)=>{
    try {
        const {slug} = req.params;
        //check if not exist
        
        const category = await categoryModel.findOne({slug:slug});
        if(!category)
            return res.status(404).send({message:"No Category Exists",category});

        return res.status(200).send({message:"Category Received",category});
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal Server Error"});
    }
};

export const deleteCategoryController = async(req,res)=>{
    try {
        const {id} = req.params;
        //check if not exist
        const category = await categoryModel.findByIdAndDelete({_id:id});
        

        return res.status(200).send({message:"Category Deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal Server Error"});
    }
};


