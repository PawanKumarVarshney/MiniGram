import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username:{
      type:String,
       required:true,
        unique:true
      },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    bio:{
      type:String,
       default:""
    },
      followers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ],
      following: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }],

        posts:[{type: mongoose.Schema.Types.ObjectId, ref:"Post"}],
        bookmarks:[{type: mongoose.Schema.Types.ObjectId, ref:"Post"}]
  },
  { timestamps: true } // createdAt & updatedAt
);

//const User = mongoose.model("User", userSchema);

export const User = mongoose.model("User", userSchema);