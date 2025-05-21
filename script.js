//Generate a basic insight based on DOB\

// Based on months :- size 23
const zodiacsigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
] ;

// based on date 
compliments = [
 "You have a heart of gold.",
 "Your smile can brighten anyone's day.",
 "You are a true friend to everyone around you.",
 "Your creativity is absolutely inspiring.",
 "You have an amazing sense of humor.",
 "You bring positivity wherever you go.",
 "You are a wonderful listener.",
 "You have a unique and beautiful soul.",
 "Your confidence is contagious.",
 "You make a difference in people's lives.",
 "Your kindness is a breath of fresh air.",
 "You are smarter than you think.",
 "You are full of brilliant ideas.",
 "Your strength is admirable.",
 "You have the courage to chase your dreams.",
 "Your energy lights up the room.",
 "You spread happiness effortlessly.",
 "You are a natural leader.",
 "Your compassion for others is remarkable.",
 "You are growing and evolving every day.",
 "Your passion is truly motivating.",
 "You have a beautiful way with words.",
 "You are capable of amazing things.",
 "You inspire others just by being yourself.",
 "You have an extraordinary mind.",
 "Your hard work never goes unnoticed.",
 "You make the world a better place.",
 "Your honesty is refreshing.",
 "You are a true example of strength and grace.",
 "Your laughter is music to everyone's ears.",
 "You are loved more than you know."
      ];
      
// size is 20
 const victimCompliments = [
   "You always do good for others, but never get the same in return.",
   "You give your best, but sometimes feel like it goes unnoticed.",
   "You always put others first, but people rarely appreciate it.",
   "You work hard to help others, but they don't seem to see it.",
   "You go above and beyond for people, yet no one ever returns the favor.",
   "You give your time and energy, but it often feels like it's not enough.",
   "You try to make everyone happy, but sometimes feel like no one notices.",
   "You show kindness to everyone, but rarely receive kindness back.",
   "You always support others, but it feels like you’re left alone sometimes.",
   "You are the one people turn to, but often feel empty in return.",
   "You always give your best, but never get the credit you deserve.",
   "You give so much to others, but it feels like you’re left behind.",
   "You sacrifice for others, but they never realize the effort you make.",
   "You love unconditionally, but it’s often not reciprocated.",
   "You always help, but sometimes wonder if anyone truly cares about you.",
   "You are selfless, but sometimes feel taken for granted.",
   "You do so much for people, but often feel invisible.",
   "You are there for everyone, but feel like no one’s there for you.",
   "You make people’s lives easier, but your efforts go unnoticed."
 ];

 //size is 30
 const lifeRecommendations = [
    "Feed a strict dog and learn patience and courage.",
    "Plant a tree and watch it grow — like your dreams.",
    "Start a gratitude journal and write three things daily.",
    "Wake up early and enjoy the beauty of a quiet morning.",
    "Read at least one book every month to expand your mind.",
    "Learn a new language to open new doors of opportunity.",
    "Take a 30-minute walk daily without your phone.",
    "Volunteer at a shelter and experience selfless love.",
    "Challenge yourself to talk to a stranger every week.",
    "Cook your own meals and appreciate the process.",
    "Practice meditation for 10 minutes each morning.",
    "Start saving a small amount of money consistently.",
    "Learn to say ‘No’ when your plate is full.",
    "Compliment at least one person genuinely every day.",
    "Spend a day without complaining — see the magic.",
    "Forgive someone you've been holding a grudge against.",
    "Send a thank-you message to someone who impacted you.",
    "Declutter your room to declutter your mind.",
    "Drink at least 8 glasses of water daily for energy.",
    "Listen to an inspiring podcast every week.",
    "Write a letter to your future self.",
    "Spend time with animals to understand unconditional love.",
    "Take yourself out on a solo date once a month.",
    "Start a workout routine you actually enjoy.",
    "Learn basic self-defense skills.",
    "Take breaks from technology and enjoy the offline world.",
    "Set a small goal every week and crush it.",
    "Reconnect with an old friend and relive good memories.",
    "Watch the sunrise or sunset whenever you can.",
    "Smile more often, even without a reason — it changes energy."
  ];
  
  //size is 20
  const futurePredictions = [
    "You will become a crorepati very soon.",
    "A golden opportunity will knock on your door.",
    "You will achieve the success you have always dreamed of.",
    "Fame and recognition are waiting for you.",
    "Your hard work will turn into unbelievable rewards.",
    "You will travel to your dream destinations.",
    "Your life will take a beautiful and unexpected turn.",
    "You will inspire thousands of people around you.",
    "An unexpected source of income will surprise you.",
    "You will find the love and respect you truly deserve.",
    "Your talents will make you a household name.",
    "You will buy your dream home sooner than you think.",
    "Massive financial growth is on your horizon.",
    "You will master a skill that changes your life forever.",
    "You will live a life full of adventure and joy.",
    "You will soon meet someone who will change your life positively.",
    "Your leadership skills will take you to great heights.",
    "Unexpected blessings are about to flood your life.",
    "You will create a legacy that will be remembered forever.",
    "Your dreams are not far — they are just around the corner."
  ];

  const form = document.getElementById("astroForm");
  let hasSubmitted = false;

  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("Form submitted");
    
    if (hasSubmitted) return;  // Block repeat submit

    hasSubmitted = true;  

    const name = document.getElementById("firstName").value ;
    const surname = document.getElementById("lastName").value;

    const day = Number(document.getElementById("day").value);
    const month =Number(document.getElementById("month").value);
    const year =Number(document.getElementById("year").value);

    // console.log(name,surname,day,month,year);
    const result = document.getElementById("result"); //class:"hidden" se text display nhi  hoga and class:"visible" se text display hoga.
    // result.innerHTML = first_message;
    const first_message = `Hello ${name} ${surname}`;
    const second_message = `Your Zodiac sign is ${zodiacsigns[month-1]}`;
    const third_message = compliments[day-1];
    let index = Math.floor(Math.random()*20);
    const fourth_message = victimCompliments[index];

    // logic:-
    // "Rohit" "Negi" day
    // 5*4*9 = 180 % 30 = 0-29
    index = (name.length * surname.length * year)%30;
    const fifth_message = lifeRecommendations[index];
   
    // logic:-
    // day * Month * year % 20 = 0-19
    index = (day * month * year)%20;
    const sixth_message = futurePredictions[index];
    
    result.innerText = `${first_message} ${second_message} ${fourth_message} Our Reccomendation for you:${fifth_message} Your Future Prediction is: ${sixth_message}`;
    // result.classList.remove("hidden");
    //Now i want to form to stick when user click submit repeatadly.
    
     
  });