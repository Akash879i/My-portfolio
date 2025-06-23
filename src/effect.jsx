import React, { useEffect, useRef, useState } from "react";
// Import your custom CSS if needed

const App = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <PointerParticles />
      <div className="relative z-10 text-white text-4xl text-center mt-1/4">
        Akash Prajapati
      </div>
    </div>
  );
};

const PointerParticles = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [hue, setHue] = useState(0);
  const pointer = useRef({ x: 0, y: 0, mx: 0, my: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentNode;

    const setCanvasDimensions = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const createParticles = (event, { count, speed, spread }) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = event.clientX - rect.left;
      pointer.current.y = event.clientY - rect.top;
      pointer.current.mx = event.movementX;
      pointer.current.my = event.movementY;

      const newParticles = [];
      for (let i = 0; i < count; i++) {
        newParticles.push(
          new PointerParticle(spread, speed, ctx, pointer.current, hue)
        );
      }
      setParticles((prevParticles) => [...prevParticles, ...newParticles]);
    };

    const handleClick = (event) => {
      createParticles(event, {
        count: 300,
        speed: Math.random() + 1,
        spread: Math.random() + 50,
      });
    };

    const handlePointerMove = (event) => {
      createParticles(event, {
        count: 20,
        speed: Math.sqrt(event.movementX ** 2 + event.movementY ** 2),
        spread: 100,
      });
    };

    parent.addEventListener("click", handleClick);
    parent.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      parent.removeEventListener("click", handleClick);
      parent.removeEventListener("pointermove", handlePointerMove);
    };
  }, [hue]);

  useEffect(() => {
    const animateParticles = () => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      setHue((prevHue) => (prevHue > 360 ? 0 : prevHue + 3));

      particles.forEach((particle, index) => {
        particle.update();
        if (particle.size <= 0.1) {
          setParticles((prevParticles) => {
            const newParticles = [...prevParticles];
            newParticles.splice(index, 1);
            return newParticles;
          });
        }
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }, [particles]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"></canvas>;
};

class PointerParticle {
  constructor(spread, speed, ctx, pointer, hue) {
    this.ctx = ctx;
    this.x = pointer.x;
    this.y = pointer.y;
    this.mx = pointer.mx * 0.1;
    this.my = pointer.my * 0.1;
    this.size = Math.random() + 1;
    this.decay = 0.01;
    this.speed = speed * 0.08;
    this.spread = spread * this.speed;
    this.spreadX = (Math.random() - 0.5) * this.spread - this.mx;
    this.spreadY = (Math.random() - 0.5) * this.spread - this.my;
    this.color = `hsl(${hue}deg 90% 60%)`;
  }

  draw() {
    if (this.size <= 0) return; // Ensure size is not negative
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, Math.max(this.size, 0.1), 0, Math.PI * 2);
    this.ctx.fill();
  }

  collapse() {
    this.size -= this.decay;
  }

  trail() {
    this.x += this.spreadX * this.size;
    this.y += this.spreadY * this.size;
  }

  update() {
    this.draw();
    this.trail();
    this.collapse();
  }
}

export default App;
