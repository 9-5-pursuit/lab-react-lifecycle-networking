import { useEffect, useState } from "react";
export const PetList = ({ data }) => {

  const [pets, setPets] = useState(null)
  useEffect(() => {
    getPets(data)
  })
  async function getPets(args) {

    fetch('https://backend-vet-api.onrender.com/api/pets').then(item => item.json())
    .then(item => setPets(item.filter(item => item.employeeId === args.id).map(item => {
      return item.name
    }).join(',') || 'No pets listed'))

  }
  return (
    <aside className="pets-list">
      {pets &&
        <p>{pets}</p>
      }
    </aside>
  );
};

export default PetList;
