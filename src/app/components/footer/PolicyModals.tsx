import Modal from './Modal';
import React from 'react';

interface PolicyModalsProps {
  showAccessibilityModal: boolean;
  setShowAccessibilityModal: (open: boolean) => void;
  showPrivacyModal: boolean;
  setShowPrivacyModal: (open: boolean) => void;
  email: string;
  owner: string;
  phone: string;
}

const PolicyModals: React.FC<PolicyModalsProps> = ({
  showAccessibilityModal,
  setShowAccessibilityModal,
  showPrivacyModal,
  setShowPrivacyModal,
  email,
  owner,
  phone,
}) => (
  <>
    <Modal
      isOpen={showAccessibilityModal}
      onClose={() => setShowAccessibilityModal(false)}
      title="הצהרת נגישות"
    >
      <div
        style={{
          textAlign: 'right',
          direction: 'rtl',
          maxHeight: '60vh',
          overflowY: 'auto',
        }}
      >
        <p>הצהרת הנגישות עודכנה בתאריך 11/12/23</p>
        <p>
          אנו פועלים רבות על מנת להנגיש את
          הארגון ואת אתר האינטרנט שלנו לאנשים עם מוגבלות על מנת לקדם שוויון
          זכויות ושקיפות כלפי אנשים עם מוגבלות.
        </p>
        <p>
          <b>מהות אתר אינטרנט נגיש</b>
          <br />
          אתר אינטרנט נגיש, הינו אתר המאפשר לאדם עם מוגבלות, לגלוש באותה רמת
          יעילות והנאה כגולשים אחרים, תוך שימוש ביכולות המערכת עליה הוא פועל
          ובאמצעות טכנולוגיות מסייעות לנגישות .
        </p>
        <p>
          <b>ביצוע התאמות הנגישות באתר האינטרנט</b>
          <br />
          התאמות הנגישות באתר בוצעו בהתאם לסימן ג&apos;: שירותי האינטרנט בתקנות
          שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות) התשע&quot;ג 2013,
          לתקן הישראלי ת&quot;י 5568 המבוסס על הנחיותWCAG 2.0 , האתר הונגש לרמהAA
          ובכפוף לשינויים והתאמות שבוצעו במסמך התקן הישראלי.
        </p>
        <p>
          האתר תומך בשימוש בטכנולוגיות מסייעות כגון תוכנות הקראת מסך, בגלישה
          בעזרת מקלדת על ידי שימוש במקשי ה-Tab וה-Shift+Tab למעבר בין קישורים,
          מקשי החיצים, מקש ה-Enter לבחירה, מקש ה-Esc ליציאה מתפריטים וחלונות,
          לחיצה על H או על מספר למעבר בין כותרות.
        </p>
        <p>האתר נבדק כל מספר חודשים כדי להבטיח את תחזוקת נגישות האתר.</p>
        <p>
          <b>ישימות מיטבית לנגישות באתר האינטרנט</b>
          <br />
          באתר אינטרנט זה, ניתן לגלוש בצורה מיטבית ונגישה באמצעות הדפדפנים
          הנפוצים ומומלץ להשתמש בדפדפנים הבאים       Safari Chrom
        </p>
        <p>
          <b>שלבי ההנגשה בהם נמצא האתר</b>
          <br />
          נכון להיום אנו נמצאים בשלבי הנגשה סופיים, חסרות נכון להיום הן
          הכתוביות לסרטים המוצגים באתר. אנו מערכים שהנגשת האתר תושלם עד לתאריך
          ה15/12/24.
        </p>
        <p>
          <b>דרכי פניה לבקשות, תקלות נגישות והצעות לשיפור:</b>
          <br />
          במידה ומצאתם באתר האינטרנט בעיה בנושא הנגישות או שהנכם זקוקים עזרה,
          אתם מוזמנים לפנות אלינו:
          <br />
          {owner}
          <br />
          {phone}
          <br />
          {email}
        </p>
      </div>
    </Modal>
    <Modal
      isOpen={showPrivacyModal}
      onClose={() => setShowPrivacyModal(false)}
      title="Privacy Policy"
    >
      <div
        style={{
          textAlign: 'left',
          direction: 'ltr',
          maxHeight: '60vh',
          overflowY: 'auto',
        }}
      >
        <h3>What type of information do we collect?</h3>
        <p>
          We receive, collect and store any information you enter on our website or provide us in any other way. In addition, we collect the Internet protocol (IP) address used to connect your computer to the Internet; login; e-mail address; password; computer and connection information and purchase history. We may use software tools to measure and collect session information, including page response times, length of visits to certain pages, page interaction information, and methods used to browse away from the page. We also collect personally identifiable information (including name, email, password, communications); payment details (including credit card information), comments, feedback, product reviews, recommendations, and personal profile.
        </p>
        <h3>How do you collect information?</h3>
        <p>
          When you conduct a transaction on our website, as part of the process, we collect personal information you give us such as your name, address and email address. Your personal information will be used for the specific reasons stated above only.
        </p>
        <h3>Why do you collect such personal information?</h3>
        <p>We collect such Non-personal and Personal Information for the following purposes:</p>
        <ul>
          <li>To provide and operate the Services;</li>
          <li>To provide our Users with ongoing customer assistance and technical support;</li>
          <li>To be able to contact our Visitors and Users with general or personalized service-related notices and promotional messages;</li>
          <li>To create aggregated statistical data and other aggregated and/or inferred Non-personal Information, which we or our business partners may use to provide and improve our respective services;</li>
          <li>To comply with any applicable laws and regulations.</li>
        </ul>
        <h3>How do you store, use, share and disclose your site visitors&apos; personal information?</h3>
        <p>
          Our company is hosted on the Wix.com platform. Wix.com provides us with the online platform that allows us to sell our products and services to you. Your data may be stored through Wix.com&apos;s data storage, databases and the general Wix.com applications. They store your data on secure servers behind a firewall.
        </p>
        <p>
          All direct payment gateways offered by Wix.com and used by our company adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
        </p>
        <h3>How do you communicate with your site visitors?</h3>
        <p>
          We may contact you to notify you regarding your account, to troubleshoot problems with your account, to resolve a dispute, to collect fees or monies owed, to poll your opinions through surveys or questionnaires, to send updates about our company, or as otherwise necessary to contact you to enforce our User Agreement, applicable national laws, and any agreement we may have with you. For these purposes we may contact you via email, telephone, text messages, and postal mail.
        </p>
        <h3>How can your site visitors withdraw their consent?</h3>
        <p>
          If you don&apos;t want us to process your data anymore, please contact us at {email}
        </p>
        <h3>Privacy policy updates</h3>
        <p>
          We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
        </p>
        <h3>Questions and your contact information</h3>
        <p>
          If you would like to: access, correct, amend or delete any personal information we have about you, you are invited to contact us at {email}
        </p>
      </div>
    </Modal>
  </>
);

export default PolicyModals; 