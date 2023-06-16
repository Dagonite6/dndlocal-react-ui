import { useNavigate } from "react-router-dom";


function CreateBtn() {
    const navigate = useNavigate();

    const create = async e => {
        e.preventDefault();
        navigate("/create");
    }

    return (
        <div onClick={create} className="bg-slate-50 hover:bg-gray-300 focus:bg-gray-300 drop-shadow-md rounded-md py-2 px-2 cursor-pointer text-gray-950 text-sm font-bold text-center">+ Create New Character</div>
    )
}

export default CreateBtn