var vedio = /** @class */ (function () {
    //constructor
    function vedio(_title, _actors, _directors, _description, _likes, _dislikes, _comments, _views, _publisher, _publishedOn) {
        var _this = this;
        //getters of all the information of the vedio
        this.getTitle = function () {
            return _this.title;
        };
        this.getActors = function () {
            return _this.actors;
        };
        this.getDirectors = function () {
            return _this.directors;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getNoOfLikes = function () {
            return _this.likes;
        };
        this.getNoOfDislikes = function () {
            return _this.dislikes;
        };
        this.getComment1 = function () {
            return _this.comments[0];
        };
        this.getComment2 = function () {
            return _this.comments[1];
        };
        this.getNoOfViews = function () {
            return _this.views;
        };
        this.getPublisherName = function () {
            return _this.views;
        };
        this.getDateOfPublish = function () {
            return _this.publishedOn;
        };
        //get no of comments from array
        this.getNoOfComments = function () {
            return _this.comments.length;
        };
        //set the description explicitly
        this.setDescription = function (desc) {
            _this.description = desc;
        };
        this.title = _title;
        this.actors = _actors;
        this.directors = _directors;
        this.description = _description;
        this.likes = _likes;
        this.dislikes = _dislikes;
        this.comments = _comments;
        this.views = _views;
        this.publisher = _publisher;
        this.publishedOn = _publishedOn;
    }
    return vedio;
}()); //end of the class
var first = new vedio("SANJU", "Ranbir Kapur,Anushka Sharma,Paresh Rawal", "Rajkumar Hirani", "a trailer", "283k", "100k", ["awsome trailer..", "looking forward to see this movie"], 17220, "T Series", "2nd june 2018");
//calling all the function for first input
//showing the values in console
console.log("Title:" + first.getTitle());
console.log("Actors:" + first.getActors());
console.log("Director:" + first.getDirectors());
console.log("Likes:" + first.getNoOfLikes());
console.log("Dislikes:" + first.getNoOfDislikes());
console.log("No of views:" + first.getNoOfViews());
console.log("COMMENTS:");
console.log(first.getComment1());
console.log(first.getComment2());
console.log("Published By:" + first.getPublisherName());
console.log("Published On:" + first.getDateOfPublish());
console.log("No of Comments:" + first.getNoOfComments());
//showing the decription
console.log(first.getDescription());
//changing the description using setter
first.setDescription("In the darkest of moments it is often your family that stands by you. Presenting KAR HAR MAIDAN FATEH a song about hope and courage. Based on the life of Bollywood star Sanjay Dutt and directed by Rajkumar Hirani. ");
//showing the changed desciption
console.log(first.getDescription());
