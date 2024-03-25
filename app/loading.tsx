import { CircularProgress } from "@nextui-org/react";

import './loading.css';

export default function DefaultLoading() {
    return <main className="loading">
        Loading...
        <CircularProgress size="lg"/>
    </main>
}