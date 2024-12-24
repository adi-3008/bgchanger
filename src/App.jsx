import { useRef, useState } from 'react';

function App() {
  const [currBgColor, setCurrColor] = useState("olive");
  const colors = ["red", "blue", "olive", "green", "yellow", "brown", "black", "pink"];
  return <div className='w-full h-screen' style={{backgroundColor:currBgColor}}>
    <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        {
          colors.map((color, index) => {
            return <button 
              key = {index}
              onClick={() => setCurrColor(color)}
              className='flex flex-wrap justify-center rounded-3xl px-4 py-1 text-white'
              style={{backgroundColor:color}}>
                {color}
            </button>
          })
        }
      </div>
    </div>
  </div>
}

export default App
