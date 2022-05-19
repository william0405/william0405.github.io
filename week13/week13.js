function setup() {
    initializeFields();
    // 只做一次
    createCanvas(300, 300);
    fill(color(0xC9, 0x22, 0x22));
    textSize(50);
    // 滑鼠游標對其正中間
    textAlign(CENTER, CENTER);
}

var choice;

function draw() {
    // 每秒60次
    background(color(0x82, 0xC5, 0xE5));
    text("Dinner 1", 150, 50);
    text("Dinner 2", 150, 150);
    text("Dinner 3", 150, 250);
    // int choice=mouseX % 3;//0,1,2
    if (choice == 0)
        ellipse(30, 50, 50, 50);
    if (choice == 1)
        ellipse(30, 150, 50, 50);
    if (choice == 2)
        ellipse(30, 250, 50, 50);
}

function mousePressed() {
    choice = int(random(3));
}

function initializeFields() {
    choice = -1;
}
