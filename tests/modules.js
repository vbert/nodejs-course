// Practical task: modules
// 

// 1. Write a module (CommonJS)
// 
// a)
// const notifications = require('./notifications-cjs');
// notifications.success('Operacja udana');
// 
// b)
// const {success} = require('./notifications-cjs');
// success('Operacja udana');
// 
// 2. Write a module (ES module)
// 
// a)
import notifications from './notifications-esm.js';
notifications.success('Operacja udana');
// 
// b)
import {success} from './notifications-esm.js';
success('Operacja udana');
