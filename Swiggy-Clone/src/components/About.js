import React from "react";
import useMyApi from "../ulits/calldata";
// import UserContext from "../ulits/userContext";
import { useContext } from "react";
const About = () => {
    let mydata = useMyApi();
    console.log(mydata);

    if (!mydata) {
        return <div>Loading...</div>;
    }

    // const {userName} = useContext(UserContext)

    let { login, avatar_url, repos_url, name, bio, followers, following } = mydata;

    return (
        <main className="min-h-screen flex justify-center items-center bg-gray-500 py-8">
            <div className="card bg-white shadow-xl rounded-lg w-full max-w-lg p-6">
                <div className="flex flex-col items-center text-center">
                    <img
                        src={avatar_url}
                        alt="User"
                        className="w-32 h-32 rounded-full border-4 border-gray-200 mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-gray-600 mt-2">{bio}</p>
                </div>
                <ul className="flex justify-around mt-6">
                    <li className="text-center">
                        <span className="block text-lg font-semibold text-gray-800">{followers}</span>
                        <span className="text-sm text-gray-500">followers</span>
                    </li>
                    <li className="text-center">
                        <span className="block text-lg font-semibold text-gray-800">{following}</span>
                        <span className="text-sm text-gray-500">following</span>
                    </li>
                </ul>
                <div className="mt-6 flex justify-center gap-4">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Follow</button>
                    <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Message</button>
                </div>
            </div>
        </main>
    );
};

export default About;
