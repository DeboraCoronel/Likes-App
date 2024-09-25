import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './LikeList.css';

const LikeList = () => {
    const [likes, setLikes] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleShowClick = (id) => {
        navigate(`/likes/${ id }`);
    };

    useEffect(() => {
        const getLikes = async () => {
            try {
                const URL =`http://localhost:8080/likes`;
                const respuesta = await axios.get(URL);
                setLikes(respuesta.data);
            } catch (error) {
                console.log("Error al obtener likes", error);
                setError(error.response.statusText);
            }
        };

        getLikes();
    }, []);

    return (
        <div>
            <h1>Likes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Things</th>
                        <th>Category</th>
                        <th>Likes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {likes.map((like) => (
                        <tr key={like._id}>
                            <td>{like.name}</td>
                            <td>{like.category}</td>
                            <td>{like.count}</td>
                            <td>
                                <button
                                    className="show"
                                    type="button"
                                    onClick={() => handleShowClick(like._id)}
                                >Show</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="likes/new">Create New Like</Link>
            <div>{error}</div>
        </div>
    );
};

export default LikeList;