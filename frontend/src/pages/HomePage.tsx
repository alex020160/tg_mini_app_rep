import { Plus, Star } from "lucide-react";
import AppLayout from "../widgets/layout/AppLayout";
import PetCard from "../widgets/home/PetCard";
import UpcomingEvents from "../widgets/home/UpcomingEvents";
import MiniCalendar from "../widgets/home/MiniCalendar";
import "./home-page.css";
import plusIcon from "../shared/ui/icons/plus-icon.svg";

const mockEvents = [
  {
    id: 1,
    weekday: "пн",
    day: "2",
    title: "Покормить Басю",
    time: "11:00",
    subtitle: "Сегодня",
  },
  {
    id: 2,
    weekday: "вт",
    day: "3",
    title: "Покормить Басю",
    time: "11:00",
    subtitle: "Завтра",
  },
  {
    id: 3,
    weekday: "чт",
    day: "4",
    title: "Записаться на кружок по вышиванию...",
    time: "11:00",
    subtitle: "через 3 дня",
  },
];

export default function HomePage() {
  return (
    <AppLayout>
      <div className="P-Home">
        <header className="W-HomeHeader">
          <div className="A-HomeGreeting">Привет, пользователь</div>

          <button className="A-HeaderCircleButton" type="button">
            <Star size={20} fill="#F6D35B" color="#F6D35B" />
          </button>
        </header>

        <section className="W-HomeSection">
          <div className="W-SectionTitleRow">
            <h1 className="A-SectionTitle">Мои питомцы</h1>

            <button className="A-SectionAddButton" type="button">
              <img
                src={plusIcon}
                alt="Добавить"
                className="A-IconImage A-IconImage--md"
              />
            </button>
          </div>

          <PetCard
            name="Вася"
            ageText="3 года"
            weightText="4,2 кг"
            lastEventTitle="12 марта покупка корма"
            lastEventDate=""
            nextCheckDate="18 марта"
            imageUrl="/cat.jpg"
          />
        </section>

        <section className="W-HomeSection">
          <div className="W-SectionTitleRow">
            <h2 className="A-SectionTitle">Ближайшие события</h2>

            <button className="A-SectionAddButton" type="button">
              <Plus size={22} />
            </button>
          </div>

          <UpcomingEvents events={mockEvents} />
        </section>

        <section className="W-HomeSection">
          <MiniCalendar />
        </section>
      </div>
    </AppLayout>
  );
}
