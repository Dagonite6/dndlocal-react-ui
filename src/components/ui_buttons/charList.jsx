import { useNavigate } from "react-router-dom";

function CharList() {
    const navigate = useNavigate();

    const profilePage = async e => {
        e.preventDefault();
        navigate("/profile");
    }

    return (
        <div onClick={profilePage} className="align-middle bg-btn hover:bg-btn-hover focus:bg-btn-hover drop-shadow-md min-w-[85px] rounded-md py-2 px-2 cursor-pointer flex items-center justify-center">
            <p className="text-gray-50 text-sm font-bold text-center">Character List</p>
        </div>
    )
}

export default CharList