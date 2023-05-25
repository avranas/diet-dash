console.log('Hello diet dash');

setInterval(() => {
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
    "Domino's Pizza": true,
    "Fuku": true,
    "Mister Dips": true,
    "Lucky's Famous Burgers": true,
    "Two Hands Corn Dogs": true,
    "MrBeast Burger": true,
    "CRAFT Burger": true,
    "Dirty Burger": true,
    "The Burger Joint": true,
    "Burgermania": true,
    "Blue Ribbon Fried Chicken": true,
    "koji chicken inc": true,
    "Kings of Kobe": true,
    "Sweet Chick": true,
    "S'MAC": true,
    "Turntable Chicken Jazz": true,
    "Meat and Bread": true,
    "Burger & Lobster": true,
    "East Village Pizza": true,
    "New York Burger Co.": true,
    "The Horny Ram": true,
    "Black Iron Burger": true,
    "bb.q chicken": true,
    "7 brothers famous deli": true,
    "Surreal Creamery": true,
    "Philly Cheesesteak Company": true,
    "Papaya Dog": true,
    "Smash Shack": true,
    "Ray's Candy Store": true,
    "The Happiest Hour": true,
    "Marinara Pizza": true,
    "Late Night Diner": true,
    "Chicken and the Egg": true,
    "Melt Shop": true,
    "Los Tacos Hermanos": true,
    "Bronson's Burgers": true,
    "La Pizza East Village NY": true,
    "Shane's Rib Shack": true,
    "Marta": true,
    "Pardon My Cheesesteak": true,
    "Westway Diner": true,
    "Frankies Dogs On The Go": true,
    "Pommes Frites": true,
    "Jacob's Pickes": true,
    "The Smith": true,
    "Holy Cow Burgers": true,
    "Jackson Hole": true,
    "Crumbl Cookies": true,
    "Black Tap Craft Burgers & Beer": true,
    "Baked By Luigi": true,
    "Wings Wings Wings": true,
    "Free Bird": true,
    "Au Cheval": true,
    "Jackass Burrito": true,
    "Potbelly Sandwich Shop": true,
    "Jose's Burrito Bar": true,
    "Burgerology": true,
    "Salt Bae Burger": true,
    "Jerrell's Betr Brgr": true,
    "Hall": true,
    "Emmy Squared": true,
    "Just Wing It": true,
    "Crif Dogs": true,
    "Insomnia Cookies": true,
    "NYC Grilled Cheese": true,
    "Waverly Diner": true,
    "Super Smack Burger": true,
    "The Burgary": true,
    "Paul's Da Burger Joint": true,
    "Brooklyn beef n cheese": true,
    "Mealz": true,
    "Black Burger": true,
    "Hot Dog Parade": true,
    "Harlem Burger Co.": true,
    "Tots Breakfast Burritos": true,
    "Bill's Burger & Bar": true,
    "Mother Nature Burger & Bowls": true,
    "Bosscat Wings": true,
    "Milk Burger LES": true,
    "Thick Chick": true,
    "Jimbos Hamburger Palace": true,
    "Fatties Philly Cheesesteaks": true,
    "Cafe 82": true,
    "Holy Grail Steak Co.": true,
    "Pim Pam Burgers": true,
    "The Corner Lounge": true,
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
    const randIntX = Math.floor(300 + Math.random() * 20);
    const randIntY = Math.floor(200);
    replacement.src = `http://placekitten.com/${randIntX}/${randIntY}`;
    link.setAttribute("id", "cat");
    replacement.setAttribute("alt", "test");
    link.setAttribute("href", "https://www.doordash.com/?filterQuery-cuisine=healthy");
    elementOfInterest.parentElement.appendChild(link);
    //<img id="motivation" width=60% src=${postUrl}>
    link.appendChild(replacement)
    elementOfInterest.replaceWith(link);
    // console.log(elementOfInterest);
  });
}, 1000)
