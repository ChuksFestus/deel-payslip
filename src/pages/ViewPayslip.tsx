import { useState, useCallback, useRef } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonButton,
  isPlatform,
  useIonToast,
} from "@ionic/react";
import { useParams } from "react-router";
import { toPng } from "html-to-image";

import "./ViewPayslip.css";
import { Payslip, getPayslip } from "../data/messages";
import { currency } from "../utils";
import { Filesystem, Directory } from "@capacitor/filesystem";

function ViewPayslip() {
  const [payslip, setPayslip] = useState<Payslip>();
  const params = useParams<{ id: string }>();
  const ref = useRef<HTMLDivElement>(null);
  const [present] = useIonToast();

  useIonViewWillEnter(() => {
    const pyp = getPayslip(params.id);
    setPayslip(pyp);
  });

  const downloadSlip = useCallback(async () => {
    if (!ref.current) return;

    try {
      const dataUrl = await toPng(ref.current, { cacheBust: true });
      const filename = `${Date.now()}.png`;
      if (isPlatform("android") || isPlatform("ios")) {
        await Filesystem.writeFile({
          path: filename,
          data: dataUrl,
          directory: Directory.Documents,
        });
        await present({
          message: "Downloaded successfully",
          duration: 1500,
          position: "top",
          color: "success",
        });
      } else {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = filename;
        link.click();
      }
    } catch (error) {
      console.error(error);
      await present({
        header: "Download failed",
        message: error as string,
        duration: 1500,
        position: "top",
        color: "danger",
      });
    }
  }, [ref]);

  return (
    <IonPage id="payslip">
      <IonHeader translucent className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {payslip ? (
          <>
            <div ref={ref} style={{ background: "hsl(0, 0%, 100%)" }}>
              <h1 className="heading">
                {payslip.title}
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    display: "block",
                    paddingTop: ".5rem",
                    color: "hsl(0, 0%, 45%)",
                  }}
                >
                  From: {payslip.startDate} - To {payslip.endDate}
                </span>
              </h1>

              <p style={{ fontWeight: 500, fontSize: 18 }}>
                {payslip.employee.name}
              </p>
              <IonGrid>
                <IonRow>
                  <IonCol size="5" className="dist">
                    Designation
                  </IonCol>
                  <IonCol>{payslip.employee.designation}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="5" className="dist">
                    Organization
                  </IonCol>
                  <IonCol>{payslip.employer.name}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="5" className="dist">
                    Address
                  </IonCol>
                  <IonCol>{payslip.employer.address}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="5" className="dist">
                    employee ID
                  </IonCol>
                  <IonCol>{payslip.employee.employeeID}</IonCol>
                </IonRow>
              </IonGrid>
              <IonCard>
                <div className="cst-grid">
                  <h3>Earnings</h3>
                  <h3 className="text-right">Amount</h3>
                  <p>Basic</p>
                  <p className="text-right">
                    {currency(Number(payslip.earnings.basicSalary))}
                  </p>
                  <p>Overtime</p>
                  <p className="text-right">
                    {currency(Number(payslip.earnings.overtimePay))}
                  </p>
                  <p>Bonuses</p>
                  <p className="text-right">
                    {currency(Number(payslip.earnings.bonuses))}
                  </p>
                  <p>Allowances</p>
                  <p className="text-right">
                    {currency(Number(payslip.earnings.allowances))}
                  </p>
                  <p>Deductions</p>
                  <p className="text-right">
                    {currency(Number(payslip.deductions))}
                  </p>
                  <h3>Total</h3>
                  <h3 className="text-right">{currency(payslip.amount)}</h3>
                </div>
              </IonCard>
            </div>
            <IonButton onClick={downloadSlip} expand="full" shape="round">
              Download
            </IonButton>
          </>
        ) : (
          <div>Payslip not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPayslip;
