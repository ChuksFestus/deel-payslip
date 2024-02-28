import { IonItem, IonLabel, IonNote } from "@ionic/react";
import { Payslip } from "../data/messages";
import "./PayslipListItem.css";
import { currency } from "../utils";

interface PayslipListItemProps {
  payslip: Payslip;
}

const PayslipListItem: React.FC<PayslipListItemProps> = ({ payslip }) => {
  return (
    <IonItem routerLink={`/payslip/${payslip.id}`} detail={false}>
      <IonLabel className="ion-text-wrap">
        <div className="wrap">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.5 7.5V10.525C27.5 12.5 26.25 13.75 24.275 13.75H20V5.0125C20 3.625 21.1375 2.5 22.525 2.5C23.8875 2.5125 25.1375 3.0625 26.0375 3.9625C26.9375 4.875 27.5 6.125 27.5 7.5Z"
              stroke="#06122D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 8.75V26.25C2.5 27.2875 3.675 27.875 4.5 27.25L6.6375 25.65C7.1375 25.275 7.8375 25.325 8.2875 25.775L10.3625 27.8625C10.85 28.35 11.65 28.35 12.1375 27.8625L14.2375 25.7625C14.675 25.325 15.375 25.275 15.8625 25.65L18 27.25C18.825 27.8625 20 27.275 20 26.25V5C20 3.625 21.125 2.5 22.5 2.5H8.75H7.5C3.75 2.5 2.5 4.7375 2.5 7.5V8.75Z"
              stroke="#06122D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M11.25 16.2625H15"
              stroke="#15803D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M11.25 11.2625H15"
              stroke="#15803D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M7.49451 16.25H7.50573"
              stroke="#15803D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M7.49435 11.25H7.50558"
              stroke="#15803D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div>
            <div className="title">
              <span>{payslip.title}</span>
              <span className="date">{currency(payslip.amount)}</span>
            </div>
            <IonNote>
              {payslip.startDate} - {payslip.endDate}
            </IonNote>
          </div>
        </div>
      </IonLabel>
    </IonItem>
  );
};

export default PayslipListItem;
