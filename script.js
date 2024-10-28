if(navigator.serviceWorker) {
    navigator.serviceWorker.register("./sw.js")
    .then((res) => {
        console.log("Service Workers Registered");
    })
    .catch((err) => {
        console.log("Service Workers not registered", err);
    })
}