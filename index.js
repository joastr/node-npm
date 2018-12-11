process.stdin.setEncoding('utf-8');
/*
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }
});

*/

var OSinfo = require('./modules/OSInfo');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
    
        switch(instruction) {
            case  '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
            case '/process.env':
            process.stdout.write('node version\n');
            process.stdout.write(process.version);
            process.stdout.write('\n\nOS version\n');
            process.stdout.write(process.env.OS + '\n');
            break;
            case '/getOSinfo':
            OSinfo.print();
            break;
            default:
            process.stderr.write('Wrong instruction!\n');
        }
    }
});



