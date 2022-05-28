import { useContext } from "react";
import { LoginContext } from "../../context/auth";
import { When } from 'react-if';


export default function Capability(props) {

    const auth = useContext(LoginContext)

    const isLoggedIn = auth.loggedIn;
    const can = auth.canDo(props.capability);

    return(
        <When condition={isLoggedIn && can}>
            {props.children}
        </When>
    )
}