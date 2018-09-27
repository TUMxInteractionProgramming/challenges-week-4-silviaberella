/* Definition of global vaiables */
var currentChannel = {
    name:"#SevenContinents", 
    createdOn:"April 1, 2016", 
    createdBy: "minus.plus.yummy",  
    starred: "true",
    expriresIn: 100,
    messageCount: 999
};

/* Definition der aktuellen Position */
var currentLocation = {longitude: 47.793358399999995,latitude: -4.286696};
// createdBy="FRANCE.BRETAGNE.GULVINEC"};
console.log("Current Location", currentLocation);

/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
  
    //Log the channel switch
    console.log("Tuning in to channel", channelName);
    // Store current selected channel in global variable currentChannel
    currentChannel = channelName;
    console.log("Current Channel", currentChannel);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';

    /* #6 #liking channels on #click */
    (channelName.starred == "true") ? ($('#channel-star').removeClass('far fa-star')) : ($('#channel-star').removeClass('fas fa-star'));
    (channelName.starred == "true") ? ($('#channel-star').addClass('fas fa-star')) : ($('#channel-star').addClass('far fa-star'));
 
    /*$('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');*/

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function star() {
    //currentChannel.starred = NOT(currentChannel.starred);
    //console.log("In star function");
    console.log("Current Channel", currentChannel);
    //console.log("Current Channel Starred", currentChannel.starred);
    /* $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png'); */
    /* If clicking on star in app bar the star should toggle to filled star as before the image with filled star above has been displayed */
    (currentChannel.starred == "true") ? ($('#channel-star').removeClass('fas fa-star')) : ($('#channel-star').removeClass('far fa-star'));
    (currentChannel.starred == "true") ? ($('#channel-star').addClass('far fa-star')) : ($('#channel-star').addClass('fas fa-star'));
       
    // $('#channel-star').removeClass('far fa-star');
    // $('#channel-star').addClass('fas fa-star');
    (currentChannel.starred == "true") ? (currentChannel.starred = "false") : (currentChannel.starred = "true");
    //currentChannel.starred = "true";
             
    console.log("Current Channel Starred", currentChannel.starred);
    //currentChannel.name="#SevenContinents";
    console.log("Current Channel.name", currentChannel.name);
    //(currentChannel.starred == "true") ? ($('#star' + currentChannel.name).removeClass('far fa-star')) : ($('#star' + currentChannel.name).removeClass('fas fa-star'));
        
    /* Below some try and error has been made, which can be currently ignored 
    if (currentChannel.name.localeCompare("#Yummy")){
       console.log("Ich bin im Yummy Channel");
       (currentChannel.starred == "true") ? ($('#starYummy').removeClass('far fa-star')) : ($('#starYummy').removeClass('fas fa-star'));
       (currentChannel.starred == "true") ? ($('#starYummy').addClass('fas fa-star')) : ($('#starYummy').addClass('far fa-star'));
      }  else if (currentChannel.name.localeCompare("#SevenContintents")){
        console.log("In if statement in #SevenContintents channel");
        (currentChannel.starred == "true") ? ($('#starSevenContintents').removeClass('far fa-star')) : ($('#starSevenContintents').removeClass('fas fa-star'));
        (currentChannel.starred == "true") ? ($('#starSevenContintents').addClass('fas fa-star')) : ($('#starSevenContintents').addClass('far fa-star'));
      }  else if (currentChannel.name == "#KillerApp"){
        (currentChannel.starred == "true") ? ($('#starKillerApp').removeClass('far fa-star')) : ($('#starKillerApp').removeClass('fas fa-star'));
        (currentChannel.starred == "true") ? ($('#starKillerApp').addClass('fas fa-star')) : ($('#starKillerApp').addClass('far fa-star'));
      }  else if (currentChannel.name == "#FirstPersonOnMars"){
        (currentChannel.starred == "true") ? ($('#starFirstPersonOnMars').removeClass('far fa-star')) : ($('#starFirstPersonOnMars').removeClass('fas fa-star'));
        (currentChannel.starred == "true") ? ($('#starFirstPersonOnMars').addClass('fas fa-star')) : ($('#starFirstPersonOnMars').addClass('far fa-star'));
      } else if (currentChannel.name == "#Octoberfest"){
        (currentChannel.starred == "true") ? ($('#starOctoberfest').removeClass('far fa-star')) : ($('#starOctoberfest').removeClass('fas fa-star'));
        (currentChannel.starred == "true") ? ($('#starOctoberfest').addClass('fas fa-star')) : ($('#starOctoberfest').addClass('far fa-star'));
      }
      else {
      }
    
    (currentChannel.starred == "true") ? ($('#star' + currentChannel.name).addClass('fas fa-star')) : ($('#star' + currentChannel.name).addClass('far fa-star'));
    (currentChannel.starred == "true") ? ($('#starSevenContintents').addClass('fas fa-star')) : ($('#starSevenContintents').addClass('far fa-star'));
    
    console.log("Current Channel", currentChannel);

    */
    
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}


