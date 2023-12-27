import { LuPlus } from "react-icons/lu"
import "./modal.css"
import { useContext, useState } from "react"
import { Context } from "../../App"
function Modal() {
    const [showModal, setShowModal] = useState(false)
    const { dispatch } = useContext(Context)
    const addItem = (title, link) => {
        dispatch({ type: 'ADD', payload: { title, link } });
    };
    const handleAddLabel = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const link = e.target.link.value;
        addItem(title, link);
        e.target.reset();
        setShowModal(false)

    }
    return (
        <>
            <button className="label" onClick={() => setShowModal(true)}>
                <span><LuPlus /></span>
                <p>Add label</p>
            </button>

            {showModal &&
                <form className="modal" onSubmit={handleAddLabel}>
                    <h2>Add label</h2>
                    <input autoFocus required name="title" type="text" placeholder="title" />
                    <input required name="link" type="text" placeholder="link" />
                    <div className="modal-bottom">
                        <div></div>
                        <div className="modal-buttons">
                            <button type="button" onClick={() => setShowModal(false)}>close</button>
                            <button type="submit">add</button>
                        </div>
                    </div>
                </form>}
        </>
    )
}

export default Modal