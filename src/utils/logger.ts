//vue logger：https://www.npmjs.com/package/vuejs3-logger
import VueLogger from 'vuejs3-logger';
import { createApp } from 'vue';
const isProduction = process.env.NODE_ENV === 'production';
const vlOptions = {
    isEnabled: true,
    logLevel : isProduction ? 'error' : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true
};

const app = createApp({})
app.use(VueLogger, vlOptions);
const logger = app.config.globalProperties.$log;

export {VueLogger, vlOptions, logger};