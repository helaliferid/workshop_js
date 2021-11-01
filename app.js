// console.log('*** P1 ***')
// let rayon = 10;
// let surface = Math.PI * (rayon ** 2);

// console.log('Rayon:',rayon)
// console.log('Surface:',surface)

// isRaining=':)'; // 0 , undefined, '', null falsy values;
//                 // !== 0 , 'string' truthy values
// if(isRaining){
//     console.log('It Rain now')
// }else{
//     console.log('I stay @ home')
// }

// digit='5';
// switch (digit) {
//     case 0:
//          console.log('zero');
//         break;
//     case 1:
//          console.log('One');
//         break;
//     case 2:
//          console.log('two');
//         break;
//     case 3:
//          console.log('three')
//         break;
//     case 4:
//          console.log('four')
//         break;
//     case 5:
//          console.log('five')
//         break;
//     case 6:
//          console.log('six')
//         break;
//     case 7:
//          console.log('seven')
//         break;
//     case 8:
//          console.log('eight')
//         break;
//     case 9:
//          console.log('nine')
//         break;
//     case 10:
//          console.log('ten')
//         break;

//     default:
//         console.error('no correct digit between 0..10')
//         break;
// }


// for(let state;ExecutionCondition;mutation){
//     console.log(`state:`);
// }

// intArray= [0,1,2,3,4,5,6,7,8,9]

// for( iterator of intArray){
//     console.log(iterator);
// }

// fruits = [
//     {
//         designation:'Apples',
//         prix:5
//     },
//     {
//         designation:'Bananas'
//     },
//     {
//         designation:'Mangue',
//         color:'yellow'
//     },
//     {
//         designation:'Orange',
//         color:'orange'
//     },
//     ];

// for (fruit of fruits){
//     console.log(fruit);
// }

// numbers=0;
// while (numbers < 10) {
//     console.log(numbers);
//     numbers++;
// }

// number_=0;
// while((number_<10) && (number_ % 2 ===0) ){
//     console.log("ce nombre n'est pas pair");
//     number_++;
// } 

// intArray= [0,1,2,3,4,5,6,7,8,9,11,12,13,15]

// index=0;
// while(index<intArray.length){
//     console.log(intArray[index]);
//     index++;
// }

// isProcessing=true;

// while(isProcessing){
//     console.log('Processing ...')
//     isProcessing=false;
//     console.log('end');
// }

// result = 0;
// i=0;
// do{
//     i=i+1;
//     result=i+result;
// }while(i<6);
// console.log(result);
// console.log(typeof result);

// obj = {
//     label:'Dell',
//     price:4500,
//     stock:15
// }

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// for(props in obj){
//     console.log(props)
// }

// console.log('--------------------------')

// anArray = [5,8,'France','Homme',true]
// for(element of anArray){
//     console.log(element)
// }
// console.table(anArray)

// persons = [
//     { id: 1, name: 'mohamed' },
//     { id: 2, name: 'karim' },
//     { id: 3, name: 'ali' },
//     { id: 4, name: 'salah' },
//     { id: 5, name: 'leila' }
// ]

capitalNames = persons.map(function (data) {
    let tmp=data.name.toUpperCase();
    return {
        id:data.id,
        name:tmp
    }
})

// console.table(persons);
// console.table(capitalNames);

console.log('------------------')
persons = [
    { id: 1, name: 'mohamed' },
    { id: 2, name: 'karim' },
    { id: 3, name: 'ali' },
    { id: 4, name: 'salah' },
    { id: 5, name: 'leila' }
];



function map(_array, fn) {
    let temp = [];
    for (var i = 0; i < _array.length; i++) {
        temp.push(fn(_array[i]));
    }
    return temp;
}


console.table(persons);
result=map(persons,function(elem){
    return {
        id:elem.id,
        name:elem.name[0]
    }
});

console.table(result);

