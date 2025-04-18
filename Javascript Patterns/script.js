 
// Example of an Module Pattern in JavaScript
// This pattern is used to create private variables and methods
const privateFunc = (() => {
    let privateText = "This is private text";
    changePrivateText = (newText) => {
        privateText = newText;
    }

    return {
        getPrivateText: () => {
            changePrivateText("New private text")
            console.log(privateText);
        }
    }
})();

privateFunc.getPrivateText()

// Example of an Observer Pattern in JavaScript
// This pattern is used to create a subscription system 

const chatView = document.querySelector("#chatView");
const chatSubmit = document.querySelector("#submit");
const chatInput = document.querySelector("#input");

const ObserverPattern = (() => {
    const chats = []; // Array to hold all observers
    return {
        send: (text) => {
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(text);
                }, 1000);
            }).then((text) => {
                chatView.innerHTML += `<p>${text}</p>`;
            });
            chats.push(text);
        },
        show: () => {
            chats.forEach((text) => chatView.innerHTML += `<p>${text}</p>`);
        },
    };
})();

// Subscribing observers
document.addEventListener("DOMContentLoaded", () => {
    ObserverPattern.show();
});

chatSubmit.addEventListener("click", () => {
    const text = chatInput.value;
    if (text) {
        ObserverPattern.send(text);
        chatInput.value = ""; // Clear input after sending
    }
});

// Example of a Singleton Pattern in JavaScript

const Singleton = (() => {
    let instance;

    const createInstance = () => {
        return {
            name: "SingletonInstance",
            sayHello: () => console.log("Hello from the Singleton instance!")
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Example usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true, both are the same instance
instance1.sayHello(); // Output: Hello from the Singleton instance!