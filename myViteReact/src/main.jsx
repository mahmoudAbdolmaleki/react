import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test1 from './Test1.jsx'
import Parent from './Parent.jsx'
import Child from './Child.jsx'
import State1 from './state1.jsx'

createRoot(document.getElementById('root')).render(
   
  // <StrictMode>
  <div>

    <Parent/>
     {/* <App /> */}
     {/* <Parent>
      <Child  name="ali"/>
     </Parent> */}
    <Test1/>
    <Child/>
    <State1/>
  </div>
   
  // </StrictMode>,
)
