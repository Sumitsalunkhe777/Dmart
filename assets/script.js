// slideshow code 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}
// 



 //mrp and discount function herer 
 var list=[10]
  list[0]={mrp:100,dmart:60,name:"Sweet Potato",weight:150,save:0,img:"https://cdn.dmart.in/images/products/KVEGETABLES500gm4xx230920_5_P.jpg",sum:0,count:0}
  // 
  list[1]={mrp:200,dmart:150,name:"Corn",weight:350,save:0,img:"https://cdn.dmart.in/images/products/KVEGETABLES2pcs4xx230920_5_P.jpg",sum:0,count:0}
  // 
  list[2]={mrp:450,dmart:300,name:"Coconut",weight:250,save:0,img:"https://cdn.dmart.in/images/products/KCOCONUT1pcs3134XX160818_1_P.jpg",sum:0,count:0}
  // 
  list[3]={mrp:69,dmart:50,name:"Fresh Potato",weight:100,save:0,img:"https://cdn.dmart.in/images/products/KPOTATO1kg3132XX270118_1_P.jpg",sum:0,count:0}
  // 
  list[4]={mrp:10,dmart:9,name:"Fresh Tomato",weight:50,save:0,img:"https://cdn.dmart.in/images/products/KVEGETABLES500gm41xx230920_5_P.jpg",sum:0,count:0}
  //



console.log()

  var save=document.getElementsByClassName("save");
  var mrp=document.getElementsByClassName("mrp");
  var dmart=document.getElementsByClassName("dmart");
  var img=document.getElementsByClassName("img");
  
  
  window.onload= function(){
    var name=document.getElementsByClassName("name");

    for (var i=0;i<list.length;i++){
      // mrp-dmart price saving it 
      list[i]["save"]=(list[i]["mrp"])-(list[i]["dmart"]);

      save[i].innerHTML=list[i]["save"]
      
      mrp[i].innerHTML=list[i]["mrp"];
      
      dmart[i].innerHTML=list[i]["dmart"];

      img[i].innerHTML = `<img class="w-[85%] hover:w-[95%]" src="${list[i]["img"]}" alt="">`;

      name[i].innerHTML=list[i]["name"]+" "+list[i]["weight"]+" gm";
    }
  }


//  click cart functions 
 count=0;
 sum=0;

//  lets start to automate things 
 function calc(count,card_num){

  card_num=card_num-1;
  var dd=0,yy=0;
    switch (card_num) {
      case 0:
dd=0; yy=0;
      break;
      case 1:
dd=4; yy=2;
      break;
      case 2:
dd=8; yy=4;
      break;
      case 3:
dd=12; yy=6;
      break;
      case 4:
dd=16; yy=8;
      break;
      default:
        console.log("Sorry, we don't recognize that fruit.");
    }
  

   list[card_num]["sum"]+=count;

   console.log(list[card_num]["sum"])
   
   var youpay=document.getElementsByClassName("youpay");
   youpay[card_num].innerHTML=list[card_num]["sum"]*(list[card_num]["dmart"]); /*need to put a loop here 
   soon  */
   save[card_num].innerHTML=(list[card_num]["save"])*(list[card_num]["sum"]);


   
   

  // console.log(sum*(list[0]["save"]))
  if(count==0){
    list[card_num]["sum"]=0;
  }

  if (list[card_num]["sum"]>0)

  
  {
    
    var displaynone= document.getElementsByClassName('displaynone')
    for (var i = 0; i < 4; i++) {
      // elements[i].style.display = "none";
      displaynone[i+dd].classList.add('hidden') ;
    }
    
    var displayyes=document.getElementsByClassName('displayyes')
    for (var i = 0; i < 2; i++) {
      // elements[i].style.display = "none";
      displayyes[i+yy].classList.remove('hidden') ;
      
    }
    
    var quantity = document.getElementsByClassName("quantity");

    // Check if the element exists
    if (quantity) {
        // Update the innerHTML of the element
        
        quantity[card_num].innerHTML =list[card_num]["sum"];}
        
    
  }
  
  else{
    save[card_num].innerHTML=list[card_num]["save"]
    console.log("i am zero run else")
    var displaynone= document.getElementsByClassName('displaynone')
    for (var i = 0; i < 4; i++) {
      // elements[i].style.display = "none";
      displaynone[i+dd].classList.remove('hidden') ;
    }
    
    var displayyes=document.getElementsByClassName('displayyes')
    for (var i = 0; i < 2; i++) {
      // elements[i].style.display = "none";
      displayyes[i+yy].classList.add('hidden') ;
      
    }
  }




   


 }
 