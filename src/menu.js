const menuPage = (() => {

    const content = document.querySelector('#content')
    const menu = document.createElement('div')

    menu.innerHTML = `
        <div id="menupage" data-tab-content>

            <h1 class="menu-header">Menu</h1>
            <div class="menu-container">
                <div class="item">
                    <div>
                        <img src="./images/menu/burger.png">
                    </div>
                    <div>
                        <h4>Hamburger</h4>
                        <hr>
                        <span>buns, tomato, onions, lettuce, and the burger </span>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <img src="./images/menu/pizza.png">
                    </div>
                    <div>
                        <h4>Pizza </h4>
                        <hr>
                        <span>I think tomato sauce, tuna, cheese</span>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <img src="./images/menu/lasagna.png">
                    </div>
                    <div>
                        <h4>Lasagna</h4>
                        <hr>
                        <span>Dont ask me im just the waiter</span>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <img src="./images/menu/pasta.png">
                    </div>
                    <div>
                        <h4>Pasta</h4>
                        <hr>
                        <span>Pasta with tomato sauce from the pizza and garlic</span>
                    </div>
                </div>
            </div>
        </div>

    `



    content.appendChild(menu)
})();

export {menuPage}

