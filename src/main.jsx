import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
"react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import UserDerail from './components/UserDetails/UserDerail.jsx';
import ErrorPage from './components/ErorPage/ErorPage.jsx';
import Posts from './components/Posts/Posts.jsx';
import { element } from 'prop-types';
import PostDetails from './components/PostDetails/PostDetails.jsx';



const router = createBrowserRouter([


{
  path : '/',
  element: <Home></Home>,
errorElement : <ErrorPage></ErrorPage>,

  children: [
{
  path : '/about',
  element: <About></About>
},
{
  path : '/contact',
 element: <Contact></Contact>
},
{
  path : '/users',
  loader :() => fetch('https://jsonplaceholder.typicode.com/users'),
  element: <Users></Users>
},
{
  path : '/user/:userId',
  loader :({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
  element: <UserDerail></UserDerail>
},
{
path: '/posts',
loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
element : <Posts></Posts>
},
{
  path: '/post/:postId',
  loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
element: <PostDetails></PostDetails>
}

  ]
},



])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/>
  </React.StrictMode>,
)
