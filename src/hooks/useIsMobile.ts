import { useState, useEffect } from 'react';
import useWindowSize from "./useWindowSize";

function useIsMobile() {
    const size = useWindowSize();
    const [isMobile, setIsMobile] = useState<Boolean>(size.width < 960);

    useEffect(() => {
        setIsMobile(size.width < 960);
    }, [size])

    return isMobile;
}

export default useIsMobile;