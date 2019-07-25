const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    information: {
    givenName: { type: String, required: true, trim: true  },
    familyName: { type: String, required: true, trim: true  },
    nickName: { type: String, required: true, trim: true  },
    email: { type: String, required: true, trim: true  }
    },
    
    posts: [ 
        { 
            type: Schema.Types.ObjectId,

            ref: "Post"
         }
        ],
    //date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;