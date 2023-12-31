import './App.css';
import Button from './components/button'
import Cards from './components/card'

import { useState } from "react";

function App() {

  const [counter,setCounter] = useState(0)

  const inc = ()=>{
    setCounter(counter + 1)
  }

  const dec = ()=>{
    setCounter(counter - 1)
    
  }

  return (
    <div>
      
      <h1>Counter App</h1>

      <h1>{counter}</h1>

      <button onClick={inc}>Increment</button>

      <button onClick={dec}>Decrement</button>


      <Cards description="dell laptop ha bhot acha" title="Dell laptop core i5 8th generation" imgSrc="https://static-01.daraz.pk/p/23788f6bf5f5ad7baca0d61b2a03f6e2.jpg_750x750.jpg_.webp" />

      <Cards description="hp laptop ha bhot acha" title="Hp laptop core i7 10th generation" imgSrc="https://m.media-amazon.com/images/I/419e+yV+jgL._AC_SY164_.jpg"/>

      <Cards description="lenovo laptop ha bhot acha" title="Lenovo laptop core i3 6th generation" imgSrc="https://cdn.thewirecutter.com/wp-content/media/2023/06/laptops-2048px-5607.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"/>

      <Cards description="dell laptop ha bhot acha" title="dell laptop core 2 duo 10th generation" imgSrc="https://static.komputronik.pl/product-picture/6/LTI15ACNXK82EP001_10M232-1.jpg"/>


      <Button type="SignUp"/>
      <Button type="Login"/>
      <Button type="Profile"/>
      <Button type="Next"/>
      <Button type="Back"/>


    </div>
  );
}

export default App;
