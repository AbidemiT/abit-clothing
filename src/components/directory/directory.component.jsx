import CategoryItem from "../category-item/category-item.component";
import "../directory/directory.styles.scss";

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            {categories && categories.map((categories) => (
                <CategoryItem key={categories.id} category={categories} />
            ))}
        </div>
    )
}

export default Directory;