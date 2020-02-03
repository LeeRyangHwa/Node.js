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


const tests = new Map();
tests.set(() => 2+2, 4);
tests.set(() => 2*2, 4);
tests.set(() => 2/2, 1);

for (const entry of tests){
    console.log(entry[0]());
    console.log((entry[0]() === entry[1]) ? 'PASS' : "FAIL");
}