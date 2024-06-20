document.getElementById('forgiveButton').addEventListener('click', function() {
    document.getElementById('message').classList.remove('hidden');
    this.innerHTML = '<i class="fas fa-heart"></i> Thank You!';
    this.disabled = true;
    setTimeout(() => {
        let hearts = document.createElement('div');
        hearts.classList.add('hearts');
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement('i');
            heart.classList.add('fas', 'fa-heart', 'falling-heart');
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            hearts.appendChild(heart);
        }
        document.body.appendChild(hearts);
    }, 1000);
});
