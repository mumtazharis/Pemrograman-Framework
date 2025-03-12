import React, {useState} from 'react';

function TodoList(){
    const [todo, setTodo] = useState('');
    const [savedData, setSavedData] = useState([]);

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSave = () => {
        setSavedData([...savedData, todo]);
        setTodo('');
    };

    const handleDelete = (index) => {
        const newData = savedData.filter((_, i) => i !== index);
        setSavedData(newData);
    };

    return (
        <div>
            <input type='text' placeholder='List' value={todo} onChange={handleTodoChange}></input>
            <button onClick={handleSave}>Simpan</button>

            <ul>
                {savedData.map((data, index) => (
                    <li key={index}>{data} 
                        <button onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;