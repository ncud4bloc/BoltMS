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

var gotDia = false;     // no bolt diameter input yet specified
var gotNumT = false;    // no bolt thread input yet specified


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
    if((gotDia==true) && (gotNumT==true)){
        var xhr = new XMLHttpRequest();
        
        xhr.onload = function(){
            if(xhr.status === 200){
                responseObject = JSON.parse(xhr.responseText);
                
                for (var i = 0; i < responseObject.bolts.length; i++){
                    if((responseObject.bolts[i].size == d) && (responseObject.bolts[i].pitch == nt)){
                        d = responseObject.bolts[i].D; 
                        dhm = responseObject.bolts[i].Dhm;
                        dhp = responseObject.bolts[i].Dhp;
                        dbm = responseObject.bolts[i].Dbm;
                        dbp = responseObject.bolts[i].Dbp;
                        dbh = responseObject.bolts[i].Dbh;
                        ds = responseObject.bolts[i].Ds;
                        dc = responseObject.bolts[i].Dc;
                    }
                }
                //Update the display here
                var detail = d.toFixed(4);
                $('#d').text('');
                $('#d').text(detail);
                var detail = dhm.toFixed(4);
                $('#dhm').text('');
                $('#dhm').text(detail);
                var detail = dhp.toFixed(4);
                $('#dhp').text('');
                $('#dhp').text(detail);
                var detail = dbm.toFixed(4);
                $('#dbm').text('');
                $('#dbm').text(detail);
                var detail = dbp.toFixed(4);
                $('#dbp').text('');
                $('#dbp').text(detail);
                var detail = dbh.toFixed(4);
                $('#dbh').text('');
                $('#dbh').text(detail);
                var detail = ds.toFixed(4);
                $('#ds').text('');
                $('#ds').text(detail);
                var detail = dc.toFixed(4);
                $('#dc').text('');
                $('#dc').text(detail);
            }
        };
        //xhr.open('GET', '../JSON/dimensions.json', true);
        xhr.open('GET', 'https://github.com/ncud4bloc/boltMS/JSON/dimensions.json', true);
        xhr.send(null);   
        gotDia = false;
        gotNumT = false;
    } 
};


/* -------------  Function Calls  ------------ */

$(function(){
        
    $('#diameter').on('click',function(){     
        d = prompt('Enter bolt diameter in decimal format: ');
        console.log('bolt dia = ' + d);
        if ((d==0.164) || (d==0.19) || (d==0.25) || (d==0.3125) || (d==0.375) || (d==0.4375) || (d==0.5) || (d==0.5625) || (d==0.625) || (d==0.75) || (d==0.875) || (d==1.0)){
            gotDia = true; 
            update();
            //calculate();
        } else {
            gotDia = false;
            alert('Invalid diameter entered; please enter valid decimal value from 0.164 to 1.0');
            d = 0.164;
        }
    });   
    
    $('#threads').on('click',function(){     
        nt = prompt('Enter number of threads per inch: ');
        console.log('threads = ' + nt);
        if ((nt==12) || (nt==14) || (nt==16) || (nt==18) || (nt==20) || (nt==24) || (nt==28) || (nt==32) || (nt==36)){
            gotNumT = true;
            update();
            //calculate();
        } else {
            gotNumT = false;
            alert('Invalid thread count entered; please enter valid value from 12 to 36');
            nt = 32;
        }
    });  
    
});