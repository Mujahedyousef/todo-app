import React from 'react'
import { When } from 'react-if';
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { LoginContext } from "../../context/auth";
import { useContext } from 'react';
export default function Header() {
    const auth = useContext(LoginContext);
    return (
        <div  >
            <Navbar className='header' style={{ backgroundColor: "#383E47", fontWeight: "bold", color: "white" }} >
                <div>
                    <Navbar.Group align={Alignment.LEFT}>
                        <span style={{ backgroundColor: "#383E47", fontWeight: "bold", marginRight: "15px", fontSize: "15px" }} >ToDo List Manager   </span>
                        <Button style={{ fontWeight: "bold", color: "white", alignItems: "center" }} className="bp4-minimal" icon="home" text="Home" />
                    </Navbar.Group>
                </div>
                <div style={{ float: "right" }}>
                    <When condition={auth.loggedIn}>
                        <Navbar.Group align={Alignment.LEFT}>
                            <Button style={{ fontWeight: "bold", background: "#CD4246", color: "white" }} class="bp4-minimal" icon="log-out" text="Log Out" onClick={auth.logout} />
                        </Navbar.Group>
                    </When>
                </div>
            </Navbar>

        </div >
    )
}


