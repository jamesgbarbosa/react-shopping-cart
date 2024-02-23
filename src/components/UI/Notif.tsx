export default function Notif({ status, message, isHidden }) {
    let notif = <section className={`${status} notification ${isHidden ? 'notification-on-hide' : 'notification-hide'}`}>
        <span>{message}</span>
    </section>;
    return notif;
}