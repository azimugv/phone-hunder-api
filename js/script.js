const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;
    phoneCard.innerHTML = `
    <figure>
              <img
                src="${phone.image}"
                alt="Shoes"
              />
    </figure>
    <div class="card-body">
        <h2 class="card-title">${phone.brand}</h2>
        <p>${phone.phone_name}</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
      
      `;
    phoneContainer.appendChild(phoneCard);
  });
};

//Handle Search button

const handleSearch = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  loadPhone(searchText);
};
// loadPhone();
