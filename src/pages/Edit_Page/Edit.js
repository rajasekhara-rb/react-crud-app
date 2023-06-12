import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Col, Input, Button, Spinner } from "reactstrap";

const Edit = () => {
    const [editLoading, setEditLoading] = useState(false);
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        department: "",
        country: "",
    })

    const { id } = useParams();
    const navigate = useNavigate();

    const handleEdit = (event) => {
        setProfile({ ...profile, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        const editProfile = async () => {

            try {
                const url = `https://645a7e0e95624ceb21039cad.mockapi.io/reactusers/${id}`;
                const { data } = await axios.get(url);
                setProfile({ ...data });
            } catch (error) {
                console.log(error);
            }

        }
        editProfile()

    }, [id])

    const editProfileData = async () => {
        const url = `https://645a7e0e95624ceb21039cad.mockapi.io/reactusers/${id}`;
        setEditLoading(true);
        try {
            await axios.put(url, profile);
            setEditLoading(false)
            navigate("/");
        } catch (error) {

        }
    }

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
                                value={profile.name}
                                onChange={handleEdit}
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
                                value={profile.email}
                                onChange={handleEdit}
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
                                value={profile.department}
                                onChange={handleEdit}
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
                                value={profile.country}
                                onChange={handleEdit}
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
                            {editLoading ? (<Spinner>Loading...</Spinner>) : (<Button color="success" onClick={editProfileData}>
                                Update
                            </Button>)}
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}

export default Edit;