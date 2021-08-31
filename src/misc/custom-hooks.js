import { useCallback, useEffect,useState,useRef } from "react";

export function useModelState(defaultValue = false) {
    const [isOpen, setIsOpen] = useState(defaultValue);
    const open = useCallback(() =>  setIsOpen(true) , []);
    const close = useCallback(() =>   setIsOpen(false) , []);
    return { isOpen, open, close };
}

export function useAlertState(defaultValue = false) {
    const [isAlertOpen, setIsAlertOpen] = useState(defaultValue);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState(null);
    const [alertDuraration, setAlertDuration] = useState(null);

    const openAlert = useCallback(() =>  setIsAlertOpen(true) , []);
    const closeAlert = useCallback(() =>   setIsAlertOpen(false) , []);
    
    return { alertType,alertMessage,isAlertOpen, openAlert, closeAlert,alertDuraration };
}
export const useMediaQuery = query => {
    const [matches, setMatches] = useState(
        () => window.matchMedia(query).matches
    );
    useEffect(() => {
        const queryList = window.matchMedia(query);
        setMatches(queryList.matches);

        const listener = event => setMatches(event.matches);

        queryList.addListener(listener);

        return () => queryList.removeListener(listener);

    }, [query]);
    return matches;
};