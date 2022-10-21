import CategoryModel from "../models/Category.js";

export const getCetegory = async (req, res) => {
  try {
    const user = await CategoryModel.find();

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "not found",
    });
  }
};
