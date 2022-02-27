const form = document.querySelector("form");
let input = document.querySelector("input");
let list = document.querySelector(".list .cities");

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  const apiKey = "16728acd5f9df0cc0a314b23af5794f0";
  const ciudad= "Madrid"

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;

          const li = document.createElement("li");
          li.classList.add("city");
          const markup = `
            <h2 class="city-name" data-name="${name},${sys.country}">
              <span>${name}</span>
              <sup>${sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>

           <img src = "http://openweathermap.org/img/wn/${weather[0].icon}@2x.png">
          `;
          li.innerHTML = markup;
          console.log(li)
          list.appendChild(li);
        console.log(data);
        })
  .catch(() => {
              alert("Introduce una ciudad válida!");
            });

  $('input[type="text"]').val('');
  input.focus();
})

const hideWindowContent = () => {
	let windowContents = $(".list");
	for (let windowContent of windowContents) {
		if (!$(windowContent).hasClass("hidden")) {
			$(windowContent).addClass("hidden");
		}
	}
};

const showWindowContent = () => {
	let windowContent = $(".list");
	if (windowContent.hasClass("hidden")) {
		windowContent.removeClass("hidden");
	}
};

form.addEventListener("reset", e => {
  e.preventDefault();
  $(".list .cities").empty();

})

