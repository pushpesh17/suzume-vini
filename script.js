document.getElementById('findHeartBtn').addEventListener('click', function() {
    document.getElementById('newHeart').classList.remove('hidden');
});

document.getElementById('newHeart').addEventListener('click', function() {
    window.location.href = 'proposal.html'; // Redirect to the second page
});


// // proposal page 
// let noBtn = document.getElementById('noBtn');
// let yesBtn = document.getElementById('yesBtn');

// // NO button moves randomly on hover
// noBtn.addEventListener('mouseover', function() {
//     noBtn.style.position = "absolute";
//     noBtn.style.top = Math.random() * 80 + "%";
//     noBtn.style.left = Math.random() * 80 + "%";
// });

// // YES button immediately redirects to the envelope page
// yesBtn.addEventListener('click', function() {
//     window.location.href = 'envelope.html'; // Redirect to the envelope page instantly
// });

// // enevolpe page 


// // Add an event listener to the "Click Me" button to trigger the envelope opening
// document.getElementById('clickMeBtn').addEventListener('click', function() {
//     document.querySelector('.wrapper').classList.add('open');
// });
