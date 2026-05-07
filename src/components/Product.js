import one from "../image/one.jpg";
import two from "../image/two.jpg";
import three from "../image/three.jpg";

function Product(){
    return(
        <div class="products">
     
            <div class="box">
             
                        <img src={one} alt="ïmage-one"/>
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
                  
            
            <div class="box">
                <img src={two} alt="image-two"/>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div class="box">
                <img src={three} alt="image-three"/>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>

            
        </div>
    )
}
export default Product;