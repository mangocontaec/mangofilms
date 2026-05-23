import React, { useRef, useEffect } from 'react';

const AuroraCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let time = 0;
        let animationFrameId;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const colors = [
            { r: 255, g: 17, b: 0 },    // Crimson Red
            { r: 255, g: 85, b: 70 },   // Scarlet Red
            { r: 186, g: 12, b: 47 },   // Ruby Red
            { r: 128, g: 0, b: 32 }     // Dark Burgundy
        ];

        class Orb {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 400 + 100;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
            }

            draw() {
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.3)`);
                gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                this.x += this.vx + Math.sin(time * 0.001) * 0.5;
                this.y += this.vy + Math.cos(time * 0.001) * 0.5;

                if (this.x < -this.radius || this.x > canvas.width + this.radius || this.y < -this.radius || this.y > canvas.height + this.radius) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                }
            }
        }

        let orbs = [];
        for (let i = 0; i < 10; i++) {
            orbs.push(new Orb());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time++;

            orbs.forEach(orb => {
                orb.update();
                orb.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                display: 'block'
            }}
        />
    );
};

export default AuroraCanvas;
