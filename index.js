
const program = require('commander');
const download = require('download-git-repo');

program.version("1.0.0", "-v, --sersion").command('init <name>').action(name => {
  download('http://gitlab.sudaotech.com:sfuser/wx-mini-template#master', name, {clone: true}, error => {
    console.log(error);
  })
});

program.parse(process.argv);
