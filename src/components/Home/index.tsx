import DinamicText from "../DinamicText";
import * as C from "./style";

const Home = () => {
    return(
        <C.Container>
            <DinamicText phrases={["sou autodidata.","adoro aprender.","sou dev front-end."]} />
            <C.Link href="#">Contate-me</C.Link>
            <svg className="wave" width="1920" height="184" viewBox="0 0 1920 184" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 36.8L45.7333 33.7525C91.4667 30.475 182.667 24.725 274.667 33.7525C365.733 43.125 457.333 67.275 548 79.7525C640 92 732 92 822.667 104.247C914.267 116.725 1005.33 140.875 1097.33 147.2C1188.53 153.525 1280 140.875 1372 131.847C1462.8 122.475 1554.67 116.725 1645.33 119.6C1737.2 122.475 1828 135.125 1874.67 141.047L1920 147.2V184H1874.27C1828.53 184 1737.33 184 1645.33 184C1554.27 184 1462.67 184 1372 184C1280 184 1188 184 1097.33 184C1005.73 184 914.667 184 822.667 184C731.467 184 640 184 548 184C457.2 184 365.333 184 274.667 184C182.8 184 92 184 45.3333 184H0V36.8Z" fill="#0887DC"/>
            </svg>
        </C.Container>
    )
}
export default Home;