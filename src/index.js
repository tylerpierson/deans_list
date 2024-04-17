import {StrictMode} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from './App';
import styles from './index.module.scss'
const root = createRoot(document.getElementById("app"))
root.render(
<StrictMode>
    <Router>
        <App/>
    </Router>
</StrictMode>)