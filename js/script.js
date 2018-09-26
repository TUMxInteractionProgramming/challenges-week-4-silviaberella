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
        
    /*
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

      */

    //(currentChannel.starred == "true") ? ($('#star' + currentChannel.name).addClass('fas fa-star')) : ($('#star' + currentChannel.name).addClass('far fa-star'));
    //(currentChannel.starred == "true") ? ($('#starSevenContintents').addClass('fas fa-star')) : ($('#starSevenContintents').addClass('far fa-star'));
    console.log("Current Channel", currentChannel);
    
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
