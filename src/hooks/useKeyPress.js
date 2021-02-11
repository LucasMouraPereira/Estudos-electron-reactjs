import { useEffect } from 'react';

const useKeyPress = (fn) => {
    useEffect(() => {
        window.addEventListener("keydown", fn);
        return () => window.addEventListener("keydown", fn);
    }, [fn]);
}

export default useKeyPress;