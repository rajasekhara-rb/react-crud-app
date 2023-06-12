import { useState } from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

const Edit = () => {
    const [editLoading, setEditLoading] = useState(false);
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        department: "",
        country: "",
    })


    return (
        <>
            <div className="container">
                <h1 className="alert text-center">Edit User</h1>

                <Form>
                    <FormGroup row>
                        <Label
                            for="name"
                            sm={2}
                        >
                            Name
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Enter Name"
                                type="text"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label
                            for="email"
                            sm={2}
                        >
                            Email
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                type="email"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label
                            for="department"
                            sm={2}
                        >
                            Department
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="department"
                                name="department"
                                placeholder="Enter Department"
                                type="text"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label
                            for="country"
                            sm={2}
                        >
                            Country Name
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="country"
                                name="country"
                                placeholder="Enter Country Name"
                                type="text"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup
                        check
                        row
                    >
                        <Col
                            sm={{
                                offset: 2,
                                size: 10
                            }}
                        >
                            <Button color="success">
                                Create
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}

export default Edit;