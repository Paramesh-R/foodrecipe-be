const express = require('express');
const router = express.Router();
const { getFoods, createFood, updateFood, deleteFood } = require('../controller/foodController');

// CRUD
router.get("/",getFoods);
router.post("/",createFood);
router.put("/:id",updateFood);
router.delete("/:id",deleteFood);

module.exports = router;
