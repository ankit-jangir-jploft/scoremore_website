import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'swiper/css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import AuthLayout from './Components/AuthLayout';
import CheckMail from './Pages/CheckMail';
import LoginMail from './Pages/LoginMail';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Subjects from './Pages/Subjects';
import Exammodetest from './Pages/Exammodetest';
import Congratulations from './Pages/Congratulations';
import Testdetails from './Pages/Testdetails';
import Testcompleted from './Pages/Testcompleted';
import Reviewquestions from './Pages/Reviewquestions';
import Reviewprtest from './Pages/Reviewprtest';
import Helpfaq from './Pages/Helpfaq';
import CardContainer from './Components/Cardcontainer';
import Reminder from './Pages/Reminder';
import Myaccount from './Pages/Myaccount';
import Myprofile from './Pages/Myprofile';
import Studyreminders from './Pages/Studyreminders';
import Billinghistory from './Pages/Billinghistory';
import Writeareview from './Pages/Writeareview';
import Sharewithfriends from './Pages/Sharewithfriends';
import Plansandpricing from './Pages/Plansandpricing';
import Congratulationsplus from './Pages/Congratulationsplus';
import Createprofile from './Pages/Createprofile';
import Studyreminderset from './Pages/Studyreminderset';
import Privacypolicy from './Pages/Privacypolicy';
import Termsandconditions from './Pages/Termsandconditions';
import Tutoredtest from './Pages/Tutoredtest';
import Fastfiveincorrectanswer from './Pages/Fastfiveincorrectanswer.';
import Roadmap from './Pages/Roadmap';
import { useEffect } from 'react';
import { useTheme } from './Components/ThemeProvider';
import Statisticss from './Pages/Statisticss';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles
import { TestProvider } from './Components/TestContext';
import RedinessStart from './Components/ReadinessStart';

function App() {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  
  useEffect(() => {
    if (!theme) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer /> 
        <TestProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Subjects/:card' element={<Subjects />} />
            <Route path='/Exammodetest' element={<Exammodetest />} />
            <Route path='/Congratulations' element={<Congratulations />} />
            <Route path='/Testdetails' element={<Testdetails />} />
            <Route path='/ReadinessStart' element={<RedinessStart />} />
            <Route path='/Testcompleted' element={<Testcompleted />} />
            <Route path='/Reviewquestions/:id' element={<Reviewquestions />} />
            <Route path='/Reviewprtest' element={<Reviewprtest />} />
            <Route path='/Helpfaq' element={<Helpfaq />} />
            <Route path='/Flashcard' element={<CardContainer />} />
            <Route path='/Reminder' element={<Reminder />} />
            <Route path='/Myaccount' element={<Myaccount />} />
            <Route path='/Myprofile' element={<Myprofile />} />
            <Route path='/Studyreminders' element={<Studyreminders />} />
            <Route path='/Billinghistory' element={<Billinghistory />} />
            <Route path='/Writeareview' element={<Writeareview />} />
            <Route path='/Sharewithfriends' element={<Sharewithfriends />} />
            <Route path='/Plansandpricing' element={<Plansandpricing />} />
            <Route path='/Congratulationsplus' element={<Congratulationsplus />} />
            <Route path='/Createprofile' element={<Createprofile />} />
            <Route path='/Studyreminderset' element={<Studyreminderset />} />
            <Route path='/Privacypolicy' element={<Privacypolicy />} />
            <Route path='/Termsandconditions' element={<Termsandconditions />} />
            <Route path='/Tutoredtest' element={<Tutoredtest />} />
            <Route path='/Fastfiveincorrectanswer' element={<Fastfiveincorrectanswer />} />
            <Route path='/Roadmap' element={<Roadmap />} />
            <Route path='/Statisticss' element={<Statisticss />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path='/Login' element={<Login />} />
            <Route path='/CheckMail' element={<CheckMail />} />
            <Route path='/LoginMail' element={<LoginMail />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
            <Route path='/ResetPassword' element={<ResetPassword />} />
            <Route path='/SignUp' element={<SignUp />} />
          </Route>
        </Routes>
        </TestProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
