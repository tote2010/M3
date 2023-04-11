const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
    //process.cwd(index.print);
    print(process.cwd());
}

function date(print) {
    print(Date());
}

function echo(print, args) {
    print(args);
}

function ls(print) {
    //const ar = fs.readdir(".", error, files);
    fs.readdir(".", (error, files) => {
        if (error) throw error;
        print(files.join(" "));
    });
    //print(ar);

    //print(ar);
}

function cat(print, args) {
    //const data = fs.readFile(args, "utf-8", arror, data);
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw error;
        print(data);       
    });
}

function head(print, args) {
    //const data = fs.readFile(args, "utf-8", arror, data);
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw error;
        //const dataArr = data.split("\n").slice(0, 8).join("\n");
        const dataArr = data.split("\n")[0];
        print(dataArr);
    });
    //print(data);
}

function tail(print, args) {
    //const data = fs.readFile(args, "utf-8", arror, data);
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw new Error;
        //const dataArr = data.split("\n").slice(0, 8).join("\n");
        const dataArr = data.split("\n");
        print(dataArr.at(-1).trim());
    });
    //print(data);
}

// function curl(print, args) {
//     utils.request(args, (error, response) => {
//         if (error) throw error;
//         print(response.data);
//     });
// }

function curl(print,args) { 
    try{ 
        utils.request(args, (error, response) =>{ 
            if(error){ throw error; } 
            print(response); }) }catch(error){ }
         } 

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head, 
    tail,
    curl, 
};
