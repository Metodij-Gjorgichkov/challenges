$(function () {
  $("button").hover(
    function () {
      $(this).addClass("button-hover");
    },
    function () {
      $(this).removeClass("button-hover");
    }
  );
});

const countDown = [1, 2, 3];
let counter = 0;

$("#raceBtn").click(function () {
  $("#raceBtn").prop("disabled", true);
  $("#startOverBtn").prop("disabled", true);

  const countDownInterval = setInterval(() => {
    $(".countDown").text(countDown[counter]);
    $("body").css("opacity", "0.50");
    counter++;

    if (counter > countDown.length) {
      clearInterval(countDownInterval);
      counter = 0;
      $(".countDown").text("");
      $("body").css("opacity", "1");
      startRace();
    }
  }, 1000);
});

function startRace() {
  let isComplete = false;
  let place = "first";

  function checkIsComplete() {
    if (isComplete === false) {
      isComplete = true;
      resetBtn();
      $(".finish-flag").css("opacity", "1");
      $("body").css("opacity", "0.5");
    } else {
      place = "second";
    }
  }

  let carWidth1 = $("#carOne").width();
  let carWidth2 = $("#carTwo").width();

  let raceTrackWidth = $(window).width() - carWidth1;
  let raceTrackWidth1 = $(window).width() - carWidth2;

  let randomRaceTime1 = Math.floor(Math.random() * 5000 + 1);
  let randomRaceTime2 = Math.floor(Math.random() * 5000 + 1);

  $("#carOne").animate(
    {
      left: raceTrackWidth,
    },
    randomRaceTime1,
    function () {
      checkIsComplete();

      $(".placeOne")
        .append(
          `<tbody class="text-white">
		    <tr>
			<th>Finished in <strong>${place}</strong> place with a <br> 
			time of <strong>${randomRaceTime1}</strong> milliseconds</th>
		    </tr>
		  </tbody>`
        )
        .show();
      localStorage.setItem("placeOne1", place === "first" ? "first" : "second");
      localStorage.setItem("milliseconds1", randomRaceTime1);
    }
  );

  $("#carTwo").animate(
    {
      left: raceTrackWidth1,
    },
    randomRaceTime2,
    function () {
      checkIsComplete();

      $(".placeTwo")
        .append(
          `<tbody class="text-white">
		    <tr>
			<th>Finished in <strong class="text-danger">${place}</strong> place with a <br> 
			time of <strong class="text-danger">${randomRaceTime2}</strong> milliseconds</th>
		    </tr>
		  </tbody>`
        )
        .show();
      localStorage.setItem("placeTwo2", place === "first" ? "first" : "second");
      localStorage.setItem("milliseconds2", randomRaceTime2);
    }
  );
}

function resetBtn() {
  $("#startOverBtn").prop("disabled", false);
  $("#raceBtn").prop("disabled", false);
}

$("#startOverBtn").click(function () {
  // $("#raceBtn").prop("disabled", false);
  $("#carOne").css("left", "0");
  $("#carTwo").css("left", "0");
  $(".finish-flag").css("opacity", "0");
  $("body").css("opacity", "1");
});

function updateResults() {
  const storedPlaceOne = localStorage.getItem("placeOne1");
  const storedPlaceTwo = localStorage.getItem("placeTwo2");
  const milliseconds1 = localStorage.getItem("milliseconds1");
  const milliseconds2 = localStorage.getItem("milliseconds2");

  $(".placeOne").text("");
  $(".placeTwo").text("");

  if (storedPlaceOne && milliseconds1 && storedPlaceTwo && milliseconds2) {
    document.querySelector(".previousResults").style.display = "block";
    document.querySelector(
      ".previousResults table"
    ).innerHTML = `<tbody class="text-white">
	    <tr>
		<th>
		  <strong><span>Car 1 </span></strong>finished in
		  <strong><span>${storedPlaceOne}</span></strong> place, with a time of
		  <strong><span>${milliseconds1}</span></strong> milliseconds
		</th>
	    </tr>
	    <tr>
		<th>
		  <strong><span class="text-danger">Car 2 </span></strong
		  >finished in
		  <strong><span class="text-danger">${storedPlaceTwo}</span></strong> place,
		  with a time of
		  <strong><span class="text-danger">${milliseconds2}</span></strong>
		  milliseconds
		</th>
	    </tr>
	    </tbody`;
  } else {
    document.querySelector(".previousResults").style.display = "none";
  }
}

window.addEventListener("load", updateResults);
