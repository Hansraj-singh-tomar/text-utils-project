import React, { useState } from 'react'; // function base component me react ko import karne ki jarurat nhi hai
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


const App = () => {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  // Excercise second ka code hai ye

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  // }
  // const toggleMode = (cls) => {  // cls as primary cls ka mtlb class hai 
  //   console.log(cls);
  //   removeBodyClasses();
  //   document.body.classList.add('bg-' + cls);
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert("Dark mode has been enabled", "success");
  //     // document.title = "TextUtils - Dark Mode"; // Dynamically title ko change karne ke liye 
  //     // setInterval(() => {  // jab hame apni website ko download karane ke liye bolna hota hai jo hame title par baar baar show karega 
  //     //   document.title = "TextUtils is Amazing Mode"; // ek tarah se bol sakte hai ki dhyan akarshit krane ke liye karte hai 
  //     // }, 2000);
  //     // setInterval(() => {
  //     //   document.title = "Install TextUtils Now";
  //     // }, 1500);
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //     // document.title = "TextUtils - Light Mode"; // Dynamically title ko change karne ke liye 
  //   }
  // }


  //   return (
  //     <>
  //       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> {/* yha me basically title and aboutText type ke props pass kar rha hu*/}
  //       <Alert alert={alert} />
  //       <div className="container my-3">
  //         <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} placeholder="enter text here" />
  //         {/* <About /> */}
  //       </div>
  //     </>
  //   );
  // };

  // yha me textForm and About  component ko ek sath nhi show kar sakta click karne par iske liye react router dom ka use karna padega

  // React Router ka use kaise karenge uska code yha likhenge
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> {/* yha me basically title and aboutText type ke props pass kar rha hu*/}
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />} />

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} placeholder="enter text here" />} />
          </Routes> */}
        {/* exact means vo exact path match karega /about hi hona chahiye Url me /users --> component 1 and /users/home --> component 2 me agar exact use nhi karunga to mujhe component 1 hi show hoga */}
        {/* <About /> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} placeholder="enter text here" />
      </div>
      <About mode={mode} />
      {/* </Router> */}
    </>
  );
};
export default App;

//  {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} placeholder="enter text here" /> */}
// {/* <About /> */}
