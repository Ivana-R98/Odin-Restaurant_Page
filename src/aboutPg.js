import aboutImg from "./about.jpeg"

export const aboutDiv = "About page";
export function openAboutPage() {
    document.body.style.backgroundImage = `url(${aboutImg})`;
    //Contact us
    const content = document.getElementById("content");
    const h1 = document.createElement("h1");
    const hAndl = document.createElement("div");
    const contact = document.createElement("div");
    h1.innerText = "About Us";
    content.append(h1, hAndl, contact);
    //hours & location
    const hAndLH = document.createElement("div");
    const hAndlHh = document.createElement("h3");
    const hAndlHp = document.createElement("p");
    const hAndlHp1 = document.createElement("p");
    hAndlHh.innerText = "Hours";
    hAndlHp.innerText = "~We work tirelessly to bring you great food~";
    hAndlHp1.innerText = "08:00 - 24:00";
    hAndl.append(hAndLH);
    hAndLH.append(hAndlHh, hAndlHp, hAndlHp1);
    const hAndlL = document.createElement("div");
    const hAndlLh = document.createElement("h3");
    const hAndlLp = document.createElement("p");
    hAndlLh.innerText = "Location";
    hAndlLp.innerText = "123 Mediterranian Sea";
    hAndl.append(hAndlL);
    hAndlL.append(hAndlLh, hAndlLp);
    //Poseidon
    const poseidonD = document.createElement("div");
    const poseidonh = document.createElement("h3");
    const poseidonp = document.createElement("p");
    const poseidonp1 = document.createElement("p");
    poseidonh.innerText = "Poseidon - Owner";
    poseidonp.innerText = "777/123-123";
    poseidonp1.innerText = "ilovetheocean@fake.com"
    contact.append(poseidonD);
    poseidonD.append(poseidonh, poseidonp, poseidonp1);
    //Mermaid
    const mermaidD = document.createElement("div");
    const mermaidh = document.createElement("h3");
    const mermaidp = document.createElement("p");
    const mermaidp1 = document.createElement("p");
    mermaidh.innerText = "Little mermaid - co-owner & waitress in the free time";
    mermaidp.innerText = "123/123-123";
    mermaidp1.innerText = "ilovefreedom@fake.com"
    contact.append(mermaidD);
    mermaidD.append(mermaidh, mermaidp, mermaidp1);
    //Puffy
    const puffyD = document.createElement("div");
    const puffyh = document.createElement("h3");
    const puffyp = document.createElement("p");
    const puffyp1 = document.createElement("p");
    puffyh.innerText = "Puffy";
    puffyp.innerText = "123/123-456";
    puffyp1.innerText = "ilovecats@fake.com"
    contact.append(puffyD);
    puffyD.append(puffyh, puffyp, puffyp1);
    //Keba
    const kebaD = document.createElement("div");
    const kebah = document.createElement("h3");
    const kebap = document.createElement("p");
    const kebap1 = document.createElement("p");
    kebah.innerText = "Keba";
    kebap.innerText = "123/123-789";
    kebap1.innerText = "iloveseashells@fake.com"
    contact.append(kebaD);
    kebaD.append(kebah, kebap, kebap1);

}