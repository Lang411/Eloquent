console.clear();
/*
for (var current = 1; current <= 100; current++) {
  if (current % 3 === 0 && current % 5 === 0) {
    console.log('FizzBuzz')
  }
  else if (current % 3 === 0) {
    console.log('Fizz') 
  } 
  else if (current % 5 === 0) {
      console.log('Buzz')
   }
  else {
    console.log(current)
  }
}
*/

/*
for (var current = 1; current <= 100; current++) {
  if (current % 3 === 0) {
    console.log('Fizz') 
  } 
  if (current % 5 === 0) {
      console.log('Buzz')
   }
  if (current % 3 === 0 && current % 5 === 0) {
    console.log('FizzBuzz')
  }
  if (current % 3 !== 0 || current % 5 !== 0) {
    console.log(current)
  }
}

/*
var temp = ""
for (var i = 0; i<7;i++){
  temp = temp + "#"
  console.log(temp)
}
*/

/*
var size = 15;
var board = "";

for (var j = 1; j<=size;j++){
  var row = ""
  for (var i = 1; i<=size;i++){
   if (i%2===0 && j%2===0){
     var row = row + "#"
   } 
   else if(j%2===0) {
     var row = row + " "
   }
   if (i%2===0 && j%2!==0){
     var row = row + " "
   } 
   else if(j%2!==0) {
     var row = row + "#"
   }
  }
  board = board + row + "\n"
}
console.log(board)
*/

/*
var x = "outside";




//-----------------------Functions Chapter-------------------
var f1 = function() {
  var x = "inside f1";
  return x
};
a = f1();
console.log("x:", x);
console.log("a:", a );
// → outside

var f2 = function() {
  var x = "inside f2";
  x = "test";
};
f2();
console.log(x);f
// → inside f2

var trying = function(hard){
  console.log("trying "+hard)
};
trying("hard")

function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

function trying(hard){
  console.log("Trying "+hard)
}
trying("Hard")

function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}
console.log(power(2))

function multiplier(factor) {
    return factor * factor;

}

var twice = multiplier(5);
console.log(twice);


function power(base, exponent) {
  if (exponent == 0)
  return 1;
   else
  return base * power(base, exponent - 1);
}
*/

/*
function findSolution(target) {
  function find(start, history) {
    if (start == target)
    return history;
     else if (start > target)
    return null;
     else
    return find(start + 5, '(' + history + ' + 5)') ||
    find(start * 3, '(' + history + ' * 3)');
  }
  return find(1, '1');
}

console.log(findSolution(54))
*/
/*
function min(a, b){
  if (a<b) {
    return a
  }
  else {
    return b
  }
}

console.log(min(10,10))
var a = [2,3,4]
console.log(a[0])
//math.min(2,5)
*/

//-----------------Recursion area------------------------
/*
function isEven(number) {
  function find(start) {
    //console.log(start)
    if (start === 0){
      return true;
    }
    else if (start === 1){
      return false;
    }
    else {
      start = start - 2;
      return find(start);
    }
  }
  return find(number)
}
console.log(isEven(20))


*/
/*
a = "test"
console.log(a.charAt(1))
console.log(a.charAt(a.length-1))
*/


/*
function countBs(string){
  count = 0
  for (i=0;i<=string.length-1;i++) {
    //console.log(string.charAt(i))
    if (string.charAt(i)=== "B"){
      count = count+1
    }
  }
  return count
}

 console.log(countBs("BestBuyBlows"))
 
 console.log("counting chars")
 
 function countChar(string, charcter){
     var count = 0
  for (i=0;i<=string.length-1;i++) {
    //console.log(string.charAt(i))
    if (string.charAt(i)=== charcter){
      count = count+1
    }
  }
  return count
 }
console.log(countChar("BestBuyblows","b"))

console.log("counding Bs")
function countBs(string){
 return countChar(string,"B")
}
console.log(countBs("BestBuyBlows"))

console.log(countChar("kakkerlak", "k"))


//------------------------Data Structures chapter------------------
var a = [2,3,4,5];
console.log(a)
console.log(a[1])
console.log(typeof countChar)

var b = "string"
console.log(b.toUpperCase())

a.push(6)
console.log(a)
a.pop()
console.log(a)


var day = {
  work:"Aerospace",
  play:["yoga","bike","swim"],
  eat:"pizza"
}
//day.play[1] = day.play[1].toUpperCase()
//console.log(day.play===undefined)
console.log("------HERE-----")
for (i=0;i<=day["play"].length;i++){
  console.log(day["play"][i])           
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]))
console.log(Math.sqrt(9))
*/
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}
storePhi("swim", 0.5);
storePhi("bike", 0.89);
storePhi("Run", 0.67);

