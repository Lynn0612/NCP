import React from "react";
import "./style.scss"
import { Container } from "react-bootstrap";

const PrivacyPage = () => {

    return (
        <Container id="privacypage">
            <h1 className="fw-bold">Privacy Policy</h1>
            <div className="my-3">
                <span>Last Updated:</span><span className="last-updated">[Insert Date]</span>
            </div>
            <div className="article">
                <ol>
                    <li>
                        <p className="title fw-bold">Introduction</p>
                        <p className="content">The Napital Group ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website. By accessing or using our website, you agree to the collection and use of your information in accordance with this policy. If you do not agree with the terms of this policy, please do not use our website.</p>
                    </li>
                    <li>
                        <p className="title">Information We Collect</p>
                        <p className="section-title fw-bold">2.1 Personal Information</p>
                        <p className="content">We may collect personal information that you voluntarily provide to us when you register on our site, subscribe to our newsletter, fill out a form, or engage in other activities on our site. This information may include your name, email address, phone number, and any other details you choose to provide.</p>
                        <p className="section-title fw-bold">2.2 Non-Personal Information</p>
                        <p className="content">We may also collect non-personal information about you whenever you interact with our site. This may include your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing our website.</p>
                        <p className="section-title fw-bold">2.3 Cookies and Tracking Technologies</p>
                        <p className="content">We use cookies and similar tracking technologies to enhance your experience on our site. Cookies are small files stored on your device that help us understand how you use our site and improve your user experience. You can adjust your browser settings to refuse cookies, but doing so may limit some functionality on our website.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">How We Use Your Information</p>
                        <p className="content">We may use the information we collect from you in the following ways:</p>
                        <ul>
                            <li>To personalize your experience on our site and to deliver content and product offerings that are most relevant to you.</li>
                            <li>To improve our website based on the information and feedback we receive from you.</li>
                            <li>To send periodic emails regarding your inquiries, orders, or other products and services.</li>
                            <li>To follow up with you after correspondence (live chat, email, or phone inquiries).</li>
                        </ul>
                    </li>
                    <li>
                        <p className="title fw-bold">Sharing Your Information</p>
                        <p className="content">We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                            <br></br><br></br>
                            We may also release your information when it’s necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Data Security</p>
                        <p className="content">We implement a variety of security measures to maintain the safety of your personal information. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Third-Party Links</p>
                        <p className="content">Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have their own independent privacy policies, and we have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Children’s Privacy</p>
                        <p className="content">Our website is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received such information, we will take steps to delete it as soon as possible.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Changes to This Privacy Policy</p>
                        <p className="content">We reserve the right to update this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website following the posting of changes constitutes your acceptance of such changes.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Contact Us</p>
                        <p className="content">If you have any questions or concerns about this Privacy Policy, please contact us at <span className="contnent-span">bd@napital.org.</span></p>
                    </li>
                </ol>
            </div>

        </Container>
    )
}

export default PrivacyPage