///meal-engine/static/logoRanGen.js

var imagesArray = ["Butter Cookies", "Spinach Artichoke Dip", "Chicken Soup"];

// check input of array not original part of code


function displayImage(){
    var num = Math.floor(Math.random() * (imagesArray.length));
    console.log(imagesArray.length);
    console.log(num);
    document.getElementById('test').innerHTML = imagesArray[num];

}
