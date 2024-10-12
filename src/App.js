import './styles.css'; 

import React, { useState } from 'react';

function App() {
    const [folio, setFolio] = useState('');
    const [response, setResponse] = useState(null);

    const handleFolioChange = (event) => {
        setFolio(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/folio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ folio }), // Envía el folio en el cuerpo de la solicitud
            });
            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="app-container">
            <h1>Consulta de Folio</h1>
            <form onSubmit={handleSubmit} className="folio-form">
                <input
                    type="text"
                    value={folio}
                    onChange={handleFolioChange}
                    placeholder="Ingresa el folio"
                    required
                    className="folio-input"
                />
                <button type="submit" className="folio-button">Consultar</button>
            </form>
            {response && (
                <div className="response">
                    <h2>Resultado:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
