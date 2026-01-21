'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-background text-foreground py-12 px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-8">
                <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="prose prose-invert prose-lg max-w-none">
                    <h1>Terms of Service</h1>
                    <p className="text-muted">Last updated: January 22, 2026</p>

                    <h2>AGREEMENT TO OUR LEGAL TERMS</h2>
                    <p>
                        We are <strong>LuvinAI</strong> ("Company," "we," "us," "our"), an individual developer team. We operate the mobile application <strong>Roving AI</strong> (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                    </p>
                    <p>
                        These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and LuvinAI, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>
                    <p>
                        We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms. It is your responsibility to periodically review these Legal Terms to stay informed of updates.
                    </p>
                    <p>
                        The Services are intended for users who are at least 13 years old. Persons under the age of 13 are not permitted to use or register for the Services.
                    </p>

                    <h2>1. OUR SERVICES</h2>
                    <p>
                        The Services are provided for your personal, non-commercial use. The App is a productivity tool designed to help users manage screen time and reduce digital distractions.
                    </p>

                    <h2>2. INTELLECTUAL PROPERTY RIGHTS</h2>
                    <p>
                        We are the owner or the licensee of all intellectual property rights in our Services, including all source code, software, App designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
                    </p>

                    <h2>3. USER REPRESENTATIONS</h2>
                    <p>
                        By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not under the age of 13; (3) you will not access the Services through automated or non-human means; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.
                    </p>

                    <h2>4. PROHIBITED ACTIVITIES</h2>
                    <p>You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:</p>
                    <ul>
                        <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                        <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
                        <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                        <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                    </ul>

                    <h2>5. PRIVACY</h2>
                    <p>
                        We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please review our Privacy Policy to understand our practices.
                    </p>

                    <h2>6. TERM AND TERMINATION</h2>
                    <p>
                        These Legal Terms shall remain in full force and effect while you use the Services. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                    </p>

                    <h2>7. MODIFICATIONS AND INTERRUPTIONS</h2>
                    <p>
                        We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We cannot guarantee the Services will be available at all times.
                    </p>

                    <h2>8. GOVERNING LAW</h2>
                    <p>
                        These Legal Terms shall be governed by and defined following the laws of <strong>Taiwan</strong>. LuvinAI and yourself irrevocably consent that the courts of Taiwan shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
                    </p>

                    <h2>9. DISCLAIMER</h2>
                    <p>
                        THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.
                    </p>

                    <h2>10. CONTACT US</h2>
                    <p>
                        In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                    </p>
                    <p>
                        <strong>LuvinAI</strong><br />
                        Email: <strong>torcher0101@gmail.com</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
