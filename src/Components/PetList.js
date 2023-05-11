export const PetList = ({ em, petData }) => {
  return (
    <aside className="pets-list">
      {petData.length ? petData.map((pet) => {
        return (<p key={pet}>{pet}</p>)
      }) : <p>No pets listed for this employee.</p>}
    </aside>
  );
};

export default PetList;
