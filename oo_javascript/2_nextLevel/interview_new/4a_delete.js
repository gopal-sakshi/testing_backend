// Two ways to delete properties from Object

const employee = {
    name: 'John Smith',
    position: 'Sales Manager',
};

// delete employee.position;            // OR
delete employee['position'];
/************************************************************************************/


// Object destructuring with rest syntax
    // immutable manner without altering the original object


const club = { 
    name: 'RM', manager: 'Ancelotti', details: { address: 'Spain', stadium: 'Bernabeu' }
}

const { details, ...basicInfo } = club;
console.log(details);
console.log(basicInfo);