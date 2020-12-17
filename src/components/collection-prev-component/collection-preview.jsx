import React from 'react';


const CollectionPreview = ({ title, items }) =>(
    <div className='collection-preview'>
        <h1 className='Title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(items => (
                    <div key={items.id}>{items.name}</div>
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview