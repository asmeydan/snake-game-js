const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const snake = {
    width: 50,
    height: 50,
    headN: 5,
    headM: 3,
    direction: "right",
    long: 1
}

//? OYUN ALANI
let map = [ 
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

//? DEGISKENLER
let yemN, yemM, kafaN, kafaM, yem = 0, isLose = 0;
const lose = document.getElementById("lose");
const btn = document.getElementById("btn");

//? YEMI OLUSTURMA
do {
    yemN = Math.floor(Math.random() * 10);
    yemM = Math.floor(Math.random() * 10);
} while (map[yemN][yemM] != -1);
console.log(yemN, yemM);


map[yemN][yemM] = 0;
map[snake.headN][snake.headM] = 1;
console.log(map);


//? HARITAYI YAZDIRMA
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        if( map[i][j] == 0) {
            c.fillStyle = "green";
            c.fillRect(j * snake.width, i * snake.height, snake.width, snake.height);
        }
        if( map[i][j] > 0) {
            c.fillStyle = "blue";
            c.fillRect(j * snake.width, i * snake.height, snake.width, snake.height);
        }
    }
}










setInterval(()=> {
    switch (snake.direction) {
        //? SAGA GİTME
        case "right":
            for(let i = 0; i < 10; i++) {
                for(let j = 0; j < 10; j++) {
                    if(map[i][j] > 0) {
                        map[i][j] += 1
                    }
                    if(map[i][j] > snake.long) {
                        map[i][j] = -1;
                    }
                }
            }
            if(snake.headM + 1 > 9) {
                console.log("sağ duvara çarptın");
                isLose = 1;
            }
            if(map[snake.headN][snake.headM + 1] == 0) {
                console.log("yem yedin");
                yem = 1;
            }
            if(map[snake.headN][snake.headM + 1] > 0) {
                console.log("kuyruğa çarptın");
                isLose = 1;
            }
            map[snake.headN][snake.headM + 1] = 1;
            snake.headM += 1;
            break;

        //? YUKARI GİTME
        case "up":
            for(let i = 0; i < 10; i++) {
                for(let j = 0; j < 10; j++) {
                    if(map[i][j] > 0) {
                        map[i][j] += 1
                    }
                    if(map[i][j] > snake.long) {
                        map[i][j] = -1;
                    }
                }
            }
            if(snake.headN - 1 < 0) {
                console.log("üst duvara çarptın");
                isLose = 1;
            }
            else if(map[snake.headN - 1][snake.headM] == 0) {
                console.log("yem yedin");
                yem = 1;
            }
            else if(map[snake.headN - 1][snake.headM] > 0) {
                console.log("kuyruğa çarptın");
                isLose = 1;
            }
            if(!isLose) {map[snake.headN - 1][snake.headM] = 1;}
            snake.headN -= 1;
            break;

        //? ASAGI GİTME
        case "down":
            for(let i = 0; i < 10; i++) {
                for(let j = 0; j < 10; j++) {
                    if(map[i][j] > 0) {
                        map[i][j] += 1
                    }
                    if(map[i][j] > snake.long) {
                        map[i][j] = -1;
                    }
                }
            }
            if(snake.headN + 1 > 9) {
                console.log("alt duvara çarptın");
                isLose = 1;
            }
            else if(map[snake.headN + 1][snake.headM] == 0) {
                console.log("yem yedin");
                yem = 1;
            }
            else if(map[snake.headN + 1][snake.headM] > 0) {
                console.log("kuyruğa çarptın");
                isLose = 1;
            }
            if(!isLose) {map[snake.headN + 1][snake.headM] = 1;}
            snake.headN += 1;
            break;

        //? SOLA GİTME
        case "left":
            for(let i = 0; i < 10; i++) {
                for(let j = 0; j < 10; j++) {
                    if(map[i][j] > 0) {
                        map[i][j] += 1
                    }
                    if(map[i][j] > snake.long) {
                        map[i][j] = -1;
                    }
                }
            }
            if(snake.headM - 1 < 0) {
                console.log("sol duvara çarptın");
                isLose = 1;
            }
            if(map[snake.headN][snake.headM - 1] == 0) {
                console.log("yem yedin");
                yem = 1;
            }
            if(map[snake.headN][snake.headM - 1] > 0) {
                console.log("kuyruğa çarptın");
                isLose = 1;
            }
            map[snake.headN][snake.headM - 1] = 1;
            snake.headM -= 1;
            break;
    
        default:
            break;
    }


    //? DUVARA VEYA KUYRUGA CARPMA
    if(isLose) {
        lose.style.display = "flex";
        snake.direction = "none";
    }

    c.clearRect(0,0,canvas.width,canvas.height);
    //? HARITAYI YAZDIRMA
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            if( map[i][j] == 0) {
                c.fillStyle = "green";
                c.fillRect(j * snake.width, i * snake.height, snake.width, snake.height);
            }
            if( map[i][j] > 0) {
                c.fillStyle = "blue";
                c.fillRect(j * snake.width, i * snake.height, snake.width, snake.height);
            }
            if( map[i][j] == 1) {
                c.fillStyle = "#144272";
                c.fillRect(j * snake.width, i * snake.height, snake.width, snake.height);
            }
        }
    }

    //? YEM YENIRSE
    if(yem) {
        snake.long += 1;
        yemN = Math.floor(Math.random() * 10);
        yemM = Math.floor(Math.random() * 10);
        while(map[yemN][yemM] != -1) {
            yemN = Math.floor(Math.random() * 10);
            yemM = Math.floor(Math.random() * 10);
        }
        map[yemN][yemM] = 0;
    }
    yem = 0;

}, 400)


window.addEventListener("keydown",(event)=> {
    console.log(event.keyCode);
    if((event.keyCode == 38) && !(snake.direction == "down")) {
        snake.direction = "up";
    }
    else if((event.keyCode == 40) && !(snake.direction == "up")) {
        snake.direction = "down";
    }
    else if((event.keyCode == 39) && !(snake.direction == "left")) {
        snake.direction = "right";
    }
    else if((event.keyCode == 37) && !(snake.direction == "right")) {
        snake.direction = "left";
    }

})

btn.addEventListener("click", ()=> {
    snake.headM = 3;
    snake.headN = 5;
    snake.direction = "right";
    snake.long = 1;
    lose.style.display = "none";
    isLose = 0;
})