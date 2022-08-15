import {React, useContext, useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios, { AxiosError } from 'axios';






function SignUp() {

   // set the focus on user input when component loads
   const userRef = useRef();
   // announces error in validation to user  
   const errRef = useRef();
 
   //hooks
   // const { user, setUser } = useContext(UserContext);
   //state for user input
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [city, setCity] = useState('');
   const [state, setState] = useState('');
   const [zipcode, setZipcode] = useState('');
   //email hooks
   const [email, setEmail] = useState('');
   //password input
   const [password, setPassword] = useState('');
 
   //password verification
   const [matchPassword, setMatchPassword] = useState('');

   //state for error and success messages
   const [errMsg, setErrMsg] = useState('');
   const [success, setSuccess] = useState(false);
 
   //error message 
   //anytime user changes the state of email, password or match password
   //it will clear the error message from displaying
   useEffect(() => {
     setErrMsg('');
   }, [email, password, matchPassword])
 
 
   const signUp = async (firstName, lastName, zipcode, email, password, file) => {
     try {
       // const response = await axios.get(`http://localhost:3025/login/${email}`)
       const response = await axios.get(`${email}`)
       if (response.data.length === 0) {
         const formData = new FormData();
         if (file) {
           for (let i = 0; i < file.length; i++) {
             formData.append("file", file[i]);
           }
         }
         formData.append("first_name", firstName);
         formData.append("last_name", lastName);
        //  formData.append("city", city);
        //  formData.append("state", state);
         formData.append("zipcode", zipcode)
         formData.append("email", email);
         formData.append("password", password);
         try {
           const response = await axios.post("/createprofile", formData);
           console.log(response)
           setSuccess(true);
           console.log('user created')
         } catch (err) {
           if (!err?.response) {
             setErrMsg('No Server Response');
           } else if (err.response?.status === 409) {
             setErrMsg('That username is taken');
           } else {
             setErrMsg('Registration failed please try again.')
           }
           errRef.current.focus();
         }
       } else {
         setErrMsg('That username is taken');
       }
     } catch (err) {
       console.log(err);
     }
   }

  return (
    <>
      {success ? (
        <SignUpPageContainer>
          <SuccessHeader>Thank You for Registering!</SuccessHeader>
          <StyledImage ></StyledImage>
          <Link to='/login'><Button>Return to Log In Page</Button></Link>
        </SignUpPageContainer>
      ) : (
        <SignUpPageContainer>
          <RegisterContainer>
            <P ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
              {errMsg}
            </P>
            <RegisterHeader>
              <WelcomeHeader>Welcome!</WelcomeHeader>
              <SignUpHeader>Sign-Up to continue</SignUpHeader>
            </RegisterHeader>
            <RegisterForm>
              <InputContainer>
                <Label>First Name</Label>
                <Input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  required
                />
              </InputContainer>
              {/* <InputContainer>
                <Label>City</Label>
                <Input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>State</Label>
                <Input
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  required
                />
              </InputContainer> */}
              <InputContainer>
                <Label>Zipcode</Label>
                <Input
                  type="text"
                  onChange={(e) => setZipcode(e.target.value)}
                  value={zipcode}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>Email
                </Label>
                <Input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </InputContainer>
              {/* <Div>
                <P id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "hide"}>
                  <InfoIcon src={Info}></InfoIcon> <br />
                  Must be a valid email
                </P>
              </Div> */}
              <InputContainer>
                <Label>Password
                 
                </Label>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                 />
              </InputContainer>
              <Div>
                
              </Div>
              <ButtonContainer>
                <RegisterButton onClick={(e) => {
                    e.preventDefault();
                    signUp(firstName, lastName, zipcode, email, password);
                    // console.log('success');
                  }}>
                  Register
                </RegisterButton>
              </ButtonContainer>
              <RegisterFooter>
                <SignUpHeader>Already have an account? <Link to='/login'>Login</Link></SignUpHeader>
              </RegisterFooter>
            </RegisterForm>
          </RegisterContainer>
        </SignUpPageContainer>
      )}
    </>
  )
}

export default SignUp;

const SignUpPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
`

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 0, 0, .8);
  border-radius: 25px;
  border: solid;
  border-color: rgba(255, 0, 0, .5);
  width: 600px;
`

const RegisterHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const RegisterFooter = styled.div`
  display: flex;
  margin: 20px;
`

const WelcomeHeader = styled.h1`
color: white;
`

const SignUpHeader = styled.h5`
  opacity: .7;
  color: white;
`

const RegisterForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Label = styled.label`
  display: flex;
  font-size: 25px;
  color: white;
  flex: .3;
  margin-left: 10px;
`
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
`

const Input = styled.input`
  display: flex;
  height: 40px;
  /* width: 400px; */
  flex: .7;
  margin: 5px;
  margin-right: 25px;
  margin-bottom: 7px;
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
  border: none;
  border-radius: 5px;
  :focus-within{
      box-shadow: 0 0px 4px 4px #0D99FF;
      outline: 0;
  }
`

const SuccessHeader = styled.h1`
  color: #0D99FF;
`

const Button = styled.button`
  display: flex;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  height: 40px;
  width: 350px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
  font-family: "Pacifico", cursive;
  font-size: 25px;
  border: transparent;
  background-color: white;
  border-radius: 999px;
  margin: 50px;
  :hover {
      background-color: #0D99FF;
      color: white;
      border-radius: 999px;
      cursor: pointer;
    }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const RegisterButton = styled.button`
  color: red;
  font-size: 15px;
  display: flex;
  width: 150px;
  height: 50px;
  background-color: white;
  border-radius: 999px;
  border-color: transparent;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  :hover{
    cursor: pointer;
  }
  margin-top: 30px;
`

const P = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 15px;
  width: 350px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-top: -5px;
`

const Span = styled.span`
`

const CheckMark = styled.img`
  height: 30px;
  margin-right: -5px;
`

const XMark = styled.img`
  height: 20px;
  margin-right: 3px;
`

const InfoIcon = styled.img`
  height: 20px;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const StyledImage = styled.img`
  margin-top: 40px;
  height: 300px;
  width: 300px;
`