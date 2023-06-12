import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Col, Input, Button, Spinner } from "reactstrap";

const CreateUser = () => {
    const [updateLoading, setUpdateLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        department: "",
        country: "",
    })

    const Navigate = useNavigate();

    const userDataHandler = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const url = "https://645a7e0e95624ceb21039cad.mockapi.io/reactusers";
        setUpdateLoading(true);

        try {
            await axios.post(url, userData);
            setUpdateLoading(false);
            Navigate("/");
        } catch (error) {

        }
    }

    return (
        <>
            <div className="container">
                <h1 className="alert text-center">Create User</h1>

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
                                value={userData.name}
                                onChange={userDataHandler}
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
                                value={userData.email}
                                onChange={userDataHandler}
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
                                value={userData.department}
                                onChange={userDataHandler}
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
                                value={userData.country}
                                onChange={userDataHandler}
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
                            {updateLoading ? (
                                <Button color="success">
                                    <Spinner size={5}>Loading...</Spinner>
                                    <span>Creating...</span>
                                </Button>) : (
                                <Button color="success" onClick={submitHandler}>
                                    Create
                                </Button>)}

                        </Col>
                    </FormGroup>
                </Form>
            </div >


        </>
    )
}

export default CreateUser;