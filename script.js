let emojicontaine = document.getElementById('disply-container');
let searach = document.getElementById('input1');
function displayemoji(val2='') {
    let filteredArray = emojiList.filter(ele => {
        if (ele.description.indexOf(val2) != -1){
            return true;
        }
        if(ele.aliases.some(e => e === val2)){
            return true;
        }
        if(ele.tags.some(e => e === val2)){
            return true;
        }
    })
    emojicontaine.innerText="";
    let innerHTML="";
    // searach.innerHTML="";
    filteredArray.forEach(ev => {
        // let newrow = document.createElement('tr')
        // let newemoji = document.createElement('td')
        // let newaliases = document.createElement('td')
        // let newdescription = document.createElement('td')
        // newemoji.innerText = ev.emoji;


        // newaliases.innerText = ev.aliases;


        // newdescription.innerText = ev.description;

        // newrow.appendChild(newemoji);
        // newrow.appendChild(newaliases);
        // newrow.appendChild(newdescription);

        innerHTML+=`
 
   
   
        <div class="adding" style="display: grid;
        grid-template-columns: 1fr 1fr 1fr;">
        <span style="font-size:40px;">${ev.emoji}</span>
        <span style=" font-size:x-large;padding:20px;">${ev.aliases}</span>
        <span style=" font-size:x-large;padding:20px;">${ev.description}</span>
        </div>
     
      <hr>`
    })
    emojicontaine.innerHTML=innerHTML;
}
searach.addEventListener('keyup', (e) => {
    e.preventDefault();

    let val = e.target.value;
    // console.log(val)
    displayemoji(val);

})
window.addEventListener('load', displayemoji);
window.onload = () => displayemoji();
