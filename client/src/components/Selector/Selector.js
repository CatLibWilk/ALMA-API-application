import React from "react";


const Selector = (props) => {
    return (
        <div class="form-group mt-5">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1" onChange={props.function}>
          <option >Select Course</option>
          <option id="1327214400000521">Law 101</option>
          <option id="687343570000521">Law 222</option>
          <option id="1325705530000521">Law 333</option>
        </select>

      </div>
    );
};


export default Selector;