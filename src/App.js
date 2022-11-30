import './App.css';
import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function App(){
const axios = require('axios');
const list = [];


// set up the request parameters
const params = {
  api_key: "791560AC6A6F48AE8CD2D8A1AA3A1FA3",
  type: "search",
  search_term: "highlighter pens",
  sort_by: "best_seller"
}

// make the http GET request to BlueCart API
Axios.get('https://api.bluecartapi.com/request', { params })
  .then(response => {

    // print the JSON response from BlueCart API
    console.log(JSON.stringify(response.data, 0, 2));

    const results = response.data.search_results;
    console.log(results);

    for(var i = 0; i < results.length; i++) {
      console.log("Price: " + results[i].offers.primary.price);
      console.log("Rating: " + results[i].product.rating);
      const delivery = results[i].fulfillment.shipping;
      if(delivery){
        console.log("Shipping days: " + results[i].fulfillment.shipping_days);
      }  
      else {
        console.log("No delivery date");
      }
    }

  }).catch(error => {
    // catch and print the error
    console.log(error);
  })

  return (
    <div className="App">
      <h1>API Posts</h1>

    </div>
  );
}
