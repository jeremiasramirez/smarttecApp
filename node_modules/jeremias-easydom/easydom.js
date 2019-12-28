
    function windowTemplate(){
        /**
         * creating the template
         */
        let templateWindow = document.createElement("div");
            templateWindow.setAttribute("class", "templateWindow");
            templateWindow.setAttribute("id", "templateWindow");
            document.body.appendChild(templateWindow);
    }

    /*
    * closing window
    * */
    function closeTemplate(buttonClose, templateWindow=null){

        //if button click then
        buttonClose.addEventListener("click", function(){
            templateWindow.classList.add("out");

            setTimeout(()=>{
                templateWindow.remove();
            },200);

        });


        //if template click then
        templateWindow.addEventListener("click", function(){


            templateWindow.classList.add("out");

            setTimeout(()=>{

                templateWindow.remove();
            },200);

        });
    }

    function closeTemplateOnly(buttonClose, templateWindow) {

        //if button click then
        buttonClose.addEventListener("click", function () {
            templateWindow.classList.add("out");

            setTimeout(() => {
                templateWindow.remove();
            }, 200);

        });

    }

    function windowError(title=null, msj=null) {
        windowTemplate();


        //container window
        let containerWindow = document.getElementById("templateWindow");


        if( (msj === null) && (title === null) ){

            title = "Title error";
            msj = "Description error";

        }
        let titleWindow = document.createElement("h1");
            titleWindow.setAttribute("class", "titleWindow");
            titleWindow.setAttribute("id", "titleWindow");
            titleWindow.textContent = title;


        let messageWindow = document.createElement("p");
            messageWindow.setAttribute("class", "messageWindow");
            messageWindow.setAttribute("id", "messageWindow");
            messageWindow.textContent = msj;

        let buttonOk = document.createElement("button");
            buttonOk.setAttribute("class", "buttonOk");
            buttonOk.setAttribute("id", "buttonOk");
            buttonOk.textContent = "OK";

        let windowErr = document.createElement("div");
            windowErr.setAttribute("class", "windowError");
            windowErr.setAttribute("id", "windowError");

            windowErr.appendChild(titleWindow);
            windowErr.appendChild(messageWindow);
            windowErr.appendChild(buttonOk);




        if (containerWindow) {
            containerWindow.appendChild(windowErr);
        }

        let buttonClose = document.getElementById("buttonOk");
        let templateWindow = document.getElementById("templateWindow");

         if(buttonClose && templateWindow){
             closeTemplate(buttonClose, templateWindow);
         }



    }


  

    function windowAsk(msj="You want to do?", func) {


        windowTemplate();
        msj = "¿" + msj + "?";

        //container window
        let containerWindow = document.getElementById("templateWindow");




        let messageAsk = document.createElement("p");
            messageAsk.setAttribute("class", "messageWindow");
            messageAsk.setAttribute("id", "messageWindow");
            messageAsk.textContent = msj;

        let buttonAccept = document.createElement("button");
            buttonAccept.setAttribute("class", "buttonAccept");
            buttonAccept.setAttribute("id", "buttonAccept");
            buttonAccept.textContent = "Accept";

        let buttonCancel = document.createElement("button");
            buttonCancel.setAttribute("class", "buttonCancel");
            buttonCancel.setAttribute("id", "buttonCancel");
            buttonCancel.textContent = "Cancel";

        let windowAsk = document.createElement("div");
            windowAsk.setAttribute("class", "windowAsk");
            windowAsk.setAttribute("id", "windowAsk");

            windowAsk.appendChild(messageAsk);
            windowAsk.appendChild(buttonAccept);
            windowAsk.appendChild(buttonCancel);




        if (containerWindow) {
            containerWindow.appendChild(windowAsk);
        }

        let btnCancel = document.getElementById("buttonCancel");

        if(btnCancel){
            closeTemplateOnly(btnCancel, containerWindow)
        }

        let acceptButton = document.getElementById("buttonAccept");

        if(acceptButton){

            closeTemplateOnly(acceptButton, containerWindow);
            acceptButton.addEventListener("click", function(){
                return func();
            })

            
        }


    }


function addEnd(elementId=null, parentsId=null){

    if(elementId != null){

        if(parentsId != null){

            parentsId.appendChild(elementId);

        }
        else{
            console.error("parent empty")
        }

    }
    else{
        console.error("element child empty")
    }



}
function addFirst(elementId=null, parentsId=null){

    if(elementId != null){

        if(parentsId != null){

            parentsId.insertAdjacentElement('afterbegin', elementId);

        }
        else{
            console.error("parent empty")
        }

    }
    else{

        console.error("element child empty")
    }



}

function withId(elementId){
    if(elementId != null && elementId != ""){
       
       elementId= document.getElementById(elementId);

       if(elementId){
            return elementId
       }

    }
    else{
        console.log("error: empty id");
    }
}

function deleteMsj(msj){
        if(msj){
            setTimeout(()=>{
                msj.remove();
            }, 4000);

        }
}
function templateNotificationError(err){
	if(!document.getElementById("templateNotificationError")){      
	  if(err !== "" && err !== null && err !== undefined){

            let templateNotification =  document.createElement("div");
                templateNotification.setAttribute("class", "templateNotificationError");
                templateNotification.setAttribute("id", "templateNotificationError");

                let msjError = document.createElement("p");
                    msjError.setAttribute("class", "messageError");
                    msjError.setAttribute("id", "messageError");
                    msjError.textContent = err;
                    templateNotification.appendChild(msjError);

                document.body.appendChild(templateNotification);

                    deleteMsj(document.getElementById("templateNotificationError"));
        	}
	}
}


    function templateNotificationInfo(err){
        if(!document.getElementById("templateNotificationInfo")){
		if(err !== "" && err !== null && err !== undefined){

            let templateNotification =  document.createElement("div");
                templateNotification.setAttribute("class", "templateNotificationInfo");
                templateNotification.setAttribute("id", "templateNotificationInfo");

            let msjInfo = document.createElement("p");
                msjInfo.setAttribute("class", "messageInfo");
                msjInfo.setAttribute("id", "messageInfo");
                msjInfo.textContent = err;
            templateNotification.appendChild(msjInfo);

            document.body.appendChild(templateNotification);

            //delete element
            deleteMsj(document.getElementById("templateNotificationInfo"))
        	}
	}
    }








    function floatNotificationError(err){
        templateNotificationError(err);
    }

    function floatNotificationInfo(err){
        templateNotificationInfo(err);
    }

 

/*
    Notification

    * floatNotificationError(err), recibe un mensaje de error emergente para mostrar
    * floatNotificationInfo(err), recibe un mensaje de emergente para mostrar
    -----------------------



    * withId("id"), obtiene elemento html por id
    * addEnd(idElement, parent), agrega un elemento al final del parent, recibe el id del eleemento a agregar y el id del elemento padre 
    * addFirst(idElement, parent), agrega un elemento al principio del parent, recibe el id del eleemento a agregar y el id del elemento padre 
    * windowError("title error", "description error"); msj error => muestra un mensaje de error, recibe el titulo del error y el mensaje
    * windowAsk(msjWindow, url); lleva al usuario a cierto sitio, recibe un msj y una url a cual nos llevara 
*/

