import React, {createContext} from "react";

export const ThemeContext = React.createContext({
    colorTheme:'primary',
    changeTheme: () => {}
});