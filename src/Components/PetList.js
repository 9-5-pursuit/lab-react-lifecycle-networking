import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const PetList = ({ employeeID }) => {
  const [petArray, setPetArray] = useState([]);

  async function fetchPetData(){
    try{
      const result = await axios.get(`https://vet-api-1.onrender.com/api/pets?employeeId=${employeeID}`);
      
      let array = result.data.map((item) => item.name);
      setPetArray(array);
    }
    catch(e){
      console.log(e)
    }
  }


  useEffect(() => {
    fetchPetData();
  }, [])


  return (
    <aside className="pets-list">
      {
        petArray.length === 0 ? (
          <p>No pets listed for this employee</p>
        ) : (
          <p>{petArray.join(", ")}</p>
        )
      }
    </aside>
  );
};

export default PetList;
