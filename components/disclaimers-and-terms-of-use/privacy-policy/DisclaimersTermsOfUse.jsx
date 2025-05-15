import SectionLayout from "@/components/shared/SectionLayout";
import Link from "next/link";
import React from "react";

const css = `
  h2{
    padding-top: 10px;
    font-size: 25px;
    padding-bottom: 10px;
  }
  h5{
    padding-top: 15px;
    font-size: 22px;
    padding-bottom: 15px;
    font-weight: bold;
  }
  p{
    padding-top: 6px;
    padding-bottom: 6px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;

  }
  li{
    margin-bottom: 5px;
  }
  br{
    padding-top: 6px;
    padding-bottom: 6px;
}

`;

const DisclaimersTermsOfUse = () => {
  return (
    <>
      <style>{css}</style>
      <SectionLayout>
        <div className="text-center md:text-left text-md md:text-xl">
          <h2
            className={`text-stone-950 !font-semibold text-3xl md:text-5xl mt-10 lg:mt-20 mb-10  text-center  uppercase`}
          >
            Disclaimer
          </h2>

          <div className="flex flex-col gap-0">
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              No Attorney-Client Relationship
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left pb-4">
              We provide the content on this website for informational purposes
              only and do not offer legal advice. Transmission or receipt of
              information from this site does not create an attorney-client
              relationship between you and Melamed Law PLLC. Please wait to send
              any confidential information until we have officially established
              an attorney-client relationship.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Attorney Advertising
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left pb-4">
              This website may be considered attorney advertising under the laws
              of certain jurisdictions. Prior results do not guarantee a similar
              outcome.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Jurisdictional Limitations
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left pb-4">
              Melamed Law PLLC practices law only in jurisdictions where it is
              properly authorized to do so. We do not seek to represent anyone
              in a jurisdiction where this website does not comply with
              applicable laws and bar rules.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              No Guarantees
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left pb-4">
              Any descriptions or testimonials on this site are not intended to
              guarantee or predict the outcome of any legal matter. Each case is
              different and we evaluate each case based on its unique
              circumstances.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Third-Party Links
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left pb-4">
              This website may contain links to third-party websites for
              convenience. Melamed Law PLLC does not endorse and is not
              responsible for the content of such external sites.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Limitation of Liability
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left pb-4">
              Melamed Law PLLC expressly disclaims all liability for actions
              taken or not taken based on any or all the contents of this site.
            </p>
            <p className="text-lg md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Intellectual Property
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left pb-4">
              All content on this website, including text, graphics, logos, and
              images, is the property of Melamed Law PLLC and is protected by
              applicable intellectual property laws. Unauthorized use is
              prohibited.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default DisclaimersTermsOfUse;
