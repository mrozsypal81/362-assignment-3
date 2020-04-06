//Contains userchat object that holds all chat logs for a specific user and friends
// This object is separate because it can get very large


function Userchat(Username)
{

    this.User = Username;

    this.chatlog = [];


}


Userchat.prototype.getUser = function() {return this.User}

Userchat.prototype.getchat = function() {return this.chatlog}