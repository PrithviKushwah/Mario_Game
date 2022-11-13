import platfrom from '../img/3wall.png'
import bg from '../img/bg.png'
import RLeft from '../img/spriteRunLeft.png'
import RRight from '../img/spriteRunRight.png'
import SRight from '../img/spriteStandRight.png'
import SLeft from '../img/spriteStandLeft.png'
import tree from '../img/trees.png'
import platform1 from '../img/1wall.png'
import platform2 from '../img/2wall.png'
import Winner from '../img/winner.png'
import Knife from '../img/knife.png'
import Flag from '../img/flag.png'
import Cactus from '../img/cactus.png'
import Cactusf from '../img/cactusf.png'
import Arrow from '../img/woodenarrow.png'




const c = document.querySelector("canvas")
const ctx = c.getContext("2d");

c.height = "565"
c.width = "1024"
var gravity = 0.8;

class Tree {
    constructor(x, y, image, a, b) {
        this.position = {
            x: x,
            y: y
        }


        this.width = image.width
        this.height = image.height
        this.image = image

        image.width = 400
        image.height = 450
        this.image = image
    }
    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.image.height, this.image.width)
    }

}
class FlagClass {
    constructor(x, y, image) {
        this.position = {
            x: x,
            y: y
        }


        this.width = image.width
        this.height = image.height
        this.image = image

        image.width = 420
        image.height = 160
        this.image = image
    }
    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.image.height, this.image.width)
    }

}
class Attacker {
    constructor(x, y, image) {
        this.position = {
            x: x,
            y: y
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        image.width = 120
        image.height = 100
        this.width = image.width
        this.height = image.height
        this.image = image


    }
    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.image.height, this.image.width)
    }

}

class Platfrom {
    constructor(x, y, image) {
        this.position = {
            x: x,
            y: y
        }


        this.width = image.width
        this.height = image.height
        this.image = image
    }
    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }

}
class genericObject {
    constructor(x, y, image) {
        this.position = {
            x: x,
            y: y
        }


        image.width = c.height

        this.image = image
    }
    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }

}




class Player {

    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 66
        this.height = 150
        this.image = bgs(SRight)
        this.frames = 0
        this.sprites = {
            stand: {
                right: bgs(SRight),
                left: bgs(SLeft),
                cropWidth: 177,
                width: 66
            },
            run: {
                right: bgs(RRight),
                left: bgs(RLeft),
                cropWidth: 341,
                width: 127.875
            }
        }
        this.currentSpirte = this.sprites.stand.right
        this.currentCropWidth = 177
    }
    draw() {
        ctx.drawImage(
            this.currentSpirte,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            400,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
            if (this.frames > 59 && (this.currentSpirte === this.sprites.stand.right || this.currentSpirte === this.sprites.stand.left)) this.frames = 0
            else
        if (this.frames > 29 && (this.currentSpirte === this.sprites.run.right || this.currentSpirte === this.sprites.run.left))
            this.frames = 0
        this.draw()
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        this.draw()
        if (this.position.y + this.height + this.velocity.y <= c.height) {

            this.velocity.y += gravity;
        }
        //   else {
        //     this.velocity.y = 0;
        // }
    }
}

function bgs(imageSrc) {
    const image = new Image();
    image.src = imageSrc
    return image
}



