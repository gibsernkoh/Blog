import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default function card(props) {
    const { title, summary } = props.post;
    const index = props.index;
  return (
      <Card
          key={"post" + index} 
          hoverable
          cover={<img alt={title} src="https://via.placeholder.com/350x150" className="img-responsive" />}
      >
          <Meta
              title={title}
              description={summary}
          />
      </Card>
  )
}
