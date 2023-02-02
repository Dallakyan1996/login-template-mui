import DashboardComponent from "../Components/DashboardComponent/DashboardComponent"
import LoginPageComponent from "../Components/LoginPageComponent/LoginPageComponent"
import { loginTokenStorage } from "../utils/constants"


const routesArrFn = () => {
    const user = JSON.parse(localStorage.getItem(loginTokenStorage))
    return [
        {
            path: "/",
            exact: true,
            component: user ? <DashboardComponent /> : <LoginPageComponent />
        },
        {
            path: "/enrollment",
            exact: true,
            component: ""
        },
        // {
        //     path: "/form",
        //     exact: true,
        //     component: <FormComponent />
        // }
    ]
}

export default routesArrFn;