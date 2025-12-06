    const one = document.getElementById("profile")
    const two = document.getElementById("essential")
    one.addEventListener("click",function(){
       if(two.style.display === "flex"){
            two.style.display = "none";
       }else{
        two.style.display = "flex";
       }
    })


    const kind = document.querySelectorAll(".hearts");
    kind.forEach((item)=>{
        item.addEventListener("click",function(){
            if(item.src.includes("30")){
                item.src = "images/icons8-heart-31.png"
            }else{
                item.src = "images/icons8-heart-30.png"
            }
        })
    })



    const east = document.getElementById("tech")
    const west = document.getElementById("notification")
    east.addEventListener("click",function(){
       if(west.style.display === "block"){
            west.style.display = "none";
       }else{
            west.style.display = "block";
       }
    })