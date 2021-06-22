/* 
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
*/

/* 
interface IPerson{
  firstName: string,
  lastName:string
}
class Person {
  readonly firstName: string
  lastName: string
  fullName:string
  constructor(firstname:string,lastname:string) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.fullName = firstname + '_' + lastname;
  }
  // get fullName () {
  //   return this.firstName + '-' + this.lastName
  // }
  // set fullName (value) {
  //   const names = value.split('-')
  //   this.firstName = names[0]
  //   this.lastName = names[1]
  // }
}

const p: IPerson = new Person('huang', 'sq')
  console.log(p)
 */

interface covidData{
  confirmedCount: number,
  confirmedIncr: number,
  curedCount: number,
  // curedIncr: number,
  // currentConfirmedCount: number,
  // currentConfirmedIncr: number,
  // dateId: number,
  // deadCount: number,
  // deadIncr: number,
  highDangerCount?: number,
  // midDangerCount: number,
  // suspectedCount: number,
  // suspectedCountIncr: number
}

function getCovidData(data: covidData): number{
  const confirmData = data.confirmedCount + data.confirmedIncr + data.curedCount
  return confirmData
}

const data = {
  confirmedCount: 1231,
  confirmedIncr: 232,
  curedCount:21323
}
getCovidData(data)