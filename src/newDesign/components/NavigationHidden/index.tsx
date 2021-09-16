import { Language } from "@material-ui/icons";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
    handleDrawerToggle : Function;
    handleNavMini : Function;
    open : boolean;
    mini : boolean;
    name : string;
    language : string;
    handleSelectLanguage: Function;
}

export default function NavigationHidden({handleDrawerToggle, open, mini, handleNavMini, language, handleSelectLanguage}:Props){
    return(
        <>
            <Header open={open} handleDrawerToggle={handleDrawerToggle} mini={mini} handleNavMini={handleNavMini} />
            <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} language={language} handleSelectLanguage={handleSelectLanguage} />
        </>
    );
};