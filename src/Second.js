import './App.css'
import chev from './img/Overline.png'
import bay from './img/bay.png'
import breaks from './img/breaks.png'
import engine from './img/engine.png'
import engCheck from './img/engineCheck.png'
import shop from './img/shopping.png'
import tires from './img/tires.png'
 
function Second(){
    const service = [
        {id:1, foto: bay, p:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.", h1:"Multi Point Inspections" },
        {id:2, foto: engine, p:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.", h1:"Auto Repair"},
        {id:3, foto: breaks, p:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.", h1:"Auto Maintenance"},
        {id:4, foto: tires, p:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.", h1:"Tires "},
        {id:5, foto: engCheck, p:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.", h1:"Service Warranty"},
        {id:6, foto: shop, p:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.", h1:"Shop Online"}
    ];
    return(
        <div className="background-2">
            <div className="container">
                <header className="head-2">
                    <div className="serHead">
                        <img src={chev} className="imgHead"/>
                        <p className="nameHead">Our Services</p>
                    </div>
                    <h1 className="namePage">Sed perspiciatis omnis iste natus</h1>
                </header>
                <div className="service">
                    {
                        service.map(el => (
                            <div key={el.id}  className="serviceName">
                                <img src={el.foto} className="serImg"/>
                                <h1 className="serH1">{el.h1}</h1>
                                <p className="serP">{el.p}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default Second;