import React from "react";
import reports from "../icons/reports.svg"
import Logout from "../icons/sign-out-alt.svg"
import '../styles/candidateHome.css'
import {  useNavigate } from "react-router-dom";



function Home(){

    const navigate = useNavigate()


    const handleNomination = () => {
        navigate('/Candidate/nominationPaper')
    }

    const logoutpageshow = () => {
        navigate('/Candidate/login')
    }

    return (
        <>
        <div  className="User-heading">
            <h1>Welcome to Candidate Portal!</h1>
        </div>
        <div className="my-tasks">
            <button onClick={handleNomination}>
                <img src={reports} alt="users" width="50" height="60"></img>
                <h4>Nomination Paper</h4>
            </button>
            <button onClick={logoutpageshow}><div>
                <img src={Logout} alt="users" width="50" height="60"></img>
                <h4>Log out</h4>
            </div></button>
        </div>
        </>);
}

export default Home;