var wrap = document.body.querySelector(".wrap");
var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]

for(var i=0; i<warriors.length; i++){
  var ele = document.createElement("div");
  var eleName = document.createElement("h2");
  if(warriors[i].health >= 10 && warriors[i].damage >= 2 && warriors[i].warrior === true){
      if(warriors[i].name.includes("a")){
        ele.style.color = "red";
        eleName.style.color = "red";
      }else{}
      eleName.innerHTML = "Name: " + warriors[i].name;
      ele.innerHTML = "Damage: " + warriors[i].damage + "<br>Health: " + warriors[i].health;
      wrap.appendChild(eleName);
      wrap.appendChild(ele);
  }else{}

}