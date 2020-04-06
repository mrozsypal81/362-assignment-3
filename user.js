
//This is the basic user object that is created for every user
// of the app when they register
// Some of these attributes inside the user may be moved for security reasons


function User(Uname, Upassword,Uage)
{

    this.Uname = Uname;

    this.Upassword = Upassword;

    this.Uage = Uage;

    this.Upaymeninfo = [];

    this.Ufriends = [];

    this.Usearches = [];

    this.UlocationLat = None;

    this.UlocationLong = None;

    this.Ulocationlog = []

}

User.prototype.getUname = function() {return this.Uname}

User.prototype.getUpassword = function() {return this.Upassword}

User.prototype.getUage = function() {return this.Uage}

User.prototype.getUpaymeninfo = function() {return this.Upaymeninfo}

User.prototype.getUfriends = function() {return this.Ufriends}

User.prototype.getUsearches = function() {return this.Usearches}

User.prototype.getUlocationLat = function() {return this.UlocationLat}

User.prototype.getUlocationLong = function() {return this.UlocationLong}

User.prototype.getUlocationlog = function() {return this.Ulocationlog}