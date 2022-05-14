import React from 'react'
import { Accordion, Button, Form } from 'react-bootstrap'

const SearchTogglers = () => {

    return (
        <div>
            <div className="search-togglers">
                <div className='d-flex border'>
                    <span className='border-end p-4'> <i className="fa-solid fa-magnifying-glass"></i> </span>
                    <span className=' p-4'> Start Searching </span>
                </div>
                <Form className='border'>
                    <Form.Group className='my-3  px-4'>
                        <Form.Label>JOB</Form.Label>
                        <Form.Control type="text" placeholder="Job title, Keywords" className="bg-light" />
                    </Form.Group>
                    <Form.Group className='mb-3 px-4'>
                        <Form.Label>LOCATION</Form.Label>
                        <Form.Control type="text" placeholder="City, province or region " className="bg-light " />
                    </Form.Group>
                    <Form.Group className='mb-3 px-4'>
                        <Form.Label>CATEGORY</Form.Label>
                        <Form.Control type="text" placeholder="Category" className="bg-light " />
                    </Form.Group>

                    <Accordion defaultActiveKey={['0']} flush className='border'>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>CONTRACT TYPE</Accordion.Header>
                            <Accordion.Body>
                                <Form.Group>
                                    <Form.Label>CONTRACT TYPE</Form.Label>
                                    <Form.Control className='bg-light' type="text" placeholder="Contract type, Keywords" />
                                </Form.Group>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Specialisms</Accordion.Header>
                            <Accordion.Body>
                                <Form.Group className='p-4' >
                                    <Form.Label>SPECIALISM</Form.Label>
                                    <Form.Control className='bg-light' type="text" placeholder="SPECIALISM, Keywords" />
                                </Form.Group>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Form.Group className="p-3 px-4 form-group w-100 border">
                        <Button className='btn btn-primary srch-btn' variant="primary" type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            &nbsp;
                            Search
                        </Button>
                    </Form.Group>
                </Form>

            </div>
        </div>
    )
}

export default SearchTogglers