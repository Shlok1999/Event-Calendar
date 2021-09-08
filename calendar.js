let dt = new Date();

function renderDate() {
    dt.setDate(1)
    let day = dt.getDay()
    let date_str = document.getElementById('date-str')
    let month = document.getElementById('month')

    let today = new Date()
    let currMonth=new Date().getMonth()+1

    let endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate()

    let prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate()

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]


    month.innerHTML = months[dt.getMonth()]
    date_str.innerHTML = dt.toDateString()


    let cells = ""

    for (let x = day; x > 0; x--) {
        cells+= "<div class='prev_date'>" + (prevDate-x+1)+"</div>"
    }

    for (let i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth()==today.getMonth() ) {
            cells += `<div class='today'>${i}</div>`
        }
        else {
            cells += `<div>${i}</div>`
        }

    }
    document.getElementsByClassName('days')[0].innerHTML = cells;   
}
function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth()-1)
    }
    else if(para=='next'){
        dt.setMonth(dt.getMonth()+1)
        

    }
    renderDate();
}





