export const PetList = ({ petArray }) => {
  console.log(petArray);
  let pets = petArray.map((pet) => pet.name).join(", ");
  return (
    <aside className="pets-list">
      {petArray.length > 0 ? (
        <p>{pets}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
