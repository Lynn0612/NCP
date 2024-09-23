import React from "react";
import "./style.scss";
import { SubscriptionBanner } from './banner/SubscriptionBanner';
import { SubscriptionContent } from './content/SubscriptionContent';
import { SubscriptionSupporter } from './number/SubscriptionSupporter';



const SubscriptionPage = () => {

    return (
        <>
            <SubscriptionBanner />
            <SubscriptionSupporter />
            <SubscriptionContent />
        </>
    );
};
export default SubscriptionPage;