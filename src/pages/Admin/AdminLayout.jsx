import React from 'react'

const AdminLayout = (props) => {
  return (
    <div className='AdminLayout'>
        <div className="AdminLayoutLeft">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsa tempore enim nostrum quae error porro excepturi, odio aliquam doloribus similique dolorem quis expedita, facere totam accusamus dolor minus eius.
        </div>
        <div className="AdminLayoutRight">
            {props.children}
        </div>
    </div>
  )
}

export default AdminLayout