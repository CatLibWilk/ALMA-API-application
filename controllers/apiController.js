const axios = require("axios");

module.exports = {
    getItems: function( req, res ){

        const setId = req.params.id
        const baseurl = `https://api-eu.hosted.exlibrisgroup.com/almaws/v1/conf/sets/${setId}/members?limit=10&offset=0&apikey=l7xx2af7939c63424511946e0fcdc35fe22a`

        return axios.get(baseurl)
        .then(returned => {
            res.json(returned.data.member)
        })
    } 
}