function show3WordAddress(location) {
    data = {
        key: '63E1N79D',
        coords: 47.793325 + ',' + 4.286600
    };

    $.ajax({
        url: 'https://api.what3words.com/v2/reverse',
        type: 'get',
        data: data,
        success: function(response) {
            t.text(response.words);
        },
        error: function(xhr, status, error) {
            var err = JSON.parse(xhr.responseText);
            t.text(err.message);
        }
    });
}

/* Below function sets the values for the message object */
function Message (text) {

    /* This function sets the values for the message object */

    //this.createdBy = currentLocation.createdBy;
    //console.log("Location: ", currentLocation.createdBy);
    
    /* Below what3ords location is defined */
    this.createdBy = "FRANCE.BRETAGNE.GULVINEC";

    //Below an API request has been defined to automatically retrieve what3words location according to position coordinates */
    //https://api.what3words.com/v2/reverse?coords=47.793325%2C-4.286600&key=63E1N79D
    //navigator.geolocation.getCurrentPosition(show3WordAddress, showError);

    //Below latitude and longitude of currentLocation for messsage object will be defined
  	this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    //this.createdBy = show3WordAddress();
    //console.log("Address:", this.createdBy);
      
    //Below creation date will be defined for message object */
    var createdOn = new Date();
    //var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    //var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //var today =  days[createdOn.getDay()] + ", " + months[createdOn.getMonth()] + " " + createdOn.getDate('DD') + "th, " + createdOn.getHours('HH') + ":" + createdOn.getMinutes('MM');
    //var today = createdOn.getDate() + "." + (createdOn.getMonth()+ 1) + "." + createdOn.getFullYear('YYYY') + ",";
    //var min = createdOn.getHours('HH') + ":" + createdOn.getMinutes('MM') + ":" + createdOn.getSeconds('SS');
    //this.createdOn = today;
   
    /*this.createdOn = today + min;*/

    /* Below date format for creation date will be defined according to requirements*/
    this.createdOn= createdOn.toLocaleString('de-DE', { timeZone: 'UTC' });
    console.log('CreatedOn: ', createdOn);

    /* Below expiration date is calculated, for message object*/
    var ttl = new Date(Date.now() + 9e5); // 9e5 == 900000 == 15*60*1000
    this.expiresOn = ttl;
    console.log('TTL: ', ttl);
    
    /* Text and owner is defined for message object */
    this.text=text;
    this.own=true;
}

/* In below function the message Strng will be built, consisting out of the values of the message object*/
function createMessageElement(messageObject)
{
var messageText =" <div class= 'message'> <h3><a href= '" + 
    messageObject.createdBy + 
    "' target='_blank'>" + 
    "<strong> " +  
    messageObject.createdBy + 
    " </strong></a> " +
    messageObject.createdOn +
    " <em> " +
    //messageObject.expiredOn +
    "15 min. left" + 
    "</em></h3> <p> " +
    messageObject.text + " </p>" + 
    "<button>+5 min.</button>" +
    "</div>";

console.log('Returned messageText: ', messageText);

/* Below message Sring will be returned to calling function */
return messageText;

/* <div class=Hello Chatter> <h3><a href= A.B.Ctarget='_blank'><strong>A.B.C</strong></a>function now() { [native code] }<em>:expiresIn: min. left</em></h3> <p>Hello Chatter</p><button>+5 min.</button></div>" */
}


