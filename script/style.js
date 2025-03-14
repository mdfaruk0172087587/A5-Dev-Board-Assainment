// completed btn
const btnCompleted = document.querySelectorAll('.btn-completed')
for (const btn of btnCompleted) {
    const buttons = btn;
    buttons.addEventListener('click', function (event) {
        const button = event.target;
        const titleName = event.target.parentNode.parentNode.parentNode.childNodes[3].innerText;
        button.disabled = true;
        let result = confirm("Board Updated successfully");
        const inNumber = parseInt(document.getElementById('in-number').innerText)
        const valueIn = +1;
        const comment = document.getElementById('comment-section')
        if (result) {
            document.getElementById('task-assigned').innerText -= 1
            document.getElementById('in-number').innerText = inNumber + valueIn
            const createDiv = document.createElement('div')
            createDiv.innerHTML = `
         <h1 class="bg-[#F4F7FF] mb-4 rounded-xl p-2">You have Complete The Task ${titleName} at ${hours}:${minutes}:${seconds} ${amPm}</h1>
         `
            comment.appendChild(createDiv)
        }
    })
}
document.getElementById('btn-last').addEventListener('click', function () {
    alert('Congrates !!! You have Completed all the current task')
})
// btn-theme color
function setColor() {
    let colorList = "0123456789ABCDEF";
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
        colorCode += colorList[Math.floor(Math.random() * 16)];
    }
    return colorCode;
}
document.getElementById('btn-theme').addEventListener('click', function () {
    document.body.style.backgroundColor = setColor();
})
// clear history
const commentSection = document.getElementById('comment-section')
document.getElementById('clear-history').addEventListener('click', function () {
    commentSection.classList.add('hidden')
})
// chang html file
document.getElementById('discover-div').addEventListener('click', function () {
    document.getElementById('header-hidden').classList.add('hidden')
    document.getElementById('main-section-hidden').classList.add('hidden')
    document.getElementById('chain-hidden-section').classList.remove('hidden')
})
// back to desk
document.getElementById('Back-to-desk').addEventListener('click', function () {
    document.getElementById('header-hidden').classList.remove('hidden')
    document.getElementById('main-section-hidden').classList.remove('hidden')
    document.getElementById('chain-hidden-section').classList.add('hidden')
})
// time set 
const setTime = new Date();
const date = setTime.getDate();
const year = setTime.getFullYear();
const hours = setTime.getHours();
const minutes = setTime.getMinutes();
const seconds = setTime.getSeconds();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[setTime.getDay()]
const amPm = hours >= 12? 'PM': 'AM';
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName= monthNames[setTime.getMonth()];
const time = `${monthName} ${date} ${year}`
document.getElementById('time').innerText = time;
document.getElementById('day').innerText = `${dayName}`


