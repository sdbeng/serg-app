import React, {Component} from 'react'

class Storepicker extends Component {
        
    render(){
        return (
            <div>
                <h1>Storepicker</h1>
                <form action="" className="store-selector">
                    <h2>Please enter a store</h2>
                    <input type="text" required placeholder="store name" />
                    <button type="submit">Visit store</button>
                </form>
            </div>
            
        )
    }
}
export default Storepicker
