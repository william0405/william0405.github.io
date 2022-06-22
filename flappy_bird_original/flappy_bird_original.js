
// 設定圖片的變數
var backpic, ayasakapic, wallpic, startpic;

// 設定變數跟陣列???
var game, score, highscore, x, y, vertical, wallx, wally;

function setup() {
    initializeFields();
    // 把圖片檔案進到變數裡
    backpic = loadImage("back.png");
    // 把圖片檔案進到變數裡
    ayasakapic = loadImage("ayasaka.jpg");
    // 把圖片檔案進到變數裡
    wallpic = loadImage("wall.png");
    // 把圖片檔案進到變數裡
    startpic = loadImage("ania.png");
    // ????
    game = 1;
    // ????
    score = 0;
    // ????
    highscore = 0;
    // ????
    x = -200;
    // ????
    vertical = 0;
    // 視窗大小
    createCanvas(600, 800);
    // 文字顏色
    fill(0, 0, 0);
    // 文字大小
    textSize(25);
}

function draw() {
    if (// ????
    game == 0) {
        // ????
        imageMode(CORNER);
        // 設定圖片背景y行軸不動 由x變動製造背景移動的感覺
        image(backpic, x, 0);
        // ????
        image(backpic, x + backpic.width, 0);
        // 讓背景往左邊移動
        x -= 5;
        // ????
        vertical += 1;
        // ????
        y += vertical;
        // ????
        if (x == -1800)
            x = 0;
        for (// ????
        var i = 0; // ????
        i < 2; // ????
        i++) {
            // 讓圖片保持在中間
            imageMode(CENTER);
            // ????
            image(wallpic, wallx[i], wally[i] - (wallpic.height / 2 + 100));
            // ????
            image(wallpic, wallx[i], wally[i] + (wallpic.height / 2 + 100));
            if (// ????
            wallx[i] < 0) {
                // ????
                wally[i] = int(random(200, height - 200));
                // ????
                wallx[i] = width;
            }
            // ????
            if (wallx[i] == width / 2)
                highscore = max(++score, highscore);
            // ????
            if (y > height || y < 0 || (abs(width / 2 - wallx[i]) < 25 && abs(y - wally[i]) > 100))
                game = 1;
            // ????
            wallx[i] -= 4;
        }
        // ????
        image(ayasakapic, width / 2, y);
        // score 的位置 +score為分數
        text("Score " + score, 10, 20);
    } else {
        // ????
        imageMode(CENTER);
        // ????
        image(startpic, width / 2, height / 2);
        // high score 的位置 +highscore為分數
        text("High Score: " + highscore, 25, 60);
    }
}

function mousePressed() {
    // ????
    vertical = -15;
    if (// ????
    game == 1) {
        // ????
        wallx[0] = 600;
        // ????
        wally[0] = y = height / 2;
        // ????
        wallx[1] = 900;
        // ????
        wally[1] = 600;
        // ????
        x = game = score = 0;
    }
}

function initializeFields() {
    backpic = null;
    ayasakapic = null;
    wallpic = null;
    startpic = null;
    game = 0;
    score = 0;
    highscore = 0;
    x = 0;
    y = 0;
    vertical = 0;
    wallx = new Array(2);
    wally = new Array(2);
}

function preload() {
// TODO: put method calls that load from files into this method
// I found the following calls that you should move here:
// - on line 5: backpic = loadImage("back.png")
// - on line 6: ayasakapic = loadImage("ayasaka.jpg")
// - on line 7: wallpic = loadImage("wall.png")
// - on line 8: startpic = loadImage("ania.png")
// (note that line numbers are from your Processing code)
}
