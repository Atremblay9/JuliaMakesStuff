const e=[{id:1,name:"Black Geometric Cardigan",images:["../img/BlackCardiganFront.jpg","../img/BlackCardiganBack.jpg"],notes:"",available:"Custom Order Only",type:"Clothes",price:"Priced on Order"},{id:2,name:"Blue Flower Cardigan",images:["../img/BlueCardiganFront.jpg","../img/BlueCardiganBack.jpg"],notes:"",available:"Custom Order Only",type:"Clothes",price:"Priced on Order"},{id:3,name:"Purple Cardigan",images:["../img/PurpleCardiganFront.jpg","../img/PurpleCardiganBack.jpg"],notes:"",available:"Custom Order Only",type:"Clothes",price:"Priced on Order"},{id:4,name:"Coloured Geometric Cardigan",images:["../img/ColouredCardiganFront.jpg","../img/ColouredCardiganBack.jpg"],notes:"",available:"Custom Order Only",type:"Clothes",price:"Priced on Order"},{id:5,name:"Dragon Scale Dice Bag",images:["../img/RainbowDragonScaleDiceBagSide.jpg","../img/RainbowDragonScaleDiceBagBottom.jpg"],notes:" ~ 8cm x 9cm ,  Upcycled Leather Base",available:"Yes!",type:"Bags",price:"$25"},{id:6,name:"Large Dragon Scale Dice Bag",images:["../img/PurpleBluePinkDragonScaleDiceBagSide.jpg"],notes:" ~ 8cm x 9cm ,  Upcycled Leather Base",available:"Yes!",type:"Bags",price:"$25"},{id:7,name:"Forget Me Not Earrings",images:["../img/AmazonPhotos/ForgetMeNotEarrings.jpg"],notes:" Lobster Not Included",available:"Yes!",type:"Earrings",price:"$25"},{id:8,name:"Boo-tiful Earrings",images:["../img/AmazonPhotos/Boo-tifulEarrings.jpg"],notes:"Glow in the dark Ghost earrings",available:"Yes!",type:"Earrings",price:"$35"},{id:9,name:"Rain Brings Rainbows Earrings",images:["../img/AmazonPhotos/RainBringsRainbowsEarrings.jpg"],notes:"",available:"Yes!",type:"Earrings",price:"$25"},{id:10,name:"Granny Too Hip to Be Square",images:["../img/AmazonPhotos/GrannyTooHipEarrings.jpg"],notes:"",available:"Yes!",type:"Earrings",price:"$25"},{id:11,name:"WitchHat",images:["../img/AmazonPhotos/WitchHat.jpg","../img/AmazonPhotos/WitchHat1.jpg"],notes:"",available:"Custom Order Only",type:"Clothes",price:"Priced on Order"},{id:12,name:"Sun And Moon Earrings",images:["../img/AmazonPhotos/SunAndMoonEarrings.jpg","../img/AmazonPhotos/SunAndMoonEarrings1.jpg","../img/AmazonPhotos/SunAndMoonEarrings2.jpg"],notes:"",available:"Custom Order Only",type:"Earrings",price:"Priced on Order"},{id:13,name:"Cherry Earrings",images:["../img/AmazonPhotos/SingleCherryEarrings.jpg"],notes:"",available:"Custom Order Only",type:"Earrings",price:"Priced on Order"},{id:14,name:"Bookmarks",images:["../img/AmazonPhotos/RocketBookmark.jpg","../img/AmazonPhotos/RocketBookmark1.jpg","../img/AmazonPhotos/ShipBookmark.jpg","../img/AmazonPhotos/ShipBookmark2.jpg","../img/AmazonPhotos/ShipBookmark3.jpg","../img/AmazonPhotos/JellyBookmark2.jpg","../img/AmazonPhotos/JellyBookmark3.jpg","../img/AmazonPhotos/KittyBookmark.jpg","../img/AmazonPhotos/KittyBookmark2.jpg"],notes:"Available as Rocket, Boat, Jellyfish, or Kitty",available:"Custom Order Only",type:"Decor",price:"Priced on Order"}],a=document.getElementById("product-grid"),i=document.getElementById("category"),o=document.getElementById("availability"),t=document.querySelector(".cart-items");function r(i){a.innerHTML="",i.forEach(e=>{let i=e.images.map((a,i)=>`
            <div class="carousel-item ${0===i?"active":""}">
                <img src="${a}" class="d-block w-100" alt="${e.name}">
            </div>
        `).join(""),o=e.images.length>1?`
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselProduct${e.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselProduct${e.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    `:"",t=`
    <div class="col-md-6 col-lg-4 mb-4 ">
        <div class="card h-100 w-100 d-flex flex-column" >
            
            <div id="carouselProduct${e.id}" class="carousel slide" data-ride="false" data-interval="false">
                <div class="carousel-inner">
                    ${i}
                </div>
                ${o} <!-- Insert controls only if there is more than 1 image -->
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 class="card-title">${e.name}</h5>
                    <p class="card-text">Price: ${e.price}</p>
                    <p class="card-text">Available: ${e.available}</p>
                    <p class="card-text">Notes: ${e.notes}</p>
                </div>
                <div class="mt-2">
                  <button class="btn btn-primary d-block mx-auto add-to-cart" data-product-id="${e.id}">Add Request</button>
                </div>
            </div>
        </div>
    </div>`;a.innerHTML+=t}),document.querySelectorAll(".add-to-cart").forEach(a=>{a.addEventListener("click",function(){(function(a){let i=e.find(e=>e.id==a);if(i){let e=`
        <div class="card rounded-3 mb-4 cart-item"> 
              <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src="${i.images[0]}" 
                      class="img-fluid rounded-3" alt="${i.name}">
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2">${i.name}</p>
                    <p><span class="text-muted">Price: </span>${i.price}</p>
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <p><span class="text-muted">Availability: </span>${i.available}</p>
                  </div>
                  
                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" class="text-danger remove-from-cart"><i class="fas fa-trash fa-lg"></i></a>
                  </div>

                </div>
                <div class="row mt-3">
                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <label for="details-${i.id}">Details / Comments:</label>
                        <textarea id="details-${i.id}" class="form-control details-input" rows="2" placeholder="Please enter details such as size, colours, materials and any questions you may have."></textarea>
                    </div>
                </div>
              </div>
            </div>`;t.innerHTML+=e,document.querySelectorAll(".remove-from-cart").forEach(e=>{e.addEventListener("click",function(){this.closest(".cart-item").remove()})})}})(this.getAttribute("data-product-id"))})})}function s(){let a=i.value,t=o.value;r(e.filter(e=>{let i="all"===a||e.type===a,o="all"===t||e.available===t;return i&&o}))}i.addEventListener("change",s),o.addEventListener("change",s),window.onload=()=>{r(e),0===document.querySelectorAll(".cart-items").length&&(alert("Please add items to the cart before submitting your request."),parent.parent.classList.add("hidden"))};
//# sourceMappingURL=index.bf2a8ed0.js.map
