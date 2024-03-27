const Mongoose =require("mongoose");
const schema = new Mongoose.Schema({
  title: {
    type: String
  },
  created_by: {
    type: String
  },
  created_on: {
    type: Date
  },
  contant: {
    type: String
  },
  dead_line: {
    type: Date
  },
  status: {
    type: String
  }
});
const Model = Mongoose.model('To-Do List', schema);
module.exports = Model;

