import {Link} from "react-router-dom";
function Index() {
    return (
        <div className="Index">
            Este es el index

            <Link to="/home">Home</Link>
        </div>
    );
}

export default Index;