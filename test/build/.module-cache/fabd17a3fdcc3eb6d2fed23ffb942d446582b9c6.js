// tutorial1.js
var CommentBox = React.createClass({displayName: "CommentBox",
    render: function() {
        return ( 
            React.createElement("div", {className: "commentBox"}, 
                "Hello, worldI am a CommentBox." 
            )
        );
    }
});

var Comment = React.createClass({displayName: "Comment",
    render: function() {
        return (
            React.createElement("div", {className: "comment"}, 
                "Hello I am a comment"
            )
        );
    }
});

React.render( 
    React.createElement(CommentBox, null, 
        React.createElement(Comment, null)
    ),
    document.getElementById('example')
);
