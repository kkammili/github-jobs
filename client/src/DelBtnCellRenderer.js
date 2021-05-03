import { FaTrashAlt } from "react-icons/fa";


function DelBtnCellRenderer({ data, deleteRecruiter }) {
    return (
        <span>
            <FaTrashAlt onClick={() => deleteRecruiter(data.id)} size={'1em'} />
        </span>

    )
}

export default DelBtnCellRenderer