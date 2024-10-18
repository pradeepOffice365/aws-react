import menuLinks_data from "./data/menu_links.json";

const Header = () => {
    return (
        <header id="intro">
            <article class="fullheight">
                <div class="hgroup">
                    <h1>Landon Hotel</h1>
                    <h2>West London</h2>
                    <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
                </div>
            </article>
  
            <nav id="nav">
                <div class="navbar">
                    <div class="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                    <ul>
                        {
                            menuLinks_data.map((itm) => <li><a className={`icon ${itm.class}`} href={itm.href}>{itm.text}</a></li>)
                        }
                    </ul>
                </div>
            </nav>
      </header>
    );
}

export default Header;