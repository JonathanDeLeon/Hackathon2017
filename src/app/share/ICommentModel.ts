interface ICommentModel {
    commentId: string;
    postId: string;
    userId: string;
    pictureUrl: string;
    details: string;
    name: string;
    date: string;
    like: number;
}
export default ICommentModel;