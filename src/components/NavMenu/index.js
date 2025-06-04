import { Link } from "react-router-dom";

const NavMenu = () => {
    return (
        <div>
            <Link to={'/'}> mainPage</Link>
            <Link to={'/page1'}> Page1</Link>
            <Link to={'/page3'}> Page3</Link>
            <Link to={'/page3'}> Page3</Link>
            <Link to={'/page4'}> Page4</Link>
            <Link to={'/page5'}> Page5</Link>
            <Link to={'/page6'}> Page6</Link>
            <Link to={'/page7'}> Page7</Link>
            <Link to={'/page8'}> Page8</Link>
            <Link to={'/page9'}> Page9</Link>
        </div>
    )
}

export default NavMenu;