// import { Tab } from 'bootstrap';
import React, { useState } from 'react';
import { Tab, Tabs, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './SearchTabs.css'
function SearchTabs() {
    const [key, setKey] = useState('job');

    return (
        <div className='search-tabs-ctr container-sm '>
            <div className='search-tab'>
                <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    variant='tabs'
                    transition={false}
                >
                    <Tab eventKey="job" title="FIND A JOB" className='srch-tab px-3'>

                        {/* Find A job search form */}
                        <Form className='search-form'>
                            <Form.Group className="p-3 form-group" >
                                <Form.Label>JOB</Form.Label>
                                <Form.Control className='bg-light' type="text" placeholder="Job title, Keywords" />
                            </Form.Group>

                            <Form.Group className="p-3 form-group" >
                                <Form.Label>LOCATION</Form.Label>
                                <Form.Control className='bg-light' type="text" placeholder="City, province or region" />
                            </Form.Group>

                            <Form.Group className="p-3 form-group" >
                                <Form.Label>GATEGORY</Form.Label>
                                <DropdownButton className='border border-secondary ctg-drp text-capitalize' id="job-ctg-dropdwn" title="Select industry" variant='secondary'>
                                    <Dropdown.Item href="#/ctg-1">First </Dropdown.Item>
                                    <Dropdown.Item href="#/ctg-2">Second</Dropdown.Item>
                                    <Dropdown.Item href="#/ctg-3">Third</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>


                            <Form.Group className="p-3 form-group" >
                                <Button className='btn btn-primary srch-btn' variant="primary" type="submit">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    &nbsp;
                                    Search
                                </Button>
                            </Form.Group>
                        </Form>
                    </Tab>
                    <Tab eventKey="resume" title="FIND Resume" className='srch-tab px-3'>
                        {/* Find A Resume search form */}
                        <Form className='search-form'>
                            <Form.Group className="p-3 form-group" >
                                <Form.Label>RSEUME</Form.Label>
                                <Form.Control className='bg-light' type="text" placeholder="Resume title, Keywords" />
                            </Form.Group>

                            <Form.Group className="p-3 form-group" >
                                <Form.Label>LOCATION</Form.Label>
                                <Form.Control className='bg-light' type="text" placeholder="City, province or region" />
                            </Form.Group>

                            <Form.Group className="p-3 form-group" >
                                <Form.Label>GATEGORY</Form.Label>
                                <DropdownButton className='border border-secondary ctg-drp text-capitalize' title="Select industry" variant='secondary'>
                                    <Dropdown.Item href="#/ctg-1">First </Dropdown.Item>
                                    <Dropdown.Item href="#/ctg-2">Second</Dropdown.Item>
                                    <Dropdown.Item href="#/ctg-3">Third</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>


                            <Form.Group className="p-3 form-group" >
                                <Button className='btn btn-primary srch-btn' variant="primary" type="submit">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    &nbsp;
                                    Search
                                </Button>
                            </Form.Group>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default SearchTabs




