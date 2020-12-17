import React, {Component} from 'react';
import SHOP_DATA from './shop-data.js'
import CollectionPreview from '../../collection-prev-component/collection-preview'

class ShopPage extends Component{

    state = {
        collections: SHOP_DATA
    }
    
    render(){
        const {collections} = this.state
        return(
            <>
            <div className='shop-page'>
                {
                    collections.map(collection =>(
                        <div>{collection.title}</div>
                    ))
                }
            </div>
            </>
        )
    }
           
    
}

export default ShopPage;