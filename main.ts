class vedio{
 //properties

 title: string;
 actors : string;
 directors : string;
 description:string;
 likes : string;
 dislikes :string;
 comments : string[];
 views:number;
 publisher:string;
 publishedOn:string;

 //constructor
 constructor(_title:string,_actors:string,_directors:string,_description:string,_likes:string,_dislikes:string,_comments:string[],_views:number,_publisher:string,_publishedOn:string){

    this.title=_title;
    this.actors=_actors;
    this.directors=_directors;
    this.description=_description;
    this.likes=_likes;
    this.dislikes=_dislikes;
    this.comments=_comments;
    this.views=_views;
    this.publisher=_publisher;
    this.publishedOn=_publishedOn;

 }
//getters of all the information of the vedio
getTitle = () =>{
    return this.title;
}
getActors=()=>{

  return  this.actors;
}
getDirectors=()=>{

    return this.directors;
}
getDescription=()=>{

    return this.description;
}

getNoOfLikes=()=>{
    return this.likes;

}
getNoOfDislikes=()=>{
    return this.dislikes;

}
getComment1=()=>{
    return this.comments[0];
    
}
getComment2=()=>{
    return this.comments[1];
    
}
getNoOfViews=()=>{

    return this.views;

}
getPublisherName=()=>{

    return this.views;
}
getDateOfPublish=()=>{

    return this.publishedOn;
}

//get no of comments from array
getNoOfComments = () =>{
    return this.comments.length
}

//set the description explicitly
setDescription=(desc:string)=>{

  this.description=desc;

}


}//end of the class

let first= new  vedio("SANJU","Ranbir Kapur,Anushka Sharma,Paresh Rawal","Rajkumar Hirani","a trailer","283k","100k",["awsome trailer..","looking forward to see this movie"],17220,"T Series","2nd june 2018")

//calling all the function for first input
//showing the values in console
console.log("Title:"+first.getTitle())
console.log("Actors:"+first.getActors())
console.log("Director:"+first.getDirectors())
console.log("Likes:"+first.getNoOfLikes())
console.log("Dislikes:"+first.getNoOfDislikes())
console.log("No of views:"+first.getNoOfViews())
console.log("COMMENTS:")
console.log(first.getComment1())
console.log(first.getComment2())
console.log("Published By:"+first.getPublisherName())
console.log("Published On:"+first.getDateOfPublish())

console.log("No of Comments:"+first.getNoOfComments())
//showing the decription
console.log(first.getDescription())
//changing the description using setter
first.setDescription("In the darkest of moments it is often your family that stands by you. Presenting KAR HAR MAIDAN FATEH a song about hope and courage. Based on the life of Bollywood star Sanjay Dutt and directed by Rajkumar Hirani. ")
//showing the changed desciption
console.log(first.getDescription())