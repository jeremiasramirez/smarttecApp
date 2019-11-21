(function(){

    let result = document.getElementById("result"),
        send = document.getElementById("send");
        send.addEventListener("click", (e)=>{
            if(result.value === ""){
                e.preventDefault()
                floatNotificationError("Incorrect")
            }
        }, false);
})();