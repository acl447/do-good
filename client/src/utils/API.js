import axios from "axios";

export default {

    getAllUsers: function () {
        return axios.get("/api/users");
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
    // Gets all comments
    // getComments: function () {
    //     return axios.get("/api/comments");
    // },
    // Gets the comment with the given id
    // getComment: function (id) {
    //     return axios.get("/api/comments/" + id);
    // },
    // Deletes the comment with the given id
    // deleteComment: function (id) {
    //     return axios.delete("/api/comments/" + id);
    // },
    // Saves a comment to the database
    // saveComment: function (commentData) {
    //     console.log(commentData);
    //     return axios.post("/api/comments", commentData);
    // }
};
