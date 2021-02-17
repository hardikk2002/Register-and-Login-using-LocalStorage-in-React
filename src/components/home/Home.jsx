import React, { useState } from 'react'
import axios from "axios"

function Home() {

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");


    // THIS POST REQUESTION IS GIVING ERROR...
    function submitHanddler(e) {
        e.preventDefault();
        const stat = { first, second, third };
        axios.post("https://hoblist.com/movieList", stat)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log("Connection loss");
            })
    }

    return (
        <h1>THIS IS FINAL RESULT</h1>
        // <form onSubmit={submitHanddler}>
        //     <div className="form-group">
        //         <label>Mail</label>
        //         <input type="email" className="form-control" placeholder="Mail" onChange={(event) => setFirst(event.target.value)} />
        //     </div>

        //     <div className="form-group">
        //         <label>Password</label>
        //         <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setSecond(event.target.value)} />
        //     </div>


        //     <div className="form-group">
        //         <label>Phone No.</label>
        //         <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setThird(event.target.value)} />
        //     </div>

        //     <button type="submit" className="btn btn-dark btn-lg btn-block">Post Request</button>
        // </form>
    )
}

export default Home
