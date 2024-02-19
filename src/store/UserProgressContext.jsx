import { createContext } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});

export function UserProgressContextProvider() {
    return (
       <UserProgressContext.Provider>{children}</UserProgressContext.Provider>
    )
}

export default UserProgressContext;
