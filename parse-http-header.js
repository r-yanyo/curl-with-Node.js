module.exports = function(header){
    const headerSplit = header.split(/: /);
    const name = headerSplit[0].replace(/-./g,(s)=>s[1].toUpperCase()).replace(/^./,(s)=>s.toLowerCase()); //replace it to camelCase
    const value = headerSplit[1];
    return {
        name: name,
        value: value
    };
}