const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square", "icon")
    i.addEventListener("click", CompleteTask);
    return i
};

const CompleteTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};

export default checkComplete;