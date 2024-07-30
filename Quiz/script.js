let timerInterval;
const TIME_LIMIT = 60000; // 60 seconds in milliseconds
let timeRemaining = TIME_LIMIT;
let score = 0;
const NUM_OF_QUESTIONS = 10;
document.addEventListener("DOMContentLoaded", function () {

    const questions = [
        // Networking
        {
            question: "Which type of cable is used to connect a computer to a wired network?",
            choices: [
                "Ethernet cable",
                "USB cable",
                "HDMI cable",
                "VGA cable"
            ],
            answer: "Ethernet cable",
            category: "Networking",
            isMultipleChoice: true
        },
        {
            question: "What is the main difference between TCP and UDP?",
            choices: [
                "TCP is connection-oriented, while UDP is connectionless.",
                "TCP is used for web browsing, while UDP is used for email.",
                "TCP is faster than UDP.",
                "TCP can only be used on Windows systems, while UDP can be used on any operating system."
            ],
            answer: "TCP is connection-oriented, while UDP is connectionless.",
            category: "Networking",
            isMultipleChoice: true
        },
        {
            question: "What is the VPN used for?",
            choices: [
                "To increase the speed of your internet connection.",
                "To manage and organize network resources.",
                "To install software updates automatically.",
                "To create a secure connection over a public network."
            ],
            answer: "To create a secure connection over a public network.",
            category: "Networking",
            isMultipleChoice: true
        },
        {
            question: "What is the main difference between a hub and a switch?",
            choices: [
                "A hub sends data to all devices, while a switch sends data only to the specific device.",
                "A switch sends data to all devices, while a hub sends data only to the specific device.",
                "A hub manages IP addresses, while a switch connects different networks.",
                "A hub provides internet access, while a switch manages local network traffic."
            ],
            answer: "A hub sends data to all devices, while a switch sends data only to the specific device.",
            category: "Networking",
            isMultipleChoice: true
        },
        {
            question: "What is the main difference between IPv4 and IPv6?",
            choices: [
                "IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses.",
                "IPv6 is faster than IPv4.",
                "IPv4 is only used for local networks, while IPv6 is used for the internet.",
                "IPv4 is a wireless protocol, while IPv6 is a wired protocol."
            ],
            answer: "IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses.",
            category: "Networking",
            isMultipleChoice: true
        },
        {
            question: "What does the ping command do?",
            choices: [
                "Tests the connectivity between two network devices",
                "Opens a remote desktop session",
                "Monitors system performance",
                "Formats a hard drive"
            ],
            answer: "Tests the connectivity between two network devices",
            category: "Networking",
            isMultipleChoice: true
        },
        {
            question: "Which protocol is used to securely connect to a remote server?",
            choices: [
                "FTP",
                "HTTP",
                "SSH",
                "SMTP"
            ],
            answer: "SSH",
            category: "Networking",
            isMultipleChoice: true
        },
        {
            question: "What is a MAC address?",
            choices: [
                "A unique identifier assigned to a network interface for communication on a network.",
                "A type of security code used to encrypt data.",
                "A standard used for wireless internet connections.",
                "A protocol for managing network traffic."
            ],
            answer: "A unique identifier assigned to a network interface for communication on a network.",
            category: "Networking",
            isMultipleChoice: true
        },
        {
            question: "What is the typical purpose of a 'firewall' in a network?",
            choices: [
                "To increase internet speed",
                "To manage user accounts",
                "To back up system data",
                "To block unauthorized access while allowing authorized communications"
            ],
            answer: "To block unauthorized access while allowing authorized communications",
            category: "Networking",
            isMultipleChoice: true
        },
        {
            question: "What is the main difference between a modem and a router?",
            choices: [
                "A modem connects to the internet service provider, while a router distributes the internet connection to multiple devices.",
                "A router connects multiple devices, while a modem connects to the internet service provider.",
                "A modem connects to the internet service provider, while a router manages local network traffic.",
                "A modem manages local network traffic, while a router manages internet speed."
            ],
            answer: "A modem connects to the internet service provider, while a router distributes the internet connection to multiple devices.",
            category: "Networking",
            isMultipleChoice: true
        },

        // Software and Utilities
        {
            question: "What is the main difference between OneDrive and SharePoint?",
            choices: [
                "OneDrive provides unlimited storage, while SharePoint has a storage limit.",
                "OneDrive integrates with Microsoft Teams, while SharePoint does not.",
                "OneDrive is used for personal file storage, while SharePoint is used for team collaboration and document management.",
                "OneDrive provides unlimited storage, while SharePoint has a storage limit."
            ],
            answer: "OneDrive is used for personal file storage, while SharePoint is used for team collaboration and document management.",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "What is Safe Mode used for in a computer system?",
            choices: [
                "To increase the computer's speed and performance.",
                "To automatically back up all data.",
                "To access the internet securely.",
                "To run the computer with minimal drivers and services."
            ],
            answer: "To run the computer with minimal drivers and services.",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "What is the primary function of the BIOS in a computer?",
            choices: [
                "To initialize hardware during the boot process and load the operating system",
                "To manage network connections",
                "To perform calculations and run applications",
                "To provide temporary storage for active processes"
            ],
            answer: "To initialize hardware during the boot process and load the operating system",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "What is the function of the 'chkdsk' command in Windows?",
            choices: [
                "To check and repair disk errors",
                "To defragment the hard drive",
                "To check for viruses",
                "To clear the cache"
            ],
            answer: "To check and repair disk errors",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "What is the Windows Update feature used for?",
            choices: [
                "To download and install the latest updates and security patches for the operating system",
                "To manage installed applications",
                "To configure network settings",
                "To customize the desktop appearance"
            ],
            answer: "To download and install the latest updates and security patches for the operating system",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "How can you access the BIOS setup utility on most computers?",
            choices: [
                "By pressing a specific key (such as F2, Del, or Esc) during the startup process",
                "By clicking on 'Start' and selecting 'Settings'",
                "By opening 'Control Panel' and selecting 'System'",
                "By pressing 'Ctrl+Alt+Delete' during the boot process"
            ],
            answer: "By pressing a specific key (such as F2, Del, or Esc) during the startup process",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "How can you access the Task Manager in Windows?",
            choices: [
                "By clicking on 'Start' and selecting 'Task Manager'",
                "By right-clicking on the desktop and selecting 'Task Manager'",
                "By going to 'Control Panel' and selecting 'Task Manager'",
                "By pressing 'Ctrl+Shift+Esc' or 'Ctrl+Alt+Delete' and selecting 'Task Manager'"
            ],
            answer: "By pressing 'Ctrl+Shift+Esc' or 'Ctrl+Alt+Delete' and selecting 'Task Manager'",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "Which Windows utility allows you to roll back the system to a previous state?",
            choices: [
                "System Restore",
                "Disk Cleanup",
                "Task Scheduler",
                "Device Manager"
            ],
            answer: "System Restore",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "What tool allows you to modify which programs start when Windows 10 starts?",
            choices: [
                "msstartup",
                "Control Panel",
                "msconfig",
                "Task Manager"
            ],
            answer: "Task Manager",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "Which tool would you use to configure and manage a Windows firewall?",
            choices: [
                "Firewall & Network Protection",
                "Task Scheduler",
                "Control Panel",
                "Event Viewer"
            ],
            answer: "Firewall & Network Protection",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "Which tool would you use to create and manage user accounts on a Windows machine?",
            choices: [
                "System Settings",
                "User Accounts",
                "Control Panel",
                "Task Manager"
            ],
            answer: "Control Panel",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "Which tool would help you determine why a print job didn't print?",
            choices: [
                "Printer Spooler",
                "Device Manager",
                "Task Manager",
                "Event Viewer"
            ],
            answer: "Printer Spooler",
            category: "Software and Utilities",
            isMultipleChoice: true
        },
        {
            question: "How would you find the IP address of a Windows computer?",
            choices: [
                "Use the Command Prompt and type ipconfig",
                "Open Control Panel and select 'Network Settings'",
                "Check the system properties",
                "Open 'Task Manager' and go to the 'Performance' tab"
            ],
            answer: "Use the Command Prompt and type ipconfig",
            category: "Software and Utilities",
            isMultipleChoice: true
        },

        // Hardware
        {
            question: "What is the primary role of a GPU in a computer?",
            choices: [
                "To process and render images and videos",
                "To perform calculations and run applications",
                "To provide temporary storage for active processes",
                "To manage network traffic"
            ],
            answer: "To process and render images and videos",
            category: "Hardware",
            isMultipleChoice: true
        },
        {
            question: "What is the primary function of the CPU in a computer?",
            choices: [
                "To perform calculations and execute instructions",
                "To process and render images and videos",
                "To provide fast, temporary storage for active processes and applications",
                "To connect to external devices"
            ],
            answer: "To perform calculations and execute instructions",
            category: "Hardware",
            isMultipleChoice: true
        },
        {
            question: "What is the primary function of RAM in a computer?",
            choices: [
                "To provide fast, temporary storage for active processes and applications",
                "To manage network connections",
                "To process and render images and videos",
                "To store data permanently"
            ],
            answer: "To provide fast, temporary storage for active processes and applications",
            category: "Hardware",
            isMultipleChoice: true
        },
        {
            question: "What is the main difference between an HDD (Hard Disk Drive) and an SSD (Solid State Drive)?",
            choices: [
                "HDDs use moving parts, while SSDs use flash memory without moving parts",
                "SSDs are slower than HDDs",
                "HDDs have no moving parts, while SSDs use moving parts",
                "SSDs are only used in laptops, while HDDs are used in desktops"
            ],
            answer: "HDDs use moving parts, while SSDs use flash memory without moving parts",
            category: "Hardware",
            isMultipleChoice: true
        },
        {
            question: "What is the best way to prevent data loss due to hardware failure?",
            choices: [
                "Perform regular backups",
                "Install antivirus software",
                "Increase system RAM",
                "Use a higher resolution monitor"
            ],
            answer: "Perform regular backups",
            category: "Hardware",
            isMultipleChoice: true
        },
        {
            question: "What should you do if a laptop is not charging despite being plugged into the power outlet?",
            choices: [
                "Check the power adapter and connection for damage or loose connections",
                "Increase the screen brightness",
                "Restart the laptop",
                "Remove the battery and reinsert it"
            ],
            answer: "Check the power adapter and connection for damage or loose connections",
            category: "Hardware",
            isMultipleChoice: true
        },

        // Customer Service
        {
            question: "What is SNOW?",
            choices: [
                "A software tool for data backup.",
                "A program for creating digital graphics.",
                "A system for managing hardware inventory.",
                "A platform used for IT service management and automation."
            ],
            answer: "A platform used for IT service management and automation.",
            category: "Customer Service",
            isMultipleChoice: true
        },
        {
            question: "How would you prioritize multiple support tickets?",
            choices: [
                "First come, first served",
                "By the severity of the issue and impact on business operations",
                "Random selection",
                "Based on the client's status"
            ],
            answer: "By the severity of the issue and impact on business operations",
            category: "Customer Service",
            isMultipleChoice: true
        },
        {
            "question": "How should you handle a situation where a customer is frustrated and upset about a recurring issue?",
            "choices": [
                "Tell them to calm down and wait until the issue resolves itself.",
                "Escalate the issue to a higher-level support team immediately.",
                "Acknowledge their frustration, apologize for the inconvenience, and reassure them you will do your best to resolve the issue.",
                "Ask them to contact support again later when they are less upset."
            ],
            "answer": "Acknowledge their frustration, apologize for the inconvenience, and reassure them you will do your best to resolve the issue.",
            "category": "Customer Service",
            "isMultipleChoice": true
        },
        {
            "question": "When creating a support ticket, what key information should you include to ensure the issue is addressed efficiently?",
            "choices": [
                "Customer's full name and contact details.",
                "Detailed description of the issue, steps to reproduce, and any error messages.",
                "The customer's favorite color and hobbies.",
                "A summary of the customer's previous support tickets."
            ],
            "answer": "Detailed description of the issue, steps to reproduce, and any error messages.",
            "category": "Customer Service",
            "isMultipleChoice": true
        },
        {
            "question": "What should you do if you receive a support ticket that is outside your area of expertise?",
            "choices": [
                "Attempt to resolve the issue on your own despite your lack of knowledge.",
                "Forward the ticket to the appropriate team or individual who has the required expertise.",
                "Close the ticket and inform the customer you can't help.",
                "Ignore the ticket and hope the customer finds another solution."
            ],
            "answer": "Forward the ticket to the appropriate team or individual who has the required expertise.",
            "category": "Customer Service",
            "isMultipleChoice": true
        },
        {
            "question": "How should you follow up with a customer after resolving their support ticket?",
            "choices": [
                "Send a generic email confirming the ticket has been closed.",
                "Call the customer to ask if they are satisfied with the resolution.",
                "Send a survey to gather feedback on their support experience and ensure their issue is fully resolved.",
                "Ask them to contact support if they encounter any more issues."
            ],
            "answer": "Send a survey to gather feedback on their support experience and ensure their issue is fully resolved.",
            "category": "Customer Service",
            "isMultipleChoice": true
        }
    ];

    function getRandomQuestions(num) {
        const shuffled = questions.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    function createQuestionElement(questionObj, index) {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionText = document.createElement("p");
        questionText.textContent = (index + 1) + ". " + questionObj.question;
        questionDiv.appendChild(questionText);

        questionObj.choices.forEach(choice => {
            const label = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "question" + index;
            radio.value = choice;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(choice));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement("br"));
        });

        return questionDiv;
    }

    function checkAnswers() {
        const resultsDiv = document.getElementById("result");
        resultsDiv.innerHTML = "";

        selectedQuestions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === question.answer) {
                score++;
            }
        });

        const scoreElement = document.createElement("p");
        scoreElement.textContent = "You got " + score + " out of " + selectedQuestions.length + " correct!";
        resultsDiv.appendChild(scoreElement);
    }

    function startTimer(duration) {
        const timerDisplay = document.getElementById("timerDisplay");
        timerInterval = setInterval(() => {
            const minutes = Math.floor(timeRemaining / 60000);
            const seconds = Math.floor((timeRemaining % 60000) / 1000);
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                alert("Time's up!");
                checkAnswers(); // Automatically submit answers when time is up
                submitResults(); // Call function to generate PDF
            } else {
                timeRemaining -= 1000;
            }
        }, 1000);
    }

    // Get number of questions
    const selectedQuestions = getRandomQuestions(NUM_OF_QUESTIONS);
    const questionContainer = document.getElementById("questionContainer");

    selectedQuestions.forEach((question, index) => {
        const questionElement = createQuestionElement(question, index);
        questionContainer.appendChild(questionElement);
    });

    const submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener("click", () => {
        clearInterval(timerInterval); // Stop the timer if user submits manually
        checkAnswers();
        submitResults(); // Generate PDF when the button is clicked
    });

    startTimer(TIME_LIMIT); // Start the timer
});

