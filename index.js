#!/usr/bin/env node

var program = require("commander");
var download = require('download-git-repo');
var fs = require("fs");
var path = require("path");


// 递归创建目录 异步方法
function mkdirs(dirname, callback) {
  fs.exists(dirname, function (exists) {
    if (exists) {
      callback();
    } else {
      // console.log(path.dirname(dirname));
      mkdirs(path.dirname(dirname), function () {
        fs.mkdir(dirname, callback);
        console.log('在' + path.dirname(dirname) + '目录创建好' + dirname  +'目录');
      });
    }
  });
}
// 递归创建目录 同步方法
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

program.version("1.0.7", "-v, --version").command('init <name>').action(name => {
  console.log(name);
  download('http://gitlab.sudaotech.com:sfuser/wx-mini-template#master', name, {clone: true}, error => {
    console.log(error);
  })

});

program.version("1.0.7", "-v, --version").command('page <name>').action(name => {
  console.log(name);
  mkdirs(name, () => {
    fs.createWriteStream(path.join(name, 'index.js'), {
      defaultEncoding: 'utf8'
    }).write(`
/** 速道科技 */
Page({
      
  data: {},

  onLoad: function(options) {

  }
});
`);
    fs.createWriteStream(path.join(name, 'index.json'), {
      defaultEncoding: 'utf8'
    }).write('{}');
    fs.createWriteStream(path.join(name, 'index.wxss'));
    fs.createWriteStream(path.join(name, 'index.wxml'));
  });
});

program.parse(process.argv);
