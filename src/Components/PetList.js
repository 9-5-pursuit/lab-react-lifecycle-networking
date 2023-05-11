import { useEffect, useState } from "react";
export const PetList = ({ data }) => {

  const [pets, setPets] = useState([])
  useEffect(() => {
    getPets(data)
  }, [])
  async function getPets(args) {

    fetch('https://vet-api-1.onrender.com/api/pets').then(item => item.json())
      .then(item => setPets(item.filter(item => item.employeeId === args.id).map(item => {
        return item.name
      }).join(',') || 'No pets listed'))

  }
  return (
    <aside className="pets-list">
      <p>{pets}</p>
    </aside>
  );
};

export default PetList;
