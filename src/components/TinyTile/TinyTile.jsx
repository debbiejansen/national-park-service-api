import './TinyTile.css';
import React from 'react';

function TinyTile(props) {
    return (
        <article className="article-outer-container">
            <span>{props.label}</span>
            <div className="article-image">
            <img src={props.image} alt={props.title}/></div>
            <div className="article-text">
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
            </div>
        </article>
    );
}
export default TinyTile;





// return (
//     <article>
//         <span>{props.label}</span>
//         <img src={props.image} alt={props.title}/>
//         <h4>{props.title}</h4>
//         <p>{props.price}</p>
//     </article>
// );
// }