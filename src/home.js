const homepage = (() => {

    const content = document.querySelector('#content')

    const home = document.createElement('div')

    home.innerHTML = `
    <div id="homepage" class="active" data-tab-content>
        <div class="hero">
            <div class="semi-hero">
                <h1>Hungry?</h1>
                <h2>Come visit us...</h2>
                <h3>Best food in all galaxy</h3>
                <button class="home-button">See Menu</button>
            </div>
            <div class="info">
                <div class="location">
                    <img src="./images/placeholder.png">
                    <h3>cool voofle 14</h3>
                </div> 
                <div class="times">
                    <div>
                        <img src="./images/free-time.png">
                    </div>
                    
                    <div>
                        <h3><span>Mon-Thurs:</span> 6am-10pm</h3>
                        <h3><span>Fri-Sun:</span> 8am-9pm</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `

    content.appendChild(home)
})();

export {homepage}