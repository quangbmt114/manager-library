import sha256 from "crypto-js/sha256";
import { createRef, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate()
  const [inputUserValue, setInputUserValue] = useState("");
  const [inputPassValue, setInputPassValue] = useState("");
  const [getData, setGetData] = useState([]);
  const userInput = createRef();
  const passInput = createRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputUserValue(userInput.current.value);
    setInputPassValue(passInput.current.value);
    getData.map((item, index) => {
      if (item.username === "admin" && item.password === "admin") {
        const expirationTime = new Date().getTime() + 600000; // Token expires in 1 hour
        const token = sha256(`${item.username}${expirationTime}`).toString();
        localStorage.setItem("token", token);
        sessionStorage.setItem("login", true);
        //đấy thông tin token lên database
        const putData =axios.post(process.env.REACT_APP_API + "/dataToken", {
          token: token,
          timetoken: expirationTime,
          account: item.username,
        });
        navigate("/admin")
      }
    });
  };
  useEffect(() => {
    handlGetData();
  }, []);
  const handlGetData = async () => {
    const data = await axios.get(process.env.REACT_APP_API + "/dataAccount");
    setGetData(data.data);
  };
  return (
    <div className="col-lg-12 d-flex align-item-center justify-content-center">
      <form onSubmit={handleSubmit} className="col-6">
        <div className="col-md-12">
          <label htmlFor="userInput" className="form-label">
            Username
          </label>
          <input
            ref={userInput}
            type="text"
            className="form-control"
            id="userInput"
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="passInput" className="form-label">
            Password
          </label>
          <input
            ref={passInput}
            type="password"
            className="form-control"
            id="passInput"
            required
          />
        </div>
        <div className="col-md-12 mt-3">
          <button type="submit" className="btn btn-primary">
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
