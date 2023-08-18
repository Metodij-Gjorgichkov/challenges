// logic for adding and removing the orange color when element is clicked
let selectedElement = null;

$(".hovered").click(function () {
  if (selectedElement) {
    $(selectedElement).removeClass("hoverOrange");
  }
  $(this).addClass("hoverOrange");

  selectedElement = this;
});
// logic for adding the orange color when element is clicked

// function for showing all the cards
function showAllCards() {
  $("#cards").html("");

  fetch("https://challenges.brainster.tech/ajax_data/data.json")
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((product) => {
        $("#cards").append(`
          <div class="col-4 mb-4">
            <div class="card borderOrange">
              <img class="card-img-top p-5 d-flex justify-content-center align-items-center"
                style="width: 350px" src="./img/${product.image}.png" alt="Card image cap" />
              <div class="card-body orange">
                <h6 class="boldedParagraph text-uppercase">${product.name}</h6>
                <p class="card-text">${product.price}$</p>
              </div>
            </div>
          </div>
        `);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
// function for showing all the cards

//  rendering the cards on load and populating the paragraphs with the cards length
function onLoadPage() {
  const showAllElement = $(".showAllEl");
  showAllElement.addClass("hoverOrange");
  selectedElement = showAllElement[0];

  fetch("https://challenges.brainster.tech/ajax_data/data.json")
    .then((res) => res.json())
    .then((data) => {
      showAllCards();

      const dataLength = data.products.length;
      $(".showAll").html(dataLength);

      const maleProducts = data.products.filter(
        (product) => product.gender === "MALE"
      ).length;
      $(".maleNum").html(maleProducts);

      const femaleProducts = data.products.filter(
        (product) => product.gender === "FEMALE"
      ).length;
      $(".femaleNum").html(femaleProducts);

      const leGrandProducts = data.products.filter(
        (product) => product.brand === "LE GRAND BIKES"
      ).length;
      $(".leGrandBikes").html(leGrandProducts);

      const krossProducts = data.products.filter(
        (product) => product.brand === "KROSS"
      ).length;
      $(".kross").html(krossProducts);

      const explorerProducts = data.products.filter(
        (product) => product.brand === "EXPLORER"
      ).length;
      $(".explorer").html(explorerProducts);

      const visitorProducts = data.products.filter(
        (product) => product.brand === "VISITOR"
      ).length;
      $(".visitor").html(visitorProducts);

      const ponyProducts = data.products.filter(
        (product) => product.brand === "PONY"
      ).length;
      $(".pony").html(ponyProducts);

      const forceProducts = data.products.filter(
        (product) => product.brand === "FORCE"
      ).length;
      $(".force").html(forceProducts);

      const eBikesProducts = data.products.filter(
        (product) => product.brand === "E-BIKES"
      ).length;
      $(".eBikes").html(eBikesProducts);

      const idealProducts = data.products.filter(
        (product) => product.brand === "IDEAL"
      ).length;
      $(".ideal").html(idealProducts);
    });
}
//  rendering the cards on load and populating the paragraphs with the cards length

// function for filtering the data
function applyFilter(filterType, filterValue) {
  $("#cards").html("");

  fetch("https://challenges.brainster.tech/ajax_data/data.json")
    .then((res) => res.json())
    .then((data) => {
      const filteredProducts = data.products.filter((product) => {
        return product[filterType] === filterValue;
      });
      filteredProducts.forEach((product) => {
        $("#cards").append(`
		  <div class="col-4 mb-4">
		    <div class="card borderOrange">
			<img
			  class="card-img-top p-5 d-flex justify-content-center align-items-center"
			  style="width: 350px"
			  src="./img/${product.image}.png"
			  alt="Card image cap"
			/>
			<div class="card-body orange">
			  <h6 class="boldedParagraph text-uppercase">
			    ${product.name}
			  </h6>
			  <p class="card-text">${product.price}$</p>
			</div>
		    </div>
		  </div>`);
      });
    });
}
// function for filtering the data

$(".male").click(function () {
  applyFilter("gender", "MALE");
});

$(".female").click(function () {
  applyFilter("gender", "FEMALE");
});

$(".leGrand").click(function () {
  applyFilter("brand", "LE GRAND BIKES");
});

$(".krossProduct").click(function () {
  applyFilter("brand", "KROSS");
});

$(".explorerProduct").click(function () {
  applyFilter("brand", "EXPLORER");
});

$(".visitorProduct").click(function () {
  applyFilter("brand", "VISITOR");
});

$(".ponyProduct").click(function () {
  applyFilter("brand", "PONY");
});

$(".forceProduct").click(function () {
  applyFilter("brand", "FORCE");
});

$(".eBikesProduct").click(function () {
  applyFilter("brand", "E-BIKES");
});

$(".idealProduct").click(function () {
  applyFilter("brand", "IDEAL");
});

$(".all").click(function () {
  showAllCards();
});

window.addEventListener("load", onLoadPage);

// Added extra functionallities to the challenge
// logic for hiding and showing the input and the button
let isVisible = false;

$(".searchIcon").click(function () {
  if (isVisible) {
    $(".searchInput").css("display", "none");
    $(".searchButton").css("display", "none");
    isVisible = false;
  } else {
    $(".searchInput").css("display", "block");
    $(".searchButton").css("display", "block");
    isVisible = true;
  }
});
// logic for hiding and showing the input and the button

// function for filtering the data by name
$(".searchButton").click(function () {
  const searchValue = $(".searchInput").val().toUpperCase();
  fetch("https://challenges.brainster.tech/ajax_data/data.json")
    .then((res) => res.json())
    .then((data) => {
      const filteredData = data.products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.price.toString().includes(searchValue)
      );

      $("#cards").html("");

      filteredData.forEach((product) => {
        $("#cards").append(`
          <div class="col-4 mb-4">
            <div class="card borderOrange">
              <img
                class="card-img-top p-5 d-flex justify-content-center align-items-center"
                style="width: 350px"
                src="./img/${product.image}.png"
                alt="Card image cap"
              />
              <div class="card-body orange">
                <h6 class="boldedParagraph text-uppercase">
                  ${product.name}
                </h6>
                <p class="card-text">${product.price}$</p>
              </div>
            </div>
          </div>`);
      });
      $(".searchInput").val("");
    });
});
// function for filtering the data by name
