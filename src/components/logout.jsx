import { useNavigate } from "react-router-dom";

async function invalidate() {
    return fetch('http://127.0.0.1:8000/auth/logout/', {
        method: 'POST',
        headers: {
            'Authorization': `Token ${localStorage.getItem("access_token")}`
        }
    })
}

function Logout() {
    const navigate = useNavigate();

    const signout = async e => {
        e.preventDefault();
        const response = await invalidate();
        if (response.status === 204 || response.status === 401) {
            navigate("/login");
        }
    }

    return (
        <div onClick={signout} className="bg-slate-50 hover:bg-gray-300 focus:bg-gray-300 drop-shadow-md min-w-[85px] rounded-md py-2 px-2 cursor-pointer text-gray-950 text-sm font-bold text-center">
            Sign out
        </div>
    )
}

export default Logout