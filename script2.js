let emojicontaine = document.getElementById('disply-container');
let searach = document.getElementById('input1');
function displayemoji(val2 = '') {
    let filteredArray = emojiList.filter(ele => {
        if (ele.description.indexOf(val2) != -1) {
            return true;
        }
        if (ele.aliases.some(e => e === val2)) {
            return true;
        }
        if (ele.tags.some(e => e === val2)) {
            return true;
        }
    })
    emojicontaine.innerText = "";
    let innerHTML = "";
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

        innerHTML += `
 
   
   
        <div class="adding" style="display: grid;
        grid-template-columns: 1fr 1fr 1fr;">
        <span style="font-size:40px;">${ev.emoji}</span>
        <span style=" font-size:x-large;padding:20px;">${ev.aliases}</span>
        <span style=" font-size:x-large;padding:20px;">${ev.description}</span>
        </div>
     
      <hr>`
    })
    emojicontaine.innerHTML = innerHTML;
}
searach.addEventListener('keyup', (e) => {
    e.preventDefault();

    let val = e.target.value;
    // console.log(val)
    displayemoji(val);

})

let smile = document.getElementById('smile');
let addsmile="";
smile.addEventListener('click', () => {
    emojicontaine.innerHTML="";
    emojiList.forEach((ej) => {
        if(ej.category==="Smileys & Emotion"){
            addsmile+=`
            <div class="adding" style="display: grid;
            grid-template-columns: 1fr 1fr 1fr;">
            <span style="font-size:40px;">${ej.emoji}</span>
            <span style=" font-size:x-large;padding:20px;">${ej.aliases}</span>
            <span style=" font-size:x-large;padding:20px;">${ej.description}</span>
            </div>
         
          <hr>`
          
        }
    })
    // console.log(emojiList.category)
    emojicontaine.innerHTML=addsmile;
})
let people = document.getElementById('people');
let addpeople="";
people.addEventListener('click', () => {
    emojicontaine.innerHTML="";
    emojiList.forEach((ep) => {
        if(ep.category==="People & Body"){
            addpeople+=`
            <div class="adding" style="display: grid;
            grid-template-columns: 1fr 1fr 1fr;">
            <span style="font-size:40px;">${ep.emoji}</span>
            <span style=" font-size:x-large;padding:20px;">${ep.aliases}</span>
            <span style=" font-size:x-large;padding:20px;">${ep.description}</span>
            </div>
         
          <hr>`
          
        }
    })
    // console.log(emojiList.category)
    emojicontaine.innerHTML=addpeople;
})
let animal = document.getElementById('animal');
let addanimal="";
animal.addEventListener('click', () => {
    emojicontaine.innerHTML="";
    emojiList.forEach((ean) => {
        if(ean.category==="Animals & Nature"){
            addanimal+=`
            <div class="adding" style="display: grid;
            grid-template-columns: 1fr 1fr 1fr;">
            <span style="font-size:40px;">${ean.emoji}</span>
            <span style=" font-size:x-large;padding:20px;">${ean.aliases}</span>
            <span style=" font-size:x-large;padding:20px;">${ean.description}</span>
            </div>
         
          <hr>`
          
        }
    })
    // console.log(emojiList.category)
    emojicontaine.innerHTML=addanimal;
})
let food = document.getElementById('food');
let addfood="";
food.addEventListener('click', () => {
    emojicontaine.innerHTML="";
    emojiList.forEach((ef) => {
        if(ef.category==="Food & Drink"){
            addfood+=`
            <div class="adding" style="display: grid;
            grid-template-columns: 1fr 1fr 1fr;">
            <span style="font-size:40px;">${ef.emoji}</span>
            <span style=" font-size:x-large;padding:20px;">${ef.aliases}</span>
            <span style=" font-size:x-large;padding:20px;">${ef.description}</span>
            </div>
         
          <hr>`
          
        }
    })
    // console.log(emojiList.category)
    emojicontaine.innerHTML=addfood;
})
let travel = document.getElementById('travel');
let addtravel="";
travel.addEventListener('click', () => {
    emojicontaine.innerHTML="";
    emojiList.forEach((et) => {
        if(et.category==="Travel & Places"){
            addtravel+=`
            <div class="adding" style="display: grid;
            grid-template-columns: 1fr 1fr 1fr;">
            <span style="font-size:40px;">${et.emoji}</span>
            <span style=" font-size:x-large;padding:20px;">${et.aliases}</span>
            <span style=" font-size:x-large;padding:20px;">${et.description}</span>
            </div>
         
          <hr>`
          
        }
    })
    // console.log(emojiList.category)
    emojicontaine.innerHTML=addtravel;
})
let activities = document.getElementById('activities');
let addactivities="";
activities.addEventListener('click', () => {
    emojicontaine.innerHTML="";
    emojiList.forEach((eacti) => {
        if(eacti.category==="Activities"){
            addactivities+=`
            <div class="adding" style="display: grid;
            grid-template-columns: 1fr 1fr 1fr;">
            <span style="font-size:40px;">${eacti.emoji}</span>
            <span style=" font-size:x-large;padding:20px;">${eacti.aliases}</span>
            <span style=" font-size:x-large;padding:20px;">${eacti.description}</span>
            </div>
         
          <hr>`
          
        }
    })
    // console.log(emojiList.category)
    emojicontaine.innerHTML=addactivities;
})
let Objects = document.getElementById('Objects');
let addObjects="";
Objects.addEventListener('click', () => {
    emojicontaine.innerHTML="";
    emojiList.forEach((eo) => {
        if(eo.category==="Objects"){
            addObjects+=`
            <div class="adding" style="display: grid;
            grid-template-columns: 1fr 1fr 1fr;">
            <span style="font-size:40px;">${eo.emoji}</span>
            <span style=" font-size:x-large;padding:20px;">${eo.aliases}</span>
            <span style=" font-size:x-large;padding:20px;">${eo.description}</span>
            </div>
         
          <hr>`
          
        }
    })
    // console.log(emojiList.category)
    emojicontaine.innerHTML=addObjects;
})
let symbol = document.getElementById('symbol');
let addsymbol="";
symbol.addEventListener('click', () => {
    emojicontaine.innerHTML="";
    emojiList.forEach((esy) => {
        if(esy.category==="Symbols"){
            addsymbol+=`
            <div class="adding" style="display: grid;
            grid-template-columns: 1fr 1fr 1fr;">
            <span style="font-size:40px;">${esy.emoji}</span>
            <span style=" font-size:x-large;padding:20px;">${esy.aliases}</span>
            <span style=" font-size:x-large;padding:20px;">${esy.description}</span>
            </div>
         
          <hr>`
          
        }
    })
    // console.log(emojiList.category)
    emojicontaine.innerHTML=addsymbol;
})
let flag = document.getElementById('flag');
let addflag="";
flag.addEventListener('click', () => {
    emojicontaine.innerHTML="";
    emojiList.forEach((efl) => {
        if(efl.category==="Flags"){
            addflag+=`
            <div class="adding" style="display: grid;
            grid-template-columns: 1fr 1fr 1fr;">
            <span style="font-size:40px;">${efl.emoji}</span>
            <span style=" font-size:x-large;padding:20px;">${efl.aliases}</span>
            <span style=" font-size:x-large;padding:20px;">${efl.description}</span>
            </div>
         
          <hr>`
          
        }
    })
    // console.log(emojiList.category)
    emojicontaine.innerHTML=addflag;
})
let all = document.getElementById('all');
let addall="";
all.addEventListener('click', () => {
    emojicontaine.innerHTML="";
    emojiList.forEach((eall) => {
        // if(efl.category==="Flags"){
            addall+=`
            <div class="adding" style="display: grid;
            grid-template-columns: 1fr 1fr 1fr;">
            <span style="font-size:40px;">${eall.emoji}</span>
            <span style=" font-size:x-large;padding:20px;">${eall.aliases}</span>
            <span style=" font-size:x-large;padding:20px;">${eall.description}</span>
            </div>
         
          <hr>`
          
        // }
    })
    // console.log(emojiList.category)
    emojicontaine.innerHTML=addall;
})

window.addEventListener('load', displayemoji);
window.onload = () => displayemoji();
