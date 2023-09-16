import React from 'react'

const Lists = ({ info }) => {
  console.log(info);
  return (
    <ul>
      {Iterates(info)}
    </ul>
  )
}

export default Lists;

function Iterates(data) {
  if (!data) return null; // Return null if data is falsy (undefined or null)

  return (
    <>
      {data.map((person, index) => (
        <React.Fragment key={index}>
          {/* {Old(person.birthday)}    */}
          <li key={index}>
            <div className='flex'>
              {/* <img src={`http://localhost:3001${person.image}`} alt='images' /> */}
              <div className="image-container">
                <img src={`http://localhost:3001${person.image}`} alt="images" />

              </div>

              <div className='name'>
                <h5 className='title'>{person.name}</h5>
                {/* <h5 className='age'>{person.birthday}</h5> */}
                <h5 className='age'> {Old(person.birthday)} Years - ({person.birthday})</h5>
              </div>
            </div>
          </li>
        </React.Fragment>
      ))}
    </>

  )
}



// how the person old is

function Old(personAge) {
  let year = new Date(personAge).getFullYear();

  let currentYear=new Date().getFullYear();

  // console.log(currentYear);

  let age=currentYear-year;
  // console.log(age);
  return age;
}