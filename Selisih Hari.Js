//Input   YYYY-MM-DD
// Output  Selisih Kedua tanggal Berbeda

function dateDifference(date1, date2) {
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(date1);
const secondDate = new Date(date2);
const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
return diffDays;
}

console.log(dateDifference('2024-03-19', '2024-03-21')); // Output: 2