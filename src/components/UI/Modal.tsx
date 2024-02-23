import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({isOpen, onClose, children}) {
    let dialog = useRef();

    useEffect(() => {
        if (isOpen) {
            dialog.current.showModal();
        }

        return () => dialog.current.close();
    },[isOpen])

    return createPortal(<dialog onClose={onClose} ref={dialog}>
        {children}
    </dialog>, document.getElementById('modal'))
}