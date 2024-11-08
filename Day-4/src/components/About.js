import React from "react";
import useMyApi from "../ulits/calldata";

const About = () => {
    let mydata = useMyApi();
    console.log(mydata);

    if (!mydata) {
        return <div>Loading...</div>;
    }

    let { login, avatar_url, repos_url, name, bio, followers, following } = mydata;

    return(
        <>
            <main className="container">
                <div className="card">
                    <img src={avatar_url} alt="User" className="card__image" />
                    <div className="card__text">
                        <h2>{name}</h2>
                        <p>{bio}</p>
                    </div>
                    <ul className="card__info">
                        <li>
                            <span className="card__info__stats">{followers}</span>
                            <span>followers</span>
                        </li>
                        <li>
                            <span className="card__info__stats">{following}</span>
                            <span>following</span>
                        </li>
                    </ul>
                    <div className="card__action">
                        <button className="card__action__button card__action--follow">follow</button>
                        <button className="card__action__button card__action--message">message</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