function submitResults() {
    // Ensure jsPDF is loaded
    const { jsPDF } = window.jspdf;
    if (!jsPDF) {
        console.error('jsPDF is not loaded');
        return;
    }

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Sample test information
    const candidateName = "Test Smith";
    const positionApplyingFor = "Backfield Engineer";

    // Get the current date and time
    const now = new Date();
    const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    const dateTime = `${date} ${time}`;

    // Calculate percentage
    const percentage = (score / NUM_OF_QUESTIONS * 100).toFixed(2);

    // Format time remaining
    const minutes = Math.floor(timeRemaining / 60000);
    const seconds = Math.floor((timeRemaining % 60000) / 1000);
    const formattedTimeRemaining = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Add static content to PDF
    doc.setFontSize(12);
    doc.text(`Candidate Name : ${candidateName}`, 10, 10);
    doc.text(`Date : ${dateTime}`, 10, 20);
    doc.text(`Position Applying for: ${positionApplyingFor}`, 10, 30);
    doc.text(`Score: ${score}/${NUM_OF_QUESTIONS} (${percentage}%)`, 10, 40);
    doc.text(`Time Remaining : ${formattedTimeRemaining}`, 10, 50);

    // Save the PDF
    try {
        doc.save('document.pdf');
    } catch (error) {
        console.error('Error saving PDF:', error);
    }
}