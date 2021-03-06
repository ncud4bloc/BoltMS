var d = 0.164;          // bolt diameter
var dhm = 0.164;        // hole major diameter
var dhp = 0.1302;       // hole pitch diameter (max)
var dbm = 0.1257;       // bolt minor diameter (min)
var dbp = 0.1437;       // bolt pitch diameter (min)
var dbh = 0.0;          // bolt inner diameter (for hollow bolts)
var ds = 0.164;         // bolt diameter at shear plane
var dc = 0.322;         // bolt head diameter
var nt = 32;            // bolt threads per inch
var a = 30;             // bolt thread half-angle
var p = 0.03125;        // bolt pitch
var tensileSA = 160000; // bolt tensile stress allowable
var tensileFA = 2241;   // bolt tensile force allowable
var shearSA =   95000;  // bolt shear stress allowable
var shearFA = 2007;     // bolt shear force allowable
var eb = 2.82e7;        // bolt Young's modulus

var g = 0.175;          // joint grip length
var t = 20.0;           // installation torque
var pex = 50.1;         // applied tensile load
var vex = 895.1;        // applied shear load
var le = 0.11;          // length of thread engagement
var b = 25;             // clamped area angle
var sfu = 1.25;         // ultimate safety factor
var sfy = 1.1;          // yield safety factor
var ff = 1.15;          // fitting factor
var wf = 0.25;          // wrench factor
var ef = 0.02;          // embedment factor
var eif = 0.02;         // elastic interaction factor
var sf = 0.1;           // scatter factor
var mt = 0.2;           // bolt thread friction coefficient
var mh = 0.2;           // bolt head friction coefficient


/* ---------------  Functions  --------------- */

/* Calculate Vector to Target */
function vectorCalc(disToTarget){
    theta = Math.asin(disToTarget);
        /*console.log('Theta = ' + theta + ' radians');*/
    deltaX = Math.sin(theta);
    deltaY = Math.cos(theta);
    eachDelta.push(deltaX);
    eachDelta.push(deltaY);
}

//function calculate(){
//    yadda yadda yadda
//}

function update(){
    $('d')
}


/* -------------  Function Calls  ------------ */

$(function(){
        
    $('#diameter').on('click',function(){     
        d = prompt('Bolt diameter in decimal format: ');
        console.log('bolt dia = ' + d);
        //calculate(); 
        //update();
    });   
    
    $('#threads').on('click',function(){     
        nt = prompt('Number threads per inch: ');
        console.log('threads = ' + nt);
        //calculate();
        //update();
    });  
});