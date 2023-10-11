let image = document.querySelectorAll(".slider-img img")
let imagedisplay = document.querySelector(".previewimg")
//let index = 1;
let currentIndex = 1;
    image.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function (img) {
     currentIndex = parseInt(thumbnail.getAttribute("data-index"))
     imagedisplay.src = `/img/prodact${currentIndex}.jpg`
       })
    
    })


imagedisplay.addEventListener("click", (e) => {
   // console.log(index)
        document.querySelector(".popup").innerHTML = `
        <div class="box">


        <label class="btn1">
        <div class="btnleft">&#x276E</div>
        </label>


        <img class="changeimg" src="/img/prodact${currentIndex}.jpg">


    
        <label class="btn2">
        <div class="btnright">&#x276F</div>
        </label>


        <div class="images">
            <div class="left">
                <div class="img">
                    <img src="/img/prodact1.jpg" width="100px" data-index="1" >
                </div>
                <div class="img">
                    <img src="/img/prodact2.jpg" width="100px" data-index="2">
                </div>
                <div class="img">
                    <img src="/img/prodact3.jpg" width="100px" data-index="3">
                </div>
                <div class="img">
                    <img src="/img/prodact4.jpg" width="100px" data-index="4">
                </div>
            </div>
        </div>
    </div>
        `
        

        document.querySelectorAll(".left .img img").forEach(function (e) {
       e.addEventListener("click", function (event) {
                let changeimg = document.querySelector(".changeimg")
                 currentIndex = parseInt(event.target.getAttribute("data-index"))
                changeimg.classList.add("hidden");
                setTimeout(function () {
                    changeimg.src = `/img/prodact${currentIndex}.jpg`
                    changeimg.classList.remove("hidden");
               
                }, 300)

    
             })
   
             
        })

        document.querySelector(".btnright").addEventListener("click", btnright)
        
    document.querySelector(".btnleft").addEventListener("click", btnleft)
 

});




function btnright(id) {
    let changeimg =  document.querySelectorAll(".left .img ")
    let display = document.querySelector(".changeimg")
 

    currentIndex = (currentIndex  % 4) + 1;
    console.log( "next" +currentIndex)

if(currentIndex === 0) {
    currentIndex = 4
}
display.src = `/img/prodact${currentIndex}.jpg`;

}



function btnleft() {
    let display = document.querySelector(".changeimg")
 


  currentIndex = (currentIndex - 1 ) % 4;




if(currentIndex === 0) {
    currentIndex = 4
}
    display.src = `/img/prodact${currentIndex}.jpg`;

}