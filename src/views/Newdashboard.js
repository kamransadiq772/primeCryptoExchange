import PanelHeader from 'components/PanelHeader/PanelHeader'
import React from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


const Newdashboard = () => {
    return (
        <>
            <PanelHeader size="sm" />
            <div className='content' >
                <Row>
                    <Col md={12} >
                        <Card >
                            <CardHeader>
                                <h5 className="title" style={{paddingBottom:0,marginBottom:0}}>Welcome Back!</h5>
                                <h6 style={{fontWeight:'500',fontSize:"1.1em",paddingTop:0,marginTop:0}} >Kamran Sadiq</h6>
                                <h4 className="title" style={{paddingTop:0,marginTop:0}} >$100</h4>
                                <button
                                style={{
                                    border:"none",
                                    color:'white',
                                    backgroundColor:'#37AdFF',
                                    padding:"8px 15px 8px 15px",
                                    borderRadius:'15px'
                                }}
                                >Portfolio</button>
                            </CardHeader>
                            <CardBody style={{display:"flex",justifyContent:'center',alignItems:'center'}} >
                                <Row style={{width:'100%'}} >
                                    <Col md={4} style={{border:'0px solid black', padding : "0px", height:'110px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <div style={{
                                            width:"98%",
                                            height:'98%',
                                            border:"1px solid lightgray",
                                            borderRadius:'10px',
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }} 
                                         >
                                            <div
                                            style={{display:'flex',flexDirection:'column',alignItems:'center',height:'70%',justifyContent:'space-around'}}
                                            >
                                                <h5 style={{padding:'0',margin:'0', fontWeight:'bold',fontSize:'20px'}} >$ 573.00</h5>
                                                <p style={{margin:'0', fontSize:'15px'}} >Cash Available</p>
                                            </div>
                                         </div>
                                    </Col>
                                    <Col md={4} style={{border:'0px solid black', padding : "0px", height:'110px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <div style={{
                                            width:"98%",
                                            height:'98%',
                                            border:"1px solid lightgray",
                                            borderRadius:'10px',
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }} 
                                         >
                                            <div
                                            style={{display:'flex',flexDirection:'column',alignItems:'center',height:'70%',justifyContent:'space-around'}}
                                            >
                                                <h5 style={{padding:'0',margin:'0', fontWeight:'bold',fontSize:'20px'}} >$ 500.00</h5>
                                                <p style={{margin:'0', fontSize:'15px'}} >Total Invested</p>
                                            </div>
                                         </div>
                                    </Col>
                                    <Col md={4} style={{border:'0px solid black', padding : "0px", height:'110px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <div style={{
                                            width:"98%",
                                            height:'98%',
                                            border:"1px solid lightgray",
                                            borderRadius:'10px',
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }} 
                                         >
                                            <div
                                            style={{display:'flex',flexDirection:'column',alignItems:'center',height:'70%',justifyContent:'space-around'}}
                                            >
                                                <h5 style={{padding:'0',margin:'0', fontWeight:'bold',fontSize:'20px'}} >$ 73.00</h5>
                                                <p style={{margin:'0', fontSize:'15px'}} >Profit/Loss</p>
                                            </div>
                                         </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Newdashboard
