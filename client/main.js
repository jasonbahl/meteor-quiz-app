import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import usersModule from './modules/users';
import quizesModule from './modules/quizes';

// init context
const context = initContext();

// create app
const app = createApp(context);

app.loadModule(coreModule);
app.loadModule(usersModule);
app.loadModule(quizesModule);
app.init();