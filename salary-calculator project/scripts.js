console.log('js');

$(document).ready(onReady);

let emInput = [];

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

    calculate();
}

function calculate(){

    let totalAnnualSalary = 0;
    
    for(let i =0; i < emInput.length; i++){
        totalAnnualSalary +=  emInput[i].annualSalary;

    }

    let totalMonthlySalary = totalAnnualSalary / 12;
    let el = $('#totMonCost');
    el.empty();
    el.append( totalMonthlySalary );
    
    if( totalMonthlySalary > 20000){
        el.addClass('redColor');
    }
}

function deleteEmInput(){
    $(this).parent().parent().remove();
}
