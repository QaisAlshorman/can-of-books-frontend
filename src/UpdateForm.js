import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class UpdateForm extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Cat</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" defaultValue={this.props.title}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>desciption</Form.Label>
                                <Form.Control type="text" name="desciption" defaultValue={this.props.desciption}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>status</Form.Label>
                                <Form.Control type="text" name="status" defaultValue={this.props.status}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default UpdateForm;