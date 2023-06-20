import { useNavigate } from "react-router-dom";

function CharList() {
    const navigate = useNavigate();

    const profilePage = async e => {
        e.preventDefault();
        navigate("/profile");
    }

    return (
        <div onClick={profilePage} className="bg-slate-50 hover:bg-gray-300 focus:bg-gray-300 drop-shadow-md min-w-[85px] rounded-md py-2 px-2 cursor-pointer text-gray-950 text-sm font-bold text-center">
            Character List
        </div>
    )
}

export default CharList