console.log(map)
console.log(map["bike"])


for (var event in map){
  console.log("When you "+event+" the correlation is:"+map[event])
}

//Squirl journal problem
var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

// This makes sure the data is exported in node.js —
// `require('./path/to/04_data.js')` will get you the array.
//if (typeof module != "undefined" && module.exports)
//  module.exports = JOURNAL;


function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

correlation = tableFor("running", JOURNAL)
console.log(correlation);
// → [76, 9, 4, 1]

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
console.log(phi(correlation))
console.log(JOURNAL[2].events[1])

var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
// → true
console.log(map["touched tree"]);
// → -0.081

console.log(JOURNAL[1].squirrel)
function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);
for (var event in correlations)
 // console.log(event + ": " + correlations[event]);
  
  for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) &&
     !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
  
/*
a = [1,3,5,7,13,15,17,19,21,27]
b = 9

for (i=0;i<a.length-1;i++){
  if (b>a[i] && b<=a[i+1]){
    a = a.slice(0,i+1).concat(b).concat(a.slice(i+1))
  }
}
console.log(a)  

var a = "        I dont like spaces or holes in my string \n        "
console.log(a.trim())


y = [1,3,5,7,13]
console.log(Math.min.apply(null,y))
*/

//-------------------Excersises-------------------
console.log("-----The sum of a range-----")
function range(start, end, step){
  ///console.log("Number of Arguments:"+arguments.length)
    if (arguments.length===2){
      var step = 1
    }
  var r = []
  if (step<0){
    //console.log()
   for (i=start;i>=end;i=i+step){
         //console.log(start)
    r = r.concat(i)
   }
  }
  else {
   for (i=start;i<=end;i+=step){
    r = r.concat(i)
   }
   }
  return r
}
var a = range(2,7)
console.log(range(5,2,-1))

function sum(numb){
  console.log(arguments.length)
  var total = 0
  for (i=0;i<numb.length;i++){
    total = total + numb[i]
  }
  return total
}
console.log(sum(range(1,10)))

console.log("-----Reversing an array-----")
function reverse(array){
  newarray = []
  len = array.length
  for (i=0; i < len; i++){
    newarray = newarray.concat(array.pop())
  }
  return newarray
}

a = [1,2,3,4,5]
console.log(reverse(a))

function reverseArrayInPlace(array){
  for (i=0; i < Math.floor(array.length/2); i++){
    temp = array[i]
    array[i] = array[array.length-1-i]
    array[array.length-1-i] = temp
  }
  return array
}

var b = [1,2,3,4,5]
reverseArrayInPlace(b)
console.log(b)
/*
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

console.log(list)
*/

console.log("-----Linked lists and Objects-----")
function arrayToList(array){
  var list = {}
  for (i=array.length-1 ; i>= 0; i--){
    if (i===array.length-1){
      list = {value:array[i], rest:null}
    }
    else {
    list = {value:array[i], rest:list}
    }
  }
  return list
}
arr = [10,15,7,89,8]
console.log("The array is: "+arr)
l = arrayToList(arr)
console.log("list is titled l")
console.log(l)

function listToArray(list){
  array = []
  for (var node = list;node;node=node.rest){
    ///console.log(node.value)
    array.push(node.value)
  }
  return array
}
console.log("Return this back to an array")
a = listToArray(l)
console.log(a)

function prepend(element,list){
  var temp = {value:element.value,rest:1}
  newList = {value:temp.value, rest:list}
  return newList
}
v = 51

console.log("new list is l with a new element on the front with a value "+v)
console.log( prepend({value:v,rest:1},l) )

function nth(list,number){
  var element = 0
  for (var node = list;node;node=node.rest){
    ///console.log(node.value)
   if (node.value===number){
     element = element
   }
    else{
      element = element + 1
    }
  }
  if (element === 0){
    element = undefined
  }
  return element
}

console.log(nth(l,7))

function deepEqual(val1,val2){
  if (typeof(val1)=="object" && val1!=null ||typeof(val2)=="object" && val2!=null){
    //deep compare needed
    if (val1===val2){
      return true
    }
    else{
      return false
    }
  }
  else{
    if (val1 === val2){
      return true
    }
    else {
      return false
    }

  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(typeof(obj))
//console.log(deepEqual(obj, obj))
