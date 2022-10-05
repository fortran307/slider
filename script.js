let index = 0,
    images = document.querySelectorAll(".wrapper")
    dots = document.querySelectorAll(".dot")

images[index].style.display = "block"
dots[index].classList.add("active")


function show_slide(i){
// show_slide = (i) => {
  index += i

  for (i = 0; i < images.length; i++){
    images[i].style.display = "none"
    dots[i].classList.remove("active")
  }

  if (index > images.length - 1) 
    index = 0 
  
  if (index < 0)
    index = images.length - 1

  images[index].style.display = "block"
  dots[index].classList.add("active")
}

