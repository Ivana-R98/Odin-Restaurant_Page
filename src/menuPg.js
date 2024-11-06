import menuImg from "./menupic.jpg";

export function openMenuPage() {
    document.body.style.backgroundImage = `url(${menuImg})`;
    const content = document.getElementById("content");
    //Menu  
    const h1 = document.createElement("h1");
    h1.innerText = " Menu ";
    content.appendChild(h1);
    const menuDiv = document.createElement("div"); 
    const mainDishGroup = document.createElement("div"); 
    const sideGroup = document.createElement("div"); 
    menuDiv.id = "menuDiv";
    mainDishGroup.id = "mainDishes";
    sideGroup.id = "sides";
    content.appendChild(menuDiv);
    menuDiv.append(mainDishGroup, sideGroup);
    const soupD = document.createElement("div");    
    const pastaD = document.createElement("div");  
    const seafishD = document.createElement("div"); 
    const seafoodD = document.createElement("div"); 
    const saladsD = document.createElement("div"); 
    const dessD = document.createElement("div");    
    const drinksD = document.createElement("div"); 
    mainDishGroup.append(soupD, pastaD, seafishD, seafoodD);
    sideGroup.append(saladsD, dessD, drinksD);
    //soup
    // const soups = ["Fish Soup.....10", "Vegetable Soup.....5", "White Soup.....5"]
    const sh3 = document.createElement("h3");
    const sul = document.createElement("ul");
    const sLi1 = document.createElement("li");
    const sLi2 = document.createElement("li");
    const sLi3 = document.createElement("li");
    sh3.innerText = "Soups";
    sLi1.innerText = "Fish Soup 10";
    sLi2.innerText = "Vegetable Soup 5";
    sLi3.innerText = "White Soup 5"
    soupD.append(sh3, sul);
    sul.append(sLi1, sLi2, sLi3);
    //pasta
    const ph3 = document.createElement("h3");
    const pul = document.createElement("ul");
    const pLi1 = document.createElement("li");
    const pLi2 = document.createElement("li");
    const pLi3 = document.createElement("li");
    ph3.innerText = "Pasta";
    pLi1.innerText = "Bolognese  6";
    pLi2.innerText = "Carbonara  5";
    pLi3.innerText = "Macaroni & cheese 4";
    pastaD.append(ph3, pul);
    pul.append(pLi1, pLi2, pLi3);
    //seafish
    const fishh3 = document.createElement("h3");
    const fishul = document.createElement("ul");
    const fishLi1 = document.createElement("li");
    const fishLi2 = document.createElement("li");
    const fishLi3 = document.createElement("li");
    const fishLi4 = document.createElement("li");
    fishh3.innerText = "Grilled Fish"; 
    fishLi1.innerText = "SeaBass Grill 5";
    fishLi2.innerText = "King Fish Grill 5";
    fishLi3.innerText = "Seasonal 8";
    fishLi4.innerText = "Surprise Me! 15";
    seafishD.append(fishh3, fishul);
    fishul.append(fishLi1, fishLi2, fishLi3, fishLi4);
    //seafood
    const sfoodh3 = document.createElement("h3");
    const sfoodul = document.createElement("ul");
    const sfoodLi1 = document.createElement("li");
    const sfoodLi2 = document.createElement("li");
    const sfoodLi3 = document.createElement("li");
    const sfoodLi4 = document.createElement("li");
    sfoodh3.innerText = "SeaFood"
    sfoodLi1.innerText = "Prawn Cocktail 7";
    sfoodLi2.innerText = "Salt & Pepper Squid 6";
    sfoodLi3.innerText = "Bradan Orach 7";
    sfoodLi4.innerText = "Oyster 4";
    seafoodD.append(sfoodh3, sfoodul);
    sfoodul.append(sfoodLi1, sfoodLi2, sfoodLi3, sfoodLi4)
    //salads
    const salh3 = document.createElement("h3");
    const salul = document.createElement("ul");
    const salLi1 = document.createElement("li");
    const salLi2 = document.createElement("li");
    const salLi3 = document.createElement("li");
    const salLi4 = document.createElement("li");
    salh3.innerText = "Salads"
    salLi1.innerText = "Mixed Salad 3";
    salLi2.innerText = "House Salad 2";
    salLi3.innerText = "Caesar Salad 4";
    salLi4.innerText = "Aisan Sesame Chicken Salad 6";
    saladsD.append(salh3, salul);
    salul.append(salLi1, salLi2, salLi3, salLi4);
    //desserts
    const dessh3 = document.createElement("h3");
    const dessul = document.createElement("ul");
    const dessLi1 = document.createElement("li");
    const dessLi2 = document.createElement("li");
    const dessLi3 = document.createElement("li");
    const dessLi4 = document.createElement("li");
    dessh3.innerText = "Desserts"
    dessLi1.innerText = "Tiramisu 4";
    dessLi2.innerText = "Cheesecake 3";
    dessLi3.innerText = "Ice Cream 3";
    dessLi4.innerText = "Special Pancake 5";
    dessD.append(dessh3, dessul);
    dessul.append(dessLi1, dessLi2, dessLi3, dessLi4);
    //drinks
    const drinksh3 = document.createElement("h3");
    const drinksul = document.createElement("ul");
    const drinksLi1 = document.createElement("li");
    const drinksLi2 = document.createElement("li");
    const drinksLi3 = document.createElement("li");
    const drinksLi4 = document.createElement("li");
    const drinksLi5 = document.createElement("li");
    drinksh3.innerText = "Drinks"
    drinksLi1.innerText = "Coca-Cola 1";
    drinksLi2.innerText = "Fruit Juice 2";
    drinksLi3.innerText = "Beer 3";
    drinksLi4.innerText = "Cocktails 4";
    drinksLi5.innerText = "Wine 6";
    drinksD.append(drinksh3, drinksul);
    drinksul.append(drinksLi1, drinksLi2, drinksLi3, drinksLi4, drinksLi5);
}