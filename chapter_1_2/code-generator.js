// Practical task: console
// 
// 2. Write a code generator
// 
// The script takes two arguments: make:class NameClass methods="list,methods,separated,by,comma"
// 
const argv = process.argv.slice(2);

if (argv[0] === 'make:class') {
    const className = argv[1];
    const methods = argv[2].split('=')[1].split(',');
    let methodsString = '';

    const tmplClass = (className, methods) => {
        return `class ${className} {\n${methods}}`;
    };

    const tmplMethods = (methodName, arg) => {
        return `\t${methodName}(${arg}) {}\n`;
    };

    methods.forEach(method => {
        methodsString += tmplMethods(method, className.toLowerCase());
    });

    console.log(tmplClass(className, methodsString));
} else {
    console.log('ERROR! Invalid arguments!');
}
