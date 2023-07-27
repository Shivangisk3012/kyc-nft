
import Create from './Components/Create'
import PricingInfo from './Components/PricingInfo'

import Notification from './Components/Notification'
import Availability from './Components/Availability'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {


  return (



<BrowserRouter>
      <Routes>
        <Route path="/Availability" element={<Availability />}>
         
        </Route>
        <Route path="/Notification" element={<Notification />}>
          </Route>
          
          <Route path="/PricingInfo" element={<PricingInfo />}>
          </Route>
          <Route path="/Create" element={<Create />}> 
          </Route>  
      </Routes>
    </BrowserRouter>



  )
}

export default App



// PricingInfo
      // <div className=' w-[90%] mx-auto  my-8 overflow-hidden' >
      //  <PricingInfo />
  
      // </div>

//Notification


//       <div>
//   <Notification /> 
// </div>


//Create

      // <div className='h-full'>
      //     <Create />
      // </div>

//Availability
{/* <div className='py-12  w-[80%] mx-auto'>
  <Availability />
</div> */}