/* Below function will be triggered after submitting the button (right arrow) at the bottom of the chat*/
function sendMessage(messageText)
{
    console.log("In Methode sendMessage gelandet", messageText);

    /* Below new message for chat will be created by calling Message constructor */
    var messageTextExample = new Message(messageText);
    console.log('MessageTextExample ', messageTextExample);

    /* Below function to build a string out of the values of the messsage object will be called */
    var stText = createMessageElement(messageTextExample);
    console.log('HTML-Text nach Return in Ausgangsfunktion: ', stText);

    /* Below created messages will be appended to chat */
    $("#messages").append(stText);

    /* Below text input field for message input will be cleared */
    $('#messageId').val('  ');
}

/* Below the string for each channel will be constructed */
function createChannelElement(channelObject){

    if (channelObject.name == "#Yummy") {
       var channelItemText ="<li onclick='switchChannel(yummy)'>" +         
       "#Yummy" + 
       "<span class='channel-meta'>" + 
       "<i id ='starYummy' class='far fa-star'></i>" +  
       "<i class='fas fa-angle-right'></i>" + 
       "</span>" + 
       "</li>";
    } else if (channelObject.name == "#SevenContinents") {
        var channelItemText ="<li class='selected' onclick='switchChannel(sevenContinents)'>" +         
        "#SevenContinents" + 
        "<span class='channel-meta'>" + 
        "<i id ='starSevenContintents' class='fas fa-star'></i>" +  
        "<i class='fas fa-angle-right'></i>" + 
        "</span>" + 
        "</li>";
    } else if (channelObject.name == "#KillerApp") {
        var channelItemText ="<li onclick='switchChannel(killerApp)'>" +         
        "#KillerApp" + 
        "<span class='channel-meta'>" + 
        "<i id ='starKillerApp' class='far fa-star'></i>" +  
        "<i class='fas fa-angle-right'></i>" + 
        "</span>" + 
        "</li>";
    } else if (channelObject.name == "#FirstPersonOnMars") {
        var channelItemText ="<li onclick='switchChannel(firstPersonOnMars)'>" +         
        "#FirstPersonOnMars" + 
        "<span class='channel-meta'>" + 
        "<i id ='starFirstPersonOnMars' class='fas fa-star'></i>" +  
        "<i class='fas fa-angle-right'></i>" + 
        "</span>" + 
        "</li>"; 
    } else if (channelObject.name == "#Octoberfest") {
        var channelItemText ="<li onclick='switchChannel(octoberfest)'>" +         
        "#Octoberfest" + 
        "<span class='channel-meta'>" + 
        "<i id ='starOctoberfest' class='far fa-star'></i>" +  
        "<i class='fas fa-angle-right'></i>" + 
        "</span>" + 
        "</li>";
    } else {

    }

console.log('Returned channelItemText: ', channelItemText);

/* Below constructed channel will be returned to calling function */
return channelItemText;
}

/* Below each dynamically constructed channel will be appended to unordered list */
function listChannels(){
    var yummyElement = createChannelElement(yummy);
    var sevenContinentsElement = createChannelElement(sevenContinents);
    var killerAppElement = createChannelElement(killerApp);
    var firstPersonOnMarsElement = createChannelElement(firstPersonOnMars );
    var octoberfestElement = createChannelElement(octoberfest);

    console.log("In listChannels arrived");

    $("ul").append(yummyElement);
    $("ul").append(sevenContinentsElement);
    $("ul").append(killerAppElement);
    $("ul").append(firstPersonOnMarsElement);
    $("ul").append(octoberfestElement);
}
