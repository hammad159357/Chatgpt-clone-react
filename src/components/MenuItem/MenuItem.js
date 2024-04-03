import React from 'react'
import icons from '../../assets/Icons/Icons'
import './style.css'

const MenuItem = () => {
    return (
        <>
            <div className='sidebar'>
                <div style={{cursor: "pointer"}}>{icons.gptIcon} </div>
                <div className='sidebar-icons'>
                    <div className='sidebar-logo'>
                        {icons.chatIcon}
                        {icons.explore}
                        {icons.subscription}
                        {icons.setting}
                    </div>
                    <div className='sidebar-logo'>
                        {icons.userProfile}
                        {icons.logout}
                    </div>
                </div>
                <div style={{cursor: "pointer"}}>
                    {icons.mode}
                </div>
            </div>
        </>
    )
}

export default MenuItem