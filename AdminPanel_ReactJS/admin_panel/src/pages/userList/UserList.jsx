import React from 'react';
import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'user', headerName: ' User', width: 200, renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avater} alt=""/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                        <button className='userListEdit'>Edit</button>
                        <DeleteOutline className='userListDelete'/>
                    </>
                )
            }
          },  

      ];
      
      const rows = [
        { id: 1, 
            username: 'ishan97', 
            avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
            email: 'ishan@gmail.com',
            status: 'active',
            transaction: '$120.00',
         },
         { id: 2, 
            username: 'ishan97', 
            avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
            email: 'ishan@gmail.com',
            status: 'active',
            transaction: '$120.00',
         },
         { id: 3, 
            username: 'ishan97', 
            avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
            email: 'ishan@gmail.com',
            status: 'active',
            transaction: '$120.00',
         },
         { id: 4, 
            username: 'ishan97', 
            avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
            email: 'ishan@gmail.com',
            status: 'active',
            transaction: '$120.00',
         },
         { id: 5, 
            username: 'ishan97', 
            avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
            email: 'ishan@gmail.com',
            status: 'active',
            transaction: '$120.00',
         },
         { id: 6, 
            username: 'ishan97', 
            avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
            email: 'ishan@gmail.com',
            status: 'active',
            transaction: '$120.00',
         },
         { id: 7, 
            username: 'ishan97', 
            avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
            email: 'ishan@gmail.com',
            status: 'active',
            transaction: '$120.00',
         },
         { id: 8, 
            username: 'ishan97', 
            avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
            email: 'ishan@gmail.com',
            status: 'active',
            transaction: '$120.00',
         },
         { id: 9, 
            username: 'ishan97', 
            avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
            email: 'ishan@gmail.com',
            status:'active',
            transaction: '$120.00',
         },
         { id: 10, 
            username: 'ishan97', 
            avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
            email: 'ishan@gmail.com',
            status:'active',
            transaction: '$120.00',
         }

      ];
    return (
        <div className='userList'>
            <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />
        
            
        </div>
    )
}
