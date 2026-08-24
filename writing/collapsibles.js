function display(){
    console.log("Click!");
    const head = document.getElementById("head");
    console.log(head.children);
    console.log(this)
    console.log(this.children);
    for (const child of this.children) {
        if (child.class === "content.hidden") {
            child.class = "content.shown";
        }
        else if (child.class === "content.shown") {
            child.class = "content.hidden";
        }
    }
}
