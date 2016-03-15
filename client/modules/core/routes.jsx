import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import ItemList from '../quizes/components/QuizList.jsx';

export default function (injectDeps, {FlowRouter}) {

  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'quizes.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<QuizList />)
      });
    }
  });

}