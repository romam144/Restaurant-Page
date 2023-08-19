const contactpage = (() => {

    const content = document.querySelector('#content');
    const contact = document.createElement('div');

    contact.innerHTML = `
    <div id="contactpage" data-tab-content>
        <div class="contactForm">
            <form class="inputs">
                <input placeholder="Full Name" type="text" required>
                <input placeholder="Email" type="text" required>
                <input placeholder="Type your message" type="text" required>
                <button type="submit">Send</button>
            </form>
            
        </div>
    </div>
    `


    content.appendChild(contact)
})();

export {contactpage}