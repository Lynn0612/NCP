import React, { useEffect, useState } from 'react';
import "./style.scss"
import { Button, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getNews } from '@rsrc/api';
import moment from 'moment';

const UserCard = () => {
    const [data, setData] = useState([]); 
    useEffect(() => {
        getNews().then(json => {
            setData(json.data); 
        })
    }, []);
    return (
        <div className="home-page">
            <div className="d-flex justify-content-between">
                <span className="fw-bold fs-1 m-0">News and Updates</span>
                <div className="d-flex align-items-end my-2 card-color">
                    <span>More Resources</span>
                    <div className="circle-bg">
                        <i className="bi bi-arrow-right">
                        </i>
                    </div>
                </div>
            </div>
            <hr className="hr"></hr>
            <div className="d-flex justify-content-around">
                {data.map((item, index) => (
                <Card className="shadow border-0" style={{ width: "410.67px" }} key={index}>
                    <Card.Img variant="top" src={item.cover_url} />
                    <Card.Body className="p-0 rounded card-body">
                        <Table striped className="card-table">
                            <thead>
                                <tr>
                                    <th>{moment(item.posted_at).format('MM-DD-YYYY')}</th>
                                    <th>{item.category}</th>
                                </tr>
                            </thead>
                        </Table>
                        <div className="m-4">
                        <Card.Title className="fw-bold">{item.title}</Card.Title>
                        <Card.Text className="text-truncate-multiline m-0">
                            {item.summary}
                        </Card.Text>
                        <Button className="my-btn btn border-0 fw-bold px-3 my-5 w-100 d-flex justify-content-center align-items-center">READ MORE</Button>
                        </div>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </div>
    )
}
export default UserCard
