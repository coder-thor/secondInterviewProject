import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import ToastPage from "../pages/ToastTest/index";
import Manager from "../pages/ManagerTest";
import Tree from "../pages/TreeTest/index";

// comps
import GlobalNavs from "../components/GlobalNavs";

export default function RouterConf(): ReactElement {
    return (
        <BrowserRouter>
            <GlobalNavs />
            <div className="content" style={{ padding: "15px", boxSizing: "border-box" }}>
                <Routes>
                    <Route path="/toast" element={ <ToastPage /> }  />
                    <Route path="/manager" element={ <Manager /> } />
                    <Route path="/tree" element={ <Tree /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}