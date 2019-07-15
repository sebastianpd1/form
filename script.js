function init(){
    document.getElementById('button').addEventListener('click', validation);
}

function validation (){
console.log("hello")

    var isString = document.querySelectorAll('.string'); // HERE WE ARE GRABING THE ONES THAT SHOULD BE STRINGS
    var sixteen = document.querySelector('#card'); // HERE WE ARE GRABING THE ONES THAT SHOULD BE 16 LENGTH
    var four = document.querySelector('#cvc'); // HERE WE ARE GRABING THE ONES THAT SHOULD BE 4 LENGTH
    var five = document.querySelector('#postalCode'); // HERE WE ARE GRABING THE ONES THAT SHOULD BE 5 LENGTH

    var errors = {
        notEmpty: {
            color: "alert-danger",
            isInvalid: (elm) => elm.value == "",
        },
        number: {
            color: "alert-warning",
            isInvalid: (elm) => isNaN(elm.value) || elm.value =="",
        }

    };

// FIRST LOOP CHECK IF EMPTY-------------------------------------------------------------------

    var alert = document.querySelector('#alert');
    alert.classList.add("d-none");
    for( let errorType in errors){
        const elements = document.querySelectorAll("."+errorType);
        errors[errorType].errors=[];
        //loop all the inputs of that errorType
        elements.forEach((elm) => {
            if(errors[errorType].isInvalid(elm)){
                elm.placeholder = "This is invalid";
                errors[errorType].errors.push("The field "+elm.id+" is invalid");
            }
        });
        if(errors[errorType].errors.length >0){
            alert.innerHTML = errors[errorType].errors.map(err => "<li>"+err+"</li>").join('')
            alert.className = "alert";
            alert.classList.add(errors[errorType].color);
            break;
        }
    }


// SECOND LOOP CHECK IF NOT NUMBER  -------------------------------------------------------------------



// THIRD LOOP CHECK IF NOT STRING -------------------------------------------------------------------

// THIRD LOOP CHECK SPECIFICS  -------------------------------------------------------------------

// FOURTH LOOP CHECK ERRORS  -------------------------------------------------------------------

}