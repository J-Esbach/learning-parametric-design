const blockSize = 45;
const tileBlock = 630;

const blockForm = {
    block: [
        {x: 0, y: 0},
        {x: blockSize, y: 0},
        {x: blockSize, y: blockSize},
        {x: 0, y: blockSize},
    ],
    schrägR: [
        {x: 0, y: 0},
        {x: blockSize, y: blockSize},
        {x: 0, y: blockSize},
    ],
    schrägL: [
        {x: blockSize, y: 0},
        {x: blockSize, y: blockSize},
        {x: 0, y: blockSize},
    ],
    halbUnten: [
        {x: 0, y: blockSize/2},
        {x: blockSize, y: blockSize/2},
        {x: blockSize, y: blockSize},
        {x: 0, y: blockSize},
    ]
}

const blockTyp = {
    "0": {
        points: blockForm.block,
        look: '#565cb0',
        tX: tileBlock,
        tY: 0,
    },
    "\\": {
        points: blockForm.schrägR,
        look: '#565cb0',
        tX: tileBlock,
        tY: tileBlock,
    },
    "/": {
        points: blockForm.schrägL,
        look: '#565cb0',
        tX: 0,
        tY: tileBlock,
    },
    "_": {
        points: blockForm.halbUnten,
        look: '#565cb0',
        tX: 2*tileBlock,
        tY: 0,
    }
}


function levelDraw() {
    
    for (let by = 0; by < definitionLevel1.length; by += 1) {
        for (let bx = 0; bx < definitionLevel1[by].length; bx += 1) {
        push()
        if (!tileSheet) {
            translate(bx * blockSize, by * blockSize);
        } else {
            translate(bx * (blockSize-1), by * (blockSize-1));
        }
        const character = definitionLevel1[by][bx];
        if (character != ' ') {
            const charType = blockTyp[character];
            if(!tileSheet) {
                fill(charType.look);
                beginShape();
                for (let i = 0; i < charType.points.length; i += 1) {
                    vertex(charType.points[i].x, charType.points[i].y);
                }
                endShape(CLOSE);
            } else {
                imageMode(CENTER);
                image(tileSheet, blockSize/2+bx, blockSize/2+by, blockSize, blockSize, charType.tX, charType.tY, tileBlock, tileBlock);
            }
        } 
        if (tileSheet && character == ' ') {
            imageMode(CENTER);
            image(tileSheet, blockSize/2+bx, blockSize/2+by, blockSize, blockSize, 0, 0, tileBlock, tileBlock);
        }
        pop();
        }
    }
}