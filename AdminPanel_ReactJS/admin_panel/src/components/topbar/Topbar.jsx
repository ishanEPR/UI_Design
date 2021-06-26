import React from 'react';
import "./topbar.css";
import {NotificationsNone,Settings,Language} from '@material-ui/icons';

export default function Topbar() {
    return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
               <span className="logo"> 
                   AdminPanel
               </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span> 

                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className='topIconBadge'>2</span> 

                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                    

                </div>
            </div>
  
        </div>
  
    </div>
    )
}
