"use strict"
document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('form');
    form.addEventListener('submit',formSend);
    const message=document.getElementById('send_block');
    async function formSend(e){
       e.preventDefault();
       let error=formValidate(form);
       let formData=new FormData(form);
       if (error==0){
        message.classList.add('_sending');
        let response = await fetch('sendmail.php',{
            method: 'POST',
            body: formData
        });
        if(response.ok){
            let result=await response.json();
            alert(result.message);
            form.reset();
        }else{
            alert("Greška");
            message.classList.remove('_sending');
        }
       }else{
           alert('Niste upisali sve dodatke (sa * je obavezno)');
       }
    }

    function formValidate(form){
        let error=0;
        let formReq=document.querySelectorAll('._req');
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')){
                 if(emailTest(input)){
                     formAddError(input);
                     error++;
                 }
            }else if(input.value==''){
                formAddError(input);
                error++;

            }
        }
        function formAddError(input){
            input.parentElement.classList.add('_error');
            input.classList.add('_error')
        }
        function formRemoveError(input){
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error')
        }
        return error;
    }


    function emailTest(input){
        return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
      };///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  
});