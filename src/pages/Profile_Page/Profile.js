import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiUserCircle } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Spinner } from "reactstrap";

const Profile = () => {

    const [viewProfile, setViewProfile] = useState({
        name: "",
        email: "",
        department: "",
        country: "",
    })

    const [viewProfileLoading, setViewProfileLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const viewProfileData = async () => {
            setViewProfileLoading(true);
            const url = `https://645a7e0e95624ceb21039cad.mockapi.io/reactusers/${id}`;
            try {
                const { data } = await axios.get(url);
                setViewProfile(data);
                setViewProfileLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        viewProfileData();
    }, [id])

    return (
        <>
            <h1 className="alert text-center">Profie component</h1>
            {viewProfileLoading ===true ? (
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
                </div>
            ) : (
                <Card className="my-2 container w-50 p-0">
                    <div className="d-flex">
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/900/180"
                            style={{
                                height: "100%"
                            }}
                            top
                            width="100%"
                            className="position-relative"
                        ></CardImg>
                        <HiUserCircle size={150} color="white" className="position-absolute p-2" top />
                    </div>

                    <CardBody>
                        <CardTitle tag="h5">
                            {viewProfile.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {viewProfile.email}
                        </CardSubtitle>
                        <CardText>
                            {viewProfile.department}
                        </CardText>
                        <CardText>
                            {viewProfile.country}
                        </CardText>
                    </CardBody>
                </Card>
            )}

        </>
    )
}

export default Profile;