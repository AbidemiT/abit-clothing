import "./directory-item.styles.scss"
import { Link } from "react-router-dom"

const DirectoryItem = ({category}) => {
    const {title, imageUrl, route} = category
    return (
        <Link className="directory-item-container" to={route}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </Link>
    )
}

export default DirectoryItem;