const showAllBillionaire = async () => {
  document.getElementById("all-billionaire").classList.remove("hidden");
  document.getElementById("all-industry").classList.add("hidden");
  const url = `./data/AllBillionaires.json`;
  const res = await fetch(url);
  const data = await res.json();
  displayAllBillionaire(data.slice(0, 3));
  // console.log(data);
};

const displayAllBillionaire = (data) => {
  const tableContainer = document.getElementById("table-container");
  tableContainer.textContent = "";
  for (const element of data) {
    console.log(element);
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="py-3 pl-20">${element.uri}</td>
        <td class="py-3 pl-20">${element.countryOfCitizenship}</td>
        <td class="py-3 pl-16">${element.industries[0]}</td>
        <td class="py-3 pl-5">${element.rank}</td>
        <td class="py-3 pl-16">$ ${element.finalWorth.toFixed(2)}</td>
        `;
    tableContainer.appendChild(tr);
  }
};

document.getElementById("richestByIndustry").addEventListener("click", () => {
  document.getElementById("all-billionaire").classList.add("hidden");
  document.getElementById("all-industry").classList.remove("hidden");
  const url = `./data/ByIndustryTechnology.json`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllIndustries(data.slice(0, 6)));
});
const displayAllIndustries = (industries) => {
  console.log(industries);
  const container = document.getElementById("container");
  container.innerHTML = "";
  industries.forEach((element) => {
    const { squareImage, uri, countryOfCitizenship, state, city } = element;
    const divElement = document.createElement("div");
    divElement.classList.add(
      "card",
      "card-side",
      "bg-base-100",
      "shadow-xl",
      "mt-5"
    );
    divElement.innerHTML = `
    <figure>
      <img
      class="h-100 w-20"
        src="${squareImage ? squareImage : "image not found"}"
        alt="Movie"
      />
    </figure>
    <div class="card-body">
      <h4 class="card-title">Name: ${uri ? uri : "not available"}</h4>
      <h5 class="text-sm text-slate-700 font-semibold">Citizenship: ${
        countryOfCitizenship ? countryOfCitizenship : "not available"
      }</h5>
      <h5 class="text-sm text-slate-700 font-semibold">States: ${
        state ? state : "not available"
      }</h5>
      <h5 class="text-sm text-slate-700 font-semibold">City: ${
        city ? city : "not available"
      }</h5>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Details</button>
      </div>
    </div>
    `;
    container.appendChild(divElement);
  });
};

// see all button
const seeAllButton = () => {
  document.getElementById("sell-all-btn").classList.add("hidden");
  const url = `./data/ByIndustryTechnology.json`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllIndustries(data));
};
