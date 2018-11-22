var fs=require('fs').promises;

var x={};

var i=1;

x.completedChallenges.forEach(async function(chalenge,i){
    if(chalenge.files.length){
        console.log('mandando',i)
        await fs.writeFile('index-'+i+'.js',chalenge.files[0].contents);
    }
});