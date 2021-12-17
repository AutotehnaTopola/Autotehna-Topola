let links=document.querySelectorAll(".file_link");
document.getElementById("search_f").oninput = function(){
    
    let s = this.value.trim();
    s=s.toLowerCase();
    for (let i=0; i<links.length;i++){
        if (s!=""){
            let link=links[i].innerHTML.toLowerCase();
            if(link.search(s)==-1){
                links[i].classList.add("hide");
               
                console.log()
            } else links[i].classList.remove("hide");
           
            if(links[i].parentNode.querySelectorAll(".file_link").length==links[i].parentNode.querySelectorAll(".hide").length){
                links[i].parentNode.classList.add("hide");
            } else links[i].parentNode.classList.remove("hide");
        } else{
            let hide=document.querySelectorAll(".hide");
            for (let i=0;i<hide.length;i++) hide[i].classList.remove("hide")
        }
    }
    
}
let year=document.getElementById("year");
let choice;
year.addEventListener("change", function(){
    choice=year.value;
    data=document.querySelectorAll(".data_block");
    if (choice!=0){
        let datum;
        for(let i=0;i<data.length;i++){
            datum=data[i].querySelector("span").innerHTML;
            if(datum.search(choice)==-1){
                data[i].parentNode.classList.add("hide_d");
            } else data[i].parentNode.classList.remove("hide_d");
 
        }
    }else{
        for(let i=0;i<data.length;i++){
            data[i].parentNode.classList.remove("hide_d");
        }
    }
})
