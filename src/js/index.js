const MessageInput = document.querySelector(".input-left-logos");
const url = "https://sudsy-emphasized-bugle.glitch.me/messages";
const NameInput = document.querySelector(".input-name");
const nameModal = document.querySelector(".name-modal");
let username = "";
const messageContent = document.querySelector(".ul-message");
const ButtonInput = document.querySelector(".inputBtn");
document.addEventListener("keydown", function (e) {
	const message = MessageInput.value;
	if (message !== "") {
		if (e.key == "Enter") {
			console.log(message);

			fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					message,
					username
				})


			})
				.then(r => {
					if (r.ok == true) {

						fetch(url)
							.then(r => r.json())
							.then(data => {
								messageContent.innerHTML = ""
								for (let i = 0; i < data.length; i++) {

									messageContent.innerHTML +=
										`
                    <div class="messages-div">
                        <div class="messages">
                            <div class="img-message-div">
                                <img class="message-img"
                                    src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
                                    alt="">
                            </div>
                            <div class="name-texts">
                                <ul class="ul-message">
                                    <span class="name-input-msg">${data[i].username}</span>
                                    <li class="message-list-group">
									${data[i].message}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
					`
								}
							})
					}
				})
			MessageInput.value = "";
		}
	}
})
ButtonInput.addEventListener("click", function () {
	if (NameInput.value !== "") {
		username = NameInput.value;
		nameModal.style.display = "none";
	}


})

setInterval(() => {
	fetch(url)
		.then(r => r.json())
		.then(data => {
			messageContent.innerHTML = ""
			for (let i = 0; i < data.length; i++) {

				messageContent.innerHTML +=
					`
                    <div class="messages-div">
                        <div class="messages">
                            <div class="img-message-div">
                                <img class="message-img"
                                    src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
                                    alt="">
                            </div>
                            <div class="name-texts">
                                <ul class="ul-message">
                                    <span class="name-input-msg">${data[i].username}</span>
                                    <li class="message-list-group">
									${data[i].message}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
					`
			}
		})

}, 500)