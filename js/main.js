document.addEventListener('DOMContentLoaded', () => {
    let resultButton = document.getElementById('result');
    resultButton.addEventListener('click', function () {
        let changeAngle = Number(document.getElementById('angle').value);
        let changeGeneration = Number(document.getElementById('generation').value);
        let changeStepLength = Number(document.getElementById('step').value)
        let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            let initialAxiom = 'A';
            let rules = {A: 'A-B--B+A++AA+B-', B: '+A-BB--B-A++A+B'};
            let angle = changeAngle;
            let generations = changeGeneration;
            let stepLength = changeStepLength;
            let lineWidth = 3;
            let lineColor = '#000000';
            let canvasSize = Math.max(window.innerWidth, window.innerHeight);
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            let axiom = initialAxiom;
            for (let i = 0; i < generations; i = i + 1) {
                axiom = axiom.split('').map(char => rules[char] || char).join('')
            }
            let position = {x: canvasSize / 1.55, y: canvasSize / 9};
            let direction = -Math.PI / 2;
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = lineColor;

            for (const char of axiom) {
                if (char === 'A' || char === 'B') {
                    const newPosition = {
                        x: position.x + stepLength * Math.cos(direction),
                        y: position.y + stepLength * Math.sin(direction)
                    };
                    ctx.beginPath();
                    ctx.moveTo(position.x, position.y);
                    ctx.lineTo(newPosition.x, newPosition.y);
                    ctx.stroke();
                    position = newPosition
                } else if (char === '+') {
                    direction = direction + (angle * Math.PI) / 180
                } else if (char === '-') {
                    direction = direction - (angle * Math.PI) / 180
                }
            }
    })
})











