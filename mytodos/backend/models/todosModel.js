const mongoose = require('mongoose')

const todosSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true,'Todo must have a title']
    },
    description:{
        type: String,
        required: [true,'Todo must have a description']
    },
    isComplete:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('Todo', todosSchema)