const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/CategoryController')

// create a new category
router.post('/create', categoryController.createCategory);

// get all category
router.get('/get', categoryController.getCategories);

// update category
router.put('/update/:id', categoryController.updateCategory);

// delete category
router.delete('/delete/:id', categoryController.deleteCategory);

module.exports = router;