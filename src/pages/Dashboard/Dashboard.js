import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillEyeFill, BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Card, CardHeader, ListGroup, ListGroupItem, Button, Spinner } from "reactstrap";
import { HiUserCircle } from "react-icons/hi2";

const Dashboard = () => {
    const [id, setId] = useState(0);
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const getUsers = async () => {
        const url = "https://645a7e0e95624ceb21039cad.mockapi.io/reactusers";
        try {
            await axios.get(url)
                .then(({ data }) => setUser(data));
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    const DeleteUser = async (userId) => {
        const url = `https://645a7e0e95624ceb21039cad.mockapi.io/reactusers/${userId}`;
        setDeleteLoading(true);
        setId(userId);

        try {
            await axios.delete(url);
            getUsers();
            setDeleteLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1 className="alert alert-light text-center p-2">Dashboard</h1>
            <div className="d-flex m-auto my-4 container-fluid col-sm-6 offset-sm-2 offset-lg-4">
                <Card
                    style={{
                        width: '10rem'
                    }}
                    className="w-100">
                    <CardHeader>
                        {/* <h1>Dashboard</h1> */}
                        <div className="d-flex justify-content-between">
                            <h4>Users List</h4>
                            <Link to="/create">
                                <Button color="primary">
                                    Add Users +
                                </Button>
                            </Link>
                        </div>

                    </CardHeader>
                    <ListGroup flush>
                        {loading ? (
                            <div className="d-flex justify-content-around align-items-center m-5">
                                <Spinner
                                    color="primary"
                                    style={{
                                        height: '10rem',
                                        width: '10rem'
                                    }}
                                >
                                    Loading...
                                </Spinner>
                                {/* <Spinner
                                color="primary"
                                style={{
                                    height: '10rem',
                                    width: '10rem'
                                }}
                                type="grow"
                            >
                                Loading...
                            </Spinner> */}
                            </div>
                        ) : (
                            users.map(user =>
                                <ListGroupItem key={user.id}>
                                    <div className="d-flex justify-content-between align-items-center w-100">

                                        <Link to={"profile/" + user.id} className="d-flex">
                                            <Button className="d-flex w-100 outline-none" color="none">
                                                <HiUserCircle size={50} color="black" className="" />
                                            </Button>
                                        </Link>
                                        <div className="d-flex flex-column align-items-start justify-content-center w-75 m-1">
                                            <h4 className="mb-0">{user.name}</h4>
                                            <p className="mb-0 text-primary">{user.email}</p>
                                        </div>

                                        <div className="d-flex justify-content-between m-1">
                                            <Link to={"profile/" + user.id}>
                                                <Button color="link"><BsFillEyeFill color="blue" size={25} /></Button>
                                            </Link>
                                            <Link to={"edit/" + user.id}>
                                                <Button color="link"><BsPencilSquare color="orange" size={25} /></Button>
                                            </Link>
                                            <Button color="link" >
                                                {id === user.id && deleteLoading ? (
                                                    <Spinner color="danger" style={{
                                                        height: '1.5rem',
                                                        width: '1.5rem'
                                                    }}>Loading</Spinner>
                                                ) : (<BsFillTrashFill color="red" size={25} onClick={() => DeleteUser(user.id)} />)}
                                            </Button>
                                        </div>

                                    </div>
                                </ListGroupItem>
                            )
                        )}

                    </ListGroup>
                </Card>
            </div>
        </>
    )
}

export default Dashboard;