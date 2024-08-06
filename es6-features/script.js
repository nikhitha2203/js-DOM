//Task-1 :Given the previous object data, use the object destructuring to be able to print student first and last name, favourite football club, as well as the city and the country this student is coming from (OBJECT DESTRUCTURING)

const data = {
    name: {
      firstName: 'ana',
      lastName: 'marino',
    },
    isStudent: true,
    favoriteFootballTeam: 'fc barcelona',
    hometown: {
      city: 'buenos aires',
      country: 'argentina',
    },
  };

  let {name:{firstName,lastName},isStudent,favoriteFootballTeam,hometown:{city,country}} = data;
  console.log(firstName);
  console.log(lastName)
  console.log(favoriteFootballTeam)
  console.log(city)
  console.log(country)

  //Task-2: 