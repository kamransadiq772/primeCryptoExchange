import React from 'react'
import '../../assets/css/my.css'
import DataTable from "react-data-table-component";



const PageTable = ({data,columns}) => {

   
    
    return (
        <>
            <div style={{ borderRadius: '10px' }} >
                <DataTable data={data} columns={columns} pagination={true} paginationPerPage={4} />
            </div>
        </>
    )
}

export default PageTable
