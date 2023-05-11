import PetList from "./PetList";
import { useState } from 'react';
import "./Employee.css";

export const Employee = ({ data }) => {

  const [showList, setShowList] = useState(null)
  return (
    data.map((item, i) => {

      return <article className="employee" key={item.id}>
        <h3>{item.prefix ?? ''} {item.firstName} {item.lastName}{item.postfix ? ', ' + item.postfix : ''}</h3>
        <h4>{item.title}</h4>
        <button onClick={() => setShowList(i)}>Show Pets</button>
        {showList === i && <PetList data={item}/>}
      </article>
    })

  );
};

export default Employee;
