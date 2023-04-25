import NavBar from "../Nav-bar/nav"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../registration-page/registration.css'
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)
  const [err, seterr] = useState({ state: false, message: "" });

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("inside ");
    if (!email || !password) {
      seterr({ state: true, message: "Please fill out all required fields." })
      return
    }

    const url = "http://localhost:8000/login";
    const data = {
      email: email,
      password: password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => {
        if (!response.status) {
          throw new Error("Network response was not successfull");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
            navigate('/offerlist')
    
        } else {
          seterr({ state: true, message: data.message })
        }

      })
      .catch((error) => {
        console.error("Internal Server Error Please try after some time", error);
      });


  }

  return (
    <>
      <NavBar />
      <section>
        {
          err.state ? <Alert variant="danger" onClose={() => seterr({ state: false, message: "" })} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              {err.message}
            </p>
          </Alert> : ""
        }
      </section>
      <Form className="form-container">
        <div>
          <Form.Group className="mb-3 form" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} value={email} />
          </Form.Group>
          <Form.Group className="mb-3 form" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} value={password} />

          </Form.Group>
          <Button variant="secondary" size="lg" className="form" onClick={(e) => { handleClick(e) }} >
            Login
          </Button>
        </div>
        <div >
          <img src="images\DALLEcopy.jpeg" alt="coverimage" className="cover-img" />

        </div>
      </Form>

    </>
  )
}
export default Login 