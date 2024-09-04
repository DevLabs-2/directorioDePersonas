import React from 'react';

function PersonaCard({ props }) {
    return (
        <div className="persona-card">
            <h2>{props.nombre} {props.apellido}</h2>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Edad:</strong> {props.edad}</p>
        </div>
    );
}

export default PersonaCard;