import { useState, useContext } from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { Context } from '../../App';

function Drop({ item, setOpenEdit, setActiveLabel }) {
    const [showDrop, setShowDrop] = useState(false);
    const { dispatch } = useContext(Context);

    const handleOpenEdit = (item) => {
        setActiveLabel(item)
        setOpenEdit(true)
        setShowDrop(false)
    }
    const handleDelete = (id) => {
        dispatch({ type: 'DELETE', payload: id });
        setShowDrop(false);
    };

    return (
        <>
            <button onClick={() => setShowDrop(!showDrop)}>
                <IoEllipsisVertical />
            </button>
            {showDrop && (
                <div className="drop">
                    <button type='button' onClick={() => handleOpenEdit(item)}>Edit</button>
                    <button type='button' onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            )}
        </>
    );
}

export default Drop;
