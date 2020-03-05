//Map Example
/*
const profiles = new Map();
profiles.set('twitter','@adalovelace');
profiles.set('facebook','adalovelace');
profiles.set('googleplus','ada');

profiles.size;
profiles.has('twitter');
profiles.get('twitter');
profiles.has('youtube');
profiles.delete('facebook');
profiles.has('facebook');
profiles.get('facebook');
for(const entry of profiles){
    console.log(entry);
}
*/
/*
const tests = new Map();
tests.set(() => 2+2, 4);
tests.set(() => 2*2, 4);
tests.set(() => 2/2, 1);

for (const entry of tests){
    console.log(entry[0]());
    console.log((entry[0]() === entry[1]) ? 'PASS' : "FAIL");
}
*/

//Set Example
/*
const s = new Set([0,1,2,3]);
s.add(3);//추가안됨 
s.size;
s.delete(0);
s.has(0);

for(const entry of s){
    console.log(entry);
}
*/

//WeakMap Example
let obj = {};
const map = new WeakMap();
map.set(obj,{ket: "some_value"});
console.log(map.get(obj));
obj=undefined;

let obj1 = {key :"val1"};
let obj2 = {key:"val2"};
const set = new WeakSet([obj1,obj2]);
console.log(set.has(obj1));
obj1 = undefined;
console.log(set.has(obj1));