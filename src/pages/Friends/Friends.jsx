import {FriendsInvite} from "../../components/FriendsInvite";
import {FriendsInviteBtn} from "../../components/FriendsInviteBtn";
import {useState} from "react";
import {Alert} from "../../components/Alert";

function Friends() {
    const [alertName, setAlertName] = useState('');

    const closeAlert = () => {
        setAlertName('');
    }

    const copyLink = () => {
        const referralLink = "url";
        navigator.clipboard.writeText(referralLink)
            .then(() => {
                setAlertName('Referral link copied!');
            })
            .catch((err) => {
                setAlertName('Failed to copy referral link');
            });
    };
    return (
        <>
            <div className="wrapper" style={{position: 'relative'}}>

                {alertName && <Alert title={alertName} closeAlert={closeAlert}/>}
                <FriendsInvite/>
            </div>
            <FriendsInviteBtn copyLink={copyLink}/>
        </>
    );
}

export {Friends};