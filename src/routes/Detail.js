import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

function Detail() {
    const { id } = useParams();
    //console.log(id);
    const [loading, setLoading] = useState(true);

    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie)
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(movie)

    return (
        <div>
            {loading ? <h1>Loading</h1> :
                <div>
                    <h1>{movie.title}</h1>
                    <img src={movie.background_image} />
                    <div>
                        <img src={movie.medium_cover_image} />
                        <p>{movie.slug}</p>
                        <p>{movie.rating}점</p>
                        <p>{movie.year}년</p>
                        <p>{movie.runtime} 분</p>
                        <p>좋아요: {movie.like_count}</p>
                        <ul>
                            {movie.genres.map((g)=>(
                                <li key={g}>{g}</li>
                            ))}
                        </ul>
                        <p>{movie.description_intro}</p>
                    </div>
                </div>

            }
        </div>
    )
}
export default Detail;