let player = new Player();
let flag = [
    new FlagClass(20600, 60, bgs(Flag))

];
let platfroms = [new Platfrom(-1, 470, bgs(platfrom)),
    new Platfrom(340, 470, bgs(platfrom)),
    new Platfrom(679, 470, bgs(platfrom)),
    new Platfrom(1020, 470, bgs(platfrom)),
    new Platfrom(1361, 470, bgs(platfrom)),
    new Platfrom(2000, 470, bgs(platform2)),
    new Platfrom(2500, 470, bgs(platform2)),
    new Platfrom(3000, 470, bgs(platform1)),
    new Platfrom(3050, 250, bgs(platform2)),
    new Platfrom(3500, 470, bgs(platform1)),
    new Platfrom(3700, 470, bgs(platform1)),
    new Platfrom(4000, 470, bgs(platform1)),
    new Platfrom(4100, 470, bgs(platform1)),
    new Platfrom(4500, 470, bgs(platform1)),
    new Platfrom(5000, 470, bgs(platform1)),
    new Platfrom(5500, 470, bgs(platfrom)),
    new Platfrom(6000, 470, bgs(platform1)),
    new Platfrom(6500, 470, bgs(platform1)),
    new Platfrom(6800, 260, bgs(platform1)),
    new Platfrom(7100, 470, bgs(platform1)),
    new Platfrom(7500, 470, bgs(platform1)),
    new Platfrom(8000, 470, bgs(platform1)),
    new Platfrom(8500, 470, bgs(platform1)),
    new Platfrom(8800, 400, bgs(platform1)),
    new Platfrom(9300, 350, bgs(platform1)),
    new Platfrom(9700, 270, bgs(platfrom)),
    new Platfrom(10200, 270, bgs(platform1)),
    new Platfrom(10600, 470, bgs(platfrom)),
    new Platfrom(10900, 470, bgs(platfrom)),
    new Platfrom(11300, 470, bgs(platfrom)),
    new Platfrom(11600, 470, bgs(platfrom)),
    new Platfrom(12000, 470, bgs(platfrom)),
    new Platfrom(12600, 470, bgs(platfrom)),
    new Platfrom(13000, 470, bgs(platfrom)),
    new Platfrom(13500, 470, bgs(platform2)),
    new Platfrom(14000, 470, bgs(platfrom)),
    new Platfrom(14600, 470, bgs(platform2)),
    new Platfrom(15000, 470, bgs(platfrom)),
    new Platfrom(15600, 470, bgs(platfrom)),
    new Platfrom(15900, 470, bgs(platfrom)),
    new Platfrom(16500, 470, bgs(platfrom)),
    new Platfrom(17000, 470, bgs(platfrom)),
    new Platfrom(17300, 470, bgs(platfrom)),
    new Platfrom(17700, 280, bgs(platform2)),
    new Platfrom(17600, 470, bgs(platform1)),
    new Platfrom(18000, 470, bgs(platfrom)),
    new Platfrom(18400, 289, bgs(platform2)),
    new Platfrom(18600, 470, bgs(platfrom)),
    new Platfrom(19000, 470, bgs(platfrom)),
    new Platfrom(19600, 470, bgs(platfrom)),
    new Platfrom(20000, 470, bgs(platfrom)),
    new Platfrom(20500, 470, bgs(platfrom)),
    new Platfrom(30000, 470, bgs(platfrom)),
];

let attackers = [
    new Attacker(11600, 380, bgs(Cactus)),
    new Attacker(12000, -4, bgs(Cactusf)),
    new Attacker(12100, -4, bgs(Cactusf)),
    new Attacker(12600, 380, bgs(Cactus)),
    new Attacker(13000, 380, bgs(Cactus)),
    new Attacker(13500, -4, bgs(Cactusf)),
    new Attacker(14000, -4, bgs(Cactusf)),
    new Attacker(14600, -4, bgs(Cactusf)),
    new Attacker(15000, 380, bgs(Cactus)),
    new Attacker(15600, 380, bgs(Cactus)),
    new Attacker(15900, -4, bgs(Cactusf)),
    new Attacker(16500, 380, bgs(Cactus)),
    new Attacker(17000, 380, bgs(Cactus)),
    new Attacker(17300, -4, bgs(Cactusf)),
    new Attacker(17600, 380, bgs(Cactus)),
    new Attacker(18000, 380, bgs(Cactus)),
    new Attacker(18600, 380, bgs(Cactus)),
    new Attacker(19000, 380, bgs(Cactus)),
    new Attacker(19600, 380, bgs(Cactus)),
    new Attacker(20000, 380, bgs(Cactus)),

    new Attacker(20200, -4, bgs(Cactusf)),
];


let background = [
    new genericObject(-1, -1, bgs(bg)),
    new genericObject(10000, -1, bgs(bg)),


];
let trees = [
    new Tree(200, 150, bgs(tree)),
    new Tree(1023, 150, bgs(tree)),
    // new Tree(2047, 110, bgs(tree)),
    // new Tree(3070, 150, bgs(tree)),
    // new Tree(300, 120, bgs(Arrow)),
    new Tree(4800, 150, bgs(tree)),
    // new Tree(6139, 110, bgs(tree)),
    new Tree(7300, 150, bgs(tree)),
    new Tree(7830, 150, bgs(tree)),
    // new Tree(9208, 110, bgs(tree)),
    new Tree(10500, 150, bgs(tree)),
    new Tree(11500, 150, bgs(tree)),
    new Tree(20750, 90, bgs(Winner)),
    // new genericObject(12278, -1, bgs(bg))


];



const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
let scrolloffset = 0;

