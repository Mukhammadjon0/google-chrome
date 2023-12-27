import { useState, useContext } from 'react';
import { Context } from '../../App';

function EditModal({ activeLabel, setOpenEdit }) {
    const { dispatch } = useContext(Context);
    const [updatedTitle, setUpdatedTitle] = useState(activeLabel?.title || '');
    const [updatedLink, setUpdatedLink] = useState(activeLabel?.link || '');

    const editItem = (id, updatedItem) => {
        dispatch({ type: 'EDIT', payload: { id, updatedItem } });
        setOpenEdit(false);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        editItem(activeLabel?.id, { title: updatedTitle, link: updatedLink });
    };

    return (
        <form className="modal" onSubmit={handleEdit}>
            <h2>Edit label</h2>
            <input
                required
                name="title"
                type="text"
                placeholder="title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <input
                required
                name="link"
                type="text"
                placeholder="link"
                value={updatedLink}
                onChange={(e) => setUpdatedLink(e.target.value)}
            />
            <div className="modal-bottom">
                <div></div>
                <div className="modal-buttons">
                    <button type="button" onClick={() => setOpenEdit(false)}>
                        close
                    </button>
                    <button type="submit">update</button>
                </div>
            </div>
        </form>
    );
}

export default EditModal;
