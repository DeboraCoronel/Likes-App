import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link} from 'react-router-dom';

const LikeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [like, setLike] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const getLikes = async () => {
            try {
              const URL = `http://localhost:8080/likes/${id}`;
              const respuesta = await axios.get(URL);
              setLike(respuesta.data);
            } catch (error) {
              console.log("Error al obtener likes", error);
              setError(error.response.statusText);
            }
          };
      
          getLikes();
        }, [id]);

        const handleDelete = async () => {
            try {
              await axios.delete(`http://localhost:8080/likes/${id}`);
              navigate('/');
            } catch (error) {
              console.log("Error al eliminar", error);
              setError(error.response.statusText);
            }
          };
          const handleUpdate = () => {
            navigate(`/likes/${id}/edit`);
        };

    if (!like) return <div>Loading...</div>;

    return (
        <div>
          <div className="detalle-like">
            <Link to="/">back to home</Link>
          </div>
            <h1>Like Details</h1>
            <p><strong>Name:{like.name}</strong></p>
            <p><strong>Description:{like.description}</strong> </p>
            <p><strong>Category:{like.category}</strong></p>
            <p><strong>Count:{like.count}</strong></p>
            <button onClick={handleUpdate}>Update Like</button>
            <button onClick={handleDelete}>Delete Like</button>
            <div>{error}</div>
        </div>
    );
};

export default LikeDetail;
