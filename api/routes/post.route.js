import express from "express";
import {
	createPost,
	deletePost,
	getPost,
	updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("test", (req, res) => {
	console.log("Router works!");
});

router.get("/getPost", getPost);
router.post("/createPost", createPost);
router.put("/updatePost", updatePost);
router.delete("/deletePost", deletePost);

export default router;
