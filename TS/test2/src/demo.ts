
interface CommentObj{
  comment_user: string,
  comment_link: string,
  comment_content:string,
  comment_createTime:Date,
}
// interface CommentsArr

const posts: (string | number | CommentObj)[]= [1, 2, 3, 'sdfds'];

const o = {
  comment_user: 'hsq',
  comment_link: 'href',
  comment_content: 'content',
  comment_createTime: new Date(),

}
posts.push(o)