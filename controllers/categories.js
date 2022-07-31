const { response, request } = require("express");

const { Category } = require('../models');


// get all categories

const getAllCategories = async (req = request, res = response) => {

    try {
        const { limit = 5, from = 0 } = req.query;
        const query = { state: true };

        const [total, category] = await Promise.all([
            Category.countDocuments(query),
            Category.find(query)
                .skip(Number(from))
                .limit(Number(limit))
        ]);

        res.json({
            total,
            category
        });

    } catch (error) {
        console.log(error);
    }
}

// get one category by id 

const getCategoryById = async (req = request, res = response) => {

    try {

        const { id } = req.params;

        const category = await Category.findById(id);

        console.log(category);

        if (!category.state) {
            return res.status(404).json({
                ok: false,
                msg: 'Category not found'
            });
        }

        res.json(category);

    } catch (error) {
        console.log(error);
    }
}

// create category 

const createCategory = async (req, res = response) => {

    try {
        const name = req.body.name.toUpperCase();

        const categoryDB = await Category.findOne({ name });

        if (categoryDB) {
            return res.status(400).json({
                ok: false,
                msg: `Category ${categoryDB.name} already exists`
            });
        }

        // generate data for new category
        const data = {
            name,
            user: req.user._id
        }

        const category = new Category(data);

        // save new category
        await category.save();

        res.status(201).json(category);


    } catch (error) {
        console.log(error);
    }

}

// update category

const updateCategory = async (req, res = response) => {

    try {

        const { id } = req.params;

        const name = req.body.name.toUpperCase();

        const categoryDB = await Category.findById(id);

        const updateName = await Category.findOne({ name });

        if (!updateName) {
            categoryDB.name = name;
            await categoryDB.save();
            res.json(categoryDB);
        } else {
            return res.status(400).json({
                ok: false,
                msg: `Category ${updateName.name} already exists`
            });
        }

    } catch (error) {
        console.log(error);
    }

}

// delete category

const deleteCategory = async (req, res = response) => {

    try {

        const { id } = req.params;

        const categoryDB = await Category.findById(id);

        if (!categoryDB.state) {
            return res.status(400).json({
                ok: false,
                msg: 'Category not found'
            });
        }

        const category = await Category.findByIdAndUpdate(id, { state: false });

        res.json({
            msg: 'Category deleted',
            category
        });

    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}