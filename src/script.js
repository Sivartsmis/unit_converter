const dropDownOne = document.getElementById('unitOne');
const dropDownTwo = document.getElementById('unitTwo');

const length = ["inch", "feet", "yard", "mile", "milimeter", "centimeter", "meter", "kilometer"];
const mass = ["ounces", "pounds", "grams", "kilogram"];

const masslength = mass.length;
const lengthlength = length.length;



function populatedropDownTwo (unit) {
    var len;
    var array;
    if (length.includes(unit) ){
        array = length;
        len = lengthlength;
    } else {
        array = mass;
        len = masslength;
    }
    addOptions(array,len);

};

function addOptions (array, len) {
    for (let step = 0; step < len-1; len++) {
        let newOption = document.createElement("option");
        newOption.value = array[step];
        newOption.text = array[step];
        
        
        dropDownTwo.appendChild(newOption)
    };
};

dropDownOne.addEventListener('change', function(event) {
    const selectedValue = event.target.value;
  // Perform actions based on the selected value
    populatedropDownTwo(selectedValue);
});



dropDownTwo.addEventListener('change', function(event) {
    const selectedValue = event.target.value;
  // Perform actions based on the selected value
    populatedropDowns(selectedValue);
});

