let yestarday = document.querySelector("#yestarday");
let lastWeek = document.querySelector("#lastweek");
let lastMonth = document.querySelector("#lastmonth");
let fromDate = document.querySelector("#fromdate");
let toDate = document.querySelector("#todate");
let setData = document.querySelector(".data");
let Input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let resultHeading = document.querySelector("#resultheading");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const url = 'https://www.gov.uk/bank-holidays.json';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            Input.innerHTML = data.scotland.events
                .map((item) =>
                    `<tr>
                <td>${item.title}</td>
                <td>${item.date}</td>
                <td>${item.notes}</td>
                </tr>`

                ).join("");

            fromDate = "";
            toDate = "";
        })

});