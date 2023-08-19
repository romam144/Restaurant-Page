const navigation = (() => {

    const content = document.querySelector('#content')

    const nav = document.createElement('header')

    nav.innerHTML = `
    <nav>

        <h2>Vaffeliada</h2>
        
        <ul class="links">
            <a id="home" data-tab-target="#home">Home</a>
            <a id="menu" data-tab-target="#menu">Menu</a>
            <a id="contact" data-tab-target="#contact">Contact</a>
        </ul>

    </nav>
    `

    content.appendChild(nav);
})();

