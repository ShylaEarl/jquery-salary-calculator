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

    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

}

//employee first name, last name, ID number, job title, annual salary.

//A 'Submit' button should collect the form information, 
//store the information to calculate monthly costs, 
//append information to the DOM 
//clear the input fields. 

//Using the stored information, calculate monthly costs 
//append this to the to DOM. 

//If the total monthly cost exceeds $20,000, add a red background color to total monthly cost.