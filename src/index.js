import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


/**
 * 
 *  - react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요함.
 *  - javascript와 HTML 사이의 이러한 조합을 jsx라고 불린다.
 * 
 * 
 */

ReactDOM.render(
    <App />, // react는 component (컴포넌트) 와 함께 동작함.
  document.getElementById("potato")
);

