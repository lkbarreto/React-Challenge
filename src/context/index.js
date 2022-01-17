import React from "react";
import { AuthProvider } from "./authProvider";
import App from "../App";
export default function Providers() {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    );
}