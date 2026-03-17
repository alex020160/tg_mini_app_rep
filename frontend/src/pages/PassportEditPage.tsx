import { useState } from "react";

import AppLayout from "../widgets/layout/AppLayout";
import PassportEditHeader from "../widgets/passport-edit/PassportEditHeader";
import PhotoUploadCard from "../widgets/passport-edit/PhotoUploadCard";
import SectionTitle from "../widgets/passport-edit/SectionTitle";
import RadioCard from "../widgets/passport-edit/RadioCard";
import ToggleRow from "../widgets/passport-edit/ToggleRow";
import ProcedureGrid from "../widgets/passport-edit/ProcedureGrid";
import InputField from "../widgets/passport-edit/InputField";
import TextareaField from "../widgets/passport-edit/TextareaField";
import DateField from "../widgets/passport-edit/DateField";
import { usePassportStore } from "../shared/lib/passportStore";
import HealthFeaturesModal from "../widgets/passport-edit/HealthFeaturesModal";
import "./passport-edit-page.css";

export default function PassportEditPage() {
  const {
    name,
    breed,
    color,
    birthDate,
    petType,
    sex,

    isNeutered,
    isParasitesEnabled,
    isVaccinationEnabled,
    hasSurgeries,
    hasMicrochip,

    neuteredDate,
    neuteredComment,
    fleaDate,
    wormsDate,
    fleaMedicine,
    wormsMedicine,
    vaccinationDate,
    vaccinationName,
    vaccinationComment,
    surgeriesText,
    surgeriesDate,
    surgeriesComment,
    microchipNumber,
    microchipDate,
    healthFeatures,

    setField,
    setPetType,
    setSex,

    setIsNeutered,
    setIsParasitesEnabled,
    setIsVaccinationEnabled,
    setHasSurgeries,
    setHasMicrochip,
  } = usePassportStore();

  const hasHealthFeatures = healthFeatures.length > 0;

  const [showVaccinationError, setShowVaccinationError] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);

  function handleSave() {
    const vaccinationInvalid =
      isVaccinationEnabled &&
      (!vaccinationDate.trim() || !vaccinationName.trim());

    if (vaccinationInvalid) {
      setShowVaccinationError(true);
      setSaveSuccess(false);
      return;
    }

    setShowVaccinationError(false);
    setSaveSuccess(true);
  }

  return (
    <AppLayout>
      <div className="P-PassportEdit">
        <PassportEditHeader />
        <PhotoUploadCard />

        <div className="P-PassportEdit__group">
          <SectionTitle>Личная информация</SectionTitle>

          <InputField
            label="Имя"
            value={name}
            onChange={(value) => setField("name", value)}
            placeholder="Введите имя"
          />

          <RadioCard
            options={[{ label: "Кошка" }, { label: "Собака" }]}
            value={petType}
            onChange={(value) => setPetType(value as "Кошка" | "Собака")}
          />

          <RadioCard
            options={[{ label: "Девочка" }, { label: "Мальчик" }]}
            value={sex}
            onChange={(value) => setSex(value as "Девочка" | "Мальчик")}
          />

          <InputField
            label="Порода"
            value={breed}
            onChange={(value) => setField("breed", value)}
            placeholder="Введите породу"
          />

          <InputField
            label="Окрас"
            value={color}
            onChange={(value) => setField("color", value)}
            placeholder="Введите окрас"
          />

          <DateField
            label="Дата рождения"
            value={birthDate}
            onChange={(value) => setField("birthDate", value)}
          />
        </div>

        <div className="P-PassportEdit__group">
          <SectionTitle>Медицинская информация</SectionTitle>

          <ToggleRow
            title="Кастрация"
            active={isNeutered}
            clickable
            onClick={() => setIsNeutered(!isNeutered)}
          />

          {isNeutered && (
            <>
              <DateField
                label="Дата кастрации"
                value={neuteredDate}
                onChange={(value) => setField("neuteredDate", value)}
              />

              <TextareaField
                label="Комментарий"
                value={neuteredComment}
                onChange={(value) => setField("neuteredComment", value)}
                placeholder="если нужно уточнение"
              />
            </>
          )}

          <ToggleRow
            title="Обработки от паразитов"
            active={isParasitesEnabled}
            clickable
            onClick={() => setIsParasitesEnabled(!isParasitesEnabled)}
          />

          {isParasitesEnabled && (
            <>
              <DateField
                label="Дата последней обработки"
                value={fleaDate}
                onChange={(value) => setField("fleaDate", value)}
              />

              <DateField
                label="Дата последней обработки"
                value={wormsDate}
                onChange={(value) => setField("wormsDate", value)}
              />

              <InputField
                label="Препарат обработки от блох и клещей"
                value={fleaMedicine}
                onChange={(value) => setField("fleaMedicine", value)}
                placeholder="Введите препарат"
              />

              <InputField
                label="Препарат обработки от глистов"
                value={wormsMedicine}
                onChange={(value) => setField("wormsMedicine", value)}
                placeholder="Введите препарат"
              />
            </>
          )}

          <ToggleRow
            title="Вакцинация"
            active={isVaccinationEnabled}
            error={showVaccinationError}
            clickable
            onClick={() => {
              setIsVaccinationEnabled(!isVaccinationEnabled);
              if (showVaccinationError) {
                setShowVaccinationError(false);
              }
            }}
          />

          {showVaccinationError && (
            <div className="P-PassportEdit__errorText">
              кажется вы забыли заполнить обязательные поля вакцинации :(
            </div>
          )}

          {isVaccinationEnabled && (
            <>
              <DateField
                label="Дата вакцинации"
                value={vaccinationDate}
                onChange={(value) => setField("vaccinationDate", value)}
                error={showVaccinationError && !vaccinationDate.trim()}
              />

              <InputField
                label="Название вакцины"
                value={vaccinationName}
                onChange={(value) => setField("vaccinationName", value)}
                placeholder="Введите название"
                error={showVaccinationError && !vaccinationName.trim()}
              />

              <TextareaField
                label="Комментарий"
                value={vaccinationComment}
                onChange={(value) => setField("vaccinationComment", value)}
                placeholder="например, ревакцинация через 21 день"
              />
            </>
          )}

          <ToggleRow
            title="Особенности здоровья"
            active={hasHealthFeatures}
            clickable
            onClick={() => setIsHealthModalOpen(true)}
          />

          {hasHealthFeatures && (
            <div className="P-PassportEdit__selectedList">
              <div className="P-PassportEdit__selectedTitle">
                Выбранные особенности здоровья:
              </div>
              <div className="P-PassportEdit__selectedItems">
                {healthFeatures.join(", ")}
              </div>
            </div>
          )}

          <ToggleRow
            title="Были ли операции?"
            subtitle="Кроме стерилизации"
            active={hasSurgeries}
            clickable
            onClick={() => setHasSurgeries(!hasSurgeries)}
          />

          {hasSurgeries && (
            <>
              <TextareaField
                label="Какие были операции"
                value={surgeriesText}
                onChange={(value) => setField("surgeriesText", value)}
                placeholder="Опишите операции"
              />

              <DateField
                label="Дата операции"
                value={surgeriesDate}
                onChange={(value) => setField("surgeriesDate", value)}
              />

              <TextareaField
                label="Комментарий"
                value={surgeriesComment}
                onChange={(value) => setField("surgeriesComment", value)}
                placeholder="если есть детали восстановления"
              />
            </>
          )}

          <ToggleRow
            title="Есть ли микрочип?"
            active={hasMicrochip}
            clickable
            onClick={() => setHasMicrochip(!hasMicrochip)}
          />

          {hasMicrochip && (
            <>
              <InputField
                label="Номер микрочипа"
                value={microchipNumber}
                onChange={(value) => setField("microchipNumber", value)}
                placeholder="Введите номер"
              />

              <DateField
                label="Дата установки"
                value={microchipDate}
                onChange={(value) => setField("microchipDate", value)}
              />
            </>
          )}
        </div>

        <ProcedureGrid />

        <button
          type="button"
          className="A-PassportEditSaveButton"
          onClick={handleSave}
        >
          Сохранить
        </button>

        {saveSuccess && (
          <div className="P-PassportEdit__successText">
            Данные сохранены локально
          </div>
        )}
      </div>

      <HealthFeaturesModal
        isOpen={isHealthModalOpen}
        onClose={() => setIsHealthModalOpen(false)}
      />
    </AppLayout>
  );
}
