'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background text-foreground py-12 px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-8">
                <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="prose prose-invert prose-lg max-w-none">
                    <h1>Privacy Policy</h1>
                    <p className="text-muted">Last updated: January 22, 2026</p>

                    <p>
                        We are <strong>LuvinAI</strong> ("Company," "we," "us," "our"), an individual developer team. We operate the mobile application <strong>Roving AI</strong> (the "App"), as well as any other related products and services that refer or link to this privacy policy (the "Privacy Policy") (collectively, the "Services").
                    </p>
                    <p>
                        This page is used to inform website visitors relative to our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
                    </p>
                    <p>
                        If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                    </p>

                    <h2>Information Collection and Use</h2>
                    <p>
                        We prioritize your privacy. <strong>We do not collect or store any personal information (such as your name, email address, or phone number) on our servers.</strong> We do not have a membership system, and we do not track your utilization across different devices.
                    </p>

                    <h3>Screen Time & Device Activity</h3>
                    <p>To provide the core functionality of <strong>Roving AI</strong> (helping you manage screen time), our App accesses your device's <strong>Screen Time API</strong>.</p>
                    <ul>
                        <li><strong>Local Processing Only</strong>: All data regarding your app usage, screen time duration, and device pickup frequency is processed <strong>locally on your device</strong>.</li>
                        <li><strong>No Data Transmission</strong>: We do not transmit your screen time data to any external server. It stays on your phone.</li>
                        <li><strong>Usage</strong>: We use this data solely to calculate your usage statistics and to help you set mindful pauses for specific apps.</li>
                    </ul>

                    <h3>Device Information</h3>
                    <p>
                        We may collect anonymous, non-identifiable device information (such as device model, OS version) solely for the purpose of debugging and improving app stability.
                    </p>

                    <h2>Service Providers</h2>
                    <p>We may employ third-party companies and individuals due to the following reasons:</p>
                    <ul>
                        <li>To facilitate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To assist us in analyzing how our Service is used.</li>
                    </ul>
                    <p>
                        We want to inform our Service users that these third parties may have access to anonymous aggregate data to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                    </p>

                    <h2>Security</h2>
                    <p>
                        We value your trust. Since we do not store your personal data on our servers, your privacy is inherently more secure. For the local data stored on your device, we rely on the security features of your operating system (iOS) to protect your information.
                    </p>

                    <h2>Children's Privacy</h2>
                    <p>
                        Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13.
                    </p>

                    <h2>Future Features (Family Control)</h2>
                    <p>
                        In future updates, we may introduce Family Control features. If you choose to use these features, you may be asked to authorize screen time management for other family members. Any such features will be implemented with strict privacy safeguards, and we will update this policy to reflect any changes in data handling before those features are released.
                    </p>

                    <h2>Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at: <strong>torcher0101@gmail.com</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}
