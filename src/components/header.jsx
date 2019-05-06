import React, { Component } from 'react'
import { Menu } from 'antd';

const { Item } = Menu;
const headerMenu=[
    {title: 'Latest', id: 'latest-post'},
    {title: 'All Post', id: 'posts'},
    {title: 'Save to Home', id: 'save-to-home'},
    {title: 'Contact Us', id: 'contact-us'},
];

export default class header extends Component {
  render() {
    const { style } = this.props;
  
    const handleClick = (e) => {
        e.preventDefault();}

    return (
      <header style={style}>
        <div className="container">
            <a href="./" className="header-icon" title="Blog">
              Blog.co
            </a>
            <div className="header-menu">
                  <Menu mode="horizontal"
                          >
                        {headerMenu.map((menu, index) => (
                            <Item key={"header-menu-"+index}>
                                <a href={"#" + menu.id} onClick={handleClick}>{menu.title}</a>
                            </Item>
                        ))}
                  </Menu>
            </div>
        </div>
      </header>
    )
  }
}

