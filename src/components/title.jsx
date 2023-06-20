import { useNavigate } from "react-router-dom";

function Title() {
    const navigate = useNavigate();

    const profilePage = async e => {
        e.preventDefault();
        navigate("/profile");
    }

    return (<div className="flex flex-col items-center">
        <div onClick={profilePage} className="cursor-pointer">
            <p className="text-gray-50 text-sm text-left drop-shadow-sm">
                not a
            </p>
            <p className="text-gray-50 font-extrabold text-2xl text-left drop-shadow-sm">
                DND Character builder
            </p>
        </div>
    </div>)
}

export default Title