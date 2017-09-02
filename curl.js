const request = require('request');
const commander = require('commander');

commander
    .option('-H,--header <text>')
    .option('-A,--user-agent <name>')
    .option('-X,--request <method>','http method',/^(GET|POST)$/i,'GET')
    .option('-d,--data <data>','request body')
commander.parse(process.argv);

//parse header
const headerSplit = commander.header.split(/: /);
const headName = headerSplit[0].replace(/-./g,(s)=>s[1].toUpperCase(1)); //replace it to camelCase
const headValue = headerSplit[1];

//add header into commander
commander[headName] = headValue;

console.log(commander);

const options = {
    url: commander.args[0],
    method: commander.request,
    headers: {
        'User-Agent': commander.userAgent,
    },
    body: commander.data, 
}

request(options,(err,res,body)=>{
    if(err) return console.error(err);
    console.log(res.statusCode);
    console.log(body);
});
