
let submit=document.querySelector('.submit');




submit.addEventListener('click',()=>{
  let title=document.querySelector('#title').value;
  let content=document.querySelector('#content').value;
  let mainc=document.querySelector('#mainc').value;
 
 if(localStorage.getItem('data')==null){
   console.log('noting here')
  let info=[{title:title,content:content,mainc:mainc}]
   localStorage.setItem('data',JSON.stringify(info));
 }

 else{
   let info=JSON.parse(localStorage.getItem('data'));
   info.push({title:title,content:content,mainc:mainc})
   console.log(info);
   localStorage.setItem('data',JSON.stringify(info));
 }
})

// setInterval(asim,1000)
asim()
    function asim(){


      if(localStorage.getItem('data')==null){
        console.log('noting here')
        document.querySelector('.blogs').innerHTML=`<h1>no blogs to show right now</h1>`
      }
     
      else{
        let info=JSON.parse(localStorage.getItem('data'));
info.forEach((i,index)=>{
  console.log();
  
  document.querySelector('.blogs').innerHTML+=` <div class="blog">
  <h1 class="blog-heading purple">${i.title}</h1>
  <p class="blog-text">
     <span>${i.mainc}</span>
     <span class="dots">...</span>       
      <span class="more collapse" id="collapse${index}"> ${i.content} </span>
    
  </p>
  <button class="btn btn-sm color myBtn" data-bs-toggle="collapse" href="#collapse${index}">read</button>
</div>`
})
      }




   
    }
    
   let fog= document.querySelector('.fog');
   fog.addEventListener('click',()=>{
     localStorage.clear()
     console.log(localStorage.getItem('data'))
     console.log('clicked')
     
   })

  