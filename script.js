document.addEventListener('DOMContentLoaded', () => {
    const mainSection = document.querySelector('.main');
    const animationDuration = 10000; // 10 seconds
    let startTime = null;

    const animateBackground = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

     
        const progress = (elapsed % animationDuration) / animationDuration;

     
        let scale = 1;
        let positionX = 50;
        let positionY = 50;

        if (progress < 0.25) {
            scale = 1 + progress * 0.2; 
            positionX = 50 + progress * 40; 
            positionY = 50 + progress * 40; 
        } else if (progress < 0.5) {
            scale = 1.05 + (progress - 0.25) * 0.2; 
            positionX = 60 + (progress - 0.25) * 40; 
            positionY = 60 + (progress - 0.25) * 40; 
        } else if (progress < 0.75) {
            scale = 1.1 - (progress - 0.5) * 0.2; 
            positionX = 70 - (progress - 0.5) * 40; 
            positionY = 70 - (progress - 0.5) * 40; 
        } else {
            scale = 1.05 - (progress - 0.75) * 0.2; 
            positionX = 60 - (progress - 0.75) * 40; 
            positionY = 60 - (progress - 0.75) * 40; 
        }

       
        mainSection.style.backgroundPosition = `${positionX}% ${positionY}%`;
        mainSection.style.transform = `scale(${scale})`;

      
        requestAnimationFrame(animateBackground);
    };

  
    requestAnimationFrame(animateBackground);
});