function init() {
    player = new Player();
    platfroms = [new Platfrom(-1, 470, bgs(platfrom)),
        new Platfrom(340, 470, bgs(platfrom)),
        new Platfrom(679, 470, bgs(platfrom)),
        new Platfrom(1020, 470, bgs(platfrom)),
        new Platfrom(1361, 470, bgs(platfrom)),
        new Platfrom(2000, 470, bgs(platform2)),
        new Platfrom(2500, 470, bgs(platform2)),
        new Platfrom(3000, 470, bgs(platform1)),
        new Platfrom(3050, 250, bgs(platform2)),
        new Platfrom(3500, 470, bgs(platform1)),
        new Platfrom(3700, 470, bgs(platform1)),
        new Platfrom(4000, 470, bgs(platform1)),
        new Platfrom(4100, 470, bgs(platform1)),
        new Platfrom(4500, 470, bgs(platform1)),
        new Platfrom(5000, 470, bgs(platform1)),
        new Platfrom(5500, 470, bgs(platfrom)),
        new Platfrom(6000, 470, bgs(platform1)),
        new Platfrom(6500, 470, bgs(platform1)),
        new Platfrom(6800, 260, bgs(platform1)),
        new Platfrom(7100, 470, bgs(platform1)),
        new Platfrom(7500, 470, bgs(platform1)),
        new Platfrom(8000, 470, bgs(platform1)),
        new Platfrom(8500, 470, bgs(platform1)),
        new Platfrom(8800, 400, bgs(platform1)),
        new Platfrom(9300, 350, bgs(platform1)),
        new Platfrom(9700, 270, bgs(platfrom)),
        new Platfrom(10200, 270, bgs(platform1)),
        new Platfrom(10600, 470, bgs(platfrom)),
        new Platfrom(10900, 470, bgs(platfrom)),
        new Platfrom(11300, 470, bgs(platfrom)),
        new Platfrom(11600, 470, bgs(platfrom)),
        new Platfrom(12000, 470, bgs(platfrom)),
        new Platfrom(12600, 470, bgs(platfrom)),
        new Platfrom(13000, 470, bgs(platfrom)),
        new Platfrom(13500, 470, bgs(platform2)),
        new Platfrom(14000, 470, bgs(platfrom)),
        new Platfrom(14600, 470, bgs(platform2)),
        new Platfrom(15000, 470, bgs(platfrom)),
        new Platfrom(15600, 470, bgs(platfrom)),
        new Platfrom(15900, 470, bgs(platfrom)),
        new Platfrom(16500, 470, bgs(platfrom)),
        new Platfrom(17000, 470, bgs(platfrom)),
        new Platfrom(17300, 470, bgs(platfrom)),
        new Platfrom(17700, 280, bgs(platform2)),
        new Platfrom(17600, 470, bgs(platform1)),
        new Platfrom(18000, 470, bgs(platfrom)),
        new Platfrom(18400, 289, bgs(platform2)),
        new Platfrom(18600, 470, bgs(platfrom)),
        new Platfrom(19000, 470, bgs(platfrom)),
        new Platfrom(19600, 470, bgs(platfrom)),
        new Platfrom(20000, 470, bgs(platfrom)),
        new Platfrom(20500, 470, bgs(platfrom)),
        new Platfrom(30000, 470, bgs(platfrom)),
    ];

    attackers = attackers = [
        new Attacker(11600, 380, bgs(Cactus)),
        new Attacker(12000, -4, bgs(Cactusf)),
        new Attacker(12100, -4, bgs(Cactusf)),
        new Attacker(12600, 380, bgs(Cactus)),
        new Attacker(13000, 380, bgs(Cactus)),
        new Attacker(13500, -4, bgs(Cactusf)),
        new Attacker(14000, -4, bgs(Cactusf)),
        new Attacker(14600, -4, bgs(Cactusf)),
        new Attacker(15000, 380, bgs(Cactus)),
        new Attacker(15600, 380, bgs(Cactus)),
        new Attacker(15900, -4, bgs(Cactusf)),
        new Attacker(16500, 380, bgs(Cactus)),
        new Attacker(17000, 380, bgs(Cactus)),
        new Attacker(17300, -4, bgs(Cactusf)),
        new Attacker(17600, 380, bgs(Cactus)),
        new Attacker(18000, 380, bgs(Cactus)),
        new Attacker(18600, 380, bgs(Cactus)),
        new Attacker(19000, 380, bgs(Cactus)),
        new Attacker(19600, 380, bgs(Cactus)),
        new Attacker(20000, 380, bgs(Cactus)),

        new Attacker(20200, -4, bgs(Cactusf)),
    ];
    flag = [
        new FlagClass(20600, 60, bgs(Flag))

    ];

    background = [new genericObject(-1, -1, bgs(bg)),
        new genericObject(10000, -1, bgs(bg)),

    ];
    trees = [
        new Tree(200, 150, bgs(tree)),
        new Tree(1023, 150, bgs(tree)),
        // new Tree(2047, 110, bgs(tree)),
        // new Tree(3070, 150, bgs(tree)),
        // new Tree(3193, 150, bgs(tree)),
        new Tree(4800, 150, bgs(tree)),
        // new Tree(6139, 110, bgs(tree)),
        new Tree(7300, 150, bgs(tree)),
        new Tree(7830, 150, bgs(tree)),
        // new Tree(9208, 110, bgs(tree)),
        new Tree(10500, 150, bgs(tree)),
        new Tree(11500, 150, bgs(tree)),
        new Tree(20750, 90, bgs(Winner)),
        // new genericObject(12278, -1, bgs(bg))


    ];

    scrolloffset = 0;
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, c.width, c.height)
    c.fillRect = 'white'
    attackers.forEach((attacker) => {
        attacker.draw();
    });

    platfroms.forEach((platfrom) => {
        platfrom.draw();
    });
    background.forEach((genericObject) => {
        genericObject.draw();
    });
    trees.forEach((tree) => {
        tree.draw();
    });
    attackers.forEach((tre) => {
        tre.draw();
    });
    flag.forEach((fla) => {
        fla.draw();
    });

    // player.draw();
    platfroms.forEach((platfrom) => {

        platfrom.draw();
        if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed && scrolloffset == 0 && player.position.x > 0)) {

            player.velocity.x = -5
        } else if (keys.right.pressed && player.position.x < 400) {
            player.velocity.x = 5
        } else {
            player.velocity.x = 0
            if (keys.left.pressed && scrolloffset > 0) {
                platfroms.forEach((platfrom) => {
                    platfrom.position.x += 0.24;
                    scrolloffset -= 0.001;
                });
                background.forEach((genericObject) => {
                    genericObject.position.x += 0.24;
                });
                trees.forEach((tree) => {
                    tree.position.x += 0.24;
                });
                attackers.forEach((tre) => {
                    tre.position.x += 0.24;
                });
                flag.forEach((fla) => {
                    fla.position.x += 0.24;
                });


            } else {
                if (keys.right.pressed) {
                    platfroms.forEach((platfrom) => {
                        platfrom.position.x -= 0.24;
                        scrolloffset += 0.001;
                    });
                    background.forEach((genericObject) => {
                        genericObject.position.x -= 0.24;
                    });
                    trees.forEach((tree) => {
                        tree.position.x -= 0.24;
                    });
                    attackers.forEach((tre) => {
                        tre.position.x -= 0.24;
                    });
                    flag.forEach((fla) => {
                        fla.position.x -= 0.24;
                    });

                }
            }
        }
    });



    // win 
    console.log(scrolloffset);

    // if(scrolloffset > )
    flag.forEach((fla) => {
        if (scrolloffset >= 4457.2) {
            player.position.x = fla.position.x;
            player.velocity.x = 0;
            platfroms.velocity.x = 0;
            background.velocity.x = 0
        }

    });

    // lose

    if (player.position.y > c.height) {
        init();


        console.log("Game Over");



    }
    player.update();
    platfroms.forEach((platfrom) => {
        if (player.position.y + player.height <= platfrom.position.y && player.position.y +
            player.height + player.velocity.y >= platfrom.position.y && player.position.x <=
            platfrom.position.x + platfrom.width && player.position.x + player.width >=
            platfrom.position.x) {
            player.velocity.y = 0;
        }
        if (player.position.y <= -1) {
            player.position.y = -1;
        }
    });


    attackers.forEach((atk) => {

        if (player.position.x + 100 >= atk.position.x) {
            atk.velocity.x = -5
        }
        if ((player.position.y + player.height <= atk.position.y && player.position.y +
                player.height + player.velocity.y >= atk.position.y && player.position.x <=
                atk.position.x + atk.width && player.position.x + player.width >=
                atk.position.x)) {
            init();
        }

        if (player.position.x + player.width >= atk.position.x &&
            player.position.x <= atk.position.x + atk.width &&
            player.position.y + player.height >= atk.position.y && player.position.y <= atk.position.y + atk.height) {
            init();
        }

    });

    if (player.position.y <= 0) {
        player.position.y = 5;
        player.velocity.y = 1;
    }

}
animate();

addEventListener('keydown', ({ key }) => {
    console.log(key)
    switch (key) {
        case 'w':
            player.velocity.y -= 19

            break;
        case 'd':
            keys.right.pressed = true
            player.currentSpirte = player.sprites.run.right
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break;
        case 'a':

            keys.left.pressed = setInterval(true, 1000);
            player.currentSpirte = player.sprites.run.left
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break;
        case 's':

            break;
    }
})
addEventListener('keyup', ({ key }) => {
    console.log(key)
    switch (key) {
        case 'w':

            break;
        case 'd':
            keys.right.pressed = false;
            player.currentSpirte = player.sprites.stand.right
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width

            break;
        case 'a':
            keys.left.pressed = false;
            player.currentSpirte = player.sprites.stand.left
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width

            break;
        case 's':

            break;
    }
})