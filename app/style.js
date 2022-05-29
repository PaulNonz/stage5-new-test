function myFunction(){
    let time = new Date().getHours();
    let greeting;
    if (time < 12){
       greeting = 'Goog Morning'
   }else {
       greeting = 'Good day'
   }
   console.log(greeting);
}

//  myFunction()


//  let plants = [ "grass", "crop", "flowers", "Ariables", 12, {
//     name: "fruits", type: "banana"}]
   
//     console.log(plants)
//     console.log('First item is', plants[0])
   
//     plants[3] = "segun"
//     console.log(plants)
//     console.log(typeof (plants))

//     length
//     console.log('length of the plants in array is', 
//     plants.length)

//     plants[3] = "segun"
//     console.log(plants)
//     console.log(typeof (plants.length))

//     console.log('Last item is', plants[plants.length - 1])

   
   let farmProduce = [
       {
           name: "Kids Bay",
           product_img: "g8",
           category: "1 Week Vacation",
           price:"N480,000/Kid"
       },
       {
           name: "Cattle Ranch",
           product_img: "g3",
           category: "9Days Vacation",
           price: "N380,000"  
       },
       {
           name: "Sunset Beach",
           product_img: "g2",
           category: "2 Weeks In S.A",
           price: "N920,000" 
       },
       {
           name: "Love City",
           product_img: "g7",
           category: "3 Weeks Baecation",
           price: "N199,500/Couple" 
       },
       {
           name: "Florida Ireland",
           product_img: "g10",
           category: "2 Weeks Hols(Florida)",
           price: "N1,800,000" 
       },
       {
           name: "Hay Beach",
           product_img: "g11",
           category: "5 Weeks tour",
           price: "N4,300,00" 
       },
       {
           name: "English Tour",
           product_img: "g12",
           category:  "A 2 weeks tourism",
           price: "N150,000/tour" 
       },
       {
           name: "Himalayas",
           product_img: "himayas",
           category: "5 Nights tourism",
           price: "N950,000" 
       },
       {
           name: "Ocean City, Maryland",
           product_img: "g14",
           category: "3 weeks Vacation",
           price: "N1,300,000" 
       },
       {
           name: "Dubai",
           product_img: "dubai",
           category: "9 Days in Dubai",
           price: "N900,000" 
       },
       {
           name: "Chile",
           product_img: "chile",
           category: "4 weeks in Chile",
           price: "N980/Chick" 
       },
       {
           name: "Exquisite Pools(Dubai)",
           product_img: "g17",
           category: "Hotelling",
           price: "N3,000,000"  
       },
       {
           name: "Carribean Ireland",
           product_img: "carribeanPhase1",
           category: "4 weeks exotic stay",
           price: "N2,900,000"  
       },
       {
           name: "Hong Kong",
           product_img: "hongKong",
           category: "Trip To HK",
           price: "N3,000,000"  
       },
        {
           name: "Paris",
           product_img: "paris",
           category: "3 Weeks LOve tour",
           price: "N3,000,000"  
       },
       {
           name: "Brussels",
           product_img: "brussels",
           category: "3 weeks Tourism",
           price: "N2,200,000"  
       },
       {
           name: "Russia Tour",
           product_img: "moscow",
           category: "3 Weeks tour",
           price: "N4,500,000"  
       },
       {
           name: "Las Vegas",
           product_img: "lasVegas",
           category: "Hotelling",
           price: "N4,200,000"  
       }
   ]

       console.log('the third is', farmProduce[2])

       
   // // length
   //     console.log('length of the plants in array is', 
   //     farmProduce.length)


   // farmProduce[3] = "segun"
   // console.log( farmProduce)
   // console.log(typeof  (farmProduce))    

   // for (let i = 0; i < farmProduce.length; i++){
   //     console.log(farmProduce[i])
   // }
       
   // farmProduce. forEach(element => {
   //     console.log(element)
   // });
   
   // Displaying an array on the DOM

   let farmProduceSection = document.getElementById('farmproduce-wrapper');
   let html = '';
   farmProduce.forEach(e => {
       html += `
               <div class="col-lg-4 col-md-4 col-12">
                       <div class="card mt-4" style="  text-align: center; ">
                               <img src="./img/${e.product_img}.WEBP "  class="card-img-top" style="height: 250px; width: auto;" alt=" ... ">
                               
                               <div class="card-body lc   ">
                                   <p class="card-title f1 fs-4 sft fw-bold"> ${e.name} </p>
                                   <p class=" tdc  text-uppercase pt-2" style="font-weight: 750 ; ">Category: ${e.category} </p>
                                   <p class=" tdc pp pt-2 fw-bold" style="color: red;">PRICE: ${e.price}</p>
                                   <div class="order p-3" style="background-color: rgb(58, 184, 58)">
                                   <button  class="btn btn-outline-  pt-1 mb-1 br text-white">Book Now</button>  
                                   </div>
                               </div>
                       </div>
               </div>
       `
       console.log(e)
       
       farmProduceSection.innerHTML = html     
   })

   

   