const blockSize = 45;

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
        look: '#293241'
    },
    "\\": {
        points: blockForm.schrägR,
        look: '#293241'
    },
    "/": {
        points: blockForm.schrägL,
        look: '#293241'
    },
    "_": {
        points: blockForm.halbUnten,
        look: '#293241'
    }
}


function levelDraw() {
for (let by = 0; by < definitionLevel1.length; by += 1) {
    for (let bx = 0; bx < definitionLevel1[by].length; bx += 1) {
    push()
    translate(bx * blockSize, by * blockSize);
    const character = definitionLevel1[by][bx];
    if (character != ' ') {
        const charType = blockTyp[character];
        fill(charType.look);
        beginShape();
        for (let i = 0; i < charType.points.length; i += 1) {
            vertex(charType.points[i].x, charType.points[i].y);
        }
        endShape(CLOSE);
    }
    pop();
    }
}
}