import mongoose from "mongoose";

const List = mongoose.Schema({
    key: {type: String, unique: true, required: true},
    list: {type: Array, default: null}
});

export default mongoose.model('List', List);