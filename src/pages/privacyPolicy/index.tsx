import Header from "../../components/header";
import XLink from "../../components/xlink";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[700px] px-4 md:px-0 flex flex-col mt-20 mb-10">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm mt-8 font-[inter]">
            <span className="text-xl">1. Introduction</span>
            <br />
            <br />
            Welcome to CRED, a web platform developed by eTown PTE. LTD. This
            Privacy Policy outlines how we collect, use, disclose, and protect
            your information when you use our website and services. By accessing
            or using CRED, you agree to the terms of this Privacy Policy.
            <br />
            <br />
            <span className="text-xl">2. Information We Collect</span>
            <br />
            <br />
            2.1. Wallet Information: When you sign in to CRED, you use your
            wallet to access the platform. We collect and store information
            associated with your wallet, including wallet address and related
            metadata.
            <br />
            <br />
            2.2. CRED Points Calculation Data: CRED points are calculated based
            on your activity on the blockchain. We collect and process
            transaction and history data from blockchains to determine your CRED
            points. This information may include transaction amounts,
            timestamps, and blockchain addresses.
            <br />
            <br />
            2.3. Open-Source Data: All data collected is sourced from
            open-source environments on the blockchain. We do not access private
            or sensitive information outside of the publicly available
            blockchain data.
            <br />
            <br />
            <span className="text-xl">3. Use of Information</span>
            <br />
            <br />
            3.1. CRED Points Calculation: We use the collected data to calculate
            and display your CRED points on the platform, providing you with
            insights into your blockchain activity.
            <br />
            <br />
            3.2. Service Improvement: The information collected is used to
            improve and enhance the functionality of CRED, ensuring a seamless
            and personalized user experience.
            <br />
            <br />
            3.3. Security: We employ industry-standard security measures to
            protect your information and ensure the integrity of our platform.
            <br />
            <br />
            <span className="text-xl">4. Information Sharing</span>
            <br />
            <br />
            4.1. Third-Party Service Providers: We may engage third-party
            service providers to assist with data processing, storage, or
            analysis. These providers are bound by confidentiality agreements
            and only access information as necessary to perform their services.
            <br />
            <br />
            4.2. Legal Compliance: We may disclose information when required by
            law or in response to a valid legal request.
            <br />
            <br />
            <span className="text-xl">5. Data Retention</span>
            <br />
            <br />
            We retain your information for as long as necessary to provide our
            services and fulfill the purposes outlined in this Privacy Policy.
            If you wish to delete your account and associated data, please
            contact us at <XLink>@townesquarexyz</XLink> X account.
            <br />
            <br />
            <span className="text-xl">6. Your Choices</span>
            <br />
            <br />
            You have the right to delete your personal information. If you have
            questions or concerns about your privacy, please contact us at
            <XLink>@townesquarexyz</XLink> X account.
            <br />
            <br />
            <span className="text-xl">7. Changes to the Privacy Policy</span>
            <br />
            <br />
            We may update this Privacy Policy to reflect changes in our
            practices. We will notify you of any material changes by posting the
            updated policy on the CRED website.
            <br />
            <br />
            <span className="text-xl">8. Contact Information</span>
            <br />
            <br />
            If you have questions or concerns about this Privacy Policy, please
            contact us at <XLink>@townesquarexyz</XLink> X account.
            <br />
            <br />
            By using CRED, you acknowledge that you have read and agree to this
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
