// React starting...
// 
{/* <div id="parent">
<div id="child1">
  <h1>I'm h1 tag</h1>
  <h2>I'm h2 tag</h2>
</div>
<div id="child2">
  <h1>I'm h1 tag</h1>
  <h2>I'm h2 tag</h2>
</div>
</div> */}


// const heading = React.createElement(
//     "h1",
//     {id: "head", xyz: "abc"},
//     "Hello World from React");
//     console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement("div",{id: "parent"},[
//     React.createElement("div",{id: "child1"},[
//         React.createElement("h1",{},"I'm h1 tag"),
//         React.createElement("h2",{},"I'm h2 tag"),
//     ]),
//     React.createElement("div",{id: "child2"},[
//         React.createElement("h1",{},"I'm h1 tag"),
//         React.createElement("h2",{},"I'm h2 tag")
//         ]),
// ]);

const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id: "child1"},[
        React.createElement("h1",{id:"h1"},"I'm h1 tag"),
        React.createElement("h2",{id:"h2"},"I'm h2 tag"),
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{id:"h1"},"I'm h1 tag"),
        React.createElement("h2",{id:"h2"},"I'm h2 tag"),
    ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);












const heading = React.createElement()
