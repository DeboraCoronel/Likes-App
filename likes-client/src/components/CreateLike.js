import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

const CreateLike = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [count, setCount] = useState('0');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newLike = { 
                name, 
                description, 
                category,
                count
            };

            const URL = "http://localhost:8080/likes/new";
            const respuesta = await axios.post(URL, newLike);
            console.log(respuesta.data);


            setName('');
            setDescription('');
            setCategory('');
            setCount('');
            setError(null);

            navigate("/");
        } catch (error) {
            console.log("Algo falló", error);
            setError(error.response?.statusText || "Something went wrong");
        }
    };

    return (
        <div>
            <div className="crear-like">
                <Link to="/">back to home</Link>
            </div>
            <h1>Create New Like</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <strong>Name:</strong> 
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </p>
                <p>
                    <strong>Description:</strong> 
                    <input 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required
                    />
                </p>
                <p>
                    <strong>Category:</strong>
                    <select 
                        value={category} 
                        onChange={e => setCategory(e.target.value)} 
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="Persona">Persona</option>
                        <option value="Lugar">Lugar</option>
                        <option value="Cosa">Cosa</option>
                        <option value="Idea">Idea</option>
                        <option value="Otro">Otro</option>
                    </select>
                </p>
                <p>
                    <strong>Count:</strong> 
                    <input 
                        type="number" 
                        value={count} 
                        onChange={(e) => setCount(Number(e.target.value))} 
                        required
                    />
                </p>
                <p>{error}</p>
                <button className="boton" type="submit">Create Like</button>
            </form>
        </div>
    );
};

export default CreateLike;