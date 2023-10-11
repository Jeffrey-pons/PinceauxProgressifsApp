import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Erreur lors de la récupération des posts :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des posts" });
  }
};

export const setPost = async (req, res) => {
  try {
    const { title, content, category, images, videos, userId } = req.body;
    const user = await User.findById(userId);
    //post daos
    const newPost = new Post({
      title,
      content,
      category,
      images,
      videos,
      authorFirstName: user.name,
      authorLastName: user.lastname,
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'article" });
  }
};

export const editPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
    });

    if (!post) {
      return res.status(404).json({ message: "Ce post n'existe pas" });
    }

    res.status(200).json({ message: "Post modifié avec succès", data: post });
  } catch (error) {
    console.error("Erreur lors de la modification du post :", error);
    res.status(500).json({ error: "Erreur lors de la modification du post" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Ce post n'existe pas" });
    }

    res
      .status(200)
      .json({ message: "Post supprimé avec succès", data: deletedPost });
  } catch (error) {
    console.error("Erreur lors de la suppression du post :", error);
    res.status(500).json({ error: "Erreur lors de la suppression du post" });
  }
};

export const likePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(error);
  }
};

export const dislikePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(error);
  }
};