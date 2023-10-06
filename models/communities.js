const mongoose = require('mongoose')


const communitySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true,
        unique: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},
{timestamps: true})

const Community = mongoose.model('community', communitySchema)

module.exports = Community