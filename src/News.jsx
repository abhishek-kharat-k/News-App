export default function News(props) {
    console.log(props);
    return (
        <div className="news">
            {props.article && (
                <div className="news-img">
                    {props.article.urlToImage !== null ? (
                        <img src={props.article.urlToImage} alt={props.article.title} />
                    ) : (
                        <img src="https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg" alt="No Image Available" />
                    )}
                </div>
            )}

            <h1>{props.article && props.article.title}</h1>

            <p>{props.article && props.article.description?.substring(0,100).concat("...")}<a href={props.article?.url} target="_blank">Read More</a></p>

            

            <div className="source">
                <p>Author: {props.article && props.article.author}</p>
                <p>{props.article && props.article.source.name}</p>
            </div>
        </div>
    );
}
