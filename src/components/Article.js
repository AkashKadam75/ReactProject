import React from 'react';

import { List, Card, Icon,Avatar,Button } from 'antd';

import axios from 'axios';



const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


const Articles = (props) => {

    return (
    <List
        itemLayout="vertical"
        size="medium"
        grid={{ gutter: 16, column: 2 }}
        dataSource={props.data}
        renderItem={item => (
        <List.Item
            key={item.title}
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            

        >
            <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/branch/${item.id}`}>{item.title}</a>}
            description={item.author}

            />
            {item.content}

        </List.Item>
        )}
    />
    )

}

export default Articles;