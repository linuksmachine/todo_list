import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const TASKS = [
  { id: 'todo-0', name: 'Заправить кислородный баллон', completed: true },
  { id: 'todo-1', name: 'Вырастить картошку на Марсе', completed: false },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={TASKS} />
  </React.StrictMode>
);
