// tutorial1.js
var CommentBox = React.createClass({
    render: function() {
        return ( 
            <div className = "commentBox">
                I am a CommentBox. 
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                Hello I am a comment
            </div>
        );
    }
});

React.render( 
    <CommentBox>
        <Comment />
    </CommentBox>,
    document.getElementById('example')
);
