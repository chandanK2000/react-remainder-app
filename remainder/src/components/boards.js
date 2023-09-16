import React, { useEffect, useState } from 'react'
import "./board.css";
import Lists from './Lists';
const Boards = () => {

/*   const Info = [
    {
      name: "John Doe",
      birthday: "1990-09-16",
      image: "boy1.jpg"
    },
    {
      name: "chandan Doe",
      birthday: "1990-09-16",
      image: "boy2.jpg"
    },
    {
      name: "Jane Smith",
      birthday: "1985-09-25",
      image: "boy3.jpg"
    },
    {
      name: "Bob Johnson",
      birthday: "1975-11-10",
      image: "girl1.jpg"
    },
     {
      name: "Bob Johnson",
      birthday: "1970-11-10",
      image: "girl2.jpg"
    }
  ]; */
  // console.log(Today( Info ));

  const [Info,setinfo]=useState([]);

  const getinfo = () => {
    fetch("http://localhost:3001/api/birthdays")
      .then(response => response.json())
      .then(dataarray => {
        setinfo(dataarray);
        console.log(dataarray);
      })
      .catch(error => console.error('Error fetching data:', error));
  }


  useEffect(() => {
    getinfo();
  }, []);


  return (
    <main id='site-main'>

      <h2 className='text-dark title'>Birthday Remainder App</h2>
      <div className='board'>
        {/* <Lists info={Info}></Lists> */}
        <Lists info={Today(Info)}></Lists>
        <h2 className='upcoming text-dark'>Upcoming</h2>
        <Lists info={UpcomingBirthday(Info)}></Lists>
        

      </div>

    </main>
  )
}

export default Boards;

// console.log("hello"+UpcomingBirthday);
function Today(person) {
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1; // Add 1 for 1-based month

  let filter = person.filter(data => {
    let [, birthdayMonth, birthdayDay] = data.birthday.split('-').map(Number);

    return currentDay === birthdayDay && currentMonth === birthdayMonth;
  })

  return filter;
}



//for the upcoming birthdya

function UpcomingBirthday(person) {
  let currentDate = new Date();
  let twoMonthsFromNow = new Date(currentDate);
  twoMonthsFromNow.setMonth(currentDate.getMonth() + 2);

  let upcomingBirthdays = person.filter(data => {
    let [, birthdayMonth, birthdayDay] = data.birthday.split('-').map(Number);

    let birthdayDate = new Date(currentDate.getFullYear(), birthdayMonth - 1, birthdayDay);
    return birthdayDate > currentDate && birthdayDate <= twoMonthsFromNow;
  });

  return upcomingBirthdays;
}



