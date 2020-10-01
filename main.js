var myArray=[
    {'name':'Bulbasaur','img':'pokemon/1.png','description':'Type:Grass & Poison Weakness:Fire,Psychic,Flying,Ice'},
    {'name':'Ivysaur','img':'pokemon/2.png','description':'Type:Grass & Poison Weakness:Fire,Psychic,Flying,Ice'}
]
//console.log(myArray);


//make sure that search number box could only search number
function myclickNumber(e){
    var key=e.keyCode;
    console.log(key);
    //in ascii table, 48 means 0 and 57 means 9
    //while 8 means backspace and 13 means return
    //so it can be used by keyboard to search the result directly
    if((key>=48&&key<=57)||(key==8||key==13)){

        return key;
    }
    else{
        return false;

    }
}
//make sure that search name box could only search name
function myclickText(e){
    var key=e.keyCode;
    console.log(key);
    //in ascii table, 65 means A, and 90 means Z
    //97 means a and 122 means z
    if((key>=65&&key<=90)||(key>=97&&key<=122)||(key==8||key==13)){
        return key;
    }
    else{
        return false;
    }
}

///////////////////////////////////////////
//////////////////////////////////////////
function getSearchName() {

   var div=document.getElementById("pokemonList");
   while(div.firstChild){div.removeChild(div.firstChild);}
   var pokemon=document.getElementById("searchName").value
   getSearchObj(pokemon,myArray);
   if(pokemon==''){
       while(div.firstChild){div.removeChild(div.firstChild)}
   }
}
function searchNumber(){

    var div=document.getElementById("pokemonList");
    while(div.firstChild){div.removeChild(div.firstChild);}
    var pokemon_number=document.getElementById("searchNumber").value
    getSearchNum(pokemon_number,myArray);
    if(pokemon_number==''){
        while(div.firstChild){div.removeChild(div.firstChild)}
    }

}


function getSearchNum(value,data){
    //var searchVal=document.getElementById("searchNumberBar").value;
    //var list=document.getElementsByTagName("li");
    //console.log(Object.prototype.toString);
    for (i=0; i<20;i++){



        //mistake
        if((i+1).toString().includes(value.toString())){
            document.getElementById("pokemonList").appendChild(getList(i+1, data[i].img, data[i].name, data[i].description));
        }
    }

}
function getSearchObj(value,data){
    //console.log(Object.prototype.toString);
    for (i=0; i<20;i++){

        //mistake html里也有 在onclick那里 我改成getSearchObj（value， data）后说data undefined
        if(data[i].name.toString().toLowerCase().includes(value.toString().toLowerCase())){
            document.getElementById("pokemonList").appendChild(getList(i+1, data[i].img, data[i].name, data[i].description));
            }
    }

}
function getList(num,img,name,description){
    let list=document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute("src",img);
    let Name=document.createElement("li");
    let pName=document.createTextNode(num+name);
    Name.appendChild(pName);
    let Des=document.createElement("li");
    let pDes=document.createTextNode(description);
    Des.appendChild(pDes);
    list.appendChild(image);list.appendChild(Name); list.appendChild(Des);
    return list;
}
