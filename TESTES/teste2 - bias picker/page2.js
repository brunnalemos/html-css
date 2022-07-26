let allBiasNames =[];

let selectedGroupList = JSON.parse(sessionStorage.getItem('selectedGroups'));
let selectedGroupsIdols = allGroupsIdols.filter(item => selectedGroupList.includes(item.group));



function fillButtons () {  
  if (selectedGroupsIdols.length>1) {
    let index = 0;
    let indx = 0;
      
    if (document.querySelector('h1').classList.contains("invisible")) {
      document.querySelector('h1').classList.remove("invisible")};
    
    if (document.querySelector('h2').classList.contains("invisible")) {
        document.querySelector('h2').classList.remove("invisible")};

    if(!document.getElementsByClassName("first")[0].classList.contains("invisible") &&
    document.getElementsByClassName("first")[0].textContent == "Next group") 
  {
    document.querySelector("h1").textContent = "Select your bias:";
    document.querySelector("h2").textContent = "Select as many as you want, and then click 'Next'";
    let biaswreckerName = Array.from(document.getElementsByClassName("yes")).map(el => el.innerText); 
    if (biaswreckerName.length > 0) {
      allBiasNames[allBiasNames.length-1].biaswrecker = biaswreckerName; 
    };

    do {
    document.getElementsByClassName("membro")[indx].innerHTML = "";
    document.getElementsByClassName("membro")[indx].classList.add("invisible");

    if (document.getElementsByClassName("membro")[indx].classList.contains("selected")) {
      document.getElementsByClassName("membro")[indx].classList.remove("selected");
      document.getElementsByClassName("membro")[indx].classList.add("unselected");
    };
    indx++;
    }
    while (indx < selectedGroupsIdols[0].members.length);

    selectedGroupsIdols.shift();
    }

  do {
    let button = document.getElementsByClassName("membro")[index];
    button.innerHTML = '<img src='+ selectedGroupsIdols[0].members[index].imgsrc+ ' ><p class="member-name no">'+selectedGroupsIdols[0].members[index].name+'</p>';
    button.classList.remove("invisible");
    index++;
}
  while (index < selectedGroupsIdols[0].members.length);
  let nextButton = document.getElementsByClassName("first")[0];
  nextButton.classList.add("invisible");
  
  if (nextButton.classList.contains("next"))
    {nextButton.classList.remove("next");};
  nextButton.textContent = "Next group";
  let biaswreckerBtn = document.getElementsByClassName("biaswrecker")[0];
  biaswreckerBtn.classList.remove("invisible");
  biaswreckerBtn.classList.add("next");
  
}
  else {
    document.getElementsByClassName("first")[0].textContent = "Finish"; 
    
    let finalBiaswrecker = Array.from(document.getElementsByClassName("yes")).map(el => el.innerText); 
    if (finalBiaswrecker.length > 0) {
      allBiasNames[allBiasNames.length-1].biaswrecker = finalBiaswrecker; 
    };
    let selectedIdolsStr = JSON.stringify(allBiasNames);
    sessionStorage.setItem('selectedIdols', selectedIdolsStr);
    window.location.href = "final.html";
  };
};





function collectBias () {
  let groupBias = new Object();
  if (Array.from(document.getElementsByClassName("yes")).map(el => el.innerText).length < 1){ alert("You need to select at least one bias!")
  }
  else {
  groupBias.group = selectedGroupsIdols[0].group; 
  groupBias.bias = Array.from(document.getElementsByClassName("yes")).map(el => el.innerText); 
  allBiasNames.push(groupBias);
  let index = 0;
  do {
  let btn = document.getElementsByClassName("membro")[index];
  if (btn.classList.contains("selected")) {
    btn.classList.remove("selected");
    btn.classList.add("unselected");
  };
  if (document.getElementsByClassName("member-name")[index].classList.contains("yes")) {
    document.getElementsByClassName("member-name")[index].classList.remove("yes");
    document.getElementsByClassName("member-name")[index].classList.add("no");
  };
  index++;
}
  while (index < selectedGroupsIdols[0].members.length);

  let biaswreckerBtn = document.getElementsByClassName("biaswrecker")[0];
  biaswreckerBtn.classList.add("invisible");
  biaswreckerBtn.classList.remove("next");
  let nextButton = document.getElementsByClassName("first")[0];
  if (nextButton.classList.contains("invisible")) {
  nextButton.classList.remove("invisible")
  nextButton.classList.add("next")};
  document.querySelector("h1").textContent = "Now select your bias wrecker:";
  document.querySelector("h2").textContent = "If you don't have a bias wrecker, you can click the 'Next' button"; };
};





function myClick(x) {
  let memberBtn = document.getElementsByClassName("membro")[x];
  if (memberBtn.classList.contains("unselected")) {
     
    memberBtn.classList.remove("unselected");
    memberBtn.classList.add("selected");
  }
  else {
      memberBtn.classList.add("unselected");
      memberBtn.classList.remove("selected");
  }   
  let memberName = document.getElementsByClassName("member-name")[x];
  if (memberName.classList.contains("no")) {
     
    memberName.classList.remove("no");
    memberName.classList.add("yes");
  }
  else {
      memberName.classList.add("no");
      memberName.classList.remove("yes");
  }   
};
