import React, {Component} from "react";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import BlogService from "./BlogService"

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: false
        };

        this.addComment = this.addComment.bind(this);
    }

    componentDidMount() {
        // loading
        this.setState({loading: true});

        BlogService.findAll()
            .then(res => {
                console.log('FOUND THESE FROM DB!!!!!', res)
                this.setState({
                    comments: res.data,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    /**
     * Add new comment
     * @param {Object} comment
     */
    addComment(comment) {
        console.log('ADD comment happening!!', comment)
        this.setState({
            loading: false,
            comments: [comment, ...this.state.comments]
        });
    }

    render() {
        console.log('THIS IS OUR STATE', this.state)
        const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
        return (
            <div className="blogcontent">
                <div className="imageandwelcome">
                    </div>

                <div className="row">
                    <div className="col-4  pt-3 border-right">
                        <h6>Post your comments here</h6>
                        <CommentForm addComment={this.addComment}/>
                    </div>
                    <div className="col-8  pt-3 bg-white">
                        <CommentList
                            loading={this.state.loading}
                            comments={this.state.comments}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;