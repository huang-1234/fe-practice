#!/usr/bin/env node

// console.log('hello world!');
const program = require('commander');

program
    .command('create <name>')
    .description('请输入项目名称')
    .action(name => {
        console.log(`你要创建的项目名称：${name}`);
    });

program.parse(process.argv);
