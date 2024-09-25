import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditLike = () => {
    const { id } = useParams();
    const [like, setLike] = useState({
        name: '', 
        count: '0',
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getLikes = async () => {
            try {
                const respuesta = await axios.get(`http://localhost:8080/likes/${id}`);
                setLike(respuesta.data);
            } catch (error) {
                console.log("Error al obtener el like", error);
                setError(error.response?.statusText);
            }
        };
        getLikes();
    }, [id]);

    const updateLikes = async (e) => {
        e.preventDefault();
        try {
            const URL = `http://localhost:8080/likes/${id}/edit`;
            const respuesta = await axios.put(URL, like);
            console.log(respuesta.data);
            navigate(`/likes/${id}`);
        } catch (error) {
            console.log("Error al actualizar el like", error);
            setError(error.response?.statusText);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLike((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="contenedor-editar">
            <div className="editar-like">
                <Link to="/">back to home</Link>
            </div>
            <h2>Edit</h2>
            <div className="contenedor">
                <form className="formulario-ctn" onSubmit={updateLikes}>
                    <div className="ctn">
                        <div className="columna">
                            <div className="formulario">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={like.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="formulario">
                                <label>Count:</label>
                                <input
                                    type="number"
                                    id="count"
                                    name="count"
                                    value={like.count}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button className="boton-editar" type="submit">Edit Like</button>
                    <div >{error}</div>
                </form>
            </div>
        </div>
    );
};

export default EditLike;
