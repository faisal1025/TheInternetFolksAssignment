const mongoose = require('mongoose')


const memberSchema = mongoose.Schema({
    community: {
        type: mongoose.Schema.ObjectId,
        ref: 'community'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    role: {
        type: mongoose.Schema.ObjectId,
        ref: 'role'
    }
},
{timestamps: true})

const Member = mongoose.model('member', memberSchema)

module.exports = Member