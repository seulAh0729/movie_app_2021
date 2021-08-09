import React from 'react';

/*

- component는 HTML을 반환하는 함수.

*/
function Food (){

  return <h1> I'dont Like Potato</h1>

}

/**
 *  
 * jsx 
 * 
 */


function App() {
  return (
  <div>
    <h1>Hello!!!!!!!</h1>
    <Food name = "Kimchi" />   
  </div>
  ); // food component에 kimchi 라는 value로 prop name을 줌
}

export default App;
