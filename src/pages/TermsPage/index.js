import React from "react";
import "./style.scss"
import { Container } from "react-bootstrap";

const TermsPage = () => {

    return (
        <Container id="tremspage">
            <h1 className="fw-bold">Terms and Conditions</h1>
            <div className="my-3 lastupdated">
                <span>Last Updated:</span><span className="last-updated">[Insert Date]</span>
            </div>
            <div className="article">
                <ol>
                    <li>
                        <p className="title fw-bold">Introduction</p>
                        <p className="content">The Napital Group ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website. By accessing or using our website, you agree to the collection and use of your information in accordance with this policy. If you do not agree with the terms of this policy, please do not use our website.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Use of Our Website</p>
                        <p className="section-title fw-bold">2.1. Eligibility</p>
                        <p className="content">You must be at least 18 years old to use our website. By using our site, you represent and warrant that you meet this age requirement.</p>
                        <p className="section-title fw-bold">2.2. Permitted Use</p>
                        <p className="content">You agree to use our website only for lawful purposes. You may not use our site in a way that could damage, disable, or impair our servers or networks.</p>
                        <p className="section-title fw-bold">2.3. User Accounts</p>
                        <p className="content">To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Intellectual Property</p>
                        <p className="section-title fw-bold">3.1. Ownership</p>
                        <p className="content">All content, materials, and intellectual property on our website, including but not limited to text, images, logos, and software, are owned by or licensed to the Napital Group and are protected by applicable intellectual property laws.</p>
                        <p className="section-title fw-bold">3.2. Limited License</p>
                        <p className="content">You are granted a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works from our content without our prior written consent.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Financial Transactions</p>
                        <p className="section-title fw-bold">4.1. Payment Terms</p>
                        <p className="content">All financial transactions on our website are governed by the terms and conditions of the payment processor. By making a payment, you agree to their terms.</p>
                        <p className="section-title fw-bold">4.2. Refunds and Cancellations</p>
                        <p className="content">Refunds and cancellations are subject to the specific terms provided at the point of sale or agreement. Please review these terms carefully before making any purchase.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Disclaimers</p>
                        <p className="section-title fw-bold">5.1. No Warranty</p>
                        <p className="content">Our website and services are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding the operation of our website or the information, content, materials, or products included on our website.</p>
                        <p className="section-title fw-bold">5.2. Limitation of Liability</p>
                        <p className="content">To the fullest extent permitted by law, the Napital Group shall not be liable for any damages arising from your use of our website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Privacy</p>
                        <p className="content">Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our website, you agree to the terms of our Privacy Policy.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Governing Law</p>
                        <p className="content">These Terms are governed by and construed in accordance with the laws of <span className="last-updated">[法律管轄區]</span>. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of <span className="last-updated">[法律管轄區]</span>.</p>
                    </li>
                    <li>
                        <p className="title fw-bold">Changes to These Terms</p>
                        <p className="content">We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website following any such changes constitutes your acceptance of the new Terms.</p>
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

export default TermsPage