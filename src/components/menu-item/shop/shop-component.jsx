import React from 'react';
import SHOP_DATA from './shop-data.js'

class ShopPage extends React.Component{

    state = {
        collections: SHOP_DATA
    }
    
    render(){
        return(
            <>
                <h1>SHOP PAGE</h1>
            </>
        )
    }
           
    
}

export default ShopPage;