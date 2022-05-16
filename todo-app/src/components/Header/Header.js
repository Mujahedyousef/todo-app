import React from 'react'

import { Navbar, Alignment , Button} from "@blueprintjs/core";

export default function Header() {
 
    return (
        <div  >
            <Navbar className='header'style={ { backgroundColor:"rgb(54, 53, 53)" , fontWeight:"bold" , color:"white"}} >
                <Navbar.Group   align={Alignment.LEFT}>
                    
                    <Button style={ {fontWeight:"bold" , color:"white"}}  className="bp4-minimal" icon="home" text="Home" />
                </Navbar.Group>
            </Navbar>

        </div >
    )
}