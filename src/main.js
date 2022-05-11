import React from 'react'
import { createRoot } from 'react-dom/client';
import Index from "./index"
import './main.css'
import (
    /* webpackChunkName: "chunk" */
    './chunk'
);

createRoot(document.getElementById("main")).render(<Index />);