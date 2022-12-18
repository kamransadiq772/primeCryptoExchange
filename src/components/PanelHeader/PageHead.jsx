import React from 'react'
import '../../assets/css/my.css'

const PageHead = ({dir,subdir}) => {
    return (
        <>
            <div style={{ backgroundColor: 'white', borderRadius: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center' }} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} >
                    <div style={{ width: "95%", padding: '15px 0px 15px 0px' }} >
                        <h6 style={{ margin: '0px' }}><span style={{ color: '#82cbff ' }} >{dir} / </span>{subdir}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHead
