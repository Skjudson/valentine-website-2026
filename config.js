
const CONFIG = {
 
    valentineName: "Izunia",


    pageTitle: "Będziesz moją walentynką? 💝",


    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']                      
    },

 
    questions: {
        first: {
            text: "Lubisz mnie?",                                 
            yesBtn: "Tak",                                            
            noBtn: "Nie",                                               
            secretAnswer: "Nie lubie Cię, bo Cię kocham! ;)) ❤️"          
        },
        second: {
            text: "Jak bardzo?",                       
            startText: "Tak bardzo!",                               
            nextBtn: "Następnie ❤️"                                         
        },
        third: {
            text: "Będziesz moją walentynką 14 lutego, 2026? 🌹", 
            yesBtn: "Tak!",                                             
            noBtn: "Nie"                                                
    },


    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  
        high: "To infinity and beyond! 🚀💝",           
        normal: "And beyond! 🥰"                           
    },

   
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

  
    colors: {
        backgroundStart: "#ffafbd",     
        backgroundEnd: "#ffc3a0",       
        buttonBackground: "#ff6b6b",    
        buttonHover: "#ff8787",          
        textColor: "#ff4757"             
    },

    
    animations: {
        floatDuration: "15s",        
        floatDistance: "50px",        
        bounceSpeed: "0.5s",          
        heartExplosionSize: 1.5      
    },

  
    music: {
        enabled: true,                    
        autoplay: true,                   
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", 
        startText: "🎵 Play Music",      
        stopText: "🔇 Stop Music",       
        volume: 0.5                      
    }
};


window.VALENTINE_CONFIG = CONFIG; 
