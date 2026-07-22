import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Main } from "./src/Main.jsx";
import { LoginPage } from "./src/LoginPage/LoginPage.jsx";
import { SignupPage } from "./src/SignupPage/SignupPage.jsx";
import { BoardPage } from "./src/board/BoardPage.jsx";
import { PostWritePage } from "./src/pages/PostWritePage/PostWritePage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/board" element={<BoardPage/>}/>
        <Route path="/posts/write" element={<PostWritePage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);