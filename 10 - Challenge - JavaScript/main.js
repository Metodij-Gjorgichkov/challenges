//FIRST SOLUTION WITHOUT TABLE

// const ime = prompt("Enter a name");

// function findingTheVoterAndAddingTheNameToTheDom(name) {
//   const array = [
//     ["Antonio", true, 5],
//     ["Marija", false],
//     ["Darko", true, 3],
//   ];
//   let p = document.createElement("p");
//   let foundName = false;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i][0] === name) {
//       const voted = array[i][1];
//       const grade = array[i][2];
//       const status = voted === true ? "Voted" : "Didn't vote";
//       p.innerText = `${name} ${status} ${voted ? grade : ""}`;
//       foundName = true;
//       break;
//     }
//   }
//   if (!foundName) {
//     p.innerText = `You entered a name that didn't vote`;
//   }
//   document.body.appendChild(p);
// }
// findingTheVoterAndAddingTheNameToTheDom(ime);

// SECOND SOLUTION WITHOUT TABLE

// function addingTheNameToTheDom(word) {
//   const array = [
//     ["Antonio", true, 5],
//     ["Marija", false],
//     ["Darko", true, 3],
//   ];

//   const p = document.createElement("p");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i][0] === word) {
//       const voted = array[i][1];
//       const grade = array[i][2];
//       const status = voted === true ? "Voted" : "Didnt vote";

//       p.innerText = `${word} ${status} ${voted ? grade : ""}`;
//       break;
//     } else {
//       p.innerText = "You entered a name that didnt vote";
//     }
//   }
//   document.body.appendChild(p);
// }
// const ime = prompt("Enter name");
// addingTheNameToTheDom(ime);

// SOLUTION WITH ADDED TABLE

function findingTheVoterAndAddingTheNameToTheDom(name) {
  const array = [
    ["Antonio", true, 5],
    ["Marija", false],
    ["Darko", true, 3],
  ];

  let foundName = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === name) {
      const voted = array[i][1];
      const grade = array[i][2];
      const status = voted === true ? "Voted" : "Didn't vote";

      let tableHtml = `<table><tr><td>${name}</td><td>${status}</td>`;
      if (voted) {
        tableHtml += `<td>${grade}</td>`;
      }
      tableHtml += `</tr></table>`;

      document.body.innerHTML += tableHtml;

      foundName = true;
      break;
    }
  }
  if (!foundName) {
    document.body.innerHTML += `<p>You entered a name that didn't vote</p>`;
  }
}

const ime = prompt("Enter a name");
findingTheVoterAndAddingTheNameToTheDom(ime);
