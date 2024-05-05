import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item

const addFood = async (req, res) => {
  const { name, description, price, category } = req.body;
  const imageFilename = req.file.filename; // Assuming the filename is sent in the request body

  // Check if a file was uploaded
  if (!req.file || !req.file.filename) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }
  const food = new foodModel({
    name,
    description,
    price,
    category,
    image: imageFilename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// ALL Food List

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove Food item

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error removing food" });
  }
};

export { addFood, listFood, removeFood };
