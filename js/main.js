const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
    toggler.addEventListener("click", (e) => { 
    navbar.classList.toggle("nav__expanded");
 });

const accordionHeaderOne = document.querySelector(".accordion__headerOne");
const accordionOne = document.querySelector(".accordionOne");
    accordionHeaderOne.addEventListener("click", (e) => { 
     accordionOne.classList.toggle("accordion__expandedOne");
});

const accordionHeaderTwo = document.querySelector(".accordion__headerTwo");
const accordionTwo = document.querySelector(".accordionTwo");
    accordionHeaderTwo.addEventListener("click", (e) => { 
     accordionTwo.classList.toggle("accordion__expandedTwo");
});

const accordionHeaderThree = document.querySelector(".accordion__headerThree");
const accordionThree = document.querySelector(".accordionThree");
    accordionHeaderThree.addEventListener("click", (e) => { 
     accordionThree.classList.toggle("accordion__expandedThree");
});



function Get(){
 var MyBox = document.getElementById("disable");
 var Scroll_Left = MyBox.scrollLeft;
 var Scroll_Top = MyBox.scrollTop;
 document.getElementById("Result").innerHTML = "Horizontally = " + Scroll_Left + "px" + "<br>" + "Vertically = " + Scroll_Top + "px";
}


document.addEventListener("DomContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideCount = document.querySelectorAll(".slide").length;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.computedStyleMap.transform = `translateX(-${currentIndex * 100}%)`;
    }
    setInterval(showNextSlide, 5000); // Chandge slide every 5 seconds
});



      // let slideIndex = 0;

      // function showSlides() {
      //   let i;
      //   let slides = document.getElementsByClassName("slide");
      //   for (i = 0; i < slides.length; i++) {
      //     slides[i].style.display = "none";
      //   }
      //   slideIndex++;
      //   if (slideIndex > slides.length) {
      //     slideIndex = 1;
      //   }
      //   slides[slideIndex - 1].style.display = "block";
      // }



      // showSlides();
      // setInterval(showSlides, 5000); // Change slide every 5 seconds
      let slideIndex = 0;

      function showSlides() {
        const slides = document.getElementsByClassName("slide");

        // Remove active/inactive classes from all slides
        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active", "inactive");
        }

        // Mark the current slide as inactive
        if (slides[slideIndex]) {
          slides[slideIndex].classList.add("inactive");
        }

        // Increment the slide index
        slideIndex++;
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }

        // Mark the new slide as active
        slides[slideIndex].classList.add("active");
      }

      // Initialize the slideshow and set the timer
      function startSlideshow() {
        showSlides(); // Show the first slide
        setInterval(showSlides, 5000); // Change slide every 5 seconds
      }

      // Start the slideshow when the DOM is fully loaded
      document.addEventListener("DOMContentLoaded", startSlideshow);




      //Select the necessary elemnts
      const prevButton = document.querySelector('.owl__prev'); 
      const nextButton = document.querySelector('.owl__next');
      const stage = document.querySelector('owl__stage');
      const items = document.querySelectorAll('owl__item');

      let currentIndex = 0; //keep track of the currently visible item

      //Function to update the carousel
      function updateCarousel(index) {
        if(index < 0) {
          currentIndex = items.length - 1;//wrap around to the last item
        }else if (index >= items.length){
          currentIndex = 0; //wrap around to the first item
        }else {
          currentIndex = index; //update to the new index
        }

        //Move the stage to the correct position
        const offset = -currentIndex * 100; //Calculate offset in percentages
        // stage.style.transform = `translateX(${offset}%)`;
      }

      // Event listeners for the buttons
      document.body.addEventListener("click", function (event) {
        if (event.target.matches("#myButton")) {
            alert("Button clicked!");
        }
    });

    document.body.addEventListener("click", function (odd) {
      if (event.target.matches("#myButton")) {
          alert("Button clicked!");
      }
  });

      //Initialize the carousel

      updateCarousel(currentIndex);



      
// Active cover


function disableAllTabs() {
  var elements = document.querySelectorAll(".tt__content");
  elements.forEach((element) => {
    // console.log(element);

    element.classList.remove("active");
  });
}
let girdElements = document.querySelectorAll(".grid-item");
console.log(girdElements);

girdElements.forEach((grid) => {
  console.log("Registerd");

  grid.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e.currentTarget);

    var id = e.currentTarget.getAttribute("data-tab-target");
    disableAllTabs();
    console.log(id);

    var element = document.getElementById(id);
    console.log(element);

    element.classList.add("active");
  });
});




const scrollSpeed = 250;
function checkScroll(scrollableDiv) {
    var rightBtn = document.getElementById("btn-right-" + scrollableDiv.id)
    var leftBtn = document.getElementById("btn-left-" + scrollableDiv.id)
    var spacing = 20
    leftBtn.disabled = scrollableDiv.scrollLeft - spacing <= 0;
    rightBtn.disabled = scrollableDiv.scrollLeft + scrollableDiv.clientWidth + spacing >= scrollableDiv.scrollWidth;
}

function scrollToLeft(id) {
    var el = document.getElementById(id)
    el.scrollLeft += scrollSpeed;
    checkScroll(el);

}

function scrollToRight(id) {
    var el = document.getElementById(id)
    el.scrollLeft -= scrollSpeed;
    checkScroll(el);

}
// document.getElementsByClassName("contering").forEach(scrollView => {
//   checkScroll(scrollView)
//  });
Array.from(document.getElementsByClassName("contering")).forEach(element => {
   console.log(element);
 });

// checkScroll();



// click big

function archiveClicked(element) {
  var oldActive = document.querySelector(".item__smal.active-archive");
  oldActive.classList.remove("active-archive");
  element.classList.add("active-archive");
}


//  function archiveClicked(element) {
//    var oldActive = document.querySelector(".item__smal.active-archive");
//    if (oldActive) { // ✅ Check if oldActive exists
//        oldActive.classList.remove("active-archive");
//    }
//    element.classList.add("active-archive");
//  }

//  document.querySelectorAll(".item__smal").forEach(item => {
//    item.addEventListener("click", function() {
//        archiveClicked(this);
//  });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll(".item__smal").forEach(item => {
//       item.addEventListener("click", function() {
//           archiveClicked(this);
//       });
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const owlItem = document.querySelector(".owl__item");

  owlItem.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent any default link behavior
      let imdb = this.querySelector(".hover");
      let tCode = this.querySelector(".t-code");

      if (imdb && tCode) {
          imdb.style.display = "none";
          tCode.style.display = "none";
      }
  });
});