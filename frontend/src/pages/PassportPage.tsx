import AppLayout from "../widgets/layout/AppLayout";
import PassportViewHeader from "../widgets/passport-view/PassportViewHeader";
import PassportSummaryCard from "../widgets/passport-view/PassportSummaryCard";
import MedicalInfoCard from "../widgets/passport-view/MedicalInfoCard";
import "./passport-page.css";

export default function PassportPage() {
  return (
    <AppLayout>
      <div className="P-PassportPage">
        <PassportViewHeader />

        <PassportSummaryCard
          name="Вася"
          ageText="3 года"
          weightText="4,2 кг"
          petType="Кошка"
          sex="Мальчик"
          breed="Метис"
          color="Тигровый"
          birthDate="17.07.2012"
          imageUrl="#"
        />

        <MedicalInfoCard
          weight="4,5 кг"
          neutered
          vaccinationDate="04.08.2020"
          parasiteTreatmentDate="08.02.2020"
          chronicDiseases="Нет"
          surgeries="Нет"
          microchip="Нет"
        />
      </div>
    </AppLayout>
  );
}
