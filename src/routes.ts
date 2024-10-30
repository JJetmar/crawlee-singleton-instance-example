import { createCheerioRouter } from 'crawlee';
import { myHappyInstance } from './utils.js';

export const routes = createCheerioRouter();

routes.addDefaultHandler(() => {
    myHappyInstance.doStuff();
});
