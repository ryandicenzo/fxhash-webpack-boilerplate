let rand_hash;
const pink  = ["#f49cbb","#ab274f","#e52b50","#d3212d","#9f2b68"]
const orang = ["#a8763e","#dfa787","#f4efe1","#ed9b40","#fcd581"]
const purp = ["#fcd6f9","#ffc6fe","#f6b2ff","#ceafff","#c19bff"]
const blu = ["#03045e","#0077b6","#00b4d8","#90e0ef","#caf0f8"]

const all_color_lists = [pink, orang, purp, blu]

function randomFromList(list) {
    return list[floor(fxrand() * (list.length))]
    
}

function setup() {
    createCanvas(400, 400);
    noLoop();
    
    rand_hash = fxrand();
    console.log(rand_hash)
}

function drawCircle(x,y,minRadius, maxRadius, iter, colors) {
    
    
    const radiusIncr = (maxRadius - minRadius) / iter;

    let c = color(randomFromList(colors))
    let currRadius = minRadius;
    for (let i = 0; i < iter; i++) {
        currRadius += radiusIncr;        
        fill(c)
        c.setAlpha(220-i*15)

        circle(x,y,currRadius);
    }  


    
}
  
function draw() {

    background("#ffe8d6")
    noStroke()
    ellipse()

    const iter = 3 + 6 * rand_hash;

    strokeWeight(10 + 8 * fxrand())
    stroke("green")
    noFill()

    curve(400*fxrand(),400*fxrand(),180+40*fxrand(),160,200,400,400*fxrand(),400*fxrand())
    
    drawSplatter(100,100,200,100,20+ 50*rand_hash,2.0)    
}

// draw n circles in bounding box defined by x,y,w,h
function drawSplatter(x,y,w,h,n,potential_scale) {
    const minRad = 20
    const maxRad = 100;

    const iter_min = 3;
    const iter_sprd = 1;

    const color_list = randomFromList(all_color_lists)
    stroke(randomFromList(color_list))
    strokeWeight(3)
    
    for (let i = 0; i < n; i++) {
        let rX = x + fxrand()*w
        let rY = y + fxrand()*h

        drawCircle(rX, rY, minRad, maxRad, iter_min + fxrand() * iter_sprd, color_list)
    }
}