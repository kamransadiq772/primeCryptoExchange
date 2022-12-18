import React from 'react'

const InputBox = ({htxt,btxt}) => {
  return (
    <>
    <div style={{ width: '100%', display: 'flex', height: '60vh', alignItems: 'center', justifyContent: 'center' }} >
            <div style={{ width: "60%", height: '70%', backgroundColor: 'white', borderRadius: '15px' }} >
              <div style={{ height: '25%', borderBottom: '2px solid lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <div style={{ width: '90%', fontSize: '18px', fontWeight: 'bolder' }} >{htxt}</div>
              </div>
              <div style={{height:'75%',width:'100%',gap:'30px 0px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
                <div style={{width:'50%',display:'flex',gap:0}}>
                    <div style={{display:'flex',width:'12%',
                    borderRadius:'15px 0px 0px 15px',
                    alignItems:'center',justifyContent:'center',backgroundColor:'lightgray',fontWeight:'bold'}}>$</div>
                    <input placeholder="Enter Amount in $" 
                style={{border:'1px solid lightgray',padding:'10px',borderRadius:'0px 15px 15px 0px',width:'88%'}}
                /></div>
                <div><button
                style={{border:'none',color:'white',backgroundColor:'#40acfc',padding:'8px 15px',borderRadius:'20px'}}
                >{btxt}</button></div>
              </div>
            </div>
          </div>
    </>
  )
}

export default InputBox
