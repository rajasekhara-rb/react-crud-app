import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const Profile = () => {
    return (
        <>
            <h1 className="alert text-center">Profie component</h1>
            <Card className="my-2 container w-50 p-0">
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/180"
                    style={{
                        height: "100%"
                    }}
                    top
                    width="100%"
                ></CardImg>
                <CardBody>
                    <CardTitle tag="h5">
                        Name
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Email
                    </CardSubtitle>
                    <CardText>
                        Department
                    </CardText>
                    <CardText>
                        Country
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Profile;