import React from 'react'
import CategoryCollapse from '../CategoryCollapse'

const Sidebar = () => {
  return (
    <aside className='sidebar py-5'>
      <div className="box">
        <h3 className='mb-3 text-[16px] font-[600]'>Shop by Category</h3>
        <CategoryCollapse/>
      </div>
    </aside>
  )
}

export default Sidebar
