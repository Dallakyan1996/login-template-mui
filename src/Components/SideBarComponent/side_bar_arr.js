import { BiAperture, BiBuilding } from "react-icons/bi";

export const sideBarArr = [
    {
        name: "Dashboard",
        icon: <BiAperture fill="white" style={{ fontSize: "15px" }} />,
        route: "/"
    },
    {
        name: "Enrollment",
        icon: <BiBuilding fill="white" style={{ fontSize: "15px" }} />,
        route: "/enrollment"
    },
    // {
    //     name: "Form",
    //     icon: <BiBuilding fill="white" style={{ fontSize: "15px" }} />,
    //     route: "/form"
    // },
]