import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import FeatureDetails from './featureDetails'
import AppliedJobs from './components/AppliedJobs'
import Statistics from './components/Statistics'
import Blogs from './components/Blogs'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/allJobs.json")
      },
      // {
      //   path: "/home", element: <Home></Home>
      // },
      {
        path: "applied_jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "feature/:featureId",
        element: <FeatureDetails />,

        loader: async ({ params }) => {
          const res = await fetch("/allJobs.json");
          const features = await res.json();

          const detailsFeatures = features.find(feature => feature.id == params.featureId);
          return detailsFeatures;

        }
      },
      { path: 'statistics', element: <Statistics></Statistics> },
      { path: 'blogs', element: <Blogs></Blogs> }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
