import express from 'express';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleWare.js";
import { createCategoryController ,updateCategoryController,categoryController,singleCategoryController,deleteCategoryController} from '../controllers/categoryController.js';
const router = express.Router();

//create category
router.post('/create-category',requireSignIn,isAdmin,createCategoryController);

//update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController);

//delete category
router.post('/delete-category',requireSignIn,isAdmin,createCategoryController);

//read all category
router.get('/category',categoryController);


//read single category
router.get('/single-category/:slug',singleCategoryController);



//delete single category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController);

export default router;