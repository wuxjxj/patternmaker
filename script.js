const gallery=document.getElementById('gallery');
const popup=document.getElementById("popup");
const selectedImage=document.getElementById('selectedImage');
const imageIndexes=[1,2,3,4,5,6,7,8,9,10];
const selectedIndex=null;

imageIndexes.forEach(i =>{
  const image=document.createElement('img');
  image.src=`images/sample-${i}.png`;
  image.alt=`sample pattern${i}`;
  image.classList.add("galleryImg");
  image.addEventListener("click",()=>{
    popup.style.transform=`translateY(0)`;
     selectedImage.src=`images/sample-${i}.png`;

  })
  gallery.appendChild(image);
});

popup.addEventListener('click',()=>{
  popup.style.transform=`translateY(-100%)`;
  popup.src='';
  popup.alt='';
});

function changeBackground(){
  const dot = document.getElementById("dot");
  const stripe=document.getElementById("stripe");
  const buffaloCheck=document.getElementById("buffaloCheck");
  const diamond=document.getElementById("diamond");
  

  if(dot.checked==true){
    document.body.style.backgroundImage="url('images/sample-7.png')";
  } else if(stripe.checked==true){
    document.body.style.backgroundImage="url('images/sample-8.png')";
  } else if(diamond.checked==true){
    document.body.style.backgroundImage="url('images/sample-10.png')";
  }
}