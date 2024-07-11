import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/home';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import NotFound from './pages/notFound';
import CreateEvent from './pages/createEvent';
import Event from './pages/event';
import College from './pages/college';
import Footer from './components/footer';
import Header from './components/header';



function App() {

  const router = createBrowserRouter([

    // { path: '/', element: <Home /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/homepage/*', element: <NotFound /> },
    { path: '/homepage/create-events', element: <CreateEvent /> },
    { path: '/homepage/event', element: <Event /> },
    { path: '/homepage/college', element: <College /> },
    { path: '/footer', element: <Footer /> },
    { path: '/header', element: <Header /> },

  ]);


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
