import { Navbar, Alignment } from "@blueprintjs/core";
export default function Insheader(props) {
    const { incomplete } = props;
    return (
        <>


            <Navbar className='header' style={{ marginTop: "35px", marginBottom: "20px", backgroundColor: "#D3D8DE", fontWeight: "bold", color: "black" }} >
                <Navbar.Group align={Alignment.LEFT}>
                    <span>To Do List: {incomplete} items pending</span>

                </Navbar.Group>
            </Navbar>
        </>
    )
}

