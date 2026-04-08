import type { Pet } from "@/shared/types/dashboard";

type Props = {
  pet: Pet;
};

export default function PetCard({ pet }: Props) {
  return (
    <div className="pet-card">
      <div>{pet.name}</div>
      <div>{pet.species}</div>
      {pet.breed && <div>{pet.breed}</div>}
    </div>
  );
}
