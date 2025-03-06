//Input   Nama lengkap
//Output  Inisial nama 

function getInitials(name) {
return name.split(' ').map(part => part[0].toUpperCase()).join('');
}

console.log(getInitials('John Doe')); // Output: JD