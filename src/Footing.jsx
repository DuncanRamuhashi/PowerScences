import React from 'react'

const Footing = () => {
    // set year
    const year =  new Date().getFullYear();
  return (
    <div className="flex bg-slate-700 items-center justify-center py-9 w-full "
    style={{ backgroundColor: '#f9e3ce' }}>
            

   
    <footer className=" p-4 text-center">
    <p className='text-green-700'>&copy; {year} Duncan Ramuhashi. All rights reserved.</p>
    </footer>

</div> 
  )
}

export default Footing