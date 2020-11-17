import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-items/menu-item-component'
import './directory.scss'

class Directory extends Component{
    state = {
        sections: [
            {
              title: 'hats',
              imageUrl: 'https://images.unsplash.com/photo-1565839412225-98641b2d7b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
              id: 1,
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
              id: 2,
              linkUrl: 'jackets'
            },
            {
              title: 'shoes',
              imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
              id: 3,
              linkUrl: 'sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://images.unsplash.com/photo-1510965168540-03ea63c46e22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
              size: 'large',
              id: 4,
              linkUrl: 'womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
              size: 'large',
              id: 5,
              linkUrl: 'mens'
            }]
    }

    render() {
    return(
      // map over state and destructured params
    <div className='directory-menu'>
        {this.state.sections.map(({ title, id, imageUrl, size, linkUrl }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        ))}  
    </div>
    )
}}

export default Directory;