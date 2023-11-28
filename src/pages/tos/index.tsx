import Header from "../../components/header";
import { Content, Space, Title } from "../../components/paragraph";
import XLink from "../../components/xlink";

const TermsOfService = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[700px] px-4 md:px-0 flex flex-col mt-44 mb-10">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <Title>1. Acceptance of Terms</Title>
          <Content>
            1.1. By accessing or using the CRED web platform ("CRED"), you agree
            to comply with and be bound by these Terms of Service ("TOS"). If
            you do not agree to these terms, please refrain from using CRED.
          </Content>
          <Title>2. Use of CRED</Title>
          <Content>
            2.1. CRED Points: CRED calculates and displays points based on your
            blockchain activity. The accuracy of these points is subject to the
            information provided by the blockchain, and we are not responsible
            for discrepancies or inaccuracies.
          </Content>
          <Space />
          <Content>
            2.2. Account Security: You are responsible for maintaining the
            confidentiality of your wallet information used to access CRED.
            Notify us immediately of any unauthorized access or use of your
            account.
          </Content>
          <Title>3. User Responsibilities</Title>
          <Content>
            3.1. Compliance: Users must comply with all applicable laws and
            regulations while using CRED.
          </Content>
          <Space />
          <Content>
            3.2. Prohibited Activities: Users may not engage in any activities
            that violate the law, infringe on the rights of others, or disrupt
            the functionality of CRED.
          </Content>
          <Title>4. Intellectual Property</Title>
          <Content>
            4.1. Trademarks and Copyrights: CRED and its logo are trademarks of
            eTown PTE. LTD.
          </Content>
          <Title>5. Disclaimers</Title>
          <Content>
            5.1. Use at Your Own Risk: Users acknowledge that the use of CRED is
            at their own risk. We provide no warranties regarding the accuracy,
            reliability, or availability of CRED.
          </Content>
          <Title>6. Limitation of Liability</Title>
          <Content>
            6.1. To the extent permitted by law, eTown PTE. LTD. shall not be
            liable for any direct, indirect, incidental, special, or
            consequential damages arising out of the use or inability to use
            CRED.
          </Content>
          <Title>7. Termination</Title>
          <Content>
            7.1. eTown PTE. LTD. reserves the right to terminate or suspend
            access to CRED at its discretion, without prior notice, for any
            reason.
          </Content>
          <Title>8. Changes to Terms</Title>
          <Content>
            8.1. We reserve the right to update these Terms of Service at any
            time. Users will be notified of material changes, and continued use
            of CRED constitutes acceptance of the updated terms.
          </Content>
          <Title>9. Governing Law</Title>
          <Content>
            9.1. These Terms of Service are governed by and construed in
            accordance with the laws of Singapore, without regard to its
            conflict of law principles.
          </Content>
          <Title>10. Contact Information</Title>
          <Content>
            10.1. For questions or concerns regarding these Terms of Service,
            please contact us at <XLink>@townesquarexyz</XLink> X account.
          </Content>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
