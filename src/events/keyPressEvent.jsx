import { useEffect } from 'react';

function useKey (keyCode, callback) {
    useEffect(() => {
    const handleEvent = (event) => {
        if (event.keyCode === keyCode) {
            callback();
        }
    };

    document.addEventListener('keydown', handleEvent);

    return () => {
        document.removeEventListener('keydown', handleEvent);
      }
    });
};

export { useKey };
