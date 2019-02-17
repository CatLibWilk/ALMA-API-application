const axios = require("axios");

module.exports = {
    getItems: function( req, res ){
        console.log('api controller hit')
        res.json({message: 'controller gititem response'})
    }
}