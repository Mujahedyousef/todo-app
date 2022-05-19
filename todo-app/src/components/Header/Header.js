import React from 'react'

import { Navbar, Alignment , Button} from "@blueprintjs/core";

export default function Header(props) {

    return (
        <div  >
            <Navbar className='header'style={ { backgroundColor:"#383E47" , fontWeight:"bold" , color:"white"}} >
                <Navbar.Group   align={Alignment.LEFT}>
                    
                    <Button style={ {fontWeight:"bold" , color:"white"}}  className="bp4-minimal" icon="home" text="Home" />
                </Navbar.Group>
            </Navbar>

        </div >
    )
}