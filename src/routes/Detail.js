import React from "react";
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        console.log(this.props);
        if (location.state) {
            let prop = location.state;
            return (
                <div className="movies">
                    <div className="Movie">
                        <img src={prop.poster} alt={prop.title} />
                        <div className="movie__data">
                            <h3 className="movie__title">{prop.title}</h3>
                            <h5 className="movie__year">{prop.year}</h5>
                            <ul className="genres">
                                {prop.genres.map((genre, index) => (
                                    <li key={index} className="genres__genre">{genre}</li>
                                ))}
                            </ul>
                            <p className="movie__summary">{prop.summary}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }

    }
}

export default Detail;