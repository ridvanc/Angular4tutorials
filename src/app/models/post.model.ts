export class Post {
    constructor(userid: number, id: number, title: string, body: string) {
        this.UserId = userid;
        this.Id = id;
        this.Title = title;
        this.Body = body;
    }
    public UserId: number;
    public Id: number;
    public Title: string;
    public Body: string;
}