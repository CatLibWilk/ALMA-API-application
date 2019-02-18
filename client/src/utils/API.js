import axios from 'axios';


export default {
  
    getItems: function( req ) {

        return axios.get('/getItems/' + req)

    }
}