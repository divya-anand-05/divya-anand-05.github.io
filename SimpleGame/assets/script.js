const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake = [];
let length = 1;
let dx = scale;
let dy = 0;
let food = { x: 0, y: 0 };
let gameOver = false;

function initialize() {
    snake = [{ x: scale * 2, y: scale * 2 }];
    length = 1;
    dx = scale;
    dy = 0;
    generateFood();
    gameOver = false;
}

function draw() {
    if (gameOver) {
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText('Game Over', canvas.width / 3, canvas.height / 2);
        return;
    }

ctx.clearRect(0,0,canvas.width,canvas.height)
    // Draw the snake
    ctx.fillStyle = 'green';
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, scale, scale);
    });

    // Draw the food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, scale, scale);
}

function update() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Check for collision with walls or itself
    if (
        head.x < 0 || head.x >= canvas.width ||
        head.y < 0 || head.y >= canvas.height ||
        snake.some(part => part.x === head.x && part.y === head.y)
    ) {
        gameOver = true;
        return;
    }

    snake.unshift(head);

    // Check if the snake has eaten the food
    if (head.x === food.x && head.y === food.y) {
        length++;
        generateFood();
    } else {
        snake.pop();
    }
}

function generateFood() {
    food = {
        x: Math.floor(Math.random() * columns) * scale,
        y: Math.floor(Math.random() * rows) * scale,
    };
}

function changeDirection(e) {
    if (e.key === 'ArrowUp' && dy === 0) {
        dx = 0;
        dy = -scale;
    } else if (e.key === 'ArrowDown' && dy === 0) {
        dx = 0;
        dy = scale;
    } else if (e.key === 'ArrowLeft' && dx === 0) {
        dx = -scale;
        dy = 0;
    } else if (e.key === 'ArrowRight' && dx === 0) {
        dx = scale;
        dy = 0;
    }
}

function gameLoop() {
    if (!gameOver) {
        update();
        draw();
    }
    setTimeout(gameLoop, 350);
}

initialize();
document.addEventListener('keydown', changeDirection);
gameLoop();
