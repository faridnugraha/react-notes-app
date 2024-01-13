import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

function NotFoundPage() {
    return(
        <>
            <div className="not-found text-center">
                <div className="">
                    <img src="/images/404.png" alt="404 - Page Not Found"/>
                </div>
                <Link to={'/'}>
                    <Button className="rounded-pill">Home</Button>
                </Link>
            </div>
        </>
    )
}

export default NotFoundPage