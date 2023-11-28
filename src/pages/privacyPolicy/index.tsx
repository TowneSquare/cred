import Header from "../../components/header";
import { Content, Space, Title } from "../../components/paragraph";
import XLink from "../../components/xlink";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[700px] px-4 md:px-0 flex flex-col mt-44 mb-10">
          <h1 className="text-[28px] md:text-[32px] font-bold">
            Privacy Policy
          </h1>
          <Title>1. Introduction</Title>
          <Content>
            Welcome to CRED, a web platform developed by eTown PTE. LTD. This
            Privacy Policy outlines how we collect, use, disclose, and protect
            your information when you use our website and services. By accessing
            or using CRED, you agree to the terms of this Privacy Policy.
          </Content>
          <Title>2. Information We Collect</Title>
          <Content>
            2.1. Wallet Information: When you sign in to CRED, you use your
            wallet to access the platform. We collect and store information
            associated with your wallet, including wallet address and related
            metadata.
            <Space />
            2.2. CRED Points Calculation Data: CRED points are calculated based
            on your activity on the blockchain. We collect and process
            transaction and history data from blockchains to determine your CRED
            points. This information may include transaction amounts,
            timestamps, and blockchain addresses.
            <Space />
            2.3. Open-Source Data: All data collected is sourced from
            open-source environments on the blockchain. We do not access private
            or sensitive information outside of the publicly available
            blockchain data.
          </Content>
          <Title>3. Use of Information</Title>
          <Content>
            3.1. CRED Points Calculation: We use the collected data to calculate
            and display your CRED points on the platform, providing you with
            insights into your blockchain activity.
          </Content>
          <Space />
          <Content>
            3.2. Service Improvement: The information collected is used to
            improve and enhance the functionality of CRED, ensuring a seamless
            and personalized user experience.
          </Content>
          <Space />
          <Content>
            3.3. Security: We employ industry-standard security measures to
            protect your information and ensure the integrity of our platform.
          </Content>
          <Title>4. Information Sharing</Title>
          <Content>
            4.1. Third-Party Service Providers: We may engage third-party
            service providers to assist with data processing, storage, or
            analysis. These providers are bound by confidentiality agreements
            and only access information as necessary to perform their services.
          </Content>
          <Space />
          <Content>
            4.2. Legal Compliance: We may disclose information when required by
            law or in response to a valid legal request.
          </Content>
          <Title>5. Data Retention</Title>
          <Content>
            We retain your information for as long as necessary to provide our
            services and fulfill the purposes outlined in this Privacy Policy.
            If you wish to delete your account and associated data, please
            contact us at <XLink>@townesquarexyz</XLink> X account.
          </Content>
          <Title>6. Your Choices</Title>
          <Content>
            You have the right to delete your personal information. If you have
            questions or concerns about your privacy, please contact us at
            <XLink>@townesquarexyz</XLink> X account.
          </Content>
          <Title>7. Changes to the Privacy Policy</Title>
          <Content>
            We may update this Privacy Policy to reflect changes in our
            practices. We will notify you of any material changes by posting the
            updated policy on the CRED website.
          </Content>
          <Title>8. Contact Information</Title>
          <Content>
            If you have questions or concerns about this Privacy Policy, please
            contact us at <XLink>@townesquarexyz</XLink> X account.
          </Content>
          <Space />
          <Content>
            By using CRED, you acknowledge that you have read and agree to this
            Privacy Policy.
          </Content>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
