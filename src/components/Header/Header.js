import React from 'react'

import { Navbar, Alignment, Button } from "@blueprintjs/core";

export default function Header(props) {

    return (
        <div  >
            <Navbar className='header' style={{ backgroundColor: "#383E47", fontWeight: "bold", color: "white" }} >
                <Navbar.Group align={Alignment.LEFT}>
                    <span style={{ backgroundColor: "#383E47", fontWeight: "bold", marginRight: "15px", fontSize: "15px" }} >ToDo List Manager   </span>
                    <Button style={{ fontWeight: "bold", color: "white", alignItems: "center" }} className="bp4-minimal" icon="home" text="Home" />
                </Navbar.Group>
            </Navbar>

        </div >
    )
}

