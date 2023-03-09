import { useState, useEffect } from "react";
// import "../style/Main.css";
import axios from "axios";

const Show = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8080/customer")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
    return (
        <>
            {/* {isError !== "" && <h2>{isError}</h2>} */}
              
            <div className="grid">
                <center>
            <h1>All users</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Ice_Cream</th>
                            <th>CustomerName</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData.map((data, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.username}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </center>
            </div>
        </>
    );
};

export default Show;