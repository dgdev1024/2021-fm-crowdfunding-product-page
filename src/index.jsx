/**
 * @file index.jsx
 * @brief The entry point for our application.
 */

import React from "react";
import { render } from "react-dom";
import "./styles/_global.scss";
import "./styles/_typography.scss";
import App from "./components/app";

const mountNode = document.querySelector(".app-root");
render(<App />, mountNode);
