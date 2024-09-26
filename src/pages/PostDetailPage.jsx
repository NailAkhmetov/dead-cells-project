import { Link, useParams } from "react-router-dom";
import backIcon from "../assets/images/back-button.svg"
import { useState, useEffect } from "react";
import axios from "axios";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPosts] = useState({});

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get(`https://7f74bc7f92361a8d.mokky.dev/post/${id}`);
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, [id]);


    return(
        <section class="mobile-block">
        <Link to = "/" class="back-button">
            <div class="container">
                <img src={backIcon} alt="back icon" />
                Назад
            </div>
        </Link>
        <div class ="container">
            <div class="post-detail-block">
                <h3 class="news-card__title">{post.title}</h3>
                <span class="news-card__date">{post.date}</span>
                <p class="description">
                    {post.description}
                </p>
                <img src={post.imageUrl} alt={post.title} />
                <span class="autor">Источник: <strong class="light-success-text">{post.autor}</strong></span>
                <button class="tag-button">{post.category}</button>
            </div>
        </div>
    </section>
    );
}

export default PostDetailPage;