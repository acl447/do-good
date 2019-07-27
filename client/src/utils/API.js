import axios from "axios";

export default {

    getUsers: function () {
        return axios.get("/api/users");
    },
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Deletes the user with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a user to the database
    saveUser: function (userData) {
        console.log(userData);
        return axios.post("/api/users", userData);
    },

    // Gets all posts
    getPosts: function () {
        return axios.get("/api/posts");
    },
    // Gets the post with the given id
    getPost: function (id) {
        return axios.get("/api/posts/" + id);
    },
    // Deletes the post with the given id
    deletePost: function (id) {
        return axios.delete("/api/posts/" + id);
    },
    // Saves a post to the database
    savePost: function (postData) {
        console.log(postData);
        return axios.post("/api/posts", postData);
    },
    // Gets all posts
    getComments: function () {
        return axios.get("/api/comments");
    },
    // Gets the post with the given id
    getComment: function (id) {
        return axios.get("/api/comments/" + id);
    },
    // Deletes the post with the given id
    deleteComment: function (id) {
        return axios.delete("/api/comments/" + id);
    },
    // Saves a post to the database
    saveComment: function (commentData) {
        console.log(commentData);
        return axios.post("/api/comments", commentData);
    }
};
