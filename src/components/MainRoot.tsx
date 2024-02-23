import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import CartModal from "./CartModal";
import CheckoutModal from "./CheckoutModal";
import Notif from "./UI/Notif";
import { useSelector } from "react-redux";

export default function MainRoot() {
    const notifSelector = useSelector((state) => state.notif)

    return <>
        <Notif status={notifSelector.status} isHidden={!notifSelector.isOpen} message={notifSelector.message} />
        <Header />
        <div id="main-container">
            <Outlet />
        </div>
        <CartModal />
        <CheckoutModal />
    </>
}