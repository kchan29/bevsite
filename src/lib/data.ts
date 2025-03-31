export interface Message {
  id: string;
  friendName: string;
  message: string;
  image: string; // URL to photo of friend with birthday person
  color: string; // For styling variations
}

export const birthdayMessages: Message[] = [
  {
    id: "1",
    friendName: "Alex",
    message: "Happy birthday to my amazing friend! Remember that time we went hiking last summer and got caught in the rain? Your positive attitude turned what could have been a disaster into one of my favorite memories. Wishing you all the joy and happiness in the world. Here's to another year of friendship and adventures!",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop",
    color: "bg-pink-500",
  },
  {
    id: "2",
    friendName: "Jessica",
    message: "Happy Birthday! 🎂 Remember all those crazy memories we share from college? From late-night study sessions to spontaneous road trips, you've always been there with your infectious laughter and kind heart. May this year bring you as much joy as you've brought into my life. Love you lots!",
    image: "https://images.unsplash.com/photo-1516758285333-1da7b2fe3d06?q=80&w=2574&auto=format&fit=crop",
    color: "bg-purple-500",
  },
  {
    id: "3",
    friendName: "Michael",
    message: "Cheers to another trip around the sun! You're not getting older, you're getting better. I still laugh when I think about our disastrous cooking experiment last Thanksgiving. Who knew turkey could burn that quickly? Your ability to laugh through life's challenges is what makes you so special. Have an amazing birthday!",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop",
    color: "bg-blue-500",
  },
  {
    id: "4",
    friendName: "Sophia",
    message: "Happy birthday to someone who's always there when I need them. Remember our beach day last year where we built that ridiculous sand castle? Your creativity and enthusiasm make even ordinary days special. You deserve all the cake, presents, and love today! Can't wait to celebrate with you soon.",
    image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2670&auto=format&fit=crop",
    color: "bg-green-500",
  },
  {
    id: "5",
    friendName: "David",
    message: "Another year of being awesome! Happy Birthday to my favorite person. From our weekly coffee meetups to our spontaneous adventures, you make life more interesting. Remember when we got lost downtown and discovered that amazing hidden bookstore? Here's to more unexpected discoveries. Let's celebrate like there's no tomorrow!",
    image: "https://images.unsplash.com/photo-1484328489864-29a7a0f1d673?q=80&w=2670&auto=format&fit=crop",
    color: "bg-yellow-500",
  },
  {
    id: "6",
    friendName: "Emma",
    message: "Happy Birthday! May your day be filled with laughter, love, and lots of cake! Thanks for being such an amazing friend throughout all these years. I'll never forget our road trip to the coast last spring - singing at the top of our lungs with the windows down. You deserve nothing but the best today and always.",
    image: "https://images.unsplash.com/photo-1522008693277-60fefb024e8f?q=80&w=2526&auto=format&fit=crop",
    color: "bg-red-500",
  },
  {
    id: "7",
    friendName: "James",
    message: "Wishing you a fantastic birthday and a year filled with incredible achievements. You're amazing and don't forget it! I still can't believe we survived that camping trip in the rain last year. Your positivity and resilience are truly inspiring. Looking forward to creating more memories in this new chapter of your life!",
    image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2574&auto=format&fit=crop",
    color: "bg-indigo-500",
  },
  {
    id: "8",
    friendName: "Olivia",
    message: "Happy birthday to my wonderful friend! Thank you for always being by my side through thick and thin. Our weekend getaways and late-night conversations have gotten me through some tough times. Your kindness, wisdom, and sense of humor make you truly special. Love you lots and can't wait to celebrate with you!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop",
    color: "bg-teal-500",
  }
];

export const celebrationName = "Sarah"; // Name of the birthday person
