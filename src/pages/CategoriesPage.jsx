import homeIcon from "../assets/images/categories/home.svg"
import warningIcon from "../assets/images/categories/warning.svg"
import bossIcon from "../assets/images/categories/boss.svg"
import updateIcon from "../assets/images/categories/update.svg"
import { Link } from "react-router-dom"


function CategoriesPage() {
    return(
        <section class="mobile-block">
        <div class="mobile-block__header  is-warning">
            Категории
        </div>
        <div class="container">
            <div class="category-row">
                <Link to = "/" class="category-item">
                    <img src={homeIcon} alt="Home" class="category-item__img" />
                    <span class = "category-item__title">Главная</span>
                </Link>
                <Link to = "/category/enemy" class="category-item">
                    <img src={warningIcon} alt="Warning" class="category-item__img" />
                    <span class="category-item__title">Враги</span>
                </Link>
                <Link to = "/category/boss" class="category-item">
                    <img src={bossIcon} alt="Boss" class="category-item__img" />
                    <span class = "category-item__title">Боссы</span>
                </Link>
                <Link to = "/category/posts" class="category-item">
                    <img src={updateIcon} alt="Update" class="category-item__img" />
                    <span class="category-item__title">Обновления</span>
                </Link>

            </div>
        </div>
    </section>
    );
}

export default CategoriesPage;