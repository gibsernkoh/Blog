import React from 'react'
import { Row, Col, Typography } from 'antd';
import Card from './card';

const { Title } = Typography;

export default function latest() {
    const latest = [
        {title: "Some title 1", summary: "Some Summary 1"},
        {title: "Some title 2", summary: "Some Summary 2"},
        {title: "Some title 3", summary: "Some Summary 3"},
        {title: "Some title 4", summary: "Some Summary 4"},
        {title: "Some title 5", summary: "Some Summary 5"},
        {title: "Some title 6", summary: "Some Summary 6"},
        {title: "Some title 7", summary: "Some Summary 7"},
        {title: "Some title 8", summary: "Some Summary 8"},
        {title: "Some title 9", summary: "Some Summary 9"},
        {title: "Some title 10", summary: "Some Summary 10"}
    ];

    return (
        <div className="innerContainer section">
            <Title className="text-sm-center text-xs-left">Our Posts
                    <small>- Latest -</small>
            </Title>
            <Row className="flex-wrap xs-2 sm-3 md-4 lg-5">
                {latest.map((post, index) => (
                    <Col key={"col"+index} >
                        <Card post={post} index={index} />
                    </Col>))}
            </Row>
        </div>
    )
}
