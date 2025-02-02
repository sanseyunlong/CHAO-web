let canvas, ctx;
let t = 0;

function init() {
    canvas = document.getElementById('backgroundCanvas');
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    t += Math.PI / 60;
    
    // 绘制背景动态弧线
    drawBackgroundArcs();
    
    // 绘制法阵
    drawSigil(canvas.width / 4, canvas.height / 4, t);
    drawSigil(3 * canvas.width / 4, canvas.height / 4, t + Math.PI);
    drawSigil(canvas.width / 4, 3 * canvas.height / 4, t + Math.PI / 2);
    drawSigil(3 * canvas.width / 4, 3 * canvas.height / 4, t + 3 * Math.PI / 2);
    
    // 绘制中心大法阵
    drawLargeSigil(canvas.width / 2, canvas.height / 2, t);
    
    // 绘制自由图形
    for (let i = 0; i < 1000; i++) {
        drawPoint(i % 300, i / 400);
    }
    
    requestAnimationFrame(animate);
}

function drawBackgroundArcs() {
    ctx.strokeStyle = 'rgba(96, 165, 250, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < 4; i++) {
        const angleOffset = t + i * Math.PI / 2;
        const radius = 200 + 100 * Math.sin(t / 20 + i);
        
        for (let j = 0; j < 4; j++) {
            const targetX = (j === 0 || j === 3) ? canvas.width / 4 : 3 * canvas.width / 4;
            const targetY = (j === 0 || j === 1) ? canvas.height / 4 : 3 * canvas.height / 4;
            
            ctx.beginPath();
            ctx.moveTo(
                canvas.width / 2 + radius * Math.cos(angleOffset + j * Math.PI / 2),
                canvas.height / 2 + radius * Math.sin(angleOffset + j * Math.PI / 2)
            );
            ctx.quadraticCurveTo(
                canvas.width / 2 + 100 * Math.cos(angleOffset + j * Math.PI / 2),
                canvas.height / 2 + 100 * Math.sin(angleOffset + j * Math.PI / 2),
                targetX,
                targetY
            );
            ctx.stroke();
        }
    }
}

function drawSigil(cx, cy, t) {
    ctx.strokeStyle = 'rgba(96, 165, 250, 0.2)';
    ctx.lineWidth = 1;
    
    const r = 50 + 15 * Math.sin(t / 10);
    const angleOffset = t / 3;
    
    // 绘制多重圆形
    for (let i = 1; i <= 5; i++) {
        const radius = r * i / 5;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // 绘制交错线条
    for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i / 12) + angleOffset;
        ctx.beginPath();
        ctx.moveTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
        ctx.lineTo(cx + r * Math.cos(angle + Math.PI), cy + r * Math.sin(angle + Math.PI));
        ctx.stroke();
    }
}

function drawLargeSigil(cx, cy, t) {
    ctx.strokeStyle = 'rgba(96, 165, 250, 0.3)';
    ctx.lineWidth = 1;
    
    const r = 100 + 30 * Math.sin(t / 10);
    const angleOffset = t / 5;
    
    // 绘制多重圆形
    for (let i = 1; i <= 7; i++) {
        const radius = r * i / 7;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // 绘制交错线条
    for (let i = 0; i < 24; i++) {
        const angle = (Math.PI * 2 * i / 24) + angleOffset;
        ctx.beginPath();
        ctx.moveTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
        ctx.lineTo(cx + r * Math.cos(angle + Math.PI), cy + r * Math.sin(angle + Math.PI));
        ctx.stroke();
    }
}

function drawPoint(x, y) {
    const k = x / 8 - 12.5;
    const d = Math.cos(k / 2) + Math.sin(y / 3) - 0.5;
    const q = x / 4 + 60 + d * k * (1 + Math.cos(d * 4 - t * 2 + y / 14)) * 1.5;
    const c = y * d / 169 - t / 8 + d / 9;
    
    const px = q * 0.7 * Math.cos(c) + canvas.width / 2 + 120 * Math.sin(t * 3 / 32 + c / 4);
    const py = (q + 59) * 0.7 * Math.sin(c) + canvas.height / 2 + 120 * Math.cos(t * 3 / 32 + c / 6);
    
    ctx.fillStyle = 'rgba(96, 165, 250, 0.5)';
    ctx.fillRect(px, py, 1, 1);
}

window.addEventListener('load', init); 