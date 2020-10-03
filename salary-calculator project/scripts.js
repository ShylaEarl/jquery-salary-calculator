console.log('js');

$(document).ready(onReady);

let emInput = [];

function onReady(){
    console.log('in onReady');

    $('#submitEmInput').on('click', submitEmInput);
    $('.deleteEmInput').on('click', deleteEmInput);

}

function submitEmInput(){

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = Number($( '#id' ).val());
    let title = $('#title').val();
    let annualSalary = Number($('#annualSalary').val());

    let employeeInput = {
        firstName: firstName,
        lastName: lastName,
        id: id, 
        title: title,
        annualSalary: annualSalary
    }

    emInput.push(employeeInput);
    console.log('in submitEmInput', emInput);

    //append information to the DOM. Where am I appending it too? 
    // for(let i = 0; i < emInput.length; i ++){
    // }    
    $('#employeeList').append(`<li>` + employeeInput.firstName + ` ` + employeeInput.lastName + ` ` + employeeInput.id + ` ` + employeeInput.title + ` ` + employeeInput.annualSalary +  `</li>`);  // ${emInput[i]}.... use (this) here? target by employeeInfoTable id? or do I need individual ids for each row?
    

    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

}

function deleteEmInput(){
    console.log('in deleteEmInput');
    $(this).deleteEmInput.remove(); //figure out what goes here. employeeInput? emInput?

}



//store the information CHECK!
//to calculate monthly costs, 
//append information to the DOM 
//clear the input fields. CHECK!

//Using the stored information, calculate monthly costs 
//append this to the to DOM. 

//If the total monthly cost exceeds $20,000, add a red background color to total monthly cost.

//==============================================================

//may need/want to create a table function 

// function createTable() {
//     let table = document.getElementById("myTable");
//     let row = table.insertRow(0);
//     let cell1 = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
//   }

//let table = $('#employeeInfoTable').
//let row = table.insertRow(0);
//let cell = row.insertcell();