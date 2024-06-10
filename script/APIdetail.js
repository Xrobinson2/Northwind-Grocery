"use strict"



const API_BASE_URL = "http://localhost:8081/api/";
function callApi(url) {

    return fetch(API_BASE_URL + url)
        .then(response => response.json())

}