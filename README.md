clog
====
> Pretty colorful cli logger for NodeJS(with table, success and more...) **v0.0.2**  

![Screenshot](https://raw.githubusercontent.com/a8m/clog/master/screenshot/table.jpg)

![Screenshot](https://raw.githubusercontent.com/a8m/clog/master/screenshot/logs.jpg)

![Screenshot](https://raw.githubusercontent.com/a8m/clog/master/screenshot/expections.jpg)

#[Installing](#installing)
###**git**
```bash
$ git clone https://github.com/a8m/clog.git
```
###**npm**
```bash
$ npm install c-log --save
```

#[Usage](#usage)
```js
var clog = require('c-log');

//Simple logs with colors
clog.log("Lorem Ipsum...");
clog.info("Lorem Ipsum...");
clog.warn("Lorem Ipsum ..");

//Success and Error
function assert(expect, msg) {
  return expect 
    ? clog.success(msg) 
    : clog.error(msg);
}

//Clog.time/timeEnd
clog.time("fsRead");
//fake async
setTimeout(function(){
  logger.timeEnd("fsRead")
},2000);

//Clog.table
var persons = [
  { name: 'Doris Fox', age: 20, isActive: false, balance: '$3,128.12' },
  { name: 'Mike Loks', age: 32, isActive: true,  balance: '$12,132.1' },
  { name: 'Arle Sher', age: 12, isActive: false, balance: '$2,968.83' }
];
clog.table(persons);
/// Table Result:
╔═════════╤═══════════╤═════╤══════════╤═══════════╗
║ (index) │ name      │ age │ isActive │ balance   ║
╟─────────┼───────────┼─────┼──────────┼───────────╢
║ 0       │ Doris Fox │ 20  │ false    │ $3,128.12 ║
╟─────────┼───────────┼─────┼──────────┼───────────╢
║ 1       │ Mike Loks │ 32  │ true     │ $12,132.1 ║
╟─────────┼───────────┼─────┼──────────┼───────────╢
║ 2       │ Arle Sher │ 12  │ false    │ $2,968.83 ║
╚═════════╧═══════════╧═════╧══════════╧═══════════╝
```
#[License](#license)
MIT © [Ariel Mashraki](https://github.com/a8m)
