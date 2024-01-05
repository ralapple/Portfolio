const messages = []

const username = "ray"

class Message{
    constructor(message, sender){
        this.message = message
        this.sender = sender
    }
}


function add_message(){
    // get the message value
    const input = document.getElementById("new_message").value
    if (input == ''){
        console.log("no message")
    }else{
        const message = new Message(input, username);
        messages.push(message);
        update_message_element(message);
    }
}

function update_message_element(message_object){
    const container = document.createElement("div");
    const message_obj = document.createElement("h4");
    const sender = document.createElement("p");

    container.className = "recent_message";

    sender.innerHTML = message_object.sender;
    message_obj.innerHTML = message_object.message;

    container.appendChild(message_obj);
    container.appendChild(sender);

    document.getElementById("message_list").appendChild(container);
}