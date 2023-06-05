const ghpages=require("gh-pages");

ghpages.publish("public", {
    branch: "deploy"
}, (err)=>{
    console.error(err);
});