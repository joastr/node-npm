'use strict';


var os = require('os');
var time = require('../modules/time');
var colors = require('colors');


function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.gray, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    //console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    //console.log('Uptime: ~', time.print());
    time.print();
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.white, userInfo.homedir);
   
}

exports.print = getOSinfo;