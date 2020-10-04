console.log('js');

$(document).ready(onReady);

let emInput = [];
//let monthlySalaryCost = [];

function onReady(){
    $('#submitEmInput').on('click', submitEmInput);
    $('#employeeInfoTable').on('click', '#deleteEmInput', deleteEmInput);

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
  
    $('#employeeInfoTable').append(`
        <tr>
            <td>${employeeInput.firstName}</td>
            <td>${employeeInput.lastName}</td>
            <td>${employeeInput.id}</td>
            <td>${employeeInput.title}</td>
            <td>${employeeInput.annualSalary}</td>
            <td><button id='deleteEmInput'>Delete</button></td>
        </tr>`
    );

    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

}

// function calculate(){

    //loop through the array
    // add up all salaries
    //divide the total by 12 to get monthly budget
    //append montly budget to total monthly cost
    // possibly add this function inside of submit button function 


//     let totalAnnualSalary = emInput.annualSalary ++;

//     for(let i =0; i < emInput.length; i++){
//         emInput.annualSalary ++;
//     }
//     $('#totMonCost').append(totalAnnualSalary);
// }

function deleteEmInput(){
    $(this).parent().parent().remove();
}


//calculate monthly costs 
//append this to the to DOM. 

//If the total monthly cost exceeds $20,000, add a red background color to total monthly cost.
