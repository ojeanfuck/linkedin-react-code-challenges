import { useEffect } from "react";

export default function WindowEvent() {
    useEffect(() => {
        const doubleClick = () => alert('mouse pressed');
        window.addEventListener('dblclick', doubleClick, false);

        return () => window.removeEventListener('dblclick', doubleClick);
    }, []);

    return (
        <h2>Window event active</h2>
    )
}