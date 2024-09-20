import React from "react";
import "./style.scss";
import { SubscriptionBanner } from './banner/SubscriptionBanner';
import { SubscriptionContent } from './content/SubscriptionContent';



const SubscriptionPage = () => {

    return (
        <>
            <SubscriptionBanner />
            <SubscriptionContent />
        </>
    );
};
export default SubscriptionPage;