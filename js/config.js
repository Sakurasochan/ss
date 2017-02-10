var Config = {};
//            __     __        __        __  
//  /\  |  | |  \ | /  \ |    /  \  /\  |  \ 
// /~~\ \__/ |__/ | \__/ |___ \__/ /~~\ |__/ 
//   configuration file             v1.03

// Server name
// default: "audioload"
Config.serverName = "F3TTT";

// Text background
// Enable or disable text background
// default: true
Config.textBackground = false;

// Server logo image url
// put the image on the images folder then
// set this to its filename (eg "logo.png")
// (leave it false to not use it)
// default: false
Config.serverImage = "infamous.png";


// Song playlist
// only use .ogg files!
// put songs on the songs folder, then add them here
Config.playlist = [
	{url: "1.ogg", name: "Топ сикрит:D"},
	{url: "12th_Planet_amp_Mayhem_Ft.ogg", name: "12th Planet & Mayhem Ft. PennyBirdRabbit - Whoops "},
	{url: "Avenged_Sevenfold-_This_Means_War.ogg", name: "Avenged_Sevenfold -This_Means_War "},
	{url: "Fall_Out_Boy_-_Centuries.ogg", name: "Fall Out Boy - Centuries "},
	{url: "Flight_Facilities_-_Crave_You_Adventure_Club_Dubst.ogg", name: "Flight Facilities -Crave_You Adventure Club Dubstep"},
	{url: "IanJ_amp_Michael_Edward_-_Battle_Scars_Remix_.ogg", name: "IanJ and Michael Edward - Battle Scars Remix"},
	{url: "Nujabes-Feather.ogg", name: "Nujabes- Feather"},
	{url: "The_Eden_Project_-_Better_Together.ogg", name: "The Eden Project - Better Together"}
];

// Songs volume
// from 0 to 1
// 0 = 0%
// 1 = 100%
// (you can use values higher than 1 for 100%+ volume)
// default: 0.5
Config.songVolume = 0.5;

// Random song order
// default: true
Config.songShuffle = true;

// Background type
//
// Available types:
// "bars"
// "bars2"
// "dualbars"
// "quadbars"
// "squares"
// "circle"
//
// default: "bars"
Config.background = "circle";

// Background opacity
// sets the opacity of the audio visualization
// from 0 to 1
// 0.0 = 0%, fully transparent
// 1.0 = 100%, fully opaque
// default: 1.0
Config.backgroundOpacity = 1.0;

// Background image url
// put the image on the images folder then
// set this to its filename (eg "background.jpg")
// (set it false to not use it)
// default: "blackbackground.jpg"
Config.backgroundImage = "blackbackground.jpg";

// Background rendering fps
// This can cause a large impact performance-wise
// recommended value: 30
// maximum value: 60
// default: 30
Config.backgroundFps = 30;

// Font family
// (do not use spaces in font's filename)
// default: "UpheavalPro.ttf"
Config.fontType = "UpheavalPro.ttf";

// Font color
// Use hexadecimal color values
// default: "#FFFFFF"
Config.fontColor = "#FFFFFF";

// Colors used for background/layout purposes
// Use hexadecimal color values
// Primary color
// default: "#00FF9B"
Config.primaryColor = "#0099cc";
// Secondary color
// default: "#21001E"
Config.secondaryColor = "#002533";
// Background color
// default: "#101010"
Config.backgroundColor = "#101010";

// Loading screen messages
Config.messages = [
	"Добро Пожаловать на F3Breach",
	"Соблюдайте правила, и получайте удовольствие!",
	"Сервер еще в разработке",
	"Просим поддержать сервер донатом",
	"Сядьте, наслаждайтесь музыкой!"
];

// Messages delay (in milliseconds)
// delay per number of characters in message
// default: 200
Config.messagesDelay = 200;