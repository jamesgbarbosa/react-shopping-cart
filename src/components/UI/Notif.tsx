export default function Notif({ status, message, isHidden }) {
    let notif = <section className={`${status} notification`}>
        <span>{message}</span>
    </section>;
    return !isHidden && notif;
}