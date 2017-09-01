const request = require('request');
const commander = require('commander');

commander
    .option('-H,--header <text>')
    .option('-X,--request <method>','http method',/^(GET|POST)$/i,'GET')
    .option('-d,--data <data>','request body')
commander.parse(process.argv);
//console.log(commander);

const options = {
    url: commander.args[0],
    method: commander.request,
    header: {

    },
    body: commander.data, 
}

request(options,(err,res,body)=>{
    if(err) return console.error(err);
    console.log(res.statusCode);
    console.log(body);
});
