import axios from 'axios';


export default {
  
    getItems: function( req ) {
        console.log(`in util ${req}`)
        return axios.get('/getItems/' + req)

    }
}