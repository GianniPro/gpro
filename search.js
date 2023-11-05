var $ = jQuery;
$( function() {
    var availableTags = [
      {value:"Home", link:'./index.html'},
      {value:"Giakee",link:'./index.html'},
      {value:"Blog",link:'./blog.html'},
      {value:"Studies",link:'./studies.html'},
        
        //Studies
        {value:"English Language",link:'./Studies/english_%20language.html'},
        {value:"Mathematics",link:'./Studies/mathematics.html'},
        {value:"Art, Music and Drama",link:'./Studies/art_music_and-drama.html'},
        {value:"National Value Education(Civic Education)",link:'./Studies/National_Value_Education(Civic_Education).html'},
        {value:"Biology",link:'./Studies/biology.html'},
        {value:"Physics",link:'./Studies/physics.html'},
        {value:"Chemistry",link:'./Studies/chemistry.html'},
        {value:"Geography",link:'./Studies/geography.html'},
        {value:"Agricultural Science",link:'./Studies/Agricultural_Science.html'},
        {value:"Computer Science",link:'./Studies/Computer_Science.html'},
        {value:"Physcial and Health Education",link:'./Studies/Physcial_and_Health_Education.html'},
        
        //Technology
        //Starlink
      {value:"Starlink",link:'./Blog/technology/starlink.html'},
        
        //Geography
        //Solar System
        {value:"Introduction to Geography",link:'./Studies/Geography/Introduction_To_Geography.html'},
        {value:"Solar System",link:'./Studies/Geography/Solar_System.html'},
        {value:"The Sun",link:'./Studies/Geography/Solar_System.html#the-sun'},
        {value:"Galaxy",link:'./Studies/Geography/Solar_System.html#what-is-a-galaxy'},
        {value:"Satellites",link:'./Studies/Geography/Solar_System.html#satellites'},
        {value:"Types Satellites",link:'./Studies/Geography/Solar_System.html#satellites'},
        {value:"Artificial Satellites",link:'./Studies/Geography/Solar_System.html#artifical-satellites'},
        {value:"Types of Artificial Satellites",link:'./Studies/Geography/Solar_System.html#types-of-artifical-satellites'},
        {value:"Natural Satellites",link:'./Studies/Geography/Solar_System.html#natural-satellites'},
        {value:"Examples of Natural Satellites",link:'./Studies/Geography/Solar_System.html#natural-satellites'},
        {value:"Planets and Their Number of Natural Satellites",link:'./Studies/Geography/Solar_System.html#planets-and-their-number-of-natural-satellites'},
        {value:"The Eight Planets",link:'./Studies/Geography/Solar_System.html#characteristics-of-the-eight-planets'},
        {value:"Characteristics of The Eight Planets",link:'./Studies/Geography/Solar_System.html#characteristics-of-the-eight-planets'},
        {value:"Characteristics of Mercury",link:'./Studies/Geography/Solar_System.html#mercury'},
        {value:"Characteristics of Venus",link:'./Studies/Geography/Solar_System.html#venus'},
        {value:"Characteristics of Earth",link:'./Studies/Geography/Solar_System.html#earth'},
        {value:"Characteristics of Mars",link:'./Studies/Geography/Solar_System.html#mars'},
        {value:"Characteristics of Jupitar",link:'./Studies/Geography/Solar_System.html#jupitar'},
        {value:"Characteristics of Saturn",link:'./Studies/Geography/Solar_System.html#saturn'},
        {value:"Characteristics of Uranus",link:'./Studies/Geography/Solar_System.html#uranus'},
        {value:"Characteristics of Neptune",link:'./Studies/Geography/Solar_System.html#neptune'},
        
        //Physics
        //Frictional Force
        {value:"Frictional Force",link:'./Studies/Physics/frictional_force.html'},
        {value:"Friction",link:'./Studies/Physics/frictional_force.html'},
        {value:"Frictional Force and Calculations on Friction",link:'./Studies/Physics/frictional_force.html'},
        {value:"Calculations on Friction",link:'./Studies/Physics/frictional_force.html'},
        {value:"Places in which frictional force exist",link:'./Studies/Physics/frictional_force.html#frictional-force-exist'},
        {value:"Advantages of Frictional Force",link:'./Studies/Physics/frictional_force.html#advantages-of-frictional-froce'},
        {value:"Disadvantages of Frictional Force",link:'./Studies/Physics/frictional_force.html#disadvantages-of-frictional-froce'},
        {value:"Ways of Reducing Frictional Force",link:'./Studies/Physics/frictional_force.html#ways-of-reducing-friction'},
        {value:"Ways of Increasing Frictional Force",link:'./Studies/Physics/frictional_force.html#ways-of-increasing-friction'},
        {value:"Types of Friction",link:'./Studies/Physics/frictional_force.html#types-of-friction'},
        {value:"Solid Friction",link:'./Studies/Physics/frictional_force.html#solid'},
        {value:"Static Friction",link:'./Studies/Physics/frictional_force.html#static'},
        {value:"Dynamic Friction",link:'./Studies/Physics/frictional_force.html#dynamic'},
        {value:"Laws of Solid Friction",link:'./Studies/Physics/frictional_force.html#laws-of-solid-friction'},
        {value:"Calculations On Friction on a Horizontal/Flat Surface",link:'./Studies/Physics/frictional_force.html#friction-on-a-horizontal-or-flat-surface'},
        {value:"Friction on a Horizontal/Flat Surface",link:'./Studies/Physics/frictional_force.html#friction-on-a-horizontal-or-flat-surface'},
        {value:"Friction on an Inclined Plane",link:'./Studies/Physics/frictional_force.html#friction-on-an-inclinded-plane'},
        {value:"Calculations On Friction on an Inclined Plane",link:'./Studies/Physics/frictional_force.html#friction-on-an-inclinded-plane'},
     
    ];
    $( "#tags" ).autocomplete({
      source: availableTags,
      select: function( event, ui ) {
        console.log(ui.item.link);
        window.location.replace(ui.item.link)
      }
    });
    $( "#tag" ).autocomplete({
      source: availableTags,
      select: function( event, ui ) {
        console.log(ui.item.link);
        window.location.replace(ui.item.link)
      }
    });
  } );


