let myDB = window.localStorage ;
let ticketContainers = document.querySelector(".ticket-container") ;


function loadTickets() {
    let allTickets = myDB.getItem("allTickets");

    if(allTickets) {
      allTickets = JSON.parse(allTickets);

      for (let i = 0; i < allTickets.length; i++) {
        let ticketInfoObject = allTickets[i];
        appendTicket(ticketInfoObject);
      }
    }
  }

loadTickets() ;


function saveTicketToDB(ticketInfoObject) {
    let allTickets = myDB.getItem("allTickets");

    if (allTickets) {
      // already all tickets are present
      allTickets = JSON.parse(allTickets);
      allTickets.push(ticketInfoObject);

      myDB.setItem("allTickets", JSON.stringify(allTickets));

    } else {
      // no all Ticket key found
      let allTickets = [ticketInfoObject];
      myDB.setItem("allTickets", JSON.stringify(allTickets));
    }
  }

function appendTicket(ticketInfoObject){

    let {ticketFilter, ticketValue, ticketId} = ticketInfoObject ;

    let ticketDiv = document.createElement("div") ;
    ticketDiv.classList.add("ticket") ;

    ticketDiv.innerHTML =   `<div class="ticket-header ${ticketFilter}"></div>

    <div class="ticket-content">
        <div class="ticket-info">
            <div class="ticket-id">#${ticketId}</div>
            <div class="ticket-delete fas fa-trash"></div>
        </div>
        
        <div class="ticket-value">${ticketValue}</div>
    </div>`

    let deleteTicketBtn = ticketDiv.querySelector(".ticket-delete");
    
    deleteTicketBtn.addEventListener("click" , function(e){
        ticketDiv.remove(); // will remove ticketDiv from UI..
        deleteTicketFromDb(ticketId);
    })


    ticketContainers.append(ticketDiv) ;
}

function deleteTicketFromDb(ticketId){

    let allTickets = JSON.parse(myDB.getItem("allTickets"));
    // [ {} , {} , {} , {} , {}  ]
    let updatedTickets = allTickets.filter(  function(ticketObject){
        if(ticketObject.ticketId == ticketId){
            return false;
        }
        return true;
    });
    
    myDB.setItem("allTickets" , JSON.stringify(updatedTickets));
}