console.log('js');

$(document).ready(onReady);

let emInput = [];

function onReady(){
    console.log('in onReady');

    $('#submitEmInput').on('click', submitEmInput);

}

function submitEmInput(){

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();

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

    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

}

function deleteEmInput(){
    console.log('in deleteEmInput');
    

}

//employee first name, last name, ID number, job title, annual salary. CHECK!

//A 'Submit' button should collect the form information, CHECK!
//store the information to calculate monthly costs, CHECK!
//append information to the DOM 
//clear the input fields. CHECK!

//Using the stored information, calculate monthly costs 
//append this to the to DOM. 

//If the total monthly cost exceeds $20,000, add a red background color to total monthly cost.

//may need/want to create a table function 

//let table = $('#create in html and add id here')
//let row = table.insertRow(0);
//let cell = row.insertcell();