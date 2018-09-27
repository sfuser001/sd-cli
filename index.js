#!/usr/bin/env node

var program = require("commander");
var download = require('download-git-repo');

program.version("1.0.4", "-v, --version").command('init <name>').action(name => {
  // download('http://gitlab.sudaotech.com:sfuser/wx-mini-template#master', name, {clone: true}, error => {
  //   console.log(error);
  // })
  console.log(name);
});

program.parse(process.argv);
