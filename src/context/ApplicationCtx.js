import { createContext } from "react";

const nullFunction = () => {}

export const ApplicationCtx = createContext({
    isUserLoggedIn: null,
    setIsUserLoggedIn: nullFunction
})