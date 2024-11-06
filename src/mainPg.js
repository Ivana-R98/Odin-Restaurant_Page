import mainImg from "./main.jpg";

export function openMainPage()  {
    document.body.style.backgroundImage = `url(${mainImg})`;
    const content = document.getElementById("content");
    const desc = document.createElement("div");
    const resDiv = document.createElement("div");
    const hoursDiv = document.createElement("div");
    const eventDiv = document.createElement("div");
    content.append(desc, resDiv, hoursDiv, eventDiv);
    //description of restaurant
    const descH1 = document.createElement("h1");
    const descriptionHeading = document.createElement("h3");
    const p = document.createElement("p");
    descH1.innerText = "Shippicao";
    descriptionHeading.innerText = "The best seafood restaurant is here!"
    p.innerText = `The authentic taste comes from never before seen recipes and from fresh, simple and tasteful ingredients straight from our home.`;

    desc.append(descH1, descriptionHeading, p);
    //reservations
    const resH3 =  document.createElement("h3");
    const resP1 =  document.createElement("p");
    resH3.innerText = "Reservations";
    resP1.innerText = `Reservations are available for parties up to 10. Reservations, are reccomended, but not mandatory, as we do reserve limited space for walk-ins.
    For groups with more than 10 guests, we ask that a prefix menu be in place. Please call the provided number to submit an inquiry: 
    123-777-777`;

    resDiv.append(resH3, resP1);
    //hours
    const hoursH3 = document.createElement("h3");
    const h1p = document.createElement("p");
    const hH4 = document.createElement("h4");
    const hP = document.createElement("p");
    hoursH3.innerText = "Hours: ";
    h1p.innerText = "We work tirelessly to bring you great food."
    hH4.innerText = "~All Week~";
    hP.innerText = "08:00 - 24:00";

    hoursDiv.append(hoursH3, h1p, hH4, hP);
    //events
    const eH3 = document.createElement("h3");
    const eP = document.createElement("p");
    const eP1 = document.createElement("p");
    eH3.innerText = "Events";
    eP.innerText = "Create a unique event experience at Shippicao. Perfect for birthdays, corporate events, or anything else you are dreaming up.";
    eP1.innerText = "Enjoy the food while sailing during our Sailing hour! (if you are having a special event, you can also order the sailing hour, or maybe something better...)";
    eventDiv.append(eH3, eP, eP1);
}