import axios from 'axios';


export default {
  
    getItems: function( req, res ) {
        return axios.get('/getItems')

    }
}