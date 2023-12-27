import { useContext, useState } from "react"
import "./labels.css"
import { Context } from "../../App"
import Modal from "../modal/modal";
import Drop from "./drop";
import EditModal from "../main/editModal";
function Labels() {
    const { state } = useContext(Context)
    const [openEdit, setOpenEdit] = useState(false)
    const [activeLabel, setActiveLabel] = useState({})
    console.log(state)
    return (
        <div className="labels">
            {state.map((item, index) => (
                <div key={index} className="label">
                    <Drop item={item} setOpenEdit={setOpenEdit} setActiveLabel={setActiveLabel} />
                    <a href={item.link} target={"blank"}>
                        <span>{item.title[0]}</span>
                        <p>{item.title}</p>
                    </a>
                </div>
            )
            )}
            {state.length < 10 && <Modal />}
            {openEdit &&
                <EditModal activeLabel={activeLabel} setOpenEdit={setOpenEdit} />
            }


        </div>
    )
}

export default Labels