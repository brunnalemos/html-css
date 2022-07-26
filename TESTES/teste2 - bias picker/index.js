const allGroups = [
    {
        name: "TXT",
        id: "txt",
        type: "boygroup",
        selected: false
    },
    {
        name: "Astro",
        id: "astro",
        type: "boygroup",
        selected: false
    },
    {
        name: "Blackpink",
        id: "blackpink",
        type: "girlgroup",
        selected: false
    },
    {
        name: "Purple Kiss",
        id: "purple-kiss",
        type: "girlgroup",
        selected: false
    },
    {
        name: "Epik High",
        id: "epik-high",
        type: "others",
        selected: false
    },
    {
        name: "AKMU",
        id: "akmu",
        type: "others",
        selected: false
    }
    
];
let selectedGroups = [];
let selectedPages = [];
let firstSection = document.getElementById('bg-or-gg');
let bgSection = document.getElementById
('boygroups');
let ggSection = document.getElementById
('girlgroups');
let othersSection = document.getElementById
('other-groups');
let bgBtn = document.getElementById
('bg-option');
let ggBtn = document.getElementById
('gg-option');
let othersBtn = document.getElementById
('other-option');
let txtBtn = document.getElementById
('txt');
let astroBtn = document.getElementById
('astro');
let blackpinkBtn = document.getElementById
('blackpink');
let purplekissBtn = document.getElementById
('purple-kiss');
let epikHighBtn = document.getElementById
('epik-high');
let akmuBtn = document.getElementById
('akmu');
bgBtn.addEventListener("click", function (){
    ggSection.classList.remove("visible");
    othersSection.classList.remove("visible");
    bgSection.classList.add("visible");
});
ggBtn.addEventListener("click", function (){
    bgSection.classList.remove("visible");
    othersSection.classList.remove("visible");
    ggSection.classList.add("visible");
});
othersBtn.addEventListener("click", function (){
    bgSection.classList.remove("visible");
    ggSection.classList.remove("visible");
    othersSection.classList.add("visible");
});

function nextStage() {
    if (allGroups.filter((item) => item.selected) < 1){ alert("You need to select at least one group!")
  }
  else {
    let oneSelectedGroups = allGroups.filter((item) => item.selected);
    let selectedGroupsSort = oneSelectedGroups.sort((a, b) => a.type.localeCompare(b.type));
    let selectedGroups = selectedGroupsSort.map(item => { return item.name});
    let selectedGroupsStr = JSON.stringify(selectedGroups);
    sessionStorage.setItem('selectedGroups', selectedGroupsStr);
    window.location.href = "page2.html";
  }
}

function myClick(x) {
    let index = allGroups.findIndex(object => {
        return object.id === x;
      });
    if (document.getElementById(x).classList.contains("unselected")) {
        document.getElementById(x).classList.remove("unselected");
        document.getElementById(x).classList.add("selected");
        allGroups[index].selected = true;
    }
    else {
        if (!document.getElementById(x).classList.contains("categories")) {document.getElementById(x).classList.add("unselected");
        document.getElementById(x).classList.remove("selected");
        allGroups[index].selected = false;}
    }   
    if (document.getElementById(x).classList.contains("categories")){
        if(!document.getElementById(x).classList.contains("selectedtype")){
        document.getElementsByClassName("categories")[0].classList.remove("selectedtype");
        document.getElementsByClassName("categories")[1].classList.remove("selectedtype");
        document.getElementsByClassName("categories")[2].classList.remove("selectedtype");
        document.getElementById(x).classList.add("selectedtype")}
        }
};
