/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import DataTable from "react-data-table-component";
import '../assets/css/my.css'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import PageHead from "components/PanelHeader/PageHead";
import PageTable from "components/PanelHeader/PageTable";
import icons from "variables/icons";

function Icons() {


  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1994',
    },
    {
      id: 3,
      title: 'Lahore',
      year: '1995',
    },
    {
      id: 4,
      title: 'Karachi',
      year: '1996',
    },
    {
      id: 5,
      title: 'Islamabad',
      year: '2001',
    },
  ]

  return (
    <>
      <PanelHeader size="sm" />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '95%' }} >
          <PageHead dir="Watchlist" subdir="Clains"/>
          <PageTable data={data} columns={columns}  />
        </div>
      </div>


      {/* <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">100 Awesome Nucleo Icons</h5>
                <p className="category">
                  Handcrafted by our friends from{" "}
                  <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  {icons.map((prop, key) => {
                    return (
                      <Col
                        lg={2}
                        md={3}
                        sm={4}
                        xs={6}
                        className="font-icon-list"
                        key={key}
                      >
                        <div className="font-icon-detail">
                          <i className={"now-ui-icons " + prop} />
                          <p>{prop}</p>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div> */}
    </>
  );
}

export default Icons;
