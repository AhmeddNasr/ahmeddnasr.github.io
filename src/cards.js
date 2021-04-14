import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img
                height={150}
                width={150}
                alt={props.title}
                className="card-avatar"
                src={props.avatar}
            ></img>
            <p className="card-name">{props.title}</p>
        </div>
    );
}

export default Card;
