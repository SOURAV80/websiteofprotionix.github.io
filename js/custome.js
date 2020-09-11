 

 //////////////|||| All custome code will written here with specifeid comments||||||



 //||category-item to show category-content
 function openCity(evt, cityName) {
  var i, category_content, category_item;
  category_content = document.getElementsByClassName("category-content");
  for (i = 0; i < category_content.length; i++) {
    category_content[i].style.display = "none";
  }
  category_item = document.getElementsByClassName("category-item");
  for (i = 0; i < category_item.length; i++) {
    category_item[i].className = category_item[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
//||end category-item to show category-content



// || owl-carousel js code 
$('.owl-carousel.category').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText: [
     "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>"
    ],
    dots: false, 
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
//||end owl-carousel js code

//2 nd carousel
    $('.owl-carousel.working').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>"
    ],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },

        1000:{
            items:5
        }
    }
});


// for parallax-img



