import PayslipListItem from "../components/PayslipListItem";
import { useState } from "react";
import { Payslip, getPayslips } from "../data/messages";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [payslips, setPayslips] = useState<Payslip[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getPayslips();
    setPayslips(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="ion-on-padding">Payslips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Payslips</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {payslips.map((payslip) => (
            <PayslipListItem key={payslip.id} payslip={payslip} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
