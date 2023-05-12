import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react"; /*because there is a button useState is needed */

export default function Employee({ ele }) {
  const [showPet, setShowPet] =
    useState(
      false
    ); /*Create a useState to show Pets when the button is clicked*/

  // console.log(ele);
  return (
    <article className="employee">
      <main>
        <h3>
          {ele.prefix} {ele.firstName} {ele.lastName}
          {ele.postfix ? `, ${ele.postfix}` : ""}
        </h3>

        <h4>{ele.title}</h4>
        <button
          onClick={() => {
            setShowPet(!showPet);
          }}
        >
          Show Pets
        </button>
        {/*add an event listener to the button. 
        use the helper function to change the state  
        add a bang operator in front of the state so that the opposite will occur whenever the button is clicked*/}
        <div>{showPet && <PetList employee={ele} />}</div>
        {/* if the state is true, then i want to execute the following code (Call the PetList function aka PetList Component) */}
      </main>
    </article>
  );
}
