let allFilters = document.querySelector(".filter") ;
let openModal = document.querySelector(".open-modal") ;
let closeModal = document.querySelector(".close-modal") ;




openModal.addEventListener("click", openTicketModal) ;
closeModal.addEventListener("click", closeTicketModal) ;

let ticketModalopen = false ;
let isTextTyped = false ;

function openTicketModal(e){
    if(ticketModalopen){
        return ;
    }
    let ticketModal = document.createElement("div") ;
    ticketModal.classList.add("ticket-modal") ;

    ticketModal.innerHTML = `<div class="ticket-text" spellcheck = "false" contentEditable = "true" >Enter text here !</div>
    <div class="tickets-filter">
        <div class="ticket-filter red selected-filter"></div>
        <div class="ticket-filter blue"></div>
        <div class="ticket-filter green"></div>
        <div class="ticket-filter yellow"></div>
        <div class="ticket-filter black"></div>
    </div>`

    // console.log(ticketModal) ;
    document.querySelector("body").append(ticketModal) ;
    ticketModalopen = true ;
    isTextTyped = false ;

    let ticketTextDiv = document.querySelector(".ticket-text") ;
    ticketTextDiv.addEventListener("keypress", handleKeypress) ;

    let ticketFilters = ticketModal.querySelectorAll(".ticket-filter") ;
    for(let i = 0; i < ticketFilters.length; i++){
        ticketFilters[i].addEventListener("click", function(e){
            if(e.target.classList.contains("selected-filter")){
                return ;
            }
            document.querySelector(".selected-filter").classList.remove("selected-filter") ;
            e.target.classList.add("selected-filter") ;
        })
    }
}

function closeTicketModal(e){
    if(ticketModalopen){
        document.querySelector(".ticket-modal").remove() ;
        ticketModalopen = false ;
        isTextTyped = false ;

    }
}

function handleKeypress(e){
    if(e.key == "Enter" && isTextTyped && e.target.textContent){
        let filterSelected = document.querySelector(".selected-filter").classList[1] ;

        let ticketId = uuid() ;

        let ticketInfoObject = {
            ticketFilter : filterSelected,
            ticketValue : e.target.textContent ,
            ticketId : ticketId 
        } ;

        appendTicket(ticketInfoObject) ;
        closeModal.click() ;
        saveTicketToDB(ticketInfoObject) ;
    }

    if(!isTextTyped){
        isTextTyped = true ;
        e.target.textContent = "" ;
    }
}


  