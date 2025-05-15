import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

// const css = `
//   h2{
//     padding-top: 10px;
//     font-size: 25px;
//     padding-bottom: 10px;
//   }
//   h5{
//     padding-top: 15px;
//     font-size: 22px;
//     padding-bottom: 15px;
//     font-weight: bold;
//   }
//   p{
//     padding-top: 6px;
//     padding-bottom: 6px;
//   }
//   ul{
//     list-style-type: disc;
//     margin-left: 30px;

//   }
//   li{
//     margin-bottom: 5px;
//   }
//   br{
//     padding-top: 6px;
//     padding-bottom: 6px;
// }

// `;

const PrivacyPolicy = () => {
  return (
    <>
      {/* <style>{css}</style> */}
      <SectionLayout bg="mt-10 lg:mt-22">
        <div className="text-center md:text-left text-md md:text-xl">
          <div className="my-2">
            <h2
              className={`text-stone-950 !font-semibold text-3xl md:text-5xl mt-10 lg:mt-20 mb-10  text-center  uppercase`}
            >
              Privacy Policy
            </h2>
            <p className="text-lg text-stone-950 text-center md:text-left font-semibold pb-2 italic">
              Effective Date: 26 January, 2025
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-stone-950 text-center md:text-left">
              At Melamed Law PLLC ("we," "our," and "the Firm"), your privacy is
              important to us. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your personal information when you visit
              our website, use our legal services, or engage with us in any way.
              We are committed to protecting your privacy and ensuring that your
              personal information is handled with care, by the applicable
              privacy laws.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              The Website’s{" "}
              <span className="text-blue-500 underline">
                <Link href="/terms-of-service">Terms of Service</Link>
              </span>{" "}
              (‘TOS’) are included as part of this policy. By accessing or using
              our website or services, you consent to the collection and use of
              your personal information as described in this Privacy Policy. If
              you do not agree with this Privacy Policy, please refrain from
              using our services or website.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              What Information We Collect?
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              We collect different types of personal information based on how
              you interact with us, including:
            </p>
            <ol className="pl-14 list-decimal">
              <li className="pb-4">
                <span className="font-semibold">
                  Personal Identification Information:{" "}
                </span>
                This includes your name, address, email address, phone number,
                and other contact details you provide to us during our
                communication, such as when you request legal services or
                inquire about our practice.
              </li>
              <li className="pb-4">
                <span className="font-semibold">
                  Professional Information:{" "}
                </span>
                If you are a business owner or homeowner seeking legal advice,
                we may collect information about your business or property,
                including employment details, insurance policy information,
                property ownership details, and other related professional or
                legal information relevant to your case.
              </li>
              <li className="pb-4">
                <span className="font-semibold">
                  Transactional Information:{" "}
                </span>
                This includes details related to the services we provide to you,
                such as billing and payment information, client records, and
                case-related data. We collect and maintain this information to
                ensure we provide you with accurate legal services.
              </li>
              <li className="pb-4">
                <span className="font-semibold">Website Usage Data: </span>We
                collect information on how you interact with our website,
                including IP addresses, browser types, referring URLs, and other
                usage data. This may include cookies and other tracking
                technologies used to gather information about how our website is
                used and to improve our online services.
              </li>
            </ol>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              How We Use Your Information?
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              We collect and use information for several purposes, such as:
            </p>
            <ol className="pl-14 list-disc">
              <li className="pb-4">
                <span className="font-semibold">
                  To Provide Legal Services:{" "}
                </span>
                We use your personal and professional information to represent
                you effectively, manage your legal matters, and provide legal
                advice. This includes information related to property damage
                claims, insurance disputes, and other related legal issues.
              </li>
              <li className="pb-4">
                <span className="font-semibold">To Communicate with You: </span>
                We use your contact information to respond to inquiries,
                schedule consultations, send important updates about your legal
                case, and provide you with information about our services. We
                may also send you newsletters or informational emails if you
                have opted to receive them.
              </li>
              <li className="pb-4">
                <span className="font-semibold">
                  To Improve Our Website and Services:{" "}
                </span>
                We analyze usage data to improve the functionality of our
                website, personalize it to better meet the needs of our clients,
                and enhance the overall user experience. We also use this
                information to troubleshoot and resolve technical issues.{" "}
                <span className="block">
                  In addition, This Privacy Policy doesn’t cover third-party
                  websites, resources, or any linked sites you might visit from
                  ours. Those sites have their own privacy policies, so we
                  recommend checking those out directly
                </span>
              </li>
              <li className="pb-4">
                <span className="font-semibold">
                  To Comply with Legal and Regulatory Requirements:{" "}
                </span>
                We may use your information to comply with applicable laws,
                regulations, and court orders, and to protect the Firm’s rights
                and interests. This includes responding to legal requests or
                cooperating with law enforcement when necessary.
              </li>
              <li className="pb-4">
                <span className="font-semibold">
                  To Maintain Internal Records:{" "}
                </span>
                We may use your personal information for internal administrative
                purposes, such as tracking case progress, managing billing, and
                ensuring that we meet our legal obligations.
              </li>
            </ol>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              How Can We Share Your Information?
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              We take your privacy seriously, and we will never sell, rent, or
              share your personal information with third parties for marketing
              purposes without your explicit consent. However, we may disclose
              your information in the following circumstances:
            </p>
            <ol className="pl-14 list-decimal">
              <li className="pb-4">
                <span className="font-semibold">Service Providers: </span>We may
                share your information with trusted third-party service
                providers who help us deliver our legal services. These
                providers may include IT support, billing, and cloud storage
                companies. We require these providers to protect your data and
                use it only for the purposes for which it was shared.
              </li>
              <li className="pb-4">
                <span className="font-semibold">
                  Legal and Regulatory Disclosures:{" "}
                </span>
                In certain circumstances, we may be required to disclose your
                information to comply with legal obligations, such as in
                response to subpoenas, court orders, or other legal processes.
                We may also disclose your information to prevent fraud or
                protect our rights or the rights of others.
              </li>
              <li className="pb-4">
                <span className="font-semibold">Business Transfers: </span>If
                our business undergoes a merger, acquisition, or sale, we may
                transfer your personal information as part of the process to
                ensure a smooth transition. We will take appropriate steps to
                ensure that your information is protected during such transfers
                and inform you of any changes to this Privacy Policy.
              </li>
              <li className="pb-4">
                <span className="font-semibold">With Your Consent: </span> We
                may share your personal information with third parties when you
                provide us with your consent, such as when you ask us to share
                information with other professionals or partners involved in
                your case.
              </li>
            </ol>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              How Do We Provide Data Security?
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              We use trusted, industry-standard security measures to safeguard
              your personal information from unauthorized access, misuse, or
              disclosure. These measures include physical, technical, and
              administrative safeguards to protect your data in our custody.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              However, please note that no system is entirely secure, and while
              we strive to protect your information, we cannot guarantee
              absolute security.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Your Rights and Choices
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              As a client or visitor to our website, you have certain rights
              with respect to your personal information, including:
            </p>
            <ol className="pl-14 list-decimal">
              <li className="pb-4">
                <span className="font-semibold">Right to Access: </span>You may
                request access to the personal information we hold about you and
                inquire how it is used.
              </li>
              <li className="pb-4">
                <span className="font-semibold">
                  Right to Correct Information:{" "}
                </span>
                If any of the information we hold about you is inaccurate or
                incomplete, you have the right to request that we correct or
                update it.
              </li>
              <li className="pb-4">
                <span className="font-semibold">
                  Right to Delete Information:{" "}
                </span>
                You may request that we delete your personal information,
                subject to certain legal obligations that may require us to
                retain certain data (such as legal records related to your
                case).
              </li>
              <li className="pb-4">
                <span className="font-semibold">
                  Right to Opt-Out of Marketing Communications:{" "}
                </span>
                If you no longer wish to receive marketing emails or other
                communications from us, you can unsubscribe by following the
                instructions in the communication or contacting us directly.
              </li>
            </ol>{" "}
            <p className="text-lg text-stone-950 text-center md:text-left">
              To exercise these rights or if you have any concerns about how
              your information is being handled, please contact us at the
              contact information provided below.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Retention of Personal Information{" "}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy and to
              comply with our legal and professional obligations. After the
              retention period expires, we will securely delete or anonymize
              your personal information.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Our Policies for Children's Privacy
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Our services and website are not intended for individuals under
              the age of 13, and we do not knowingly collect personal
              information from children. If we find out that we’ve accidentally
              gathered info from someone under 13, we’ll delete it right away.
              If you think we might have info about a child under 13, please let
              us know by emailing us at info@melamedlawpllc.com; we’ll take care
              of it!
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              What about International Transfers?{" "}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              If you are located outside of the United States, please be aware
              that any personal information you provide to us may be transferred
              to and processed in the United States, where our servers and
              service providers are located. By using our website or engaging
              with our services, you consent to the transfer of your personal
              information to the United States.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Changes to This Privacy Policy{" "}
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              We may revise this Privacy Policy occasionally to align with
              updates to our practices or to meet legal obligations. When we
              make updates, we will post the revised policy on our website and
              update the "Effective Date" at the top of the page. We recommend
              checking this Privacy Policy regularly to stay updated on how we
              protect your personal information.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Contact Us
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, or if you wish to exercise your rights
              regarding your personal information, please contact us using the
              following contact details:
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left font-semibold">
              Melamed Law PLLC
            </p>
            <p className="font-semibold text-base text-stone-950 text-center md:text-left">
              Location{" "}
              <span className="font-normal text-blue-500 underline block">
                <Link href="https://maps.app.goo.gl/gPaF4mQkx4wGQjaK8">
                  3040 NE 190th St APT 303, Aventura, FL 33180, United States
                </Link>
              </span>{" "}
            </p>
            <p className="text-base font-semibold text-stone-950 text-center md:text-left">
              Contact{" "}
              <span
                className="text-blue-500 font-normal underline block"
                tel="tel:+9545290695"
              >
                <Link
                  href="tel:954-529-0695"
                  className="hover:underline duration-300 text-base"
                >
                  {`954-529-0695`}
                </Link>
              </span>{" "}
            </p>
            <p className="text-base text-stone-950 font-semibold text-center md:text-left">
              Email{" "}
              <span
                className="text-blue-500 underline block font-normal"
                mailto="mailto:info@melamedlawpllc.com"
              >
                <Link
                  href="mailto: info@melamedlawpllc.com"
                  className="hover:underline duration-300 text-base"
                >
                  info@melamedlawpllc.com
                </Link>
              </span>{" "}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              © 2025 Melamed Law, PLLC. All Rights Reserved.{" "}
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Consent
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              By using our website or engaging our legal services, you consent
              to the collection, use, and sharing of your personal information
              as described in this Privacy Policy.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default PrivacyPolicy;
