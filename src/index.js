import {StrictMode} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from './App';
import styles from './index.module.scss'
const root = createRoot(document.getElementById("app"))
import { AuthProvider } from './context/AuthProvider';

root.render(
<StrictMode>
    <Router>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </Router>
</StrictMode>)