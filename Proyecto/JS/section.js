document.addEventListener("keyup", e=>{

    if (e.target.matches("#searchword")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".words").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
  
    }
  
  
  })