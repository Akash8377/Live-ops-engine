import NavBar from "../Nav-bar/nav"
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './registration.css'
import { useState } from "react";
const Registration = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [err,seterr] =useState({state:false , message : ""});
    const [success,setsuccess] = useState({state:false , message : ""});

    const handleClick = async(e) => {
        setsuccess({state:false , message : ""})
        e.preventDefault();
        if(!name || !email || !password){
            seterr({state:true , message : "Please fill out all required fields."})
           return 
        }
       
    const url = "http://localhost:8000/registration";
    const data = {
      name: name,
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
        console.log(data,"line44");
        if(data.status ==="created successfully"){

            setsuccess({state:true , message : ""})
        }
        else
        seterr({state:true , message : data.message})
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
              err.state ?   <Alert variant="danger" onClose={() => seterr({state:false , message : ""})} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                {err.message}
              </p>
            </Alert> : ""
             }
             {
                success.state ?  <Alert variant="success">
                <Alert.Heading> Hey {name}, nice  you have successfully created your account !</Alert.Heading>
            
              </Alert> : ""
             }
            </section>
            <Form className="form-container">
                <div>
                    <Form.Group className="mb-3 form" controlId="formGroupEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>{setname(e.target.value)}} value={name} />
                    </Form.Group>
                    <Form.Group className="mb-3 form" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{setemail(e.target.value)}} value={email}/>
                    </Form.Group>
                    <Form.Group className="mb-3 form" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  onChange={(e)=>{setpassword(e.target.value)}} value={password}  />

                    </Form.Group>
                    <Button variant="secondary" size="lg" className="form" onClick={(e) => {handleClick(e) }}>
                        Registration
                    </Button>
                </div>
                <div >
                    <img src="images\DALLEcopy.jpeg" alt="coverimage" className="cover-img" />

                </div>
            </Form>
            

        </>
    )
}

export default Registration