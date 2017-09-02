const request = require('request');
const commander = require('commander');
const parseHttpHeader = require('./parse-http-header');

commander
    .option('-H,--header <text>')
    .option('-A,--user-agent <name>')
    .option('-X,--request <method>','http method',/^(GET|POST)$/i,'GET')
    .option('-d,--data <data>','request body')
commander.parse(process.argv);

//parse header
const header = parseHttpHeader(commander.header);
//add header into commander
commander[header.name] = header.value;

console.log(commander);

const options = {
    url: commander.args[0],
    method: commander.request,
    headers: {
        'User-Agent': commander.userAgent,
        'Content-Type': commander.contentType
    },
    body: commander.data, 
}

request(options,(err,res,body)=>{
    if(err) return console.error(err);
    console.log(res.statusCode);
    console.log(body);
});
