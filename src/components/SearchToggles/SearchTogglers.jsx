import React from 'react'
import { Accordion, Button, Form } from 'react-bootstrap'

const SearchTogglers = () => {

    return (
        <>
            <div className="search-togglers ">
                <div className='d-flex border'>
                    <span className='border-end p-4'> <i className="fa-solid fa-magnifying-glass"></i> </span>
                    <h6 className='p-4 fw-bold text-primary fw-bold text-primary text-primary m-0' style={{ lineHeight: "2em" }}> Start Searching </h6>
                </div>
                <Form className='border'>
                    <Form.Group className='my-3  px-4'>
                        <Form.Label className="fw-bold text-primary">JOB</Form.Label>
                        <Form.Control type="text" placeholder="Job title, Keywords" className="bg-light" />
                    </Form.Group>
                    <Form.Group className='mb-3 px-4'>
                        <Form.Label className="fw-bold text-primary">LOCATION</Form.Label>
                        <Form.Control type="text" placeholder="City, province or region " className="bg-light " />
                    </Form.Group>
                    <Form.Group className='mb-3 px-4'>
                        <Form.Label className="fw-bold text-primary">CATEGORY</Form.Label>
                        <Form.Control type="text" placeholder="Category" className="bg-light " />
                    </Form.Group>

                    <Accordion defaultActiveKey={['0']} flush className='border'>
                        <Accordion.Item eventKey="1" >
                            <Accordion.Header><span className='px-2 fw-bold text-primary'> CONTRACT TYPE</span></Accordion.Header>
                            <Accordion.Body>
                                <Form.Group>
                                    <Form.Label className='px-2 '>CONTRACT TYPE</Form.Label>
                                    <Form.Control className='bg-light' type="text" placeholder="Contract type, Keywords" />
                                </Form.Group>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><span className='px-2 fw-bold text-primary'> SPECIALISM</span></Accordion.Header>
                            <Accordion.Body>
                                <Form.Group >
                                    <Form.Label className='px-2'>SPECIALISM</Form.Label>
                                    <Form.Control className='bg-light' type="text" placeholder="SPECIALISM, Keywords" />
                                </Form.Group>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Form.Group className="p-4 form-group w-100 border">
                        <Button className='btn btn-primary srch-btn p-3' variant="primary" type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            &nbsp;
                            Search
                        </Button>
                    </Form.Group>
                </Form>

            </div>
        </>
    )
}

export default SearchTogglers