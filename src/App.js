import React from 'react';

import './App.css';
// Show ảnh ra từ file ảnh
import Slideshow from './components/slideshow/slideshow';
import img1 from './image/1.png';
import img2 from './image/2.jpg';
import img3 from './image/3.png';
import img4 from './image/4.jpg';


const collection = [
  {src:img1, caption:"one"},
  {src:img2, caption:"two"},
  {src:img3, caption:"three"},
  {src:img4, caption:"four"}
]

class App extends React.Component {
  render() {
    return (
      <Slideshow
        input={collection}
        ratio={`493:547`}
        mode={`manual`}
      />
    );
  }
}
export default App;

