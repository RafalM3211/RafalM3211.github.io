const ghpages=require("gh-pages");

console.log("start deploy");

ghpages.publish("public", {
    branch: "deploy",
    message: "deploy updates"
}, (err: Error)=>{
    console.error(err);
});
