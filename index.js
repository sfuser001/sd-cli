#!/usr/bin/env node

var program = require("commander");
var download = require('download-git-repo');

program.version("1.0.7", "-v, --version").command('init <name>').action(name => {
  console.log(name);
  download('http://gitlab.sudaotech.com:sfuser/wx-mini-template#master', name, {clone: true}, error => {
    console.log(error);
  })

});

program.parse(process.argv);
