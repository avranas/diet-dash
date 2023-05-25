console.log('Hello diet dash');

setInterval(() => {
  console.log("In interval")
  var aTags = document.getElementsByTagName('span');
  const matches = [];
  const restaurantList = {
    'Chick-fil-A': true,
    "McDonald's": true,
    'Taco Bell': true,
    "7th Street Burger": true,
    "Jollibee": true,
    "Shake Shack": true,
    "Five Guys Burgers & Fries": true,
    "Wendy's": true,
    "Dave's Hot Chicken": true,
    "Fuku": true,
    "Sticky's Finger Joint": true,
    "White Castle": true,
    "KFC": true,
    "Popeyes Louisiana Kitchen": true,
    "Oh K-Dog Hell's Kitchen": true,
    "Olde City Cheesesteaks & Brew": true,
    "Smashburger": true,
    "Burger King": true,
    "Arby's": true,
    "Bareburger": true,
    "TGI Fridays": true,
    "Dirty Burger": true,
    "The Burger Joint": true,
    "Burger Mania": true,
    "Blue Ribbon Fried Chicken": true,
    "Auntie Anne's": true,
    "Wingstop": true,
    "Applebee's Bar & Grill": true,
    "IHOP": true,
    "Bravo Pizza": true,
    "Dunkin'": true,
    "Crumbl Cookies": true,
    "Kripsy Kreme": true,
    "Domino's Pizza": true
  };

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent in restaurantList) {
      matches.push(aTags[i]);
      // console.log(aTags[i].textContent);
    }
  }
  // found.remove();

  // console.log('matches: ', matches);
  matches.forEach((i) => {
    const elementOfInterest =
      i.parentElement.parentElement.parentElement.parentElement.parentElement
        .parentElement;

    const link = document.createElement('a');
    const replacement = document.createElement('img');
    const randIntX = Math.floor(200 + Math.random() * 200);
    const randIntY = Math.floor(100 + Math.random() * 200);
    replacement.src = `http://placekitten.com/${randIntX}/${randIntY}`;
    replacement.setAttribute("id", "cat");
    link.setAttribute("href", "https://www.doordash.com/?filterQuery-cuisine=healthy");
    elementOfInterest.parentElement.appendChild(link);
    //<img id="motivation" width=60% src=${postUrl}>
    link.appendChild(replacement)
    elementOfInterest.replaceWith(link);
    // console.log(elementOfInterest);
  });
}, 1000)


// document.addEventListener('readystatechange', () => {
//   var aTags = document.getElementsByTagName('span');
//   const matches = [];

//   const restaurantList = {
//     'Chick-fil-A': true,
//     "McDonald's": true,
//     'Taco Bell': true,
//     "7th Street Burger": true,
//     "Jollibee": true,
//     "Shake Shack": true,
//     "Five Guys Burgers & Fries": true,
//     "Wendy's": true,
//     "Dave's Hot Chicken": true,
//     "Fuku": true,
//     "Sticky's Finger Joint": true,
//     "White Castle": true,
//     "KFC": true,
//     "Popeyes Louisiana Kitchen": true,
//     "Oh K-Dog Hell's Kitchen": true,
//     "Olde City Cheesesteaks & Brew": true,
//     "Smashburger": true,
//     "Burger King": true,
//     "Arby's": true,
//     "Bareburger": true,
//     "TGI Fridays": true,
//     "Dirty Burger": true,
//     "The Burger Joint": true,
//     "Burger Mania": true,
//     "Blue Ribbon Fried Chicken": true,
//     "Auntie Anne's": true,
//     "Wingstop": true,
//     "Applebee's Bar & Grill": true,
//     "IHOP": true,
//     "Bravo Pizza": true,
//     "Dunkin'": true,
//     "Crumbl Cookies": true,
//     "Kripsy Kreme": true,
//     "Domino's Pizza": true
//   };

//   for (var i = 0; i < aTags.length; i++) {
//     if (aTags[i].textContent in restaurantList) {
//       matches.push(aTags[i]);
//       console.log(aTags[i].textContent);
//     }
//   }
//   // found.remove();

//   console.log('matches: ', matches);
//   matches.forEach((i) => {
//     const elementOfInterest =
//       i.parentElement.parentElement.parentElement.parentElement.parentElement
//         .parentElement;

//     const replacement = document.createElement('img');
//     replacement.src = 'http://placekitten.com/300/170';

//     //<img id="motivation" width=60% src=${postUrl}>

//     elementOfInterest.replaceWith(replacement);
//     console.log(elementOfInterest);
//   });
// });
