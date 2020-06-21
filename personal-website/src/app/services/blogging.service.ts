import { map } from 'rxjs/operators';
import { Blog } from './../blog';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloggingService {

private apiURL: string = "https://gjuu8h2223.execute-api.us-east-1.amazonaws.com";

constructor(private http: HttpClient) { }

public getBlogs(count?: number, fromCreatedOn?: string) {
  let url = this.apiURL + "/blogs";
  if (count) {
    url += "?count=" + count;
  }
  if (fromCreatedOn) {
    url += "&fromCreatedOn=" + fromCreatedOn.replace(" ","%20"); 
  }
  return this.http.get<object[]>(url).pipe<Blog[]>(
    map(data => {
      let blogs: Blog[] = []
      data.forEach(item => {
        let blog = new Blog().deserializeItemFromDynamoDBObject(item);
        blog.createdOn = this.transformDate(blog.createdOn);
        blogs.push(blog);
      })
      return blogs;
    })
  );
}

public getBlog(id: string) {
  let url = this.apiURL + "/blog/" + id
  return this.http.get(url).pipe<Blog>(
    map(data => {
      let blog = new Blog().deserializeItemFromDynamoDBObject(data);
      blog.createdOn = this.transformDate(blog.createdOn);
      return blog;
    })
  );
}

public putBlog(blog: Blog) {
  let url = this.apiURL + "/blog/" + blog.id;
  return this.http.put(url,blog);
}

public postBlog(blog: Blog) {
  blog.id = blog.title.trim().toLowerCase().replace(/ /g,"-");
  let url = this.apiURL + "/blog";
  return this.http.post(url,blog);
}

// from iso to January 01, 2020
private transformDate(date: string): string {
  return new Date(date).toLocaleDateString("en",{month:"long",day:"numeric",year:"numeric"});
}

}
