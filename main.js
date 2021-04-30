    let c = document.getElementById("my-canvas");
    let ctx = c.getContext("2d");

    let loadImage = (src, callback) => {
        let img = document.createElement("img");
        img.onload = () => callback(img);
        img.src = src;
    }

    let imagePath = (frameNumber, animation) => {
        return "https://github.com/ashishk30/2001.github.io/tree/main" + animation + frameNumber + ".png?raw=true";
    };

    let frames = {
        idle: [1, 2, 3, 4, 5, 6, 7, 8],
        kick: [1, 2, 3, 4, 5, 6, 7],
        punch: [1, 2, 3, 4, 5, 6, 7],
        forward: [1, 2, 3, 4, 5, 6],
        backward: [1, 2, 3, 4, 5, 6],
        block: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };

    let loadImages = (callback) => {
        let images = { idle: [], kick: [], punch: [], forward: [], backward: [], block: []};
        let imagesToLoad = 0;
        ["idle", "kick", "punch", "forward", "backward", "block"].forEach((animation) => {
            let animationFrames = frames[animation];
            imagesToLoad = imagesToLoad + animationFrames.length;
            animationFrames.forEach((frameNumber) => {
                let path = imagePath(frameNumber, animation);
                loadImage(path, (image) => {
                images[animation][frameNumber - 1] = image;
                imagesToLoad = imagesToLoad - 1;
                if(imagesToLoad === 0)
                callback(images);
                }); 
            });
        });
    };

    let poso = 0;

    let animate = (ctx, images, animation, callback) => {

        if(animation === "forward")
        poso += 40;
        else if(animation === "backward")
        poso -= 40;

        images[animation].forEach((image,index) => {
            setTimeout(() => {
                ctx.clearRect(poso, 0, 650, 650);
                ctx.drawImage(image, poso, 0, 650, 650);
            }, index * 100);
        });
        setTimeout(callback, images[animation].length * 100);
    }

    loadImages((images) => {
        let queuedAnimations = [];
        let aux = () => {
            let selectedAnimation;
            if(queuedAnimations.length === 0)
            selectedAnimation = "idle";
            else
            selectedAnimation = queuedAnimations.shift();
            animate(ctx, images, selectedAnimation, aux);
        }
        aux();
        document.getElementById("kicko").onclick = () => {
            queuedAnimations.push("kick");
        };
        document.getElementById("puncho").onclick = () => {
            queuedAnimations.push("punch");
        };
        document.getElementById("forwardo").onclick = () => {
            queuedAnimations.push("forward");
        };
        document.getElementById("backwardo").onclick = () => {
            queuedAnimations.push("backward");
        };
        document.getElementById("blocko").onclick = () => {
            queuedAnimations.push("block");
        };
        document.addEventListener("keypress", (event) => {
            const key = event.key;
            if(key === "d")
            queuedAnimations.push("punch");
            else if(key === "w")
            queuedAnimations.push("kick");
            else if(key === "x")
            queuedAnimations.push("forward");
            else if(key === "a")
            queuedAnimations.push("backward");
            else if(key === "s")
            queuedAnimations.push("block");
        });
     });

    let loadImageo = (src, callback) => {
        let imgo = document.createElement("img");
        imgo.onload = () => callback(imgo);
        imgo.src = src;
    }

    let imagePatho = (frameNumbero, animationo) => {
        return "https://github.com/ashishk30/ashishk30.github.io/blob/master/r" + animationo + frameNumbero + ".png?raw=true";
    };

    let frameso = {
        idle: [1, 2, 3, 4, 5, 6, 7, 8],
        kick: [1, 2, 3, 4, 5, 6, 7],
        punch: [1, 2, 3, 4, 5, 6, 7],
        forward: [1, 2, 3, 4, 5, 6],
        backward: [1, 2, 3, 4, 5, 6],
        block: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };

    let loadImageso = (callback) => {
        let imageso = { idle: [], kick: [], punch: [], forward: [], backward: [], block: []};
        let imagesToLoado = 0;
        ["idle", "kick", "punch", "forward", "backward", "block"].forEach((animationo) => {
            let animationFrameso = frameso[animationo];
            imagesToLoado = imagesToLoado + animationFrameso.length;
            animationFrameso.forEach((frameNumbero) => {
                let patho = imagePatho(frameNumbero, animationo);
                loadImageo(patho, (imageo) => {
                imageso[animationo][frameNumbero - 1] = imageo;
                imagesToLoado = imagesToLoado - 1;
                if(imagesToLoado === 0)
                callback(imageso);
                }); 
            });
        });
    };

    let pos = 650; 

    let animateo = (ctx, imageso, animationo, callback) => {

        if(animationo === "forward")
        pos -= 40;
        else if(animationo === "backward")
        pos += 40;

        imageso[animationo].forEach((imageo,index) => {
            setTimeout(() => {
                ctx.clearRect(pos, 0, 650, 650);
                ctx.drawImage(imageo, pos, 0, 650, 650);
            }, index * 100);
        });
        setTimeout(callback, imageso[animationo].length * 100);
    }

    loadImageso((imageso) => {
        let queuedAnimations = [];
        let aux = () => {
            let selectedAnimation;
            if(queuedAnimations.length === 0)
            selectedAnimation = "idle";
            else
            selectedAnimation = queuedAnimations.shift();
            animateo(ctx, imageso, selectedAnimation, aux);
        }
        aux();
        document.getElementById("kick").onclick = () => {
            queuedAnimations.push("kick");
        };
        document.getElementById("punch").onclick = () => {
            queuedAnimations.push("punch");
        };
        document.getElementById("forward").onclick = () => {
            queuedAnimations.push("forward");
        };
        document.getElementById("backward").onclick = () => {
            queuedAnimations.push("backward");
        };
        document.getElementById("block").onclick = () => {
            queuedAnimations.push("block");
        };
        document.addEventListener("keyup", (event) => {
            const key = event.key;
            if(key === "ArrowRight")
            queuedAnimations.push("backward");
            else if(key === "ArrowUp")
            queuedAnimations.push("kick");
            else if(key === "Enter")
            queuedAnimations.push("forward");
            else if(key === "ArrowLeft")
            queuedAnimations.push("punch");
            else if(key === "ArrowDown")
            queuedAnimations.push("block");
        });
     });
