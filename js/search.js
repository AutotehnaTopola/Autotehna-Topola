    let a=document.querySelectorAll(".c1").length;
    let a1=document.querySelectorAll(".c2").length;
    let k=[a,a1];
    let h=document.querySelectorAll(".head");
    console.log(`a=${a}  a1=${a1}`)

    document.getElementById("search").oninput = function(){
        let s = this.value.trim();
        s=s.toLowerCase();
    
    let list = document.querySelectorAll(".list li a");
    //console.log(list[0].innerHTML)
    if (s!=""){
        for (var i = 0; i<list.length;i++){
            let searchW=list[i].innerHTML;
            searchW=searchW.toLowerCase();
            
            if(searchW.search(s)==-1){
                list[i].parentNode.classList.add("hide");
                if (list[i].classList.contains("c1")){
                    k[0]--;
                    
                }
                    
                if (list[i].classList.contains("c2")){
                    k[1]--;
                    

                }
                for (let i=0;i<k.length;i++){
                    if(k[i]<1){
                        h[i].classList.add("hide");
                    }
                    else{
                        h[i].classList.remove("hide");
                    }
                }

                    
                
                
            }   
            else{
                list[i].classList.remove("hide");
                
                list[i].parentNode.classList.remove("hide");

                if (list[i].classList.contains("c1")){
                    k[0]++;
                   
                }
                    
                if (list[i].classList.contains("c2")){
                    k[1]++;
                    

                }
                
                
            }
           
            
        }
        

    }
    else{
        document.querySelectorAll('body .hide').forEach(n => n.classList.remove('hide'))
        
    }

}


