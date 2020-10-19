import { useState, useRef } from 'react'

export default function TermsConditions({ isOpen, setDeactivateModal }) {
    const termsCheck = useRef(null)
    // const [scrollEnd, setScrollEnd] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false)
    // const handleScroll = () => {
    //     const boundingBoxBounds = boundingBox.current.getBoundingClientRect()
    //     const endingFooterBounds = endingFooter.current.getBoundingClientRect()
    //     endingFooterBounds.top < boundingBoxBounds.bottom ? setScrollEnd(true) : null
    // }

    const handleChange = () => {
        setAcceptTerms(termsCheck.current.checked)
    }

    return (
    <>
            <div className="container">
                <div className="column">
                    <div className="column" style={{ 'border': '1px solid black', 'height': '350px', 'overflow': 'scroll' }}>
                        <h1 className="is-size-4 mt-0 pb-5" style={{ "textAlign": "center" }}>Terms & Conditions</h1>
                        <p className="is-size-7">
                            <strong>All visitors to this site agree to be bound by the following conditions:</strong>
                            <br />
                            <br />
            Acceptance of Terms
            This website (“Site”) is a service of Balfour and American Achievement Corp. Balfour provides its
            service to you subject to the following Terms and Conditions of Use (“Terms”). By accessing and using
            this Site, you are agreeing to comply with and be bound by the Terms as well as any specifically posted
            guidelines or rules applicable to particular services.
            <br />
                            <br />
            Description of Service
            Among other products and services, Balfour sells yearbooks, personalized calendars and yearbook
            supplements, which incorporate digital photography (collectively, the “Service”). Unless specifically
            stated otherwise, any new features that augment or enhance the current Service shall be subject to these
            Terms and Conditions.
            <br />
                            <br />
                            <strong>Proprietary Rights, Copyright Information and Release</strong>
                            <br />
                            <br />
            Proprietary Rights of Balfour. <br />
            The Site contains information, text, photographs, designs, graphics, images and other materials and
            effects (including logos) that are protected by copyrights, trademarks, service marks, trade dress or
            other intellectual or proprietary rights owned by Balfour or other third parties (the “Content”). You
            acknowledge and agree that these rights belong to their respective owners and are protected in all
            forms, media and technologies existing now or hereinafter developed. You agree not to display or use
            Balfour logos or marks in any manner, without Balfour’s written permission. Images uploaded by you are
            not considered part of the Content and are not restricted by this paragraph. For more on uploaded
            images, please see below.
            <br />
                            <br />
            Proprietary Rights for Uploaded Images. <br />
            All photographs and images are subject to copyright protection. Any images uploaded onto the Site for
            reproduction in a yearbook or related product must have the permission of the copyright owner before
            Balfour can process the order. If you took the photograph or created the image, you are the copyright
            owner and can provide consent for the reproduction. If the photograph was shot professionally, the
            photographer is the copyright owner and under copyright law Balfour cannot reproduce it without the
            express consent of the photographer. <br />
                            <br />
            Prior to submitting an on-line order, you will be asked to check a box indicating that you either own
            the copyright or have secured permission to reproduce the image. By checking the box, you are indicating
            to Balfour that you have read and understand these rules, that Balfour has permission to reproduce the
            image you have uploaded and that you release Balfour from any claims that its reproduction of the images
            is a violation of copyright law.
            Online Conduct
            <br />
                            <br />
            Your use of the Site is subject to applicable local, state, federal and international law. You agree not
            to use the Site or any of the Content for any illegal purpose, or to transmit to or through the Site any
            illegal, harmful, threatening, defamatory, obscene, hateful or other objectionable material of any kind,
            or to interfere with, abuse or otherwise violate the legal rights of any third party using the Site
            (including by using any merchandise or the Services offered on or in connection with the Site).
            <br /><br />By way of example only, and not as a limitation, you specifically agree not to:
            <br />
            Upload, post, e-mail, or otherwise transmit any Content that is unlawful, harmful, threatening, abusive,
            harassing, defamatory, vulgar, obscene, libelous, invasive of another’s privacy, hateful, or racially,
            ethnically or otherwise objectionable at Balfour’s sole discretion;
            Upload, post, e-mail or otherwise transmit any Content that infringes any patent, trademark, trade
            secret, copyright or other proprietary rights of any party;
            Upload, post, e-mail or otherwise transmit any material that contains software viruses or any other
            computer code, files or programs designed to interrupt, destroy or limit the functionality of any
            computer software or hardware or telecommunications equipment;
            <br />
            Interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any
            requirements, procedures, policies or regulations of networks connected to the Service;
            Intentionally or unintentionally violate any applicable local, state, national or international law or
            any regulations having the force of law. Balfour grants permission to access and view the Site and to
            electronically copy and print in hard copy portions of the Site for the sole purpose of submitting an
            order. Any other use of the Site or the Content, in whole or in part, without permission of the
            applicable rights holder is strictly prohibited, including without limitation: modification,
            republication, deletion, transmission, public performance, distribution, proxy caching, uploading,
            posting, reproduction for purposes other than those noted above, or other similar unauthorized
            exploitation of the Site or the Content. Without limiting the foregoing, any unauthorized use of the
            Content is illegal and could subject you to criminal prosecution as well as personal liability for
            damages in a civil suit.
            <br />
                            <br />
                            <h1 className="is-size-4 mt-0 pb-5" style={{ "textAlign": "center" }}>Disclaimer</h1>
            THE SITE AND ITS CONTENTS ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT ANY WARRANTY OR REPRESENTATIONS OF
            ANY KIND, WHETHER EXPRESS OR IMPLIED. BALFOUR IS A DISTRIBUTOR AND NOT A PUBLISHER OF THE CONTENT SUPPLIED
            BY THIRD PARTIES AND USERS OF THE SITE; AS SUCH, BALFOUR EXERCISES NO EDITORIAL CONTROL OVER SUCH CONTENT
            AND MAKES NO WARRANTY OR REPRESENTATION AS TO THE ACCURACY, RELIABILITY OR CURRENCY OF ANY INFORMATION,
            CONTENT, SERVICE OR MERCHANDISE PROVIDED THROUGH OR ACCESSIBLE VIA THE SITE. WITHOUT LIMITING THE FOREGOING,
            BALFOUR SPECIFICALLY DISCLAIMS ALL WARRANTIES AND REPRESENTATIONS AS THE PUBLISHER OF ANY CONTENT
            TRANSMITTED ON OR IN CONNECTION WITH THE SITE OR ON SITES THAT MAY APPEAR AS LINKS ON THE SITE, OR AS THE
            MANUFACTURER OF THE PRODUCTS PROVIDED AS A PART OF, OR OTHERWISE IN CONNECTION WITH, THE SITE, INCLUDING
            WITHOUT LIMITATION ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NONINFRINGEMENT OF
            THIRD PARTY RIGHTS. NO ORAL ADVICE OR WRITTEN INFORMATION GIVEN BY BALFOUR NOR ANY OF ITS AFFILIATES,
            EMPLOYEES, OFFICERS, DIRECTORS, AGENTS, OR THE LIKE SHALL CREATE A WARRANTY. PRICE AND AVAILABILITY
            INFORMATION IS SUBJECT TO CHANGE WITHOUT NOTICE.

            Limitation of Liability
            YOUR USE OF THE SITE AND ITS CONTENTS IS AT YOUR OWN RISK. NEITHER BALFOUR NOR ANY OF ITS AFFILIATES OR
            OTHER PARTIES INVOLVED IN CREATING AND DELIVERING THE SITE, OR THE SERVICE OR ANY PRODUCTS PROVIDED AS A
            PART OF, OR OTHERWISE IN CONNECTION WITH, THE SITE, WILL BE LIABLE FOR ANY COMPENSATORY, DIRECT, INDIRECT OR
            CONSEQUENTIAL DAMAGES, LOSS OF DATA, INCOME OR PROFIT, LOSS OF OR DAMAGE TO PROPERTY, OR ANY CLAIMS OF THIRD
            PARTIES ARISING FROM USE OF THE SITE, REGARDLESS OF THE LEGAL THEORY ON WHICH THE CLAIM IS BASED, AND EVEN
            IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, INCLUDING WITHOUT LIMITATION ANY DAMAGES ARISING OUT OF
            RELIANCE BY THE USER ON INFORMATION OBTAINED FROM BALFOUR OR THE SITE, OR FOR DAMAGES WHICH RESULT FROM ANY
            MISTAKE, OMISSION, VIRUS, DELAY IN OPERATION, INTERRUPTION OF SERVICE, OR FAILURE OF PERFORMANCE, WHETHER OR
            NOT RESULTING FROM AN ACT OF GOD, COMMUNICATIONS FAILURE, THEFT, OR UNAUTHORIZED ACCESS TO BALFOUR RECORDS
            OR THE SITE. Some states do not allow the exclusion or limitation of liability of consequential or
            incidental damages, so the above exclusions may not apply to you; in such states, liability is limited to
            the fullest extent permitted by law.
            <br /><br />
            Indemnification
            YOU AGREE TO INDEMNIFY AND HOLD BALFOUR, ITS PARENTS, SUBSIDIARIES, AFFILIATES, OFFICERS, PARTNERS AND
            EMPLOYEES, HARMLESS FROM ANY CLAIM OR DEMAND, INCLUDING REASONABLE ATTORNEYS’ FEES, MADE BY ANY THIRD PARTY
            DUE TO OR ARISING OUT OF YOUR USE OF THE SERVICE, USE OF YOUR ACCOUNT BY ANY THIRD PARTY, THE VIOLATION OF
            THE TERMS AND CONDITIONS OF USAGE BY YOU, OR THE INFRINGEMENT BY YOU, OR ANY THIRD PARTY USING YOUR ACCOUNT,
            OF ANY INTELLECTUAL PROPERTY OR OTHER RIGHT OF ANY PERSON OR ENTITY.
            <br /><br />
            Applicable Law
            The Site is controlled by Balfour and American Achievement Corp. from its offices within the State of Texas,
            United States of America. Since it can be accessed from all 50 states as well as from other countries around
            the world, and each of these places has laws that may differ from those of Texas, by accessing the Site both
            you and Balfour agree that the statutes and laws of the state of Texas, without regard to the conflicts of
            laws principles thereof, will apply to all matters relating to use of the site and its contents. Balfour
            makes no representation that the Contents are appropriate or will be available for use in other locations.
            If you use this Site from outside the United States of America, you are entirely responsible for compliance
            with applicable local laws, including but not limited to the export and import regulations of other
            countries in relation to the Content and the third party content.
            <br /><br />
            Links to Other Websites and Services
            The Site may from time to time contain links to other sites. The linked sites are not under the control of
            Balfour and Balfour is not responsible for the content of any linked site or any link contained in a linked
            site, or any changes or updates to such sites. Balfour reserves the right to terminate any link or linking
            program at any time. Balfour is providing these links to you only as a convenience. Balfour does not endorse
            companies or products to which it links and reserves the right to note as such on its web pages. If you
            decide to access any of the third party sites linked to this Site, you do this entirely at your own risk.
            <br /><br />
            Site Security
            You agree not to violate or attempt to violate the security of the Site, including without limitation, (a)
            accessing data that is not intended for your use; (b) logging on to a server or account that you are not
            authorized to access; (c) probing, scanning or testing the vulnerability of any system or network related in
            any way to the Site without proper authorization; (d) breaching security or authentication measures without
            proper authorization; (e) interfering with service to any host, network, other user, including without
            limitation, sending unsolicited e-mail, flooding, spamming, or crashing; (f) sending promotions and/or
            advertising products and/or services; or (g) attempting to do any of the preceding.
            <br /><br />
            Special Legal Considerations
            Balfour reserves the right to cooperate with local, state and federal officials in any investigation
            relating to any purported illegal activity(ies) and, when required by law, regulation, legal process or
            government requests, to disclose any personal information furnished by you or collected by Balfour to law
            enforcement authorities or other relevant or related third parties. BALFOUR RESERVES THE RIGHT TO CHANGE THE
            FOREGOING TERMS AT ANY TIME BY POSTING CHANGES ON-LINE. YOU ARE RESPONSIBLE FOR REVIEWING INFORMATION POSTED
            ON-LINE TO OBTAIN TIMELY NOTICE OF SUCH CHANGES. YOUR CONTINUED VISITS, USE OF THE SERVICES AND/OR PURCHASE
            OF MERCHANDISE THROUGH THE SITE CONSTITUTES YOUR ACCEPTANCE OF THESE TERMS, AS MODIFIED BY ANY POSTED
            CHANGES.
            <br /><br />
            Your Copyrights
            Balfour respects the intellectual property rights of others. If you believe your copyright in a work has
            been violated through this site or our services, please contact our legal department for notice of claims of
            copyright infringement. Our legal department can be reached at: Balfour Publishing and American Achievement
            Corp., 7211 Circle S Drive, Austin, Texas, 78745, or by phone at 512-440-2203. You must provide us with the
            following information, which Balfour may then forward to the alleged infringer:
            <br /><br />
            Describe the copyrighted work that you believe has been infringed;
            Identify the material on Balfour’s site or other medium that you believe infringes your work, with enough
            detail so that we may locate it;
            Provide your address, telephone number, and email address;
            Provide a statement that you have a good faith belief that the disputed use is not authorized by the
            copyright owner, its agent, or the law;
            Declare under penalty of perjury that (a.) the information you have provided to us is accurate, and (b.)you
            are the owner of the copyright interest involved or you are authorized to act on behalf of that owner;
            Provide your physical or electronic signature.
            Upon receiving your complaint, Balfour may remove content that you believe infringes your copyright. In
            addition, Balfour may terminate the account of the member who appears to be infringing your intellectual
            property rights.
            Balfour Trademarks
            The names, trademarks and logos of Balfour appearing on this site may not be used in any advertising or to
            otherwise indicate any affiliation with Balfour.
            <br /><br />
            Contact American Achievement Corp. Legal Department
            If you have any questions or comments regarding these conditions, please contact the <strong>American
                Achievement Legal Department</strong> at <strong>512-440-2203</strong>.
            <br /><br />
                            <p className="ending-footer">(c) 2008 American Achievement Corp. All rights reserved</p>
                        </p>
                        <br />
                        <label className="checkbox pb-5">
                            <input ref={termsCheck} type="checkbox" onChange={handleChange} /><span className="pl-2 is-size-7">I
                    agree to the <strong> terms and conditions</strong></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="column is-fullwidth ml-5 mr-5 is-pulled-right mb-5">
                <div className="field is-grouped">
                    <p className="control">
                        <button disabled={!acceptTerms} onClick={() => setDeactivateModal(true)} className="button is-link">
                            Start Uploading!
            </button>
                    </p>
                </div>
            </div>
    </>
    )
}
