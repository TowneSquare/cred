import Header from "../../components/header";
import XLink from "../../components/xlink";

const TermsOfService = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[700px] px-4 md:px-0 flex flex-col mt-44 mb-10">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-sm mt-8 font-[inter]">
            <span className="text-xl">1. Acceptance of Terms</span>
            <br />
            <br />
            1.1. By accessing or using the CRED web platform ("CRED"), you agree
            to comply with and be bound by these Terms of Service ("TOS"). If
            you do not agree to these terms, please refrain from using CRED.
            <br />
            <br />
            <span className="text-xl">2. Use of CRED</span>
            <br />
            <br />
            2.1. CRED Points: CRED calculates and displays points based on your
            blockchain activity. The accuracy of these points is subject to the
            information provided by the blockchain, and we are not responsible
            for discrepancies or inaccuracies.
            <br />
            <br />
            2.2. Account Security: You are responsible for maintaining the
            confidentiality of your wallet information used to access CRED.
            Notify us immediately of any unauthorized access or use of your
            account.
            <br />
            <br />
            <span className="text-xl">3. User Responsibilities</span>
            <br />
            <br />
            3.1. Compliance: Users must comply with all applicable laws and
            regulations while using CRED.
            <br />
            <br />
            3.2. Prohibited Activities: Users may not engage in any activities
            that violate the law, infringe on the rights of others, or disrupt
            the functionality of CRED.
            <br />
            <br />
            <span className="text-xl">4. Intellectual Property</span>
            <br />
            <br />
            4.1. Trademarks and Copyrights: CRED and its logo are trademarks of
            eTown PTE. LTD.
            <br />
            <br />
            <span className="text-xl">5. Disclaimers</span>
            <br />
            <br />
            5.1. Use at Your Own Risk: Users acknowledge that the use of CRED is
            at their own risk. We provide no warranties regarding the accuracy,
            reliability, or availability of CRED.
            <br />
            <br />
            <span className="text-xl">6. Limitation of Liability</span>
            <br />
            <br />
            6.1. To the extent permitted by law, eTown PTE. LTD. shall not be
            liable for any direct, indirect, incidental, special, or
            consequential damages arising out of the use or inability to use
            CRED.
            <br />
            <br />
            <span className="text-xl">7. Termination</span>
            <br />
            <br />
            7.1. eTown PTE. LTD. reserves the right to terminate or suspend
            access to CRED at its discretion, without prior notice, for any
            reason.
            <br />
            <br />
            <span className="text-xl">8. Changes to Terms</span>
            <br />
            <br />
            8.1. We reserve the right to update these Terms of Service at any
            time. Users will be notified of material changes, and continued use
            of CRED constitutes acceptance of the updated terms.
            <br />
            <br />
            <span className="text-xl">9. Governing Law</span>
            <br />
            <br />
            9.1. These Terms of Service are governed by and construed in
            accordance with the laws of Singapore, without regard to its
            conflict of law principles.
            <br />
            <br />
            <span className="text-xl">10. Contact Information</span>
            <br />
            <br />
            10.1. For questions or concerns regarding these Terms of Service,
            please contact us at <XLink>@townesquarexyz</XLink> X  account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
