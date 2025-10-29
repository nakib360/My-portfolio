import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import MainLayout from "../Layouts.jsx/MainLayout";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Services from "../Components/Services";
import Education from "@/Components/Education";
import Contact from "@/Components/Contact";

const rout = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/skills",
                element: <Skills/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            // {
            //     path: "/experience",
            //     element: <Experience/>
            // },
            {
                path: "/services",
                element: <Services/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/education",
                element: <Education/>
            },
            {
                path: "/certifications",
                element: <p>This is certifications</p>
            },
        ]
    }
])

